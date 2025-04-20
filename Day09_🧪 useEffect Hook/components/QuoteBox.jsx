import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import "../Day09App.css"; // Make sure to update CSS too

const QuoteBox = ({ quote }) => {
  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      glareEnable={true}
      glareMaxOpacity={0.2}
      scale={1.02}
      transitionSpeed={250}
      className="quote-box"
    >
      <motion.div
        className="quote-content"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <p className="quote-text">“{quote}”</p>
      </motion.div>
    </Tilt>
  );
};

export default QuoteBox;
