import React from 'react';
import './UserCard.css';

const UserCard = ({ name, avatar, role, bio, email, phone, location, linkedin, twitter }) => {
  return (
    <div className="user-card tilt">
      <div className="glow-border" />
      <img src={avatar} alt={name} className="avatar" />
      <h2 className="name">{name}</h2>
      <p className="role">{role}</p>
      <p className="bio">{bio}</p>
      <div className="info">
        <p>📧 {email}</p>
        <p>📞 {phone}</p>
        <p>📍 {location}</p>
      </div>
      <div className="socials">
        <a href={linkedin} target="_blank" rel="noreferrer">🔗 LinkedIn</a>
        <a href={twitter} target="_blank" rel="noreferrer">📷 Social</a>
      </div>
    </div>
  );
};

export default UserCard;
