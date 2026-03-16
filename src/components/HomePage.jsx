import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './HomePage.css';

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
          <h1>Sandra Bjorklund</h1>
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
          <img src="/images/CobraQuiz.png" alt="Cobra Quiz project" />
          <img src="/images/Tasko.png" alt="Tasko project" />
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
