// Day06App.jsx
import React, { useState, useEffect } from 'react';
import './Day06App.css';

const Day06App = () => {
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [inputCaptcha, setInputCaptcha] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Generate Captcha
  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let newCaptcha = '';
    for (let i = 0; i < 6; i++) {
      newCaptcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(newCaptcha);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() === '' || role.trim() === '' || inputCaptcha.trim() === '') {
      alert('Please fill all fields!');
      return;
    }
    if (inputCaptcha !== captcha) {
      alert('Captcha does not match!');
      generateCaptcha();
      return;
    }
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setRole('');
    setInputCaptcha('');
    generateCaptcha();
  };

  return (
    <div className="container">
      {!isLoggedIn ? (
        <>
          <h2 className="title">🌟 Welcome Back!</h2>
          <p className="greeting-text">Please login to continue</p>
          <p className="optional">(All fields are mandatory)</p>
          <form className="login-form" onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Enter your name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter your role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />

            <div className="captcha-container">
              <span className="captcha-text">{captcha}</span>
              <button
                type="button"
                className="refresh-btn"
                onClick={generateCaptcha}
                title="Refresh Captcha"
              >
                🔁
              </button>
            </div>

            <input
              type="text"
              placeholder="Enter captcha"
              value={inputCaptcha}
              onChange={(e) => setInputCaptcha(e.target.value)}
            />

            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </>
      ) : (
        <>
          <h2 className="title">🎉 Hello, {username}!</h2>
          <p className="role-view">You are logged in as <strong>{role}</strong>.</p>

          <div className="user-profile">
            <h3>👤 User Profile</h3>
            <p><strong>Name:</strong> {username}</p>
            <p><strong>Role:</strong> {role}</p>
            <p><strong>Status:</strong> Active</p>
          </div>

          <div className="buttons">
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Day06App;
