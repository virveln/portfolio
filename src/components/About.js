// src/components/About.js
import React from 'react';
import '../styles/General.css';
import '../styles/About.css';

const About = () => {
    return (
        <div className="about-container">
            <img src="your-image-url.jpg" alt="About Me" className="about-image" />
            <h1>About Me</h1>
            <p>This is a short text about me.</p>
            <form className="about-form">
                <input type="email" placeholder="Your email" required />
                <textarea placeholder="Message" required></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default About;
