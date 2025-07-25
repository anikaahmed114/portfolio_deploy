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
    
    return(
        <div className = "about-section">
        <div className="container" ref={containerRef}>
        <h1>about me</h1>
        <li>I am a senior at UNC Chapel Hill studying computer science and mathematics</li>
        <li>I have a strong background in software development, particularly in front-end work</li>
        <li>For fun, I love reading manga and watching anime</li>
        </div>
        <div className = "container" ref = {containerRef2}>
            <h1>skills
            </h1>
            <li>
              <b>Languages:</b> Java, JavaScript, Python, R, C, TypeScript, SQL, HTML, CSS</li>
            <li>
              <b>Developer Tools:</b> Git, Tableau, VS Code, Postman, Oracle</li>
            <li>
              <b>Frameworks/Libraries:</b> Pandas, MatPlotLib, NumPy, Angular, React</li>
            <a href="https://drive.google.com/file/d/1N3UStxU1HEiQWdrgS1w_OXf_F1dAml8n/view?usp=sharing" target="_blank" rel="noopener noreferrer">;
                    <button>my resume</button>
                </a>
        </div>
        </div>
    )
}
export default About;