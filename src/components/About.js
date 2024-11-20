// src/components/About.js
import '../styles/General.css';
import '../styles/About.css';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { ReactTyped } from "react-typed";
import { FaLinkedin, FaFile, FaEnvelope } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import logo from '../logo.svg';
import toolsIcon from '../images/icons/tools.png';
import backpackIcon from '../images/icons/backpack.png';
import diplomaIcon from '../images/icons/diploma.png';
import eventIcon from '../images/icons/event.png';
import parachuteIcon from '../images/icons/parachute.png';
import puzzleIcon from '../images/icons/puzzle.png';
import contactData from '../data/contactData.json';
import heroVideo from '../coding_video.mp4';

const About = () => {
    const { t, i18n } = useTranslation('generalData');
    const [showAll, setShowAll] = useState(false);
    const [aboutData, setAboutData] = useState(null);

    useEffect(() => {
        const loadAboutData = async () => {
            const lang = i18n.language === 'sv' ? 'sv' : 'en'; // Hämta aktuell språk-kod
            const data = await import(`../translations/${lang}/aboutData${lang === 'sv' ? 'Sv' : 'En'}.json`);
            setAboutData(data.default);
        };
        loadAboutData();
    }, [i18n.language]);


    if (!aboutData) {
        return <p>Loading...</p>; // Visa en laddningsindikator om datan inte är hämtad ännu
    }

    const itemsToShow = showAll ? aboutData.experience : aboutData.experience.slice(0, 4);

    const iconMap = {
        "tools": toolsIcon,
        "backpack": backpackIcon,
        "diploma": diplomaIcon,
        "event": eventIcon,
        "parachute": parachuteIcon,
        "puzzle": puzzleIcon,
    };

    return (
        <div className='about-outer-container'>
            <Helmet>
                <title>Jessica Hvirfvel - About</title>
            </Helmet>
            <div className=" ">
                <div className='about-hero'>
                    <video className='hero-video' autoPlay muted loop playsInline>
                        <source src={heroVideo} type='video/mp4' />
                        Your browser does not support the video tag.
                    </video>
                    <h5 className='about-hero-text-start about-hero-all-text'>Hi, my name is </h5>
                    <h3 className='about-hero-all-text '>
                        <ReactTyped
                            strings={["Jessica Hvirfvel"]}
                            typeSpeed={100}
                            cursorChar="|"
                            showCursor={true}
                            className='about-hero-all-text about-name' />
                    </h3>
                    <h5 className='role about-hero-all-text'>— a Web/System Developer</h5>
                </div>

                <div className='container about-container'>
                    <div>

                        <h2>Who am I<span className='colorfulend'>.</span></h2>
                        <div className="about-container-intro">
                            <div className='about-container-text'>
                                <p className='about-text'>{aboutData.introduction.p1}</p>
                                <p className='about-text'>{aboutData.introduction.p2}</p>
                                <p className='about-text connect-text'>{aboutData.introduction.p3}</p>

                                <div className='about-container-btn'>
                                    <a className='btn about-btn' href={contactData.linkedin} target="_blank" rel="noopener noreferrer" title={contactData.linkedinTitle} ><span className='externallink-icon'><FaLinkedin /></span> LinkedIn </a>
                                    <a className='btn about-btn' href={contactData.mail} title={contactData.mailTitle}><span className='externallink-icon'><FaEnvelope /></span> E-mail </a>
                                    <a className='btn about-btn' href={contactData.resume} target="_blank" rel="noopener noreferrer"><span className='externallink-icon'><FaFile /></span>{t('buttons.resume')}</a>
                                </div>
                            </div>
                            <div className='about-image-container'>
                                <img src={require('../images/me.JPG')} alt="About Me" className="about-image" />
                            </div>
                        </div>
                    </div>

                    <div className='funfacts-container new-container'>
                        <h2>Fun facts about me<span className='colorfulend'>.</span></h2>
                        <div className='funfacts-inner-container'>
                            {aboutData.funfacts.map((funfact, index) => (
                                <div key={index} className='funfact-item'>
                                    <img src={iconMap[funfact.icon]} alt={funfact.alt} className='funfact-icon' />
                                    <p className='funfact-text'>{funfact.fact}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='current-container new-container'>
                        <div>
                            <img className='react-logo' src={logo} alt='React logo' />
                            <p>{aboutData.currently}</p>
                        </div>
                    </div>

                    <div className='language-container new-container'>
                        <h2>Technical experiences<span className='colorfulend'>.</span></h2>
                        <p>{aboutData.experienceText.text}<ReactTyped
                            strings={["Coder.", "Designer."]}
                            typeSpeed={100}
                            loop backSpeed={50}
                            cursorChar="|"
                            showCursor={true}
                            className='' />
                        </p>
                        <div className='language-inner-container'>
                            {itemsToShow.map((about, index) => (
                                <div key={index} className='about-language-item'>
                                    <h4>{about.title}</h4>
                                    <p className='about-language'>
                                        {about.language.map((lang, langIndex) => (
                                            <span key={langIndex}>
                                                {lang}
                                                {langIndex < about.language.length - 1 && (
                                                    <span className='language-divider'> | </span>
                                                )}
                                            </span>
                                        ))}
                                    </p>
                                </div>
                            ))}
                            {!showAll && (
                                <button className="btn show-all-btn" onClick={() => setShowAll(true)}>
                                    {t('buttons.showMore')}
                                </button>
                            )}
                        </div>

                    </div>
                </div >
            </div>
        </div>
    );
};

export default About;
