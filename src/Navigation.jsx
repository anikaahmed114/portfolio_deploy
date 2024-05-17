import React, { useEffect, useState } from 'react';
import './Navigation.css';

export const Navigation = ({ scrollToSection, refs }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMouseNearTop, setIsMouseNearTop] = useState(false);
  let lastScrollTop = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset;
      if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollTop = currentScrollTop;
    };

    const handleMouseMove = (event) => {
      if (event.clientY < 60) {
        setIsMouseNearTop(true);
      } else {
        setIsMouseNearTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <nav className={`navbar ${(isVisible || isMouseNearTop) ? 'visible' : 'hidden'}`}>
      <ul>
        <li onClick={() => scrollToSection(refs.aboutRef)}>about me</li>
        <li onClick={() => scrollToSection(refs.projectsRef)}>projects</li>
        <li onClick={() => scrollToSection(refs.contactRef)}>contact me</li>
      </ul>
    </nav>
  );
};

export default Navigation;
