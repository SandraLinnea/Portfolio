import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar({ navCopy, onToggleLanguage }) {
    return (
        <header>
            <div className="navbar-shell">
                <nav className="navbar" aria-label={navCopy.ariaLabel}>
                    <div className="nav-links">
                        <NavLink to="/" end className={({ isActive }) => `nav-button${isActive ? ' nav-button-active' : ''}`}>{navCopy.home}</NavLink>
                        <NavLink to="/projects" className={({ isActive }) => `nav-button${isActive ? ' nav-button-active' : ''}`}>{navCopy.projects}</NavLink>
                        <NavLink to="/technicalskills" className={({ isActive }) => `nav-button${isActive ? ' nav-button-active' : ''}`}>{navCopy.technicalSkills}</NavLink>
                        <NavLink to="/about" className={({ isActive }) => `nav-button${isActive ? ' nav-button-active' : ''}`}>{navCopy.about}</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => `nav-button${isActive ? ' nav-button-active' : ''}`}>{navCopy.contact}</NavLink>
                        <NavLink to="/cv" className={({ isActive }) => `nav-button${isActive ? ' nav-button-active' : ''}`}>{navCopy.cv}</NavLink>
                    </div>
                    <button type="button" className="language-toggle" onClick={onToggleLanguage} aria-label={navCopy.toggleLabel}>
                        {navCopy.toggleButton}
                    </button>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
