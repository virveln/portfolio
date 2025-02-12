// src/components/About.js
import '../../styles/General.css';
import '../../styles/about/About.css';
import '../../styles/about/FunFacts.css';

import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import toolsIcon from '../../images/icons/tools.png';
import backpackIcon from '../../images/icons/backpack.png';
import diplomaIcon from '../../images/icons/diploma.png';
import eventIcon from '../../images/icons/event.png';
import parachuteIcon from '../../images/icons/parachute.png';
import puzzleIcon from '../../images/icons/puzzle.png';

const FunFacts = ({ aboutData, sections }) => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: .2, });
    const heading = sections.find(section => section.id === 'fun-facts');

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
    const isMobile = screenWidth < 768;


    const iconMap = {
        "tools": toolsIcon,
        "backpack": backpackIcon,
        "diploma": diplomaIcon,
        "event": eventIcon,
        "parachute": parachuteIcon,
        "puzzle": puzzleIcon,
    };

    return (
        <div className='funfacts-container new-container'>
            <h2>{heading.label}<span className='colorfulend'>.</span></h2>
            <div className='funfacts-inner-container' ref={ref}>
                {aboutData.funfacts.map((funfact, index) => (
                    // <div key={index} className='funfact-item'>
                    <motion.div
                        key={index}
                        className="funfact-item"
                        threshold="0.2"
                        initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.2, 
                            ease: "easeOut",
                        }}
                    >
                        <img src={iconMap[funfact.icon]} alt={funfact.alt} className='funfact-icon' />
                        <p className='funfact-text'>{funfact.fact}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default FunFacts;
