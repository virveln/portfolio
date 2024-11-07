// src/components/About.js
import '../styles/General.css';
import '../styles/Attributions.css';
import React from 'react';
import { Helmet } from 'react-helmet';
import attributionsData from '../data/attributionsData.json';

const Attributions = () => {
    return (
        <div className='container'>
            <Helmet>
                <title>Jessica Hvirfvel - Attributions</title>
            </Helmet>
            <div className="attribution-container ">
                <h1>Attributions.</h1>
                <div className="attributions-mockup">
                    {attributionsData.map((item) => (
                        <div key={item.id} className="attribution-item">
                            <a href={item.url} target="_blank" rel="noopener noreferrer">
                                {item.from}
                            </a>
                            <span> - {item.desc}</span>
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    );
};

export default Attributions;