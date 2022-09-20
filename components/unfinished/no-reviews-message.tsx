export default function NoReviewsMessage({reviewArrayLength, hasLoaded}: {reviewArrayLength: number, hasLoaded: boolean}) {
    if(reviewArrayLength === 0 && hasLoaded) {
        return(
            <h2 className='No-Reviews-Message'>{'Any reviews have been published for this toilet: be the first'}</h2>
    )}
    else if(!hasLoaded) {
        return(
        <h2 className='No-Reviews-Message'>{'The server is unable to process this request right now'}</h2>
    )}
    else{
        return <></>
    }
}