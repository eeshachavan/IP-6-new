// src/components/WelcomePage.js
import React from 'react';
import './WelcomePage.css'; // Import your custom CSS

function WelcomePage() {
  return (
    <div className="welcome-page">
      {/* Dark Transparent Overlay */}
      <div className="welcome-overlay"></div>

      {/* Centered Text */}
      <div className="welcome-text">
        <h1>Eesha Chavan</h1>
      </div>
    </div>
  );
}

export default WelcomePage;
