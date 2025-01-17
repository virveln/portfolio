// src/components/About.js
import '../../styles/General.css';
import '../../styles/About.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { IoOpenOutline } from "react-icons/io5";
import UnderstandingTypeScript from '../../images/certificates/Udemy_Certificate_Understanding_Typescript_Hvirfvel.jpg';
import UnitTesting from '../../images/certificates/Udemy_Certificate_Unit_Testing_TS_Node_Jest_Hvirfvel.jpg';

const Certificate = ({ aboutData, t }) => {
    return (
        <div className='certificate-container new-container'>
            <h2>Certificates<span className='colorfulend'>.</span></h2>
            <div className='certificate-item'>
                <img src={UnderstandingTypeScript} alt='Certificate' />
                <div className='certificate-info'>
                    <h4>Understanding TypeScript</h4>
                    <p>Udemy</p>
                    <Link to="https://www.udemy.com/certificate/UC-47f25b80-de5e-4d07-915d-285bb0976f9c/" target="_blank" rel="noopener noreferrer" title='Show certificate'>{aboutData.certificateLinkTitle} <IoOpenOutline /></Link>
                </div>
            </div>
            <div className='certificate-item'>
                <img src={UnitTesting} alt='Certificate' />
                <div className='certificate-info'>
                    <h4>Unit Testing for Typescript & NodeJS Developers with Jest</h4>
                    <p>Udemy</p>
                    <Link to="https://www.ude.my/UC-669a9159-05b3-4fa1-96d4-20518b6a4c79" target="_blank" rel="noopener noreferrer" title='Show certificate'>{aboutData.certificateLinkTitle} <IoOpenOutline /></Link>
                </div>
            </div>
        </div>
    );
};

export default Certificate;
