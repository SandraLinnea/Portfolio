import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './HomePage.css';

const featuredProjects = [
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
];

function HomePage({ copy }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);

  return (
    <div className="homepage">
      <section className="intro" data-aos="fade-right">
        <img src="/images/Me.jpg" alt={copy.portraitAlt} className="intro-img" />
        <div className="intro-text">
          <h2>{copy.greeting}</h2>
          <div className="intro-name">
            <h1>Sandra Bjorklund</h1>
            <img src="/SBLogoWhiteTransparent.png" alt={copy.logoAlt} className="intro-logo" />
          </div>
          <h2>{copy.title}</h2>
          <p>{copy.intro}</p>
          <Link to="/about" className="btn">{copy.aboutButton}</Link>
        </div>
      </section>

      <section className="preview-section" data-aos="zoom-in">
        <h2>{copy.skillsHeading}</h2>
        <div className="skills-preview">
          {copy.skillsPreview.map((skill) => (
            <div className="skill-box" key={skill}><strong>{skill}</strong></div>
          ))}
        </div>
        <Link to="/technicalskills" className="btn">{copy.skillsButton}</Link>
      </section>

      <section className="preview-section" data-aos="fade-left">
        <h2>{copy.featuredHeading}</h2>
        <div className="projects-preview">
          {featuredProjects.map((project) => (
            <article className="featured-project-card" key={project.name}>
              <img src={project.image} alt={project.name} className="featured-project-visual" />
              <div className="featured-project-content">
                <h3>{project.name}</h3>
                <div className="featured-project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn">{copy.projectButtons.github}</a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn">{copy.projectButtons.demo}</a>
                  <div className="tooltip-wrapper">
                    <button type="button" className="btn">{copy.projectButtons.skills}</button>
                    <div className="tooltip">
                      {project.skills.map((skill) => (
                        <div key={skill} className="tooltip-skill">{skill}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <Link to="/projects" className="btn">{copy.projectsButton}</Link>
      </section>

      <section className="preview-section contact-cta" data-aos="fade-up">
        <h2>{copy.contactHeading}</h2>
        <p>{copy.contactText}</p>
        <Link to="/contact" className="btn">{copy.contactButton}</Link>
      </section>
    </div>
  );
}

export default HomePage;
