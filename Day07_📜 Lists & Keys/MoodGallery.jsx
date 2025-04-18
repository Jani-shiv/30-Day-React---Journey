import React from "react";

const moods = [
  "🧠 Smart Loops",
  "🎤 Shayari Mode",
  "💩 Poop Humor",
  "🙈 Monkey Dev",
  "⚛️ React Lover"
];

export default function MoodGallery() {
  return (
    <div className="mood-gallery">
      <h2>map() Mood Gallery</h2>
      {moods.map((mood, index) => (
        <p key={index}>{mood}</p>
      ))}
    </div>
  );
}