import React, { useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Contact.css';

function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="contact-container" data-aos="fade-up">
      <h2>Contact me</h2>
      <p>You can contact me in different ways using email, LinkedIn or phone!</p>

      <div className="icon-links">
        <a href="https://www.linkedin.com/in/sandra-bj%C3%B6rklund-0426b917b/" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FaLinkedin className="contact-icon" />
        </a>
        <a href="mailto:sandra.b93@hotmail.com" className="icon-link">
          <FaEnvelope className="contact-icon" />
        </a>
        <a href="tel:+46701234567" className="icon-link">
          <FaPhone className="contact-icon" />
        </a>
      </div>

      <p>Let’s connect! Whether it’s for internships, freelance, or collaboration.</p>
    </div>
  );
}

export default Contact;
