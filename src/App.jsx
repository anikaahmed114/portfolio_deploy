import React, { useEffect, useRef } from 'react';
import { About } from './About.jsx';
import { Home } from './Home.jsx'
import { Projects } from './Projects.jsx'
import { Contact } from './Contact.jsx'
import { Navigation } from './Navigation.jsx';

import './App.css'

function App(){
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

 
return(
  <div>
  <Navigation scrollToSection={scrollToSection} refs={{ homeRef, aboutRef, projectsRef, contactRef }} />
  <div ref={homeRef}><Home /></div>
  <div ref={aboutRef}><About /></div>
  <div ref={projectsRef}><Projects /></div>
  <div ref={contactRef}><Contact /></div>
</div>
  
)
}
export default App;