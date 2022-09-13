import { useState, useEffect } from 'react';

// This hook should dynamically fetch the review data from front when search parameters changed
// Much planning is still required

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
export { getReviews };