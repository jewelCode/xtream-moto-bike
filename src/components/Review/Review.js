import React from 'react';
import useReview from '../Hooks/useReview';
import ReviewDetails from '../ReviewDetails/ReviewDetails';
import './Review.css'

const Review = () => {
    const [reviews, setReviews] = useReview();
   
    return (
        <div className="container p-5 mt-3" style={{backgroundColor: '#fefbe9'}}>
            <h1 className="text-center mt-5 mb-5" style={{color: 'orange'}}>See what people are saying about us?</h1>
            <div className="row g-5">
                {
                    reviews.map(review => <ReviewDetails review={review} key={review.id}></ReviewDetails>)
                }
            </div>
        </div>
    );
};

export default Review;