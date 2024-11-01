// src/components/About.js
import React from 'react';
import '../styles/General.css';
import '../styles/Attributions.css';
import attributionsData from '../data/attributionsData';

const Attributions = () => {
    return (
        <div className='container'>
            <div className="attribution-container ">
                <h1>Attributions</h1>
                <div className="attributions-list">
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