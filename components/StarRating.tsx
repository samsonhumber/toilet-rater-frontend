import StarRatingComponent from 'react-star-rating-component';
import { Heading } from '@chakra-ui/react'

type propsType = {
    size: number
    score: number
    active: boolean
    text: string
}

export default function StarRating({size, score, active, text}: propsType) {
    //const textSize = String(size*10) + 'pt'
    const textSize = size*10;
    return(<section style={{fontSize: textSize}}>
        <Heading size={String(size)+'pt'}>{text}</Heading>
        <StarRatingComponent name={text} value={score} editing={false} renderStarIconHalf={() => {
              return (
                <span>
                  <span style={{position: 'absolute'}}><i className="far fa-star" /></span>
                  <span><i className="fas fa-star-half" /></span>
                </span>
              )}}></StarRatingComponent>
        {/* Note that your half-stars may not render properly without a function 
        to render them - see https://www.npmjs.com/package/react-star-rating-component */}
    </section>)
}