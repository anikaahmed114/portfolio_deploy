import React, { useEffect, useRef, useState } from "react";
import './Contact.css'; 
import gitHubImage from './assets/logo.png';
import linkedinImage from './assets/linkedin.png';
import emailImage from './assets/email.png';
import Notification from './Notification'; 






export const Contact = () => {
  const contactRef = useRef(null);
  const [showNotification, setShowNotification] = useState(false);


  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('start-typewriter');
        }
        else{
            entry.target.classList.remove('start-typewriter')
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  const handleClick = () => {
    const text = "aahm@unc.edu";
    navigator.clipboard.writeText(text).then(() => {
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000); 
    });
  };

  return (
    <div className="contact">
      <h1 ref={contactRef}>contact me!</h1>
      <div className="pictures">
      <a href = "https://github.com/anikaahmed114"><img src = {gitHubImage} alt="github-icon"/></a>
      <a href = "https://www.linkedin.com/in/anika-ahmed-a9b256202/"><img src = {linkedinImage} alt="linkedin-icon" style= {{height: "50px", width: "55px"}}/></a>
      <button onClick = {handleClick} className = "button1"><img src = {emailImage} alt="email-icon"/></button>

      </div>
      <Notification message="Email address copied to clipboard!" show={showNotification} />

    </div>
  );
}

export default Contact;
