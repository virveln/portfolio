// src/components/About.js
import '../../styles/General.css';
import '../../styles/About.css';
import '../../styles/about/Certificates.css';

import React from 'react';
import { Link } from 'react-router-dom';
import { IoOpenOutline } from "react-icons/io5";
import certificateData from '../../data/certificatesData';

const Certificate = ({ aboutData }) => {
    return (
        <div className='certificate-container new-container'>
            <h2>Certificates<span className='colorfulend'>.</span></h2>
            {certificateData.map((certificate, index) => (
                <div key={index} className='certificate-item'>
                    <img src={certificate.image} alt='Certificate' />
                    <div className='certificate-info'>
                        <h4>{certificate.title}</h4>
                        <p>{certificate.provider}</p>
                        <Link to={certificate.link} target="_blank" rel="noopener noreferrer" title='Show certificate'>{aboutData.certificateLinkTitle} <IoOpenOutline /></Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Certificate;
