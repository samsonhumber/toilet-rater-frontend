import ReviewTile from './review-tile';

type ReviewObject = {
    id: number;
    user: string;
    toilet: string;
    gridRef: string;
    stars: {
        overall: number;
        experience: number;
        decor: number;
        cleanliness: number;
    };
    comment: string
};

/*
type ReviewArray = {
    reviews: ReviewObject[]
};
*/

type ReviewArray = Array<ReviewObject>;

const ReviewObjectExample = [{
    id: 2,
    user: 'string',
    toilet: 'string',
    gridRef: 'string',
    stars: {
        overall: 1,
        experience: 2,
        decor: 3,
        cleanliness: 4,
    },
    comment: 'string'
}];

interface ReviewListProps {
    currentReviews: ReviewObject[],
}

//type ReviewArray = Array<object>

export default function ReviewList({currentReviews}: ReviewListProps) {
    if(currentReviews.length > 0) {
        return( <div className="bootcamper-display">
        {currentReviews.map((item) => (
            <ReviewTile
            key={item.id}
            userName={item.user}
            toiletName={item.toilet}
            gridRef={item.gridRef}
            overallStar={item.stars.overall}
            cleanStar={item.stars.cleanliness}
            uxStar={item.stars.experience}
            decorStar={item.stars.decor}
            comment={item.comment}
            />
        ))
      }
      </div> )
      } else {
        return(<h2>{'No reviews have been published for this toilet: be the first'}</h2>)
    }
}