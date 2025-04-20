import React, { useEffect, useState } from "react";
import "./Day09App.css";
import QuoteBox from "./components/QuoteBox";
import Loader from "./components/Loader";
import Error from "./components/Error";
import { motion } from "framer-motion";

const Day09App = () => {
  const [quote, setQuote] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [theme, setTheme] = useState("light");

  const fetchQuote = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch("https://api.kanye.rest/");
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      setQuote(data.quote);
    } catch (err) {
      setError("⚠️ Failed to fetch. Showing fallback quote.");
      setQuote("Believe in your flyness, conquer your shyness.");
    }
    setIsLoading(false);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.className = newTheme;
  };

  useEffect(() => {
    fetchQuote();
    document.body.className = theme; // apply theme on load
  }, []);

  return (
    <div className="glass-container">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="header"
      >
        <h1>🎤 Kanye Quote Generator</h1>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </motion.div>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <>
          <Error message={error} />
          <QuoteBox quote={quote} />
        </>
      ) : (
        <QuoteBox quote={quote} />
      )}

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="btn"
        onClick={fetchQuote}
      >
        🔁 New Kanye Quote
      </motion.button>
    </div>
  );
};

export default Day09App;
