import React from 'react';
import './Day01App.css'; // Importing CSS for styling

const Day01App = () => {
  return (
    <main className="day01-wrapper">
      <section className="intro-section">
        <h1 className="main-title">🚀 Day 01 — Hello World</h1>
        <p className="subtitle">Let’s begin our 30-Day React.js Journey!</p>
      </section>

      <section className="hello-section">
        <h2 className="hello-title">👋 Hello, React World!</h2>
        <p className="hello-description">This is my first ever component in React. Super excited for what’s coming next!</p>
      </section>

      <section className="checklist-section">
        <h3 className="checklist-header">🛠️ Setup Checklist</h3>
        <ul className="checklist-list">
          <li>✅ Node.js Installed</li>
          <li>✅ VS Code Ready</li>
          <li>✅ Vite Project Bootstrapped</li>
          <li>✅ Hello World Component Running</li>
        </ul>
      </section>

      <section className="progress-section">
        <p className="progress-text">Embarking on the 30-Day React Adventure!</p>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: '3.33%' }}></div>
        </div>
        <span className="progress-day">📅 Day 1 of 30</span>
      </section>
    </main>
  );
};

export default Day01App;
