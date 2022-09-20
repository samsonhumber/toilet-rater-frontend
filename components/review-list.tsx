import { useEffect, useState } from 'react';
import ReviewTile from './review-tile';
import { useGetReviews } from '../hooks/useGetReviews'
import NoReviewsMessage from './unfinished/no-reviews-message';

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
    const {reviewsFromServer, hasLoaded} = useGetReviews(toiletName, gridRef);
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
    console.log(reviewsFromServer.length, hasLoaded);
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
      {(reviewsFromServer.length === 0 || !hasLoaded) && <NoReviewsMessage reviewArrayLength={reviewsFromServer.length} hasLoaded={hasLoaded}/>}
      </div> )
    
}
