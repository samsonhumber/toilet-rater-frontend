import { useEffect, useState, useReducer, ChangeEvent } from 'react';
import ReviewTile from './review-tile';
import { useGetReviews } from '../hooks/useGetReviews'
import NoReviewsMessage from './unfinished/no-reviews-message';
import StarRatingComponent from 'react-star-rating-component';
import { useForm } from "react-hook-form";
import { Modal,
ModalOverlay,
ModalContent,
ModalHeader,
ModalFooter,
ModalBody,
ModalCloseButton,
useDisclosure,
Button,
FormControl,
Input, } from '@chakra-ui/react';

type RatingArray = Object[];

export type ReviewObject = {
    user: string;
    toilet: string;
    gridref: string;
    time: string;
    ratings: Object[]
    comment: string
};

type FormData = {
  user: string;
  comment: string;
  ratings: Object[]
};

type ReviewArray = Array<ReviewObject>;

type propsType = {
    toiletName: string,
    gridRef: string
}

export default function ReviewList({toiletName, gridRef}: propsType) {
  const emptyReview = {'user': '', 'toilet': toiletName, 'gridref': gridRef, 'time': '', 'ratings': [], 'comment': ''};
  const [review, setReview] = useState<ReviewObject>(emptyReview);
  const [userName, setUserName] = useState<string>('');
  const [ratings, setRatings] = useState<Object[]>([]);
  const [comment, setComment] = useState<string>('');
  const {reviewsFromServer, hasLoaded, setNeedsRefresh, needsRefresh} = useGetReviews(toiletName, gridRef);
  const { isOpen, onOpen, onClose } = useDisclosure();

  async function onSubmit() {
    const serverUrl = 'https://localhost:9000/';
    setReview({...review, 'user': userName, 'time': String(new Date()), 'ratings': ratings, 'comment': comment});
    await fetch(serverUrl,
        {method: 'POST',
        mode: 'cors',
        body: JSON.stringify(review)
      });
    setNeedsRefresh(!needsRefresh);
    onClose();
  }


  function updateUserName(e: ChangeEvent<HTMLElement>) {
    setUserName((e.target as HTMLInputElement).value)
    console.log("user:", (e.target as HTMLInputElement).value)
  } 
  function updateComment(e: ChangeEvent<HTMLElement>) {
    setComment((e.target as HTMLInputElement).value)
    console.log("comment:", (e.target as HTMLInputElement).value)
  }
  function starClickHandler(nextValue: number, prevValue: number, name: string) {
    setRatings([...ratings, {[name]: nextValue}]);
  }

    function extractRatings(ratingArray: RatingArray) {
        let ratings: {[key: string]: number} = {};
        for (let i=0; i<ratingArray.length; i++) {
            let ratingKey = Object.keys(ratingArray[i])[0];
            let ratingValue = Number(Object.values(ratingArray[i])[0])
            ratings[ratingKey]=ratingValue;
        };
        return ratings
    }

    let reviewKey = -1;
    console.log(reviewsFromServer.length, hasLoaded);
        return( <div className="bootcamper-display">
          <Button onClick={onOpen}>Open Modal</Button>
  
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Write your review</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
      <FormControl>
        <Input placeholder='Username' onChange={updateUserName}/>
        <StarRatingComponent name={'Overall'} value={5} onStarClick={starClickHandler}
        renderStarIcon={(index, value) => {
          return (
            <span>
              <i className={index <= value ? 'fas fa-star' : 'far fa-star'} />
            </span>
          );
        }}
        renderStarIconHalf={() => {
          return (
            <span>
              <span style={{position: 'absolute'}}><i className="far fa-star" /></span>
              <span><i className="fas fa-star-half" /></span>
            </span>
          );
        }}
        />

        <Input onChange={updateComment} placeholder='Comment'/>
      </FormControl>
      </ModalBody>

      <ModalFooter>
        <Button colorScheme='blue' mr={3} onClick={onSubmit}>Post</Button>
        <Button onClick={onClose} variant='ghost'>Cancel</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
        {reviewsFromServer.map((item: ReviewObject) => {reviewKey+=1; const ratings=extractRatings(item.ratings)
          return (
            <ReviewTile
            key={reviewKey}
            ratings={ratings}
            userName={item.user}
            toiletName={item.toilet}
            gridRef={item.gridref}
            comment={item.comment}
            time={item.time}
            />
          )}
        )
      }
      {(reviewsFromServer.length === 0 || !hasLoaded) && <NoReviewsMessage reviewArrayLength={reviewsFromServer.length} hasLoaded={hasLoaded}/>}
      </div> )
    
}

