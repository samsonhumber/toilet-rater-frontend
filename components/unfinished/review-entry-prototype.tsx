import { useState } from 'react'
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
import StarRatingComponent from 'react-star-rating-component'
import { ReviewObject } from '../review-list';
//import { usePostReview } from '../../hooks/usePostReview';

export default function ReviewEntryPrototype({toilet, gridRef}: {toilet: string, gridRef: string}) {
    const emptyReview = {'user': '', 'toilet': toilet, 'gridref': gridRef, 'time': '', 'ratings': [], 'comment': ''}
    const [unfinishedReview, setUnfinishedReview] = useState<ReviewObject>(emptyReview);
    const [submittedReview, setSubmittedReview] = useState<ReviewObject|{}>({});
    return (<form></form>) 
   
}


    /*function starClickHandler(nextValue: number, prevValue: number, name: string) {
      setOverallRating(nextValue)
    }
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
      ) */