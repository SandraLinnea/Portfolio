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

function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);

  return (
    <div className="homepage">
      <section className="intro" data-aos="fade-right">
        <img src="/images/Me.jpg" alt="Portrait of Sandra Bjorklund" className="intro-img" />
        <div className="intro-text">
          <h2>Hello! I am</h2>
          <div className="intro-name">
            <h1>Sandra Bjorklund</h1>
            <img src="/SBLogoWhite.png" alt="SB logo" className="intro-logo" />
          </div>
          <h2>Fullstack Developer</h2>
          <p>I am a fullstack developer student at Nackademin with a strong interest in building modern web applications, from polished user interfaces to reliable backend solutions.</p>
          <Link to="/about" className="btn">More About Me</Link>
        </div>
      </section>

      <section className="preview-section" data-aos="zoom-in">
        <h2>Technical Skills</h2>
        <div className="skills-preview">
          <div className="skill-box"><strong>Frontend</strong></div>
          <div className="skill-box"><strong>Backend</strong></div>
          <div className="skill-box"><strong>Database</strong></div>
          <div className="skill-box"><strong>Others</strong></div>
        </div>
        <Link to="/technicalskills" className="btn">See All Skills</Link>
      </section>

      <section className="preview-section" data-aos="fade-left">
        <h2>Featured Projects</h2>
        <div className="projects-preview">
          {featuredProjects.map((project) => (
            <article className="featured-project-card" key={project.name}>
              <img src={project.image} alt={project.name} className="featured-project-visual" />
              <div className="featured-project-content">
                <h3>{project.name}</h3>
                <div className="featured-project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn">Demo</a>
                  <div className="tooltip-wrapper">
                    <button type="button" className="btn">Skills</button>
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
        <Link to="/projects" className="btn">Explore More Projects</Link>
      </section>

      <section className="preview-section contact-cta" data-aos="fade-up">
        <h2>Get In Touch</h2>
        <p>Let&apos;s connect, whether it&apos;s for internships, freelance work, or collaboration.</p>
        <Link to="/contact" className="btn">Contact Me</Link>
      </section>
    </div>
  );
}

export default HomePage;
