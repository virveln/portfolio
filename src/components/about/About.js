// src/components/About.js
import '../../styles/General.css';
import '../../styles/About.css';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import Hero from './Hero';
import Introduction from './Introduction';
import FunFacts from './FunFacts';
import CurrentlyDoing from './CurrentlyDoing';
import TechnicalExperiences from './TechnicalExperiences';
import Certificates from './Certificates';

const About = () => {
    const { t, i18n } = useTranslation('generalData');
    const [aboutData, setAboutData] = useState(null);

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
        <div className='about-outer-container'>
            <Helmet>
                <title>Jessica Hvirfvel - About</title>
            </Helmet>
            <div className="">
                <Hero />
                <div className='container about-container'>
                    <Introduction aboutData={aboutData} t={t} />
                    <FunFacts aboutData={aboutData} />
                    <CurrentlyDoing aboutData={aboutData} />
                    <TechnicalExperiences aboutData={aboutData} t={t} />
                    <Certificates aboutData={aboutData} />
                </div>
            </div>
        </div>
    );
};

export default About;
