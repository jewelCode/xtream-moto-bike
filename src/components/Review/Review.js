import React from 'react';
import ReviewData from '../Hooks/ReviewData';
import ReviewDetails from '../ReviewDetails/ReviewDetails';
import './Review.css'

const Review = () => {
    const [reviews, setReviews] = ReviewData();
   
    return (
        <div className="container">
            <h1 className="text-center mt-5">See what people are saying about us?</h1>
            {
                reviews.map(review => <ReviewDetails review={review} key={review.id}></ReviewDetails>)
            }
        </div>
    );
};

export default Review;