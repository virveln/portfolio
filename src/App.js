//npx create-react-app .
//npm install react-router-dom
//npm install react-icons
//npm run deploy *vilket betyder att sidan uppdateras till domänen*


import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Project from './components/Project';
import About from './components/About';
import ProjectDetail from './components/ProjectDetail';
import projectsData from './components/projectsData';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
      window.scrollTo(0, 0); // Rullar upp till toppen av sidan
  }, [pathname]); // Triggas vid varje ändring av pathname

  return null; // Returnerar inget då komponenten endast har en effekt
}

function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
