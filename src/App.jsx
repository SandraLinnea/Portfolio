import React, { useEffect } from 'react';
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

const pageTitles = {
  '/': 'Sandra portfolio | Home',
  '/projects': 'Sandra portfolio | Projects',
  '/technicalskills': 'Sandra portfolio | Technical Skills',
  '/about': 'Sandra portfolio | About',
  '/contact': 'Sandra portfolio | Contact',
  '/cv': 'Sandra portfolio | CV',
};

function AppLayout() {
  const location = useLocation();

  useEffect(() => {
    document.title = pageTitles[location.pathname] || 'Sandra portfolio';
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/technicalskills" element={<TechnicalSkills />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<CV />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
