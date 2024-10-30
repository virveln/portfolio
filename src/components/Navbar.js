// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/General.css';
import '../styles/Navbar.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="colorscheme navbar">
            <div className="nav-left nav-item">
                <Link to="/">Projects</Link>
                <Link to="/about">About</Link>
            </div>
            <Link to="/" className="nav-logo nav-item">Jessica Hvirfvel</Link>
            <div className="navbar-icons nav-right nav-item">
                <a href="https://www.linkedin.com/in/jessica-hvirfvel/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://github.com/virveln" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="mailto:jessica.hvirfvel@hotmail.com"><FaEnvelope /></a>
            </div>
        </nav>
    );
};

export default Navbar;
