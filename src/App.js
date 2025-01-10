//npx create-react-app .
//npm install react-router-dom
//npm install react-icons
//npm install react-helmet - för att ändra title beroende på sida
//npm install react-typed - för att ha typing effekt
//npm install react-i18next i18next - för översättning
//npm install gh-pages --save-dev   = för github pages

//npm run deploy *vilket betyder att sidan uppdateras till domänen*


import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import About from './components/about/About';
import ProjectDetail from './components/ProjectDetail';
import Attributions from './components/Attributions';
import './i18n';

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
      <div className='outer-container'>
        <Navbar />
        <Routes>
          <Route path="/portfolio" element={<Homepage />} />
          <Route path="/portfolio/about" element={<About />} />
          <Route path="/portfolio/project/:projectTitle" element={<ProjectDetail />} />
          <Route path="portfolio/attributions" element={<Attributions />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
