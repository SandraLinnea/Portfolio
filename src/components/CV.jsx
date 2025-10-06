import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './CV.css';

function CV() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="cv-container" data-aos="fade-up">
      <h2>Here you can find my CV</h2>
      <p>Don't hesitate to contact me if you'd like to know more!</p>

      <div className="cv-buttons">
        <a href="/Sandra-Bjorklund-CV.pdf"download className="btn">
          Download CV
        </a>

        <a href="/Sandra-Bjorklund-CV.pdf"target="_blank"rel="noopener noreferrer"className="btn btn-outline">
          View CV in Browser
        </a>
      </div>
    </div>
  );
}

export default CV;
