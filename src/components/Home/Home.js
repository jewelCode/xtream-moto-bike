import React from 'react';
import './Home.css';
import headerImage from '../../components/resources/suzukigsxr.png';
import { Link } from 'react-router-dom';
import useReview from '../Hooks/useReview';
import { Card } from 'react-bootstrap';




const Home = () => {
    const [reviews, setReviews] =useReview();
    return (
        <div className="container">
            <div className="row header">
                 <div className="col-lg-6">
                    <h1>Find Your Best Racing Bikes</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, animi ad? Velit aut accusamus nemo accusantium. Similique quidem blanditiis unde hic magni necessitatibus harum voluptatum maxime facilis quo ullam quos recusandae, nobis, at commodi sequi repudiandae cumque accusantium reiciendis eius nulla. Ab pariatur tenetur libero quaerat dolorem molestias voluptatibus doloremque.</p>
                    <button className="btn btn-warning text-white">See More</button>
                 </div>
                 <div className="col-lg-6">
                    <img className="img-fluid" src={headerImage} alt="" />
                 </div> 
            </div>
            <h3 className="text-center mt-5 mb-5">Our Client Says</h3>
                <div className="row">
                    {
                        reviews.slice(0, 3).map( review => 
                            <div className="col-md-4 ">
                                    <Card className="p-3">
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
           <div className="text-center mt-5">
                <button className="btn btn-warning button">
                    <Link to="/review" className="text-white text-decoration-none">See All Reviews</Link>   
                </button>
           </div>
           
        </div>
    );
};

export default Home;