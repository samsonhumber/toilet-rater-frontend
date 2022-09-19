import { useEffect, useState } from 'react';
import ReviewTile from './review-tile';
import { useGetReviews } from '../hooks/useGetReviews'

type RatingArray = Object[];

export type ReviewObject = {
    user: string;
    toilet: string;
    gridref: string;
    time: string;
    ratings: Object[]
    comment: string
};

type ReviewArray = Array<ReviewObject>;

type propsType = {
    toiletName: string,
    gridRef: string
}

//type ReviewArray = Array<object>

export default function ReviewList({toiletName, gridRef}: propsType) {
    const [reviewsFromServer] = useGetReviews(toiletName, gridRef);
    function extractRatings(ratingArray: RatingArray) {
        let ratings: {[key: string]: number} = {};
        for (let i=0; i<ratingArray.length; i++) {
            let ratingKey = Object.keys(ratingArray[i])[0];
            let ratingValue = Number(Object.values(ratingArray[i])[0])
            ratings[ratingKey]=ratingValue;
        };
        return ratings
    }

    let reviewKey = -1;
    console.log(reviewsFromServer.length);
    if(reviewsFromServer.length > 0) {
        return( <div className="bootcamper-display">
        {reviewsFromServer.map((item: ReviewObject) => {reviewKey+=1; const ratings=extractRatings(item.ratings)
          return (
            <ReviewTile
            key={reviewKey}
            ratings={ratings}
            userName={item.user}
            toiletName={item.toilet}
            gridRef={item.gridref}
            comment={item.comment}
            time={item.time}
            />
          )}
        )
      }
      </div> )
    } else {
        return(<h2 className='No-Reviews-Message'>{'No reviews have been published for this toilet: be the first'}</h2>)
    }
}

/*
overallStar={item.ratings.overall}
            cleanStar={item.ratings.cleanliness}
            uxStar={item.ratings.experience}
            decorStar={item.ratings.decor}
*/