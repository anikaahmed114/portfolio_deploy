import React, { useEffect, useRef } from "react";
import './Projects.css';
import projectImage from './assets/taskmaster.png';
import { FiExternalLink } from "react-icons/fi";


export const Projects = () => {
  const projectsRef = useRef(null);
  const projectContainerRef = useRef(null);

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scrolled');
          if (projectContainerRef.current) {
            projectContainerRef.current.classList.add('reveal');
          }
        } else {
          entry.target.classList.remove('scrolled');
          if (projectContainerRef.current) {
            projectContainerRef.current.classList.remove('reveal');
            void projectContainerRef.current.offsetWidth;
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.3, 
    });

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <div className="projects">
      <div className="project-container" ref={projectContainerRef}>
        <h1>projects!</h1>
      </div>
      <div className="project-list" ref={projectsRef}>
        <h2>taskmaster</h2>
        <div className="project-picture">
          <img src={projectImage} alt="taskmaster"/>
          <a href="https://github.com/anikaahmed114/comp426-taskmaster" className="project-link" target="_blank" rel="noopener noreferrer">
            view repository
            <FiExternalLink />
          </a>

        </div>
        <p>Full stack task manager application. Used Firebase for authentication, React for frontend, MongoDB for database management</p>
      </div>
    </div>
  );
}

export default Projects;
