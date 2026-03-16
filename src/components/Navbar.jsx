import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <header>
            <nav className="navbar" aria-label="Main navigation">
                <NavLink to="/" end className={({ isActive }) => `nav-button${isActive ? ' nav-button-active' : ''}`}>Home</NavLink>
                <NavLink to="/projects" className={({ isActive }) => `nav-button${isActive ? ' nav-button-active' : ''}`}>Projects</NavLink>
                <NavLink to="/technicalskills" className={({ isActive }) => `nav-button${isActive ? ' nav-button-active' : ''}`}>Technical Skills</NavLink>
                <NavLink to="/about" className={({ isActive }) => `nav-button${isActive ? ' nav-button-active' : ''}`}>About</NavLink>
                <NavLink to="/contact" className={({ isActive }) => `nav-button${isActive ? ' nav-button-active' : ''}`}>Contact</NavLink>
                <NavLink to="/cv" className={({ isActive }) => `nav-button${isActive ? ' nav-button-active' : ''}`}>CV</NavLink>
            </nav>
        </header>
    );
}

export default Navbar;
