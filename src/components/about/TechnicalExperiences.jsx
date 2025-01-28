// src/components/About.js
import '../../styles/General.css';
import '../../styles/about/About.css';
import '../../styles/about/TechnicalExperiences.css';

import React, { useState, useEffect } from 'react';
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TechnicalExperiences = ({ aboutData, t }) => {
    const [showAll, setShowAll] = useState(false);
    const itemsToShow = showAll ? aboutData.experience : aboutData.experience.slice(0, 4);

    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    const isMobile = screenWidth <= 768;

    return (
        <div className='techniques-container new-container'>
            <h2>Technical experiences<span className='colorfulend'>.</span></h2>
            <p>{aboutData.experienceText.text}<ReactTyped
                strings={["Coder.", "Designer."]}
                typeSpeed={100}
                loop backSpeed={50}
                cursorChar="|"
                showCursor={true}
                className='' />
            </p>
            <div className='techniques-inner-container'>
                {itemsToShow.map((about, index) => {
                    // <div key={index} className='about-techniques-item'>

                    const direction = index % 2 === 0 ? -100 : 100; // Växelvis vänster/höger

                    return (
                        <motion.div
                            ref={ref}
                            key={index}
                            className="about-techniques-item"
                            initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: direction }}
                            animate={inView || showAll ? { opacity: 1, x: 0 } : {}} // Animeras om de syns eller showAll är true
                            transition={{
                                duration: 0.5,
                                // delay: index * 0.2,
                                delay: Math.floor(index / 2) * 0.5, 
                                ease: "easeOut",
                            }}
                        >
                            <h4>{about.title}</h4>
                            <p className='about-techniques'>
                                {about.techniques.map((technique, langIndex) => (
                                    <span key={langIndex}>
                                        {technique}
                                        {langIndex < about.techniques.length - 1 && (
                                            <span className='techniques-divider'> | </span>
                                        )}
                                    </span>
                                ))}
                            </p>
                        </motion.div>
                    );
                })}
                {!showAll && (
                    <button className="btn show-all-btn" onClick={() => setShowAll(true)}>
                        {t('buttons.showMore')}
                    </button>
                )}
            </div>
        </div>
    );
};

export default TechnicalExperiences;
