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

export default function ReviewPostModal() {
    const [overallRating, setOverallRating] = useState(0);
    const [comment, setComment] = useState<string|null>('');
    function starClickHandler(nextValue: number, prevValue: number, name: string) {
        setOverallRating(nextValue)
    }
    function submitModalPost() {
        //useEffect(() => {}, [])
        console.log('Hello there, Master Kenobi')
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
              <Button colorScheme='blue' mr={3} onClick={submitModalPost}>
                Post
              </Button>
              <Button onClick={onClose} variant='ghost'>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }