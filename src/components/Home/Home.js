import React from 'react';
import './Home.css';
import headerImage from '../../components/resources/suzukigsxr.png';
import { Link } from 'react-router-dom';
import ReviewData from '../Hooks/ReviewData';



const Home = () => {
    const [reviews, setReviews] = ReviewData();
    return (
        <div className="container">
            <div className="row header">
                 <div className="col-lg-6">
                    <h1>This Is Headings</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, animi ad? Velit aut accusamus nemo accusantium. Similique quidem blanditiis unde hic magni necessitatibus harum voluptatum maxime facilis quo ullam quos recusandae, nobis, at commodi sequi repudiandae cumque accusantium reiciendis eius nulla. Ab pariatur tenetur libero quaerat dolorem molestias voluptatibus doloremque.</p>
                    <button className="btn btn-warning text-white">See More</button>
                 </div>
                 <div className="col-lg-6">
                    <img className="img-fluid" src={headerImage} alt="" />
                 </div> 
            </div>
            <h3 className="text-center">Our Client Says</h3>
           <div className="text-center">
                <button className="btn btn-warning">
                    <Link to="/review" className="text-white">Something</Link>   
                </button>
           </div>
           
        </div>
    );
};

export default Home;