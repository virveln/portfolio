// src/components/About.js
import '../../styles/General.css';
import '../../styles/About.css';
import React, { useState } from 'react';
import { ReactTyped } from "react-typed";

const TechnicalExperiences = ({aboutData, t}) => {
    const [showAll, setShowAll] = useState(false);
    const itemsToShow = showAll ? aboutData.experience : aboutData.experience.slice(0, 4);

    return (
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
    );
};

export default TechnicalExperiences;
