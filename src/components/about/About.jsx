// src/components/About.js
import '../../styles/General.css';
import '../../styles/about/About.css';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
// import * as motion from "motion/react-client"

import Hero from './Hero';
import Introduction from './Introduction';
import FunFacts from './FunFacts';
import CurrentlyDoing from './CurrentlyDoing';
import TechnicalExperiences from './TechnicalExperiences';
import TechIcons from './TechIcons';
import Certificates from './Certificates';
import TableOfContents from './TableOfContents';

const sections = [
    { id: "introduction", label: "who am i" },
    { id: "fun-facts", label: "fun facts about me" },
    { id: "currently-doing", label: "currently doing" },
    { id: "technical-experiences", label: "technical experiences" },
    { id: "certificates", label: "certificates" },
];

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
    const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" }

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
                    <aside className='about-aside'>
                        <TableOfContents sections={sections} />
                    </aside>
                    <div>
                        <section id='introduction'>
                            <Introduction aboutData={aboutData} t={t} sections={sections} />
                        </section>
                        <section id='fun-facts'>
                            <FunFacts aboutData={aboutData} sections={sections} />
                        </section>
                        <section id='currently-doing'>
                            <CurrentlyDoing aboutData={aboutData} />
                        </section>
                        <section id='technical-experiences'>
                            <TechnicalExperiences aboutData={aboutData} t={t} sections={sections} />
                        </section>
                        <TechIcons />
                        <section id='certificates'>
                            <Certificates aboutData={aboutData} t={t} sections={sections} />
                        </section>
                        {/* <section>
                            <div style={{ position: "relative" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="451" height="437">
                                    <motion.path
                                        d="M 239 17 C 142 17 48.5 103 48.5 213.5 C 48.5 324 126 408 244 408 C 362 408 412 319 412 213.5 C 412 108 334 68.5 244 68.5 C 154 68.5 102.68 135.079 99 213.5 C 95.32 291.921 157 350 231 345.5 C 305 341 357.5 290 357.5 219.5 C 357.5 149 314 121 244 121 C 174 121 151.5 167 151.5 213.5 C 151.5 260 176 286.5 224.5 286.5 C 273 286.5 296.5 253 296.5 218.5 C 296.5 184 270 177 244 177 C 218 177 197 198 197 218.5 C 197 239 206 250.5 225.5 250.5 C 245 250.5 253 242 253 218.5"
                                        fill="transparent"
                                        strokeWidth="12"
                                        stroke="var(--hue-6-transparent)"
                                        strokeLinecap="round"
                                        initial={{ pathLength: 0.001 }}
                                        animate={{ pathLength: 1 }}
                                        transition={transition}
                                    />
                                </svg>
                                <motion.div
                                    style={
                                        {
                                            width: 50,
                                            height: 50,
                                            backgroundColor: "#4ff0b7",
                                            borderRadius: 10,
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            offsetPath: `path("M 239 17 C 142 17 48.5 103 48.5 213.5 C 48.5 324 126 408 244 408 C 362 408 412 319 412 213.5 C 412 108 334 68.5 244 68.5 C 154 68.5 102.68 135.079 99 213.5 C 95.32 291.921 157 350 231 345.5 C 305 341 357.5 290 357.5 219.5 C 357.5 149 314 121 244 121 C 174 121 151.5 167 151.5 213.5 C 151.5 260 176 286.5 224.5 286.5 C 273 286.5 296.5 253 296.5 218.5 C 296.5 184 270 177 244 177 C 218 177 197 198 197 218.5 C 197 239 206 250.5 225.5 250.5 C 245 250.5 253 242 253 218.5")`,
                                        }}
                                    initial={{ offsetDistance: "0%", scale: 2.5 }}
                                    animate={{ offsetDistance: "100%", scale: 1 }}
                                    transition={transition}
                                />
                            </div>
                        </section> */}
                    </div>
                </div>
            </div>
            {/* </div> */}
        </motion.div>
    );
};

export default About;
