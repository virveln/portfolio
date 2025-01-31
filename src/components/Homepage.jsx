import '../styles/General.css';
import '../styles/Homepage.css';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import projectsData from '../translations/en/projectsDataEn';
import { motion } from "framer-motion";

function formatTitleForUrl(title) {
    return title.toLowerCase().replace(/ /g, '-').replace('å', 'a').replace('ä', 'a').replace('ö', 'o').replace(/[^a-z0-9-]/g, ''); // Konverterar till små bokstäver, ersätter mellanslag med bindestreck och tar bort specialtecken
}

const Homepage = () => {
    const { t } = useTranslation('generalData');

    const navigate = useNavigate();
    const [zoomProject, setZoomProject] = useState(null);

    const handleProjectClick = (e, project) => {
        e.preventDefault(); // Förhindra direkt navigering
        setZoomProject(project.id); // Starta zoom-effekt
        
        setTimeout(() => {
            navigate(`/portfolio/project/${formatTitleForUrl(project.title)}`); // Navigera efter animationen
        }, 500); 
    };

    return (
        <div className='container homepage-container'>
            <Helmet>
                <title>Jessica Hvirfvel - Projects</title>
            </Helmet>
            <div className='colorscheme'>
                <div className='hero-text-container'>
                    {/* <h1 className='hero-text'>{t('heroText')}</h1> */}
                    <motion.h1
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="hero-text"
                    >
                        {t('heroText')}
                    </motion.h1>
                </div>
                <div className="project-list">
                    {projectsData
                        .filter(project => project.id !== 1 && project.id !== 2)
                        .slice()
                        .reverse()
                        .map(project => (
                            // <div key={project.id} className="project-item">
                            <div 
                                key={project.id} 
                                className={`project-item ${zoomProject === project.id ? "zooming" : ""}`}
                                onClick={(e) => handleProjectClick(e, project)}
                                role="link"
                            >
                                {/* <Link to={`/portfolio/project/${formatTitleForUrl(project.title)}`} className="project-link"> */}
                                    <div className="thumbnail-container">
                                        <img src={project.thumbnail} alt={project.title} className="project-thumbnail" />
                                        <div className="overlay">
                                            <h3 className='overlay-title'>{project.title}</h3>
                                            <p className='overlay-date'>{project.date}</p>
                                            <p className='overlay-techniques'>
                                                {project.techniques.map((lang, index) => (
                                                    <span key={index}>
                                                        {lang}
                                                        {index < project.techniques.length - 1 && (
                                                            <span> | </span>
                                                        )}
                                                    </span>
                                                ))}
                                            </p>
                                        </div>
                                    </div>
                                {/* </Link> */}
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Homepage;
