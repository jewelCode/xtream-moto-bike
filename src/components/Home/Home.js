import React from 'react';
import './Home.css';
import headerImage from '../../components/resources/suzukigsxr.png';
import { Link } from 'react-router-dom';
import useReview from '../Hooks/useReview';
import { Card } from 'react-bootstrap';




const Home = () => {
    const [reviews, setReviews] =useReview();
    return (
        <div className="container mt-3 pb-3" style={{backgroundColor: '#fefbe9'}}>
            <div className="row header">
                 <div className="col-lg-6">
                    <h1 className="text-uppercase display-2" style={{color: 'orange'}}>Find Your Best Racing Bikes</h1>
                    <p>Here We are providing best racing bikes in Bangladesh. Choice yours Service Ours.</p>
                    <button className="btn btn-success text-white px-5 py-3">See More</button>
                 </div>
                 <div className="col-lg-6">
                    <img className="img-fluid" src={headerImage} alt="" />
                 </div> 
            </div>
            <h3 className="text-center mt-5 mb-5 text-uppercase" style={{color: 'orange'}}>Our Client Says</h3>
                <div className="row p-3">
                    {
                        reviews.slice(0, 3).map( review => 
                            <div className="col-md-4">
                                    <Card style={{backgroundColor: '#e1eedd'}} className="p-3 h-100">
                                        <Card.Img variant="top" src={review.image} className="img-fluid image-size rounded-circle w-50 mx-auto d-block"/>
                                        <Card.Body>
                                            <Card.Title>Name: {review.name}</Card.Title>
                                            <p>Designation: {review.designation}</p>
                                            <p>Company: {review.company}</p>
                                            <p>Comment: {review.comment}</p>
                                            <p>Rating: {review.rating}</p>
                                        </Card.Body>
                                    </Card>
                                </div>)
                    }
                </div>
           <div className="text-center mt-5 mb-5">
                <button className="btn btn-success">
                    <Link to="/review" className="text-decoration-none px-3 text-white">See All Reviews</Link>   
                </button>
           </div>
           
        </div>
    );
};

export default Home;