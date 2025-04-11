import React, { useState } from 'react';
import classNames from 'classnames';
import './Day02App.css';

const cards = [
  { id: 1, recipient: "Emma", message: "Happy Birthday!", emoji: "🎂" },
  { id: 2, recipient: "John", message: "Congratulations!", emoji: "🎉" },
  { id: 3, recipient: "Sarah", message: "Best Wishes!", emoji: "💐" },
  { id: 4, recipient: "Mike", message: "Happy Anniversary!", emoji: "💖" },
  { id: 5, recipient: "Lisa", message: "Get Well Soon!", emoji: "🌼" },
  { id: 6, recipient: "David", message: "Thank You!", emoji: "🙏" },
  { id: 7, recipient: "Anna", message: "Season's Greetings!", emoji: "❄️" },
  { id: 8, recipient: "Tom", message: "Good Luck!", emoji: "🍀" },
  { id: 9, recipient: "Lucy", message: "Happy New Year!", emoji: "🎆" },
  { id: 10, recipient: "James", message: "Welcome!", emoji: "👋" }
];

const Day02App = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
<<<<<<< HEAD
    <div className={classNames('app-container', { dark: darkMode, light: !darkMode })}>
      <div className="header">
        <h1 className="page-title">Greeting Cards Collection</h1>
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '🌞' : '🌙'}
        </button>
      </div>
      <div className="cards-grid">
        {cards.map(card => (
          <div key={card.id} className="greeting-card">
            <div className="card-inner">
              <div className="card-front">
                <div className="emoji">{card.emoji}</div>
                <h2>{card.message}</h2>
                <p>Dear {card.recipient},</p>
                <p>Wishing you a joyful day full of happiness.</p>
                <div className="signature">
                  <p>With love,</p>
                  <p>Your Friend</p>
                </div>
              </div>
              <div className="card-back">
                <div className="back-pattern">
                  <p>✨ Flip side magic ✨</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
=======
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Day 02 - React Task</h1>
      <div 
        style={{
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '16px',
          maxWidth: '300px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          marginTop: '20px'
        }}
      >
        <h2 style={{ margin: '0 0 10px' }}>Card Title</h2>
        <p style={{ margin: '0 0 10px', color: '#555' }}>
          This is a simple card component with some sample content.
        </p>
        <button 
          style={{
            padding: '8px 16px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Action
        </button>
      </div>
>>>>>>> fb2b82c9aa7e9225fa2d77f7d6a4cf2d31d72025
    </div>
  );
};

export default Day02App;