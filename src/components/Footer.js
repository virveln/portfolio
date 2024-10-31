// src/components/Footer.js
import React from 'react';
import '../styles/General.css';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope, FaRegCopyright } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className=" colorscheme footer">
            <div className="footer-icons">
                <a href="https://www.linkedin.com/in/jessica-hvirfvel/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://github.com/virveln" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="mailto:jessica.hvirfvel@hotmail.com"><FaEnvelope /></a>
            </div>
            <div className='second-footer-container'>
                <p><FaRegCopyright /> 2024 designed and created by Jessica Hvirfvel</p>
                <p className='footer-divider'>|</p>
                <Link to="/portfolio/attributions">Attributions</Link>
            </div>
        </footer>
    );
};

export default Footer;
