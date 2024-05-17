import React, { useEffect, useRef } from "react";
import './App.css'


export const About = () => {
    const containerRef = useRef(null);
    const containerRef2 = useRef(null);


    useEffect(() => {
        const observerCallback = (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('scrolled');
            } else {
              entry.target.classList.remove('scrolled');
            }
          });
        };
    
        const observer = new IntersectionObserver(observerCallback, {
          threshold: 0.1,  
        });
    
        if (containerRef.current) {
          observer.observe(containerRef.current);
        }
    
        if (containerRef2.current) {
          observer.observe(containerRef2.current);
        }
    
        return () => {
          if (containerRef.current) {
            observer.unobserve(containerRef.current);
          }
    
          if (containerRef2.current) {
            observer.unobserve(containerRef2.current);
          }
        };
      }, []);

      const openPDF = () => {
        window.open('https://drive.google.com/file/d/1N3UStxU1HEiQWdrgS1w_OXf_F1dAml8n/view?usp=sharing');
      }
    
    return(
        <div className = "about-section">
        <div className="container" ref={containerRef}>
        <h1>about me</h1>
        <li>I am a rising junior, pursuing my undergraduate degrees in computer science and mathematics</li>
        <li>I attend the University of North Carolina at Chapel Hill</li>
        <li>I'm currently interested in the applications of AI/ML in computer science</li>
        <li>For fun, I love reading manga and watching anime</li>
        </div>
        <div className = "container" ref = {containerRef2}>
            <h1>skills
            </h1>
            <li>Java, JavaScript, Python, R, C</li>
            <li>Git, Tableau</li>
            <li>Pandas, MatPlotLib</li>
            <button onClick={openPDF}>my resume</button>
        </div>
        </div>
    )
}
export default About;