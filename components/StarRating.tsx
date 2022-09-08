import StarRatingComponent from 'react-star-rating-component';
import { Heading } from '@chakra-ui/react'

type propsType = {
    size: number
    score: number
    active: boolean
    text: string
}

export default function StarRating({size, score, active, text}: propsType) {
    const textSize = String(size) + 'pt'
    return(<section>
        <Heading size={textSize}>{text}</Heading>
        <StarRatingComponent name={text} value={score} editing={false}></StarRatingComponent>
        {/* Note that your half-stars may not render properly without a function 
        to render them - see https://www.npmjs.com/package/react-star-rating-component */}
    </section>)
}