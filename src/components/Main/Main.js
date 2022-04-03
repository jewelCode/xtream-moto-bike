import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../About/About';
import Home from '../Home/Home';
import Review from '../Review/Review';
import Dashboard from '../Dashboard/Dashboard';
import './Main.css';
import Blog from '../Blog/Blog';


const Main = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/review" element={<Review></Review>}></Route>
                <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
                <Route path="/blog" element={<Blog></Blog>}></Route>
                <Route path="/about" element={<About></About>}></Route>
            </Routes>
        </div>
    );
};

export default Main;