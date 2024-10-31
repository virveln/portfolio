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
import Homepage from './components/Homepage';
import About from './components/About';
import ProjectDetail from './components/ProjectDetail';
import Attributions from './components/Attributions';

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
        <Route path="/portfolio" element={<Homepage />} />
        <Route path="/portfolio/about" element={<About />} />
        <Route path="/portfolio/project/:projectId" element={<ProjectDetail />} />
        <Route path="portfolio/attributions" element={<Attributions />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
