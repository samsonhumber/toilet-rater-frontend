import StarRating from "./StarRating";

interface ratingsType extends Object {
    overall?: number
}

interface otherType {
    [key: string]: number
}

type propsType = {
    otherRatingKeys: string[]
    otherRatings: otherType
}

export default function StarRatingList({otherRatingKeys, otherRatings}: propsType) {
    let reviewKey = -1;
    if (otherRatingKeys.length > 0) {
        return(<div className="bootcamper-display">
         {otherRatingKeys.map((criterion: string) => {reviewKey += 1;
            return (<StarRating
                 key={reviewKey}
                 size={1}
                 criterion={criterion}
                 score={otherRatings[criterion as keyof typeof otherRatings]}
                 active={false}
                 ></StarRating>)}
        )}
        </div>)
    }
    else {
        return(<h2>{'No reviews have been published for this toilet: be the first'}</h2>)
    }
}