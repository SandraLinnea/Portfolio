import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from "./components/HomePage";
import Projects from './components/Projects';
import TechnicalSkills from './components/TechnicalSkills';
import About from './components/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import CV from './components/CV';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/technicalskills" element={<TechnicalSkills />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/CV" element={<CV />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;