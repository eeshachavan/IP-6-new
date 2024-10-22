// src/App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
   <section className="section welcome">
  <div className="welcome-overlay"></div> {/* Dark transparent overlay */}
  <h1 className="welcome-animation">Eesha Chavan</h1>
  <div className="welcome-text">
    <p className="typing-animation">developer</p> {/* Typing animation added */}
  </div>
</section>

      {/* About Section */}
      <section className="section about">
        <div className="about-box">
          <h2>About Me</h2>
          <p>
            Hello! My name is Eesha Chavan. I am currently a third-year student at Vivekanand Education Society's Institute of Technology,
            pursuing a degree in Information Technology. I am passionate about technology and programming, with
            a particular interest in web development and mobile app development.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section skills">
        <h2>Skills</h2>
        <div className="skills-container">
          <div className="skill-box">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML logo" className="skill-logo" />
            HTML
          </div>
          <div className="skill-box">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS logo" className="skill-logo" />
            CSS
          </div>
          <div className="skill-box">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript logo" className="skill-logo" />
            JavaScript
          </div>
          <div className="skill-box">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React logo" className="skill-logo" />
            React
          </div>
          <div className="skill-box">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter logo" className="skill-logo" />
            Flutter
          </div>
          <div className="skill-box">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL logo" className="skill-logo" />
            MySQL
          </div>
          <div className="skill-box">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java logo" className="skill-logo" />
            Java
          </div>
          <div className="skill-box">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C logo" className="skill-logo" />
            C
          </div>
          <div className="skill-box">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python logo" className="skill-logo" />
            Python
          </div>
          <div className="skill-box">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" alt="Dart logo" className="skill-logo" />
            Dart
          </div>
          <div className="skill-box">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git logo" className="skill-logo" />
            Git
          </div>
          <div className="skill-box">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" alt="Jenkins logo" className="skill-logo" />
            jenkins
          </div>
          <div className="skill-box">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="docker logo" className="skill-logo" />
            Docker
          </div>
        </div>
      </section>


      {/* Contact Section */}
<section className="section contact">
  <h2>Contact Me</h2>
  <form>
    <div className="form-group">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" placeholder="Your Name" required />
    </div>
    
    <div className="form-group">
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" placeholder="Your Email" required />
    </div>

    <div className="form-group">
  <label htmlFor="phone">Phone:</label>
  <input 
    type="tel" 
    id="phone" 
    name="phone" 
    placeholder="Your phone number" 
    pattern="[0-9]{10}" /* Ensures 10-digit numbers only */ 
    required 
  />
</div>
    
    <div className="form-group">
      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
    </div>
    
    <button type="submit">Send Message</button>
  </form>
</section>

    </div>
  );
}

export default App;
