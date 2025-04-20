/* ===== src/Day08App.jsx ===== */
import React, { useState } from 'react';
import './Day08App.css';
import ToggleCard from './ToggleCard';

const toggleItems = [
  {
    label: 'Classic Slide',
    type: 's1',
    content: 'This is the classic slide effect. Smooth and reliable.'
  },
  {
    label: 'Neon Glow',
    type: 's2',
    content: 'Feel the neon pulse, shining bright like a neon sign.'
  },
  {
    label: 'Skew Twist',
    type: 's3',
    content: 'Twist your perspective with this skewed toggle.'
  },
  {
    label: 'Emoji Spin',
    type: 's4',
    content: 'Spin into the emoji universe with a flip!'  
  },
  {
    label: 'Pulse Pop',
    type: 's5',
    content: 'Pop with a pulse animation, dynamic and fun.'
  },
  {
    label: 'Alien Beam',
    type: 's6',
    content: 'Beam me up, toggle me out – intergalactic vibes.'
  },
  {
    label: 'Swing Drop',
    type: 's7',
    content: 'Drop and swing – a playful motion toggle.'
  },
  {
    label: 'Water Wave',
    type: 's8',
    content: 'Ride the wave with this fluid movement.'
  },
  {
    label: 'Press Pop',
    type: 's9',
    content: 'Press to pop – watch it bounce outwards.'
  },
  {
    label: 'Fire Flicker',
    type: 's10',
    content: 'Flicker like fire – warm and energetic.'
  }
];

export default function Day08App() {
  const [states, setStates] = useState(toggleItems.map(() => false));

  const handleToggle = (index) => {
    const copy = [...states];
    copy[index] = !copy[index];
    setStates(copy);
  };

  return (
    <div className="day08-container">
      <h1>🧼 Day 8 – 10 Super Animated Toggles</h1>
      <div className="toggle-grid">
        {toggleItems.map((item, i) => (
          <ToggleCard
            key={i}
            label={item.label}
            type={item.type}
            isOn={states[i]}
            onToggle={() => handleToggle(i)}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
}
