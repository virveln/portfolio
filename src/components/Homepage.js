// src/components/Project.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/General.css';
import '../styles/Homepage.css';
import projectsData from '../data/projectsData';


const Project = () => {
    return (
        <div className='container'>
            <div className='colorscheme '>
                <h1 className='hero-text'>Hallå där, välkommen att ta en kik på några av mina projekt</h1>
                <div className="project-list">
                    {projectsData.slice().reverse().map(project => (
                        <div key={project.id} className="project-item">
                            <Link to={`/portfolio/project/${project.id}`} className="project-link">
                                <div className="thumbnail-container">
                                    <img src={project.thumbnail} alt={project.title} className="project-thumbnail" />
                                    <div className="overlay">
                                        <h3>{project.title}</h3>
                                        <p>{project.date}</p>
                                        <p>
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

export default Project;
