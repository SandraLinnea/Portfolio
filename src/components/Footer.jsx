import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const footerLinks = [
  {
    href: 'https://github.com/SandraLinnea',
    value: 'github.com/SandraLinnea',
    ariaLabel: 'GitHub profile',
    Icon: FaGithub,
  },
  {
    href: 'https://www.linkedin.com/in/sandra-bj%C3%B6rklund-0426b917b/',
    value: 'linkedin.com/in/sandra-bjorklund-0426b917b',
    ariaLabel: 'LinkedIn profile',
    Icon: FaLinkedin,
  },
  {
    href: 'mailto:sandra.b93@hotmail.com',
    value: 'sandra.b93@hotmail.com',
    ariaLabel: 'Send email',
    Icon: FaEnvelope,
  },
];

function Footer() {
  return (
    <footer className="footer">
      {footerLinks.map(({ href, value, ariaLabel, Icon }) => (
        <a
          key={value}
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="footer-link"
          aria-label={ariaLabel}
        >
          <span className="footer-tooltip" aria-hidden="true">{value}</span>
          <Icon className="footer-icon" />
        </a>
      ))}
    </footer>
  );
}

export default Footer;
