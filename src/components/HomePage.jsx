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

      {/* --- Intro --- */}
      <section className="intro" data-aos="fade-right">
        <img src="/images/Me.jpg" alt="Portrait" className="intro-img" />
        <div className="intro-text">
          <h2>Hello! I am</h2>
          <h1>Sandra Björklund</h1>
          <h2>Fullstack Developer</h2>
          <p>Student on Nackademin – passion for frontend & backend!</p>
          <Link to="/about" className="btn">More About Me</Link>
        </div>
      </section>

      {/* --- Skills Preview --- */}
      <section className="preview-section" data-aos="zoom-in">
        <h2>Technical Skills</h2>
        <div className="skills-preview">
          <div className="skill-box"><strong>Frontend</strong></div>
          <div className="skill-box"><strong>Backend</strong></div>
          <div className="skill-box"><strong>Database</strong></div>
          <div className="skill-box"><strong>Others</strong></div>
        </div>
        <Link to="/skills" className="btn">See All Skills</Link>
      </section>

      {/* --- Projects Preview --- */}
      <section className="preview-section" data-aos="fade-left">
        <h2>Featured Projects</h2>
        <div className="projects-preview">
          <img src="/images/CobraQuiz.png" alt="Quiz App" />
          <img src="/images/Tasko.png" alt="Tasko App" />
        </div>
        <Link to="/projects" className="btn">Explore More Projects</Link>
      </section>

      {/* --- Contact Preview --- */}
      <section className="preview-section contact-cta" data-aos="fade-up">
        <h2>Get In Touch</h2>
        <p>Let’s connect! Whether it’s for internships, freelance, or collaboration.</p>
        <Link to="/contact" className="btn">Contact Me</Link>
      </section>

    </div>
  );
}

export default HomePage;

