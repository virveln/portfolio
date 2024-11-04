import '../../styles/General.css';
import '../../styles/Navbar.css';
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import aboutData from '../../data/aboutData';    

const NavIcons = () => {
    const contactinfo = aboutData[0].contactInfo;

    return (
        <div className="nav-icons nav-item" >
            <a href={contactinfo.linkedin} target="_blank" rel="noopener noreferrer" title={contactinfo.linkedinTitle}> <FaLinkedin /></a >
            <a href={contactinfo.github} target="_blank" rel="noopener noreferrer" title={contactinfo.githubTitle}> <FaGithub /></a >
            <a href={contactinfo.mail} title={contactinfo.mailTitle}> <FaEnvelope /></a >
        </div>
    );
};

export default NavIcons;
