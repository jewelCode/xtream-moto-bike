import React from 'react';
import { Card } from 'react-bootstrap';
import './ReviewDetails.css'

const ReviewDetails = (props) => {

    const {name, designation, company, comment, image} = props.review;
    return (
        <div className="col-md-4">
            <Card className="p-3">
                <Card.Img variant="top" src={image} className="img-fluid image-size rounded-circle w-50 mx-auto d-block"/>
                <Card.Body>
                    <Card.Title>Name: {name}</Card.Title>
                        <p>Designation: {designation}</p>
                        <p>Company: {company}</p>
                        <p>Comment: {comment}</p>
                    </Card.Body>
            </Card>
        </div>
    );
};

export default ReviewDetails;