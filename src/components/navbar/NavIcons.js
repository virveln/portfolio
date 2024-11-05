import '../../styles/General.css';
import '../../styles/Navbar.css';
import React, { useState} from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaLanguage } from 'react-icons/fa';
import { MdLanguage } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import contactData from '../../data/contactData.json';

const NavIcons = () => {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState('sv');

    const toggleLanguage = () => {
        const newLanguage = language === 'sv' ? 'en' : 'sv';
        i18n.changeLanguage(newLanguage); // Byter språk i i18n
        setLanguage(newLanguage); // Uppdaterar knappen så den visar nästa språk
      };

    return (
        <div className="nav-icons nav-item" >
            <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer" title={contactData.linkedinTitle}> <FaLinkedin /></a >
            <a href={contactData.github} target="_blank" rel="noopener noreferrer" title={contactData.githubTitle}> <FaGithub /></a >
            <a href={contactData.mail} title={contactData.mailTitle}> <FaEnvelope /></a >
            <button className='language-btn' onClick={toggleLanguage} title={language === 'en' ? 'SV' : 'EN'}> <MdLanguage /> </button>
        </div>
    );
};

export default NavIcons;
