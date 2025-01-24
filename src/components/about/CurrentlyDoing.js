// src/components/About.js
import '../../styles/General.css';
import '../../styles/About.css';
import '../../styles/about/CurrentlyDoing.css';

import React from 'react';
import AboutImageGallery from './AboutImageGallery';

const CurrentlyDoing = ({aboutData}) => {
    return (
        <div className='current-container new-container'>
            <div>
                < AboutImageGallery />
                <div className='current-text'>
                    <hr className='color-line' />
                    <p>{aboutData.currentlyA}</p>
                    <p>{aboutData.currentlyB}</p>
                </div>
            </div>
        </div>
    );
};

export default CurrentlyDoing;
