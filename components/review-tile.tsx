import StarRating from './StarRating'

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

export default function ReviewList({key, userName, toiletName, gridRef, overallStar, cleanStar, uxStar, decorStar, comment}: propsType) {
    return(<section>
        <h2>{toiletName} in {gridRef}</h2>
        <h2>Reviewed by {userName}</h2>
        <h3>Overall</h3>
        <StarRating size={2} score={overallStar} active={false} text='Overall'></StarRating>
        <section>
          <StarRating size={1} score={cleanStar} active={false} text='Cleanliness'></StarRating>
          <StarRating size={1} score={decorStar} active={false} text='Decor'></StarRating>
          <StarRating size={1} score={uxStar} active={false} text='Experience'></StarRating>
        </section>
        <p>{comment}</p>

    </section>)
}