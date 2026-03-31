import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';

function About({ copy }) {
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
        alt={copy.imageAlt}
        className="about-image"
        data-aos="fade-up"
      />
      <div className="about-text" data-aos="fade-right">
        <h2>{copy.heading}</h2>
        <p>{copy.body}</p>
      </div>
    </div>
  );
}

export default About;
