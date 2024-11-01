import React from 'react';
import '../styles/General.css';
import '../styles/Navbar.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const NavIcons = () => {
    return (
        <div className="nav-icons nav-item" >
            <a href="https://www.linkedin.com/in/jessica-hvirfvel/" target="_blank" rel="noopener noreferrer" > <FaLinkedin /></a >
            <a href="https://github.com/virveln" target="_blank" rel="noopener noreferrer" > <FaGithub /></a >
            <a href="mailto:jessica.hvirfvel@hotmail.com" > <FaEnvelope /></a >
        </div>
    );
};

export default NavIcons;
