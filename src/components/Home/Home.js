import React from 'react';
import './Home.css';
import headerImage from '../../components/resources/suzukigsxr.png';


const Home = () => {
    return (
        <div className="container">
            <div className="row header">
                 <div className="col-lg-6">
                    <h1>This Is Headings</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, animi ad? Velit aut accusamus nemo accusantium. Similique quidem blanditiis unde hic magni necessitatibus harum voluptatum maxime facilis quo ullam quos recusandae, nobis, at commodi sequi repudiandae cumque accusantium reiciendis eius nulla. Ab pariatur tenetur libero quaerat dolorem molestias voluptatibus doloremque.</p>
                 </div>
                 <div className="col-lg-6">
                    <img className="img-fluid" src={headerImage} alt="" />
                 </div> 
            </div>
        </div>
    );
};

export default Home;