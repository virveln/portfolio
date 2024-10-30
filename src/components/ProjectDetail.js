// src/components/ProjectDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ProjectDetail.css';
import '../styles/General.css';
import projectsData from './projectsData';


const ProjectDetail = () => {
    const { projectId } = useParams();
    const project = projectsData.find(p => p.id === parseInt(projectId));

    return (
        <div className="colorscheme project-detail">
            {project ? (
                <>
                    <h1>{project.title}</h1>
                    <img src={project.thumbnail} alt={project.title} className="detail-image" />
                    <p dangerouslySetInnerHTML={{ __html: project.description }} />
                    <h2>Language: {project.language}</h2>
                    <p>Date: {project.date}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
                    <h3>Images</h3>
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
