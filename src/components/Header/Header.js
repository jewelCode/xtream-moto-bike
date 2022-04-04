import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="container nav-container">
            <div>
                <span><h2 className="text-success">Xtreame Moto Bike</h2></span>
            </div>
            <div>
                <nav className="navigation">
                    <Link className="nav-item" to="/">Home</Link>
                    <Link className="nav-item" to="/review">Review</Link>
                    <Link className="nav-item" to="/dashboard">Dashboard</Link>
                    <Link className="nav-item" to="/blog">Blog</Link>
                    <Link className="nav-item" to="/about">About</Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;