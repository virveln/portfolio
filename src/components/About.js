// src/components/About.js
import '../styles/General.css';
import '../styles/About.css';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import { ReactTyped } from "react-typed";
import { FaLinkedin, FaFile, FaEnvelope } from 'react-icons/fa';
import aboutData from '../data/aboutData';
import logo from '../logo.svg';

const About = () => {
    const [showAll, setShowAll] = useState(false);
    const contactinfo = aboutData[0].contactInfo;
    const introduction = aboutData[0].introduction;
    const funfacts = aboutData[0].funfacts;
    const currently = aboutData[0].currently;
    const experiences = aboutData[0].experience;
    const itemsToShow = showAll ? experiences : experiences.slice(0, 4);

    return (
        <div className='about-outer-container'>
            <Helmet>
                <title>Jessica Hvirfvel - About</title>
            </Helmet>
            <div className=" ">
                {/*<h1> About.</h1>*/}
                <div className='about-hero'>
                    <h5 className='about-hero-text-start about-hero-all-text'>Hello, my name is </h5>
                    <h3 className='about-hero-all-text '>
                        <ReactTyped
                            strings={["Jessica Hvirfvel"]}
                            typeSpeed={100}
                            loop backSpeed={50}
                            cursorChar="|"
                            showCursor={true}
                            className='about-hero-all-text about-name' />
                    </h3>
                    <h5 className='role about-hero-all-text'>— a Web/System Developer</h5>
                </div>

                <div className='container about-container'>
                    <div className="about-container-intro">
                        <div className='about-container-text'>
                            <h2>Who am I<span className='colorfulend'>.</span></h2>
                            {/* <h2>Some facts about me and how I ended up in developing.</h2>*/}
                            <p className='about-text'>{introduction.p1}</p>
                            <p className='about-text'>{introduction.p2}</p>
                            <p className='about-text connect-text'>{introduction.p3}</p>

                            <div className='about-container-btn'>
                                <a className='btn about-btn' href={contactinfo.linkedin} target="_blank" rel="noopener noreferrer" title='linkedin.com/in/jessica-hvirfvel/'><span className='externallink-icon'><FaLinkedin /></span> LinkedIn </a>
                                <a className='btn about-btn' href={contactinfo.mail} title='jessica.hvirfvel@hotmail.com'><span className='externallink-icon'><FaEnvelope /></span> E-mail </a>
                                <a className='btn about-btn' href={contactinfo.resume} target="_blank" rel="noopener noreferrer"><span className='externallink-icon'><FaFile /></span>Resumé</a>
                            </div>
                        </div>
                        <img src={require('../images/me.JPG')} alt="About Me" className="about-image" />
                    </div>

                    <div className='funfacts-container new-container'>
                        <h2>Fun facts about me<span className='colorfulend'>.</span></h2>
                        <div className='funfacts-inner-container'>
                            {funfacts.map((funfact, index) => (
                                <div key={index} className='funfact-item'>
                                    <img src={funfact.icon} alt={funfact.alt} className='funfact-icon' />
                                    <p className='funfact-text'>{funfact.fact}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='current-container new-container'>
                        <div>
                            <img className='react-logo' src={logo} alt='React logo' />
                            <p>{currently}</p>
                        </div>
                    </div>

                    <div className='language-container new-container'>
                        <h2>Technical experiences<span className='colorfulend'>.</span></h2>
                        <p>Experienced from Karlstad University and private learning. Part <ReactTyped
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
                                    Show more
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
