import '../../styles/General.css';
import '../../styles/Navbar.css';
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { MdLanguage } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import contactData from '../../data/contactData.json';

const NavIcons = ({ closeMenu }) => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLanguage = i18n.language === 'sv' ? 'en' : 'sv';
        i18n.changeLanguage(newLanguage); 

        if (closeMenu) {
            closeMenu(); 
        }
    };

    return (
        <div className="nav-icons nav-item" >
            <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer" title={contactData.linkedinTitle}> <FaLinkedin /></a >
            <a href={contactData.github} target="_blank" rel="noopener noreferrer" title={contactData.githubTitle}> <FaGithub /></a >
            <a href={contactData.mail} title={contactData.mailTitle}> <FaEnvelope /></a >
            <button className='language-btn' onClick={toggleLanguage} title={i18n.language === 'en' ? 'SV' : 'EN'}> <MdLanguage /> </button>
        </div>
    );
};

export default NavIcons;
