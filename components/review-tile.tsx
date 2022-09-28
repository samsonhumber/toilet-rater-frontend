import StarRating from './StarRating'
import { Box, Button } from '@chakra-ui/react';
import StarRatingList from './StarRatingList';
import { MouseEvent } from 'react';

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
  async function onDelete(e: MouseEvent<HTMLElement>) {
    const serverUrl = process.env.NEXT_PUBLIC_SERVER_API || "http://localhost:9000";;
    //setReview({...review, 'user': userName, 'time': reviewTime, 'ratings': ratings, 'comment': comment});
    await fetch(serverUrl,
        {method: 'DELETE',
        mode: 'cors',
        body: JSON.stringify({'user': userName, 'time': time})
      });
      let mainBox = document.getElementById('main-box');
      if(mainBox) {
        mainBox.remove();
      } else {
        console.log('WARNING: Failed to remove box upon delete - consider changing method of removal')
        //let mainBox = document.getElementById('main-box');
      }
    
  }
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
      <Box className='Review-Tile' boxShadow='lg' p='6' rounded='md' bg='white' id='main-box'>
        <h2>{toiletName} in {gridRef}</h2>
        <h2>Reviewed by {userName}</h2>
        <StarRating size={2} score={overall} active={false} criterion={'overall'}></StarRating>
        <section>
          <StarRatingList otherRatingKeys={otherRatingKeys} otherRatings={otherRatings}></StarRatingList>
        </section>
        <p>{comment}</p>
        <Button onClick={onDelete}>Delete Review</Button>
      </Box>)
}