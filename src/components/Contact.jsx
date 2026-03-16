import React, { useEffect } from "react";
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Contact.css';

const contactMethods = [
  {
    href: 'https://www.linkedin.com/in/sandra-bj%C3%B6rklund-0426b917b/',
    label: 'LinkedIn',
    value: 'linkedin.com/in/sandra-bjorklund-0426b917b',
    ariaLabel: 'LinkedIn profile',
    Icon: FaLinkedin,
  },
  {
    href: 'mailto:sandra.b93@hotmail.com',
    label: 'Email',
    value: 'sandra.b93@hotmail.com',
    ariaLabel: 'Send email',
    Icon: FaEnvelope,
  },
  {
    href: 'tel:+46701234567',
    label: 'Phone',
    value: '+46 70 123 45 67',
    ariaLabel: 'Call by phone',
    Icon: FaPhone,
  },
];

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
      <p>You can contact me in different ways using email, LinkedIn or phone.</p>

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

      <p>Let&apos;s connect, whether it&apos;s for internships, freelance work, or collaboration.</p>
    </div>
  );
}

export default Contact;
