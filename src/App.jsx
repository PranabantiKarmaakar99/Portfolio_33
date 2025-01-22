import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';  // Adjusted based on the name
import Skills from './components/Skills';
import Contact from './components/Contact';
import ProjectPage from './components/ProjectPage';

const App = () => {
  return (
      <Router>
      <Navbar />   {/* Navbar is outside of Routes */}
      <Hero />     {/* Hero section is outside of Routes */}
      <About />
      <Projects />    {/* About section is outside of Routes */}
      <Skills />   {/* Skills section is outside of Routes */}
      <Contact />  {/* Contact section is outside of Routes */}
      

      {/* Routes should wrap only the page content */}
      <Routes>
        <Route path="/projects" element={<Projects />} />  {/* Projects listing page */}
        <Route path="/projects/:id" element={<ProjectPage />} />  {/* Dynamic project details page */}
        <Route path="/about" element={<About />} />  {/* About section route */}
      </Routes>
    </Router>
    
  );
};

export default App;
