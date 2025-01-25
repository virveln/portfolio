// src/components/About.js
import '../../styles/General.css';
import '../../styles/About.css';
import '../../styles/about/FunFacts.css';

import React from 'react';
import toolsIcon from '../../images/icons/tools.png';
import backpackIcon from '../../images/icons/backpack.png';
import diplomaIcon from '../../images/icons/diploma.png';
import eventIcon from '../../images/icons/event.png';
import parachuteIcon from '../../images/icons/parachute.png';
import puzzleIcon from '../../images/icons/puzzle.png';

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FunFacts = ({aboutData}) => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

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
            <h2>Fun facts about me<span className='colorfulend'>.</span></h2>
            <div className='funfacts-inner-container'>
                {aboutData.funfacts.map((funfact, index) => (
                    // <div key={index} className='funfact-item'>
                    <motion.div
                        ref={ref}
                        key={index}
                        className="funfact-item"
                        initial={{ opacity: 0, x: 100 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.2, // Fördröjning per element
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
