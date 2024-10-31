// src/components/ProjectDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/General.css';
import '../styles/ProjectDetail.css';
import projectsData from '../data/projectsData';
import ImageGallery from './ImageGallery';


const ProjectDetail = () => {
    const { projectId } = useParams();
    const project = projectsData.find(p => p.id === parseInt(projectId));

    return (
        <div className="colorscheme project-container contaner">
            {project ? (
                <>
                    <div className='project-info-container'>
                        <h1 className='project-title'>{project.title}</h1>
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
                            {project.link && <span className='language-divider'> | </span>}
                            {project.link && (
                                <a className='project-link' href={project.link} target="_blank" rel="noopener noreferrer">
                                    {project.link}
                                </a>
                            )}
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
                </>
            ) : (
                <p>Project not found</p>
            )}
        </div>
    );
};

export default ProjectDetail;
