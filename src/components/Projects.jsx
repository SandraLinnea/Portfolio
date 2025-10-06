import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Projects.css';

const projects = [
  {
    image: "/images/Tasko.png",
    github: "https://github.com/SandraLinnea/Habit-Assistant-Application",
    demo: null,
    skills: ["React", "CSS"],
  },
  {
    image: "/images/Pokemon.png",
    github: "https://github.com/SandraLinnea/Pokemon",
    demo: null,
    skills: ["React", "JavaScript", "Pokémon API"],
  },
  {
    image: "/images/CobraQuiz.png",
    github: "https://github.com/SandraLinnea/Quiz",
    demo: null,
    skills: ["JavaScript", "HTML", "CSS"],
  },
  {
    image: "/images/HakimLivs.png",
    github: "https://github.com/SandraLinnea/fullstack-booking-backend",
    demo: "https://2405-g03-fe-v2.vercel.app/index.html",
    description: "Gjort backenddelen för detta projekt.",
    skills: ["Node.js", "Express", "MongoDB"],
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);

  return (
    <div className="projects-grid">
      {projects.map((project, index) => (
        <div className="project-card" key={index} data-aos="zoom-in">
          <img src={project.image} alt={project.name} className="project-img" />
          <h3>{project.name}</h3>
          <div className="project-buttons">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn">Demo</a>
            )}
            <div className="tooltip-wrapper">
              <button className="btn">Skills</button>
              <div className="tooltip">
                {project.skills.map((skill, i) => (
                  <div key={i} className="tooltip-skill">{skill}</div>
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
