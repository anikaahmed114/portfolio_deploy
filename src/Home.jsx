import React, { useEffect, useRef } from 'react';
import './App.css';
import profileImage from './assets/BSA-51.png'

class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
    this.update = this.update.bind(this);
    this.isScrambling = true;
  }

  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.isScrambling = true; 
    this.update();
    return promise;
  }

  update() {
    if (this.isScrambling) {
      let output = '';
      let complete = 0;
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i];
        if (this.frame >= end) {
          complete++;
          output += to;
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar();
            this.queue[i].char = char;
          }
          output += `<span class="dud">${char}</span>`;
        } else {
          output += from;
        }
      }
      this.el.innerHTML = output;
      if (complete === this.queue.length) {
        this.resolve();
      } else {
        this.frameRequest = requestAnimationFrame(this.update);
        this.frame++;
      }
    }
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }

  stopScrambling() {
    this.isScrambling = false;
  }
}

export const Home = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const fx = new TextScramble(textRef.current);

    const runEffect = () => {
      fx.setText("hi! i'm anika").then(() => {
        setTimeout(() => {
          fx.stopScrambling();
        }, 2000); 
      });
    };

    runEffect();

    const intervalId = setInterval(runEffect, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
    <div className="nameContainer">
      <h1 ref={textRef}>hi! i'm anika</h1>
      <p>welcome to my personal website</p>
    </div>
    <div className = "profileContainer">
    <img src = {profileImage}alt = "profile"/>
    </div>
  </div>
  );
};

export default Home;
