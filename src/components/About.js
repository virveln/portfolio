// src/components/About.js
import React from 'react';
import '../styles/General.css';
import '../styles/About.css';

const About = () => {
    return (
        <div className="about-container container">
            <img src={require('../images/me.JPG')} alt="About Me" className="about-image" />
            <h1>About Me</h1>
            <p>This is a short text about me.</p>
        </div>
    );
};

export default About;
