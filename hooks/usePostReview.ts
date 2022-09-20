import { useState, useEffect } from 'react';
import { ReviewObject } from '../components/review-list';

const usePostReview = function PostReview(proposedReview: ReviewObject) {
    const [submittedReview, setSubmittedReview] = useState<ReviewObject|{}>({});
    const [postSuccess, setPostSuccess] = useState<boolean>(false);
    function submitModalPost() {
        if(proposedReview.user !== '' || proposedReview.ratings.length === 0){
          console.log(`Review by ${proposedReview.user} submitted`)
          setSubmittedReview({...proposedReview});
          // Consider making a custom hook to post the review to the server and calling it here?
        } else {
          alert("Please ensure a valid username is provided and you have provided at least 1 star rating")
        }
    }
        useEffect(() => {
            async function postReviewToServer() {
                const urlStem = process.env.NEXT_PUBLIC_SERVER_API || "http://localhost:9000";
                const fetchUrl = `${urlStem}/newToiletReview`;
                const response = await fetch(fetchUrl, {
                    method: 'POST',
                    headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(submittedReview)
                });
                const confirmedReview = await response.json();
            setPostSuccess(confirmedReview.success || false);
            return confirmedReview.payload
            }
            postReviewToServer();
        }, [submittedReview])  
        return {postSuccess, submitModalPost}
}

export { usePostReview }