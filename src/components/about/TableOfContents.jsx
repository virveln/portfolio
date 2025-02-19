import "../../styles/about/TableOfContents.css";
import { useEffect, useState, useRef } from "react";

const TableOfContents = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [progressHeight, setProgressHeight] = useState(0);
  const [isSticky, setIsSticky] = useState(false); 

  // When sticky effect should start 
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // const offsetTop = 320; 
      const offsetTop = 420; 

      if (scrollPosition >= offsetTop) {
        setIsSticky(true); 
      } else {
        setIsSticky(false); 
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); 
  }, []);
  // useEffect(() => {
  //   const tocElement = document.querySelector(".toc-container");
  //   if (!tocElement) return;
  
  //   const handleScroll = () => {
  //     const offsetTop = tocElement.parentElement.offsetTop;
  //     setIsSticky(window.scrollY >= offsetTop);
  //   };
  
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  

  // Go to clicked section 
  // const observerRef = useRef(null);
  useEffect(() => {
    // if (observerRef.current) {
    //   observerRef.current.disconnect();
    // }
    // observerRef.current = new IntersectionObserver(
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // Find the last intersecting section (closest to the top)
          const lastVisible = visibleEntries[visibleEntries.length - 1].target.id;
          setActiveSection(lastVisible);
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0.2 } 
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
      // if (element) observerRef.current.observe(element);
    });

    return () => observer.disconnect();
    // return () => observerRef.current.disconnect();
  }, [sections]);

const [barHeight, setBarHeight] = useState(0);

  // Calculate progress based on active section index
  useEffect(() => {
    const activeIndex = sections.findIndex((s) => s.id === activeSection);
    if(activeIndex === 0) setBarHeight(18);
    if(activeIndex === 1) setBarHeight(13);
    if(activeIndex === 2) setBarHeight(8);
    if(activeIndex === 3) setBarHeight(3);
    if(activeIndex === 4) setBarHeight(0);

    if (activeIndex !== -1) {
      const spacingFactor = 100 / (sections.length - 1);
      const progress = (activeIndex * spacingFactor);
      setProgressHeight(progress);
    }
    console.log(activeSection);
  }, [activeSection, sections]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -170; // Adjust this value to control the spacing
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    // document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
      <nav className={`toc-container  ${isSticky ? "sticky" : ""}`}>
        <div className="progress-bar">
          <div className="progress" style={{ height: `calc(${progressHeight}% + ${barHeight}px)` }}></div>
        </div>
        <ul className="toc-list">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <button
                className={`toc-item ${activeSection === id ? "active" : ""}`}
                onClick={() => scrollToSection(id)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
  );
};

export default TableOfContents;

