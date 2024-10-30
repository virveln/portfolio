//npx create-react-app .
//npm install react-router-dom
//npm install react-icons


import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Project from './components/Project';
import About from './components/About';
import ProjectDetail from './components/ProjectDetail';
import projectsData from './components/projectsData';

function App() {
  return (
    <Router>
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
