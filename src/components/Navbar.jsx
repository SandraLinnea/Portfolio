import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-button">Home</Link>
            <Link to="/projects" className="nav-button">Projects</Link>
            <Link to="/technicalskills" className="nav-button">Technical Skills</Link>
            <Link to="/about" className="nav-button">About</Link>
            <Link to="/contact" className="nav-button">Contact</Link>
            <Link to="/cv" className="nav-button">CV</Link>
        </nav>
    );
}

export default Navbar;