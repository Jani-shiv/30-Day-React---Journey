import React from 'react';
import './Day08App.css';

export default function ToggleCard({ label, type, isOn, onToggle, content }) {
  return (
    <div className="toggle-card">
      <span className="toggle-label">{label}</span>
      <div className={`toggle ${type} ${isOn ? 'on' : ''}`} onClick={onToggle}>
        <div className="knob" />
      </div>
      {isOn && <p className="toggle-content">{content}</p>}
    </div>
  );
}
