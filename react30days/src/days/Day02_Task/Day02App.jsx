import React from 'react';

const Day02App = () => {
  return (
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
    </div>
  );
};

export default Day02App;