// src/components/ProjectDetail.js
import '../styles/General.css';
import '../styles/ProjectDetail.css';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { TbReload } from "react-icons/tb";
import ImageGallery from './ImageGallery';
import projectsDataEn from '../translations/en/projectsDataEn';
import projectsDataSv from '../translations/sv/projectsDataSv';

function formatTitleForUrl(title) {
    return title.toLowerCase().replace(/ /g, '-').replace('å', 'a').replace('ä', 'a').replace('ö', 'o').replace(/[^a-z0-9-]/g, ''); // Konverterar till små bokstäver, ersätter mellanslag med bindestreck och tar bort specialtecken
}

const ProjectDetail = () => {
    const { t, i18n } = useTranslation('projectsData');
    const { projectTitle } = useParams();
    
    const [project, setProject] = useState(null);
    /*const project = projectsData.find(p => formatTitleForUrl(p.title) === projectTitle);*/

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
                            {project.github && <span className='language-divider'> | </span>}
                            {project.github && (
                                <a className='project-link' href={project.github} target="_blank" rel="noopener noreferrer" title={project.github}>
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
                <div className='project-not-found'>
                    <p>Project not found</p> 
                    <p>Try again later <TbReload /></p>
                </div>
            )}
        </div>
    );
};

export default ProjectDetail;
