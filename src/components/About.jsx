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
          I am currently studying Web Developer Fullstack Open Source at Nackademin, and I will graduate in May 2026.
          During my studies, I have worked with technologies such as HTML, CSS, JavaScript, React, SQL, PostgreSQL, MySQL, 
          MongoDB, C#, TypeScript and Node.js. These experiences have provided me with a 
          strong understanding of both frontend and backend development, as well as the ability to build dynamic and 
          responsive web applications.
        </p>
      </div>
    </div>
  );
}

export default About;
