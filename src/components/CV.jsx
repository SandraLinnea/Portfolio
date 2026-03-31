import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './CV.css';

function CV({ copy }) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="cv-container" data-aos="fade-up">
      <h2>{copy.heading}</h2>
      <p>{copy.text}</p>

      <div className="cv-buttons">
        <a href="/Sandra-Bjorklund-CV.pdf"download className="btn">
          {copy.download}
        </a>

        <a href="/Sandra-Bjorklund-CV.pdf"target="_blank"rel="noopener noreferrer"className="btn btn-outline">
          {copy.view}
        </a>
      </div>
    </div>
  );
}

export default CV;
