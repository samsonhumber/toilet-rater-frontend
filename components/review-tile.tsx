import StarRating from './StarRating'
import { Box } from '@chakra-ui/react';

type propsType = {
    key: number
    userName: string
    toiletName: string
    gridRef: string
    overallStar: number
    cleanStar: number
    uxStar: number
    decorStar: number
    comment: string
}

export default function ReviewList({userName, toiletName, gridRef, overallStar, cleanStar, uxStar, decorStar, comment}: propsType) {
    return(
      <Box boxShadow='lg' p='6' rounded='md' bg='white'>
        <h2>{toiletName} in {gridRef}</h2>
        <h2>Reviewed by {userName}</h2>
        <StarRating size={2} score={overallStar} active={false} text='Overall'></StarRating>
        <section>
          <StarRating size={1} score={cleanStar} active={false} text='Cleanliness'></StarRating>
          <StarRating size={1} score={decorStar} active={false} text='Decor'></StarRating>
          <StarRating size={1} score={uxStar} active={false} text='Experience'></StarRating>
        </section>
        <p>{comment}</p>
      </Box>)
}