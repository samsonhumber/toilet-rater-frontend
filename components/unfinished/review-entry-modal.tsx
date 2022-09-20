import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormControl,
    Input,
    FormLabel,
    FormHelperText
  } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import StarRatingComponent from 'react-star-rating-component'
import { ReviewObject } from '../review-list';
import { usePostReview } from '../../hooks/usePostReview';

/* Plan for the post modal logic
- We know the toilet and gridref
- We set up an object for the reviews to immutably change as we go along
- An object for the submission of review is initialised as empty, only updated after clicking submit
- Handling change:
  - username and comment are visible to user
    - Each time key pressed on these, their respective properties will change
  - Star ratings are visible to user - overall treated separately for styling purposes
    - On the click, set the category of rating to what user pressed
    - It may need a bit of work to get it to cooperate with the chakra component
  - time is set by a timestamp 
- We want to make sure that these objects are cleared when first loading up
- The submitted review - will it update the page? 
*/

export default function ReviewEntryModal({toilet, gridRef}: {toilet: string, gridRef: string}) {
  const emptyReview = {'user': '', 'toilet': toilet, 'gridref': gridRef, 'time': '', 'ratings': [], 'comment': ''}
  const [overallRating, setOverallRating] = useState(0);
  const [comment, setComment] = useState<string|null>('');
  //const [submittedReview, setSubmittedReview] = useState<ReviewObject|{}>({});
  const [unfinishedReview, setUnfinishedReview] = useState<ReviewObject>(emptyReview);

  function starClickHandler(nextValue: number, prevValue: number, name: string) {
    setOverallRating(nextValue)
  }
    /*function submitModalPost() {
      if(unfinishedReview.user !== '' || unfinishedReview.ratings.length === 0){
        console.log(`Review by ${unfinishedReview.user} submitted`)
        setSubmittedReview({...unfinishedReview});
        // Consider making a custom hook to post the review to the server and calling it here?
      } else {
        alert("Please ensure a valid username is provided and you have provided at least 1 star rating")
      }   
    }*/
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleCommentChange = (event: any) => setComment(event.target.value)
    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Write your review</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <FormControl>
              <Input placeholder='Username'/>
              {/*<FormLabel>Username</FormLabel> ... <FormHelperText>{"We'll never share your email"}.</FormHelperText>*/}
              <StarRatingComponent name={'Overall'} value={overallRating} onStarClick={starClickHandler}
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
      }}/>
      
              <Input onChange={handleCommentChange} placeholder='Comment'/>
            </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={()=>{}}>
                Post
              </Button>
              <Button onClick={onClose} variant='ghost'>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }