// AllEventsDemo.jsx - A React component demonstrating various event handling and interactive features
import React, { useState, useEffect } from 'react';
import './Day05App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// LeftSection component - Demonstrates hover and click events with animations
function LeftSection() {
  const [clicks, setClicks] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [buttonRotation, setButtonRotation] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle click event for rotating button
  const handleClick = () => {
    setClicks(clicks + 1);
    setButtonRotation(buttonRotation + 360);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Handle mouse enter/leave events
  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <div className="left-section animate__animated animate__fadeIn">
      <div
        className={`hover-box floating-animation ${hovered ? "hovered scale-up" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transition: "all 0.3s ease-in-out",
          cursor: "pointer",
        }}
      >
        {hovered ? "😎 Hovering!" : "👀 Hover over me"}
      </div>

      <div className="floating-animation">
      <button
        onClick={handleClick}
        className={`btn pulse-animation ${isAnimating ? "click-effect" : ""}`}
        style={{
          transform: `rotate(${buttonRotation}deg)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        🖱 Click Me ({clicks})
      </button>
      </div>
      <div
        className={`hover-box floating-animation ${hovered ? "hovered scale-up" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transition: "all 0.3s ease-in-out",
          cursor: "pointer",
        }}
      >
        {hovered ? "😎 Hovering!" : "👀 Hover over me"}
      </div>
    </div>
  );

}

// MiddleSection component - Demonstrates keyboard events, scrolling, and theme switching
function MiddleSection() {
  const [key, setKey] = useState('');
  const [scrollMessage, setScrollMessage] = useState('Scroll me!');
  const [darkMode, setDarkMode] = useState(false);
  const [shake, setShake] = useState(false);

  // Handle keyboard events
  const handleKeyPress = (e) => {
    setKey(e.key);
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };
  
  // Add and remove keyboard event listener
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  // Handle scroll events
  const handleScroll = () => {
    setScrollMessage('You scrolled! 🌪');
    setTimeout(() => setScrollMessage('Scroll me!'), 2000);
  };
  
  // Toggle dark/light theme
  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={`middle-section animate__animated animate__slideInUp ${darkMode ? 'dark-mode' : ''}`}>
      <button onClick={toggleTheme} className="theme-btn rainbow-border">
        {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </button>

      <div className="keyboard-box glow-effect">
        <p>⌨️ Press any key:</p>
        <div className={`key-display ${shake ? 'shake-animation' : ''}`}>{key}</div>
      </div>

      <div className="scroll-box neon-border" onScroll={handleScroll}>
        <p className="bounce-animation">{scrollMessage}</p>
        <div className="scroll-content gradient-text">
          Scroll inside me to see the effect!
          {Array(20).fill('🌈').map((emoji, i) => (
            <div key={i} className="scroll-item">{emoji}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

// RightSection component - Demonstrates drag events and form handling
function RightSection() {
  const [dragged, setDragged] = useState(false);
  const [formInput, setFormInput] = useState('');
  const [submitted, setSubmitted] = useState('');
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Handle drag events
  const handleDragStart = () => setDragged(true);
  const handleDragEnd = () => setDragged(false);
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(formInput);
    setFormInput('');
  };

  return (
    <div className="right-section animate__animated animate__fadeInRight">
      <div
        className={`drag-box perspective-tilt ${dragged ? 'dragging wobble-animation' : ''}`}
        draggable
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        {dragged ? '🪄 Dragging!' : '🧲 Drag me'}
      </div>

      <form className="form glass-morphism" onSubmit={handleSubmit}>
        <input
          type="text"
          value={formInput}
          onChange={(e) => setFormInput(e.target.value)}
          placeholder="Type something..."
          className="form-input typing-animation"
        />
        <button type="submit" className="submit-btn shine-effect">Submit</button>
      </form>

      {submitted && (
        <p className="submitted-msg animate__animated animate__bounceIn">
          You typed: <strong className="highlight-text">{submitted}</strong>
        </p>
      )}
    </div>
  );
}

// Main component that handles routing and layout
function AllEventsDemo() {
  return (
    <Router>
      <div className="event-container backdrop-blur">
        <h1 className="title gradient-text animate__animated animate__fadeInDown">
          ⚛️ React Events Playground
        </h1>
        <nav className="glass-nav">
          <Link to="/left" className="nav-link hover-effect">Left Section</Link>
          <Link to="/middle" className="nav-link hover-effect">Middle Section</Link>
          <Link to="/right" className="nav-link hover-effect">Right Section</Link>
        </nav>

        <Routes>
          <Route path="/left" element={<LeftSection />} />
          <Route path="/middle" element={<MiddleSection />} />
          <Route path="/right" element={<RightSection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default AllEventsDemo;