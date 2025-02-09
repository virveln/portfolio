// src/components/About.js
import '../../styles/General.css';
import '../../styles/about/About.css';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

import Hero from './Hero';
import Introduction from './Introduction';
import FunFacts from './FunFacts';
import CurrentlyDoing from './CurrentlyDoing';
import TechnicalExperiences from './TechnicalExperiences';
import TechIcons from './TechIcons';
import Certificates from './Certificates';
// import TableOfContents from './TableOfContents';

const About = () => {
    const { t, i18n } = useTranslation('generalData');
    const [aboutData, setAboutData] = useState(null);

    // const sections = [
    //     { id: 'section-1', title: 'who am i' },
    //     { id: 'section-2', title: 'fun facts about me' },
    //     { id: 'section-3', title: 'technical experiences' },
    //     { id: 'section-4', title: 'certificates' },
    // ];

    useEffect(() => {
        const loadAboutData = async () => {
            const lang = i18n.language === 'sv' ? 'sv' : 'en'; // Hämta aktuell språk-kod
            const data = await import(`../../translations/${lang}/aboutData${lang === 'sv' ? 'Sv' : 'En'}.json`);
            setAboutData(data.default);
        };
        loadAboutData();
    }, [i18n.language]);

    if (!aboutData) {
        return <p>Loading...</p>; // Visa en laddningsindikator om datan inte är hämtad ännu
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.3 }}
            className='about-outer-container'
        >
            {/* <div className='about-outer-container'> */}
            <Helmet>
                <title>Jessica Hvirfvel - About</title>
            </Helmet>
            <div className="">
                <Hero />

                <div className='container about-container'>
                    {/* <TableOfContents sections={sections} /> */}
                    <Introduction aboutData={aboutData} t={t} />
                    <FunFacts aboutData={aboutData} />
                    <CurrentlyDoing aboutData={aboutData} />
                    <TechnicalExperiences aboutData={aboutData} t={t} />
                    <TechIcons />
                    <Certificates aboutData={aboutData} />
                </div>
            </div>
            {/* </div> */}
        </motion.div>
    );
};

export default About;
