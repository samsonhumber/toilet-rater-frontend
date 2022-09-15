import StarRating from './StarRating'
import { Box } from '@chakra-ui/react';
import StarRatingList from './StarRatingList';

interface ratingsType extends Object {
  overall?: number
}

type propsType = {
  ratings: {
    overall?: number
  }
  userName: string
  toiletName: string
  gridRef: string
  comment: string
  time: string
}

export default function ReviewList({ratings, userName, toiletName, gridRef, comment, time}: propsType) {
  let overall = 0;
  if (!ratings.overall) {
    overall -= 1;
  } else {
    overall += ratings.overall
  }
  const otherRatings = {...ratings}
  delete otherRatings.overall
  const otherRatingKeys = Object.keys(otherRatings);
    return(
      <Box boxShadow='lg' p='6' rounded='md' bg='white'>
        <h2>{toiletName} in {gridRef}</h2>
        <h2>Reviewed by {userName}</h2>
        <StarRating size={2} score={overall} active={false} criterion={'overall'}></StarRating>
        <section>
          <StarRatingList otherRatingKeys={otherRatingKeys} otherRatings={otherRatings}></StarRatingList>
        </section>
        <p>{comment}</p>
      </Box>)
}