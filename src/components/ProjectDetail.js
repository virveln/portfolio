// src/components/ProjectDetail.js
import '../styles/General.css';
import '../styles/ProjectDetail.css';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import projectsData from '../data/projectsData';
import ImageGallery from './ImageGallery';
import { useTranslation } from 'react-i18next';

import projectsDataEn from '../translations/en/projectsDataEn';
import projectsDataSv from '../translations/sv/projectsDataSv';

function formatTitleForUrl(title) {
    return title.toLowerCase().replace(/ /g, '-').replace('å', 'a').replace('ä', 'a').replace('ö', 'o').replace(/[^a-z0-9-]/g, ''); // Konverterar till små bokstäver, ersätter mellanslag med bindestreck och tar bort specialtecken
}

const ProjectDetail = () => {
    const { t, i18n } = useTranslation('projectsData');

    const { projectTitle } = useParams();
    /*
    const project = projectsData.find(p => formatTitleForUrl(p.title) === projectTitle);
*/
    const [project, setProject] = useState(null);

    useEffect(() => {
        // Bestäm datakälla beroende på valt språk
        const selectedData = i18n.language === 'sv' ? projectsDataSv : projectsDataEn;

        // Hitta projektet baserat på URL-parametern
        const foundProject = selectedData.find(
            (p) => formatTitleForUrl(p.title) === projectTitle
        );
        setProject(foundProject);
    }, [i18n.language, projectTitle]);



    return (
        <div className="colorscheme container ">
            <Helmet>
                <title>Jessica Hvirfvel - Project {project ? project.title : 'Not Found'}</title>
            </Helmet>
            {project ? (
                <div className="">
                    <div className='project-info-container'>
                        <h1 className='project-title'>{t(project.title)}<span className='colorfulend'>.</span></h1>
                        {/*<img src={project.thumbnail} alt={project.title} className="detail-image" />*/}
                        <p className='project-description' dangerouslySetInnerHTML={{ __html: project.description }} />
                        <p className='project-language'>
                            {project.language.map((lang, index) => (
                                <span key={index}>
                                    {lang}
                                    {index < project.language.length - 1 && (
                                        <span className='language-divider'>  |  </span>
                                    )}
                                </span>
                            ))}
                            {project.website && <span className='language-divider'> | </span>}
                            {project.website && (
                                <a className='project-link' href={project.website} target="_blank" rel="noopener noreferrer" title={project.website}>
                                    Visit Website
                                </a>
                            )}
                            {project.link && <span className='language-divider'> | </span>}
                            {project.link && (
                                <a className='project-link' href={project.link} target="_blank" rel="noopener noreferrer" title={project.link}>
                                    GitHub
                                </a>
                            )}
                            {project.reason && <span className='language-divider'> | </span>}
                            {project.reason && <span>{project.reason}</span>}
                        </p>
                    </div>
                    <ImageGallery project={project} />
                </div>
            ) : (
                <p>Project not found</p>
            )}
        </div>
    );
};

export default ProjectDetail;
