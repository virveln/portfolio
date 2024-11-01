// src/components/Navbar.js
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/General.css';
import '../styles/Navbar.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import NavMobile from './NavMobile';
import NavDesktop from './NavDesktop';


const Navbar = () => {
    return (
        <div>
            {/*
            <nav className="colorscheme navbar">
                <div className="nav-menu nav-item">
                    <NavLink to="/portfolio" end 
                    className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink>
                    <NavLink to="/portfolio/about"  
                    className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
                </div>
                <Link to="/portfolio" className="nav-logo nav-item">Jessica Hvirfvel</Link>
                <div className="nav-icons nav-item">
                    <a href="https://www.linkedin.com/in/jessica-hvirfvel/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="https://github.com/virveln" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="mailto:jessica.hvirfvel@hotmail.com"><FaEnvelope /></a>
                </div>
                </nav>
                */}
            <NavMobile />
            <NavDesktop />
        </div>
    );
};

export default Navbar;
