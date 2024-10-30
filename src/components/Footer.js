// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css'; 
import '../styles/General.css';

import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className=" colorscheme footer">
            <div className="footer-icons">
            <a href="https://www.linkedin.com/in/jessica-hvirfvel/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/virveln" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="mailto:jessica.hvirfvel@hotmail.com"><FaEnvelope /></a>
            </div>
        </footer>
    );
};

export default Footer;
