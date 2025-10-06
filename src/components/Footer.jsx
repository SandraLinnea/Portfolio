import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <a href="https://github.com/SandraLinnea" target="_blank" rel="noopener noreferrer" className="icon-link">
        <FaGithub className="footer-icon" />
      </a>
      <a href="https://www.linkedin.com/in/sandra-bj%C3%B6rklund-0426b917b/" target="_blank" rel="noopener noreferrer" className="icon-link">
        <FaLinkedin className="footer-icon" />
      </a>
      <a href="mailto:sandra@hotmail.com" className="icon-link">
        <FaEnvelope className="footer-icon" />
      </a>
    </footer>
  );
}

export default Footer;
