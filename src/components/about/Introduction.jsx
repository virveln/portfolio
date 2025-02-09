// src/components/About.js
import '../../styles/General.css';
import '../../styles/about/About.css';
import '../../styles/about/Introduction.css';

import React from 'react';
import { FaLinkedin, FaFile, FaEnvelope } from 'react-icons/fa';
import contactData from '../../data/contactData.json';

import profileImg from '../../images/me.JPG';

const Introduction = ({aboutData, t}) => {
    return (
        <div>
            <h2>Who am I<span className='colorfulend'>.</span></h2>
            <div className="about-container-intro">
                <div className='about-container-text'>
                    <p className='about-text'>{aboutData.introduction.p1}</p>
                    <p className='about-text'dangerouslySetInnerHTML={{ __html: aboutData.introduction.p2}}></p>
                    <p className='about-text connect-text'>{aboutData.introduction.p3}</p>

                    <div className='about-container-btn'>
                        <a className='btn about-btn btn-swipe-effect' href={contactData.linkedin} target="_blank" rel="noopener noreferrer" title={contactData.linkedinTitle} ><span className='externallink-icon'><FaLinkedin /></span> LinkedIn </a>
                        <a className='btn about-btn btn-swipe-effect' href={contactData.mail} title={contactData.mailTitle}><span className='externallink-icon'><FaEnvelope /></span> E-mail </a>
                        <a className='btn about-btn btn-swipe-effect' href={contactData.resume} target="_blank" rel="noopener noreferrer"><span className='externallink-icon'><FaFile /></span>{t('buttons.resume')}</a>
                    </div>
                </div>
                <div className='about-image-container'>
                    <img src={profileImg} alt="About Me" className="about-image" />
                </div>
            </div>
        </div>
    );
};

export default Introduction;
