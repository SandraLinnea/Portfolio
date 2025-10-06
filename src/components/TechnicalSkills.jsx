import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './TechnicalSkills.css';

function TechnicalSkills() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="skills-container" data-aos="zoom-out">
      <h2>TECHNICAL SKILLS</h2>
      <div className="skills-row">
        <div>
          <h3>Frontend</h3>
          <ul>
            <li>JavaScript</li>
            <li>React Vite</li>
            <li>React Router</li>
            <li>Blazor</li>
            <li>HTML5</li>
            <li>CSS</li>
            <li>NodeJS</li>
          </ul>
        </div>
        <div>
          <h3>Backend</h3>
          <ul>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>C#</li>
            <li>NodeJS</li>
            <li>Express</li>
            <li>Microtjänster i .NET</li>
            <li>ASP.NET Core Web API</li>
          </ul>
        </div>
        <div>
          <h3>Databas</h3>
          <ul>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>MySQL</li>
          </ul>
        </div>
        <div>
          <h3>Tools</h3>
          <ul>
            <li>Visual Studio Code</li>
            <li>Visual Studio</li>
            <li>Github</li>
            <li>Git</li>
            <li>Jira</li>
            <li>Confluence</li>
            <li>Trello</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TechnicalSkills;
