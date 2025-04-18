import React from "react";
import Hero from "./Hero";
import CodePlayground from "./CodePlayground";
import MoodGallery from "./MoodGallery";
import ThemeToggle from "./ThemeToggle";
import "./index.css";

export default function Day07App() {
  return (
    <div>
      <ThemeToggle />
      <Hero />
      <CodePlayground />
      <MoodGallery />
      <footer className="footer">
        ⚛️ Powered by map() and chai ☕
      </footer>
    </div>
  );
}
