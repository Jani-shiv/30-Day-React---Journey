import React from "react";
import { motion } from "framer-motion";
import "../Day09App.css";

const Error = ({ message }) => {
  return (
    <motion.div
      className="error-box"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <p className="error-text">⚠️ {message}</p>
    </motion.div>
  );
};

export default Error;
