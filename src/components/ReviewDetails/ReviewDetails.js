import React from 'react';

const ReviewDetails = (props) => {
    
    const {name, designation, company, comment} = props.review;
    return (
        <div>
            <p>Name: {name}</p>
            <p>Designation: {designation}</p>
            <p>Company: {company}</p>
            <p>Comment: {comment}</p>
        </div>
    );
};

export default ReviewDetails;