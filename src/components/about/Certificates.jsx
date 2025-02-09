// src/components/About.js
import '../../styles/General.css';
import '../../styles/about/About.css';
import '../../styles/about/Certificates.css';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoOpenOutline } from "react-icons/io5";
import certificateData from '../../data/certificatesData';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Collapse } from 'react-collapse';


const Certificate = ({ aboutData }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleCollapse = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='certificate-container new-container'>
            <h2>Certificates<span className='colorfulend'>.</span></h2>
            {certificateData.map((certificate, index) => {
                const description = aboutData.certificate?.find((cert) => cert.id === certificate.id);
                const isOpen = openIndex === index;
                // <Link key={index} className='certificate-item' to={certificate.link} target="_blank" rel="noopener noreferrer" title={aboutData.certificateLinkTitle}>
                return (
                    <div key={index} className='certificate-item' onClick={() => toggleCollapse(index)} >
                        <div className='certificate-item-inner'>

                            <img src={certificate.image} alt='Certificate' loading="lazy" className='certificate-img' />
                            <div className='certificate-info'>
                                <h4>{certificate.title}</h4>
                                <h5>{certificate.provider}</h5>
                                <Link className='certificate-link-text' to={certificate.link} target="_blank" rel="noopener noreferrer" title={aboutData.certificateLinkTitle}> {aboutData.certificateLinkTitle} <IoOpenOutline /></Link>
                                {isOpen ? <IoIosArrowUp className='arrow-down' /> : <IoIosArrowDown className='arrow-down' />}
                            </div>
                        </div>
                        <Collapse isOpened={openIndex === index}>
                        
                            <p className='certificate-description' dangerouslySetInnerHTML={{ __html: description ? description.description : "" }} />
                        </Collapse>
                    </div>
                )
            })}
        </div>
    );
};

export default Certificate;
