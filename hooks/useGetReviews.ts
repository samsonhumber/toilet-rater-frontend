import { useState, useEffect } from 'react';
import { ReviewObject } from '../components/review-list';
//import dotenv from 'dotenv';
//dotenv.config();

// This hook should dynamically fetch the review data from front when search parameters changed
// Much planning is still required

const useGetReviews = function GetReviews(toiletName: string, gridRef: string) {
    const [reviewsFromServer, setReviewsFromServer] = useState<ReviewObject[]>([]);
    const [hasLoaded, setHasLoaded] = useState<boolean>(false);
    const [needsRefresh, setNeedsRefresh] = useState<boolean>(false);
    useEffect(() => {
        async function getReviewsFromServer() {
            const urlStem = process.env.NEXT_PUBLIC_SERVER_API || "http://localhost:9000";
            const fetchUrl = `${urlStem}/toiletreviews?toilet=${toiletName}&gridref=${gridRef}`;
            const response = await fetch(fetchUrl);
            const currentReviews = await response.json();
            console.log(currentReviews);
            setHasLoaded(currentReviews.success);
            setReviewsFromServer(currentReviews.payload);
        }
        getReviewsFromServer();
    }, [gridRef, toiletName, needsRefresh]);
    return {reviewsFromServer, hasLoaded, setNeedsRefresh, needsRefresh}
}

export { useGetReviews }

/*
type queryValues = {
    'toilet': string;
    'gridref': string;
} | {
    'username': string
};

const getReviews = function GetReviews(category: string, params: queryValues) {
    const [revData, setRevData] = useState([]);
    function makeUrl(params: queryValues) {
        const urlStem = "localhost:9000/" + category + '?';
        let queryArray: string[] = [];
        const searchCategories = Object.keys(params);
        searchCategories.forEach((key, index) => {
            let urlSegment = key + '=' + params[key as keyof typeof params];
            queryArray.push(urlSegment);
        });
        const finalUrl = urlStem + queryArray.join("&")
        return finalUrl;
    }
    useEffect(() => {
        async function fetchCategoryData() {
          console.log("GET request from a dropdown or search bar.");
          const url = makeUrl(params);
          console.log(url);
          try {         
            const response = await fetch(url);
            const responseJSON = await response.json();
            const responseData = responseJSON.payload;
            console.log(responseData);
            setRevData(responseData);
          } catch (err) {
            const responseData = "Sorry, we couldn't find the data you wanted.";
            console.log(responseData);
          }
        }
        fetchCategoryData();
      }, [params]);
      return [revData, setRevData]
}
export { getReviews };*/