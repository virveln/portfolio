import React, { useState, useEffect } from 'react';
import '../../styles/about/TableOfContents.css';

const TableOfContents = ({ sections }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const currentPosition = window.scrollY;
    setScrollPosition((currentPosition / totalHeight) * 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="toc-container">
      <div className="progress-bar" style={{ height: `${scrollPosition}%` }}></div>
      <ul className="toc-list">
        {sections.map((section, index) => (
          <li key={index}>
            <a href={`#${section.id}`}>{section.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;
