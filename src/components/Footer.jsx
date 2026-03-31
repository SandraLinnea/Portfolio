import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const footerLinks = [
  {
    href: 'https://github.com/SandraLinnea',
    value: 'github.com/SandraLinnea',
    ariaKey: 'github',
    Icon: FaGithub,
  },
  {
    href: 'https://www.linkedin.com/in/sandra-bj%C3%B6rklund-0426b917b/',
    value: 'linkedin.com/in/sandra-bjorklund-0426b917b',
    ariaKey: 'linkedin',
    Icon: FaLinkedin,
  },
  {
    href: 'mailto:sandra.b93@hotmail.com',
    value: 'sandra.b93@hotmail.com',
    ariaKey: 'email',
    Icon: FaEnvelope,
  },
];

function Footer({ copy }) {
  return (
    <footer className="footer">
      {footerLinks.map(({ href, value, ariaKey, Icon }) => (
        <a
          key={value}
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="footer-link"
          aria-label={copy.aria[ariaKey]}
        >
          <span className="footer-tooltip" aria-hidden="true">{value}</span>
          <Icon className="footer-icon" />
        </a>
      ))}
    </footer>
  );
}

export default Footer;
