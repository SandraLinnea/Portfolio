import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';

function About() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="about-container">
      <img
        src="/images/Me.jpg"
        alt="This is me"
        className="about-image"
        data-aos="fade-up"
      />
      <div className="about-text" data-aos="fade-right">
        <h2>Who am I?</h2>
        <p>
          I am currently studying Web Developer Fullstack Open Source at Nackademin and will graduate in May 2026.
          During my studies, I have built skills in both frontend and backend development, working with technologies such as
          HTML, CSS, JavaScript, React, TypeScript, C#, Node.js, PostgreSQL, MySQL, and MongoDB. I enjoy creating responsive,
          user-friendly web applications and combining technical problem-solving with clean, practical design. My goal is to
          continue growing as a developer through real projects, collaboration, and new challenges.
        </p>
      </div>
    </div>
  );
}

export default About;
