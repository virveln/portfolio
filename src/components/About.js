// src/components/About.js
import React from 'react';
import '../styles/General.css';
import '../styles/About.css';

const About = () => {
    return (
        <div className='container'>
            <div className="about-container ">
                <img src={require('../images/me.JPG')} alt="About Me" className="about-image" />
                <h1>Hi!</h1>
                <p className='about-text'>I'm Jessica Hvirfvel - a creative, logical thinker with a passion for crafting, organizing, and problem-solving. I’m driven by learning and understanding how things work together. I’ve long been interested in IT and graphic design, and more recently, I’ve delved into full-stack development. This aligns perfectly with my batchelour in web development (Webbutvecklare) from Karlstads university.</p>
                <p className='about-text'>Feel free to reach out via
                    <a href="mailto:jessica.hvirfvel@hotmail.com">email</a>
                    or send a message on
                    <a href="https://www.linkedin.com/in/jessica-hvirfvel/" target="_blank">LinkedIn</a>
                    . Let's connect!
                </p>
                <p className='about-text'>You're welcome to check out my
                    <a href="https://www.linkedin.com/in/jessica-hvirfvel/" target="_blank">LinkedIn</a>
                    or download my
                    <a href='#'>resume</a>
                    .
                </p>
            </div >
        </div>
    );
};

export default About;
