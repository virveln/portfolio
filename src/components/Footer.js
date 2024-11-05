// src/components/Footer.js
import '../styles/General.css';
import '../styles/Footer.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope, FaRegCopyright } from 'react-icons/fa';
import contactData from '../data/contactData.json';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className=" colorscheme footer">
            <div className="footer-icons">
                <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer" title={contactData.linkedinTitle}><FaLinkedin /></a>
                <a href={contactData.github} target="_blank" rel="noopener noreferrer" title={contactData.githubTitle}><FaGithub /></a>
                <a href={contactData.mail} title={contactData.mailTitle}><FaEnvelope /></a>
            </div>
            <div className='second-footer-container'>
                <p><FaRegCopyright /> {year} designed and created by Jessica Hvirfvel</p>
                <p className='footer-divider'>|</p>
                <Link to="/portfolio/attributions" title='Attributions'>Attributions</Link>
            </div>
        </footer>
    );
};

export default Footer;
