import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './TechnicalSkills.css';

function TechnicalSkills({ copy }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="skills-container" data-aos="zoom-out">
      <h2>{copy.heading}</h2>
      <div className="skills-row">
        <div>
          <h3>{copy.categories.frontend}</h3>
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
          <h3>{copy.categories.backend}</h3>
          <ul>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>C#</li>
            <li>.NET</li>
            <li>NodeJS</li>
            <li>Express</li>
            <li>.NET Microservices</li>
            <li>ASP.NET Core Web API</li>
          </ul>
        </div>
        <div>
          <h3>{copy.categories.database}</h3>
          <ul>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>MySQL</li>
            <li>SQL Server Management Studio</li>
          </ul>
        </div>
        <div>
          <h3>{copy.categories.tools}</h3>
          <ul>
            <li>Visual Studio Code</li>
            <li>Visual Studio</li>
            <li>GitHub</li>
            <li>Git</li>
            <li>Azure DevOps</li>
            <li>SonarQube</li>
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
