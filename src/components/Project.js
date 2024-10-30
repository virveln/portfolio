// src/components/Project.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Project.css'; 
import '../styles/General.css';
import projectsData from './projectsData';


const Project = () => {
    return (
        <div className='colorscheme container'>
            <h1 className='welcome-text'>Hallå där, välkommen att ta en kik på några av mina projekt</h1>
            <div className="project-list">
                {projectsData.slice().reverse().map(project => (
                    <div key={project.id} className="project-item">
                        <Link to={`/project/${project.id}`} className="project-link">
                            <div className="thumbnail-container">
                                <img src={project.thumbnail} alt={project.title} className="project-thumbnail" />
                                <div className="overlay">
                                    <h3>{project.title}</h3>
                                    <p>{project.date}</p>
                                    <p>{project.s_description}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;
