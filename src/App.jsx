import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import HomePage from "./components/HomePage";
import Projects from './components/Projects';
import TechnicalSkills from './components/TechnicalSkills';
import About from './components/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import CV from './components/CV';
import { translations } from './i18n';

function AppLayout({ language, setLanguage }) {
  const location = useLocation();
  const copy = translations[language];

  useEffect(() => {
    document.title = copy.meta.pageTitles[location.pathname] || 'Sandra portfolio';
  }, [copy.meta.pageTitles, location.pathname]);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((currentLanguage) => (currentLanguage === 'en' ? 'sv' : 'en'));
  };

  return (
    <>
      <a className="skip-link" href="#main-content">{copy.meta.skipLink}</a>
      <Navbar navCopy={copy.nav} onToggleLanguage={toggleLanguage} />
      <main id="main-content" tabIndex="-1">
        <Routes>
          <Route path="/" element={<HomePage copy={copy.home} />} />
          <Route path="/projects" element={<Projects copy={copy.projects} />} />
          <Route path="/technicalskills" element={<TechnicalSkills copy={copy.technicalSkills} />} />
          <Route path="/about" element={<About copy={copy.about} />} />
          <Route path="/contact" element={<Contact copy={copy.contact} />} />
          <Route path="/cv" element={<CV copy={copy.cv} />} />
        </Routes>
      </main>
      <Footer copy={copy.footer} />
    </>
  );
}

function App() {
  const [language, setLanguage] = useState(() => localStorage.getItem('portfolio-language') || 'en');

  useEffect(() => {
    localStorage.setItem('portfolio-language', language);
  }, [language]);

  return (
    <BrowserRouter>
      <AppLayout language={language} setLanguage={setLanguage} />
    </BrowserRouter>
  );
}

export default App;
