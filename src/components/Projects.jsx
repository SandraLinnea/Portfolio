import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Projects.css';

const Projects = ({ copy }) => {
  const projects = [
    {
      name: 'RainLens Weather App',
      image: '/RainLens.png',
      github: 'https://github.com/SandraLinnea/RainLens.WeatherApp.git',
      demo: 'https://rain-lens-weather-app.vercel.app/',
      skills: ['C#', 'Blazor', '.NET'],
    },
    {
      name: 'TuraPro',
      image: '/TuraPro.png',
      github: 'https://github.com/SandraLinnea/TuraPro.git',
      demo: 'https://tura-pro.vercel.app/',
      skills: ['C#', 'Blazor', '.NET'],
    },
    {
      name: 'Tasko',
      image: '/images/Tasko.png',
      github: 'https://github.com/SandraLinnea/Habit-Assistant-Application',
      demo: null,
      skills: ['React', 'CSS'],
    },
    {
      name: 'Pokemon',
      image: '/images/Pokemon.png',
      github: 'https://github.com/SandraLinnea/Pokemon',
      demo: null,
      skills: ['React', 'JavaScript', 'Pokemon API'],
    },
    {
      name: 'Cobra Quiz',
      image: '/images/CobraQuiz.png',
      github: 'https://github.com/SandraLinnea/Quiz',
      demo: null,
      skills: ['JavaScript', 'HTML', 'CSS'],
    },
    {
      name: 'Hakim Livs',
      image: '/images/HakimLivs.png',
      github: 'https://github.com/SandraLinnea/fullstack-booking-backend',
      demo: 'https://2405-g03-fe-v2.vercel.app/index.html',
      description: copy.hakimDescription,
      skills: ['Node.js', 'Express', 'MongoDB'],
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);

  return (
    <div className="projects-grid">
      {projects.map((project) => (
        <div className="project-card" key={project.name} data-aos="zoom-in">
          {project.image ? (
            <img src={project.image} alt={project.name} className="project-img" />
          ) : (
            <div className="project-img project-img-placeholder" aria-hidden="true">
              <span>{project.name}</span>
            </div>
          )}
          <h3>{project.name}</h3>
          {project.description && <p className="project-description">{project.description}</p>}
          <div className="project-buttons">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn">{copy.buttons.github}</a>
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn">{copy.buttons.demo}</a>
            )}
            <div className="tooltip-wrapper">
              <button type="button" className="btn">{copy.buttons.skills}</button>
              <div className="tooltip">
                {project.skills.map((skill) => (
                  <div key={skill} className="tooltip-skill">{skill}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
