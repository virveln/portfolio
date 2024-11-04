// src/components/ProjectDetail.js
import '../styles/General.css';
import '../styles/ProjectDetail.css';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import projectsData from '../data/projectsData';
import ImageGallery from './ImageGallery';

function formatTitleForUrl(title) {
    return title.toLowerCase().replace(/ /g, '-').replace('å', 'a').replace('ä', 'a').replace('ö', 'o').replace(/[^a-z0-9-]/g, ''); // Konverterar till små bokstäver, ersätter mellanslag med bindestreck och tar bort specialtecken
  }
  
const ProjectDetail = () => {
const { projectTitle } = useParams();
const project = projectsData.find(p => formatTitleForUrl(p.title) === projectTitle);

    return (
        <div className="colorscheme container ">
            <Helmet>
                <title>Jessica Hvirfvel - Project {project ? project.title : 'Not Found'}</title>
            </Helmet>
            {project ? (
                <div className="">
                    <div className='project-info-container'>
                        <h1 className='project-title'>{project.title}<span className='colorfulend'>.</span></h1>
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
                    {/*}
                    <div className="image-gallery">
                        {project.images.map((image, index) => (
                            <div key={index} className="image-item">
                                <img src={image.url} alt={image.description} className="project-image" />
                                <p>{image.description}</p>
                            </div>
                        ))}
                    </div>
                    */}
                </div>
            ) : (
                <p>Project not found</p>
            )}
        </div>
    );
};

export default ProjectDetail;
