// src/components/Project.js
import '../styles/General.css';
import '../styles/Homepage.css';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import projectsData from '../translations/en/projectsDataEn';

function formatTitleForUrl(title) {
    return title.toLowerCase().replace(/ /g, '-').replace('å', 'a').replace('ä', 'a').replace('ö', 'o').replace(/[^a-z0-9-]/g, ''); // Konverterar till små bokstäver, ersätter mellanslag med bindestreck och tar bort specialtecken
}

const Homepage = () => {
    const { t } = useTranslation('generalData');

    return (
        <div className='container homepage-container'>
            <Helmet>
                <title>Jessica Hvirfvel - Projects</title>
            </Helmet>
            <div className='colorscheme'>
                <div className='hero-text-container'>
                    <h1 className='hero-text'>{t('heroText')}</h1>
                </div>
                <div className="project-list">
                    {projectsData.slice().reverse().map(project => (
                        <div key={project.id} className="project-item">
                            <Link to={`/portfolio/project/${formatTitleForUrl(project.title)}`} className="project-link">
                                <div className="thumbnail-container">
                                    <img src={project.thumbnail} alt={project.title} className="project-thumbnail" />
                                    <div className="overlay">
                                        <h3 className='overlay-title'>{project.title}</h3>
                                        <p className='overlay-date'>{project.date}</p>
                                        <p className='overlay-language'>
                                            {project.language.map((lang, index) => (
                                                <span key={index}>
                                                    {lang}
                                                    {index < project.language.length - 1 && (
                                                        <span> | </span>
                                                    )}
                                                </span>
                                            ))}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Homepage;
