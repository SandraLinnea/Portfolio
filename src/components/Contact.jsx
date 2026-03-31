import React, { useEffect } from "react";
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Contact.css';

function Contact({ copy }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const contactMethods = [
    {
      href: 'https://www.linkedin.com/in/sandra-bj%C3%B6rklund-0426b917b/',
      label: copy.labels.linkedin,
      value: 'linkedin.com/in/sandra-bjorklund-0426b917b',
      ariaLabel: copy.aria.linkedin,
      Icon: FaLinkedin,
    },
    {
      href: 'mailto:sandra.b93@hotmail.com',
      label: copy.labels.email,
      value: 'sandra.b93@hotmail.com',
      ariaLabel: copy.aria.email,
      Icon: FaEnvelope,
    },
    {
      href: 'tel:+46701234567',
      label: copy.labels.phone,
      value: '+46 70 123 45 67',
      ariaLabel: copy.aria.phone,
      Icon: FaPhone,
    },
  ];

  return (
    <div className="contact-container" data-aos="fade-up">
      <h2>{copy.heading}</h2>
      <p>{copy.intro}</p>

      <div className="contact-list">
        {contactMethods.map(({ href, label, value, ariaLabel, Icon }) => (
          <div key={label} className="contact-item">
            <a
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="contact-icon-link"
              aria-label={ariaLabel}
            >
              <Icon className="contact-icon" />
            </a>
            <div className="contact-details">
              <span className="contact-label">{label}</span>
              <span className="contact-value">{value}</span>
            </div>
          </div>
        ))}
      </div>

      <p>{copy.outro}</p>
    </div>
  );
}

export default Contact;
