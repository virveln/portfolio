// src/components/Footer.js
import '../styles/General.css';
import '../styles/Footer.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope, FaRegCopyright } from 'react-icons/fa';
import aboutData from '../data/aboutData';    


const Footer = () => {
    const contactinfo = aboutData[0].contactInfo;

    return (
        <footer className=" colorscheme footer">
            <div className="footer-icons">
                <a href={contactinfo.linkedin} target="_blank" rel="noopener noreferrer" title={contactinfo.linkedinTitle}><FaLinkedin /></a>
                <a href={contactinfo.github} target="_blank" rel="noopener noreferrer" title={contactinfo.githubTitle}><FaGithub /></a>
                <a href={contactinfo.mail} title={contactinfo.mailTitle}><FaEnvelope /></a>
            </div>
            <div className='second-footer-container'>
                <p><FaRegCopyright /> 2024 designed and created by Jessica Hvirfvel</p>
                <p className='footer-divider'>|</p>
                <Link to="/portfolio/attributions" title='Attributions'>Attributions</Link>
            </div>
        </footer>
    );
};

export default Footer;
