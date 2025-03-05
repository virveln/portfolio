// src/components/About.js
import '../../styles/General.css';
import '../../styles/about/About.css';
import '../../styles/about/Certificates.css';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoOpenOutline } from "react-icons/io5";
import certificateData from '../../data/certificatesData';
import { IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";


const Certificate = ({ aboutData, t, sections }) => {
    const heading = sections.find(section => section.id === 'certificates');
    const [showAll, setShowAll] = useState(false);
    const itemsToShow = showAll ? certificateData : certificateData.slice(0, 2);
    const [isHovered, setIsHovered] = useState(false);
    const [openIndex, setOpenIndex] = useState(null);

    const toggleCollapse = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='certificate-container new-container'>
            <h2>{heading.label}<span className='colorfulend'>.</span></h2>
            {itemsToShow.map((certificate, index) => {
                const description = aboutData.certificate?.find((cert) => cert.id === certificate.id);
                const isOpen = openIndex === index;
                // <Link key={index} className='certificate-item' to={certificate.link} target="_blank" rel="noopener noreferrer" title={aboutData.certificateLinkTitle}>
                return (
                    <motion.button
                        key={index}
                        className='certificate-item'
                        onClick={() => toggleCollapse(index)}
                        initial={{ scale: 1, y: 0 }}
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    >
                        <div className='certificate-item-inner'>
                            <div className='certificate-img-container'>
                                <img src={certificate.image} alt='Certificate' loading="lazy" className='certificate-img' />
                            </div>
                            <div className='certificate-info'>
                                <h4>{certificate.title}</h4>
                                <h5>{certificate.provider}</h5>
                                <Link className='certificate-link-text' to={certificate.link} target="_blank" rel="noopener noreferrer" title={aboutData.certificateLinkTitle}> {aboutData.certificateLinkTitle} <IoOpenOutline /></Link>
                                {/* {isOpen ? <IoIosArrowUp className='arrow-down' /> : <IoIosArrowDown className='arrow-down' />} */}
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>

                                    <motion.div
                                        animate={{ rotate: isOpen ? -180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        style={{ display: "inline-block", transformOrigin: "center" }}
                                    >

                                        <IoIosArrowDown className="arrow-down" />

                                    </motion.div>
                                </div>
                            </div>
                        </div>
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    className="certificate-description-container"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                >
                                    <p
                                        className="certificate-description"
                                        dangerouslySetInnerHTML={{
                                            __html: description ? description.description : "",
                                        }}
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                )
            })}
            {!showAll && (
                <motion.button
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="btn btn-certificate show-all-btn btn-swipe-effect"
                    onClick={() => setShowAll(true)}>
                    {t('buttons.showMore')}
                    <motion.div
                        animate={{ y: isHovered ? -3 : 0 }}
                        transition={{ duration: 0.3, repeat: isHovered ? Infinity : '', repeatType: "reverse" }}
                        style={{ display: 'flex', alignItems: 'center' }}
                        onAnimationComplete={() => setIsHovered(false)} // Reset after animation
                    >
                        <IoIosArrowDown />
                    </motion.div>
                </motion.button>
            )}
        </div>
    );
};

export default Certificate;
