// src/components/ProjectDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/General.css';
import '../styles/ProjectDetail.css';
import projectsData from './projectsData';


const ProjectDetail = () => {
    const { projectId } = useParams();
    const project = projectsData.find(p => p.id === parseInt(projectId));

    return (
        <div className="colorscheme project-detail">
            {project ? (
                <>
                    <h1 id='project-title'>{project.title}</h1>
                    <img src={project.thumbnail} alt={project.title} className="detail-image" />
                    <p dangerouslySetInnerHTML={{ __html: project.description }} />
                    <p>
                        {project.language.map((lang, index) => (
                            <span key={index}>
                                {lang}
                                {index < project.language.length - 1 && (
                                    <span className='language-divider'> | </span>
                                )}
                            </span>
                        ))}
                    </p>
                    <a id='project-link' href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a>
                    <div className="image-gallery">
                        {project.images.map((image, index) => (
                            <div key={index} className="image-item">
                                <img src={image.url} alt={image.description} className="project-image" />
                                <p>{image.description}</p>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <p>Project not found</p>
            )}
        </div>
    );
};

export default ProjectDetail;
