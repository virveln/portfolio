// src/components/About.js
import '../../styles/General.css';
import '../../styles/About.css';
import '../../styles/about/Hero.css';

import React, { useState, useEffect } from 'react';
import { ReactTyped } from "react-typed";
import heroVideo from '../../images/coding_video.mp4';
import heroVideoPoster from '../../images/coding-video-poster.png';

const Hero = () => {
    const [startTyping, setStartTyping] = useState(false);

    useEffect(() => {
        // Vänta 3 sekunder innan vi sätter startTyping till true
        const timer = setTimeout(() => {
            setStartTyping(true);
        }, 1500); // 3000 ms = 3 sekunder

        return () => clearTimeout(timer); // Rensa timer när komponenten tas bort
    }, []);

    return (
        <div className='about-hero'>
            <video className='hero-video' preload="auto" autoPlay muted loop playsInline poster={heroVideoPoster}>
                <source src={heroVideo} type='video/mp4' />
                Your browser does not support the video tag.
            </video>
            <div className='about-hero-text-container'>
                <h5 className='about-hero-text-start about-hero-all-text'>Hi, my name is </h5>
                <h3 className='about-hero-all-text '>
                    {!startTyping && (
                        <ReactTyped
                            strings={[""]}
                            typeSpeed={100}
                            cursorChar="|"
                            showCursor={true}
                            className='about-hero-all-text about-name' />
                    )}
                    {startTyping && (
                        <ReactTyped
                            strings={["Jessica Hvirfvel"]}
                            typeSpeed={100}
                            cursorChar="|"
                            showCursor={true}
                            className='about-hero-all-text about-name'
                        />
                    )}
                </h3>
                <h5 className='role about-hero-all-text'>— a Web/System Developer</h5>
            </div>
        </div>
    );
};

export default Hero;
