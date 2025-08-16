import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const quotes = [
  {
    text: "There are people in the world so hungry, that God cannot appear to them except in the form of bread.",
    author: "Mahatma Gandhi",
    role: "Leader & Humanitarian",
    img: "/image/Mahatma-Gandhi.jpg"
  },
  {
    text: "If you can't feed a hundred people, then feed just one.",
    author: "Mother Teresa",
    role: "Saint & Missionary",
    img: "/image/Mother-Teresa.jpg"
  },
  {
    text: "Hunger is not an issue of charity. It is an issue of justice.",
    author: "Jacques Diouf",
    role: "Former FAO Director-General",
    img: "/image/jacques-diouf.jpg"
  }
];

export default function QuotesSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const prevQuote = () => {
    setDirection(-1);
    setIndex((index - 1 + quotes.length) % quotes.length);
  };
  const nextQuote = () => {
    setDirection(1);
    setIndex((index + 1) % quotes.length);
  };

  const { text, author, role, img } = quotes[index];

  // Animation variants for sliding effect
  const quoteVariants = {
    enter: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 100 : -100,
      scale: 0.95
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.5 }
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction < 0 ? 100 : -100,
      scale: 0.95,
      transition: { duration: 0.3 }
    })
  };

  return (
    <section className="quote-section">
      <div className="container">
        <div className="mb-2" style={{ letterSpacing: '2px', color: '#222', fontWeight: 500 }}>
          Inspiration for Change
        </div>
        <div className="quote-title">
          <span className="highlight">Famous</span> Quotes
        </div>
        <div className="d-flex justify-content-center align-items-center mb-4" style={{ minHeight: 120 }}>
          <span className="quote-mark">&ldquo;</span>
          <AnimatePresence custom={direction} mode="wait">
            <motion.span
              key={index}
              className="quote-text"
              custom={direction}
              variants={quoteVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              {text}
            </motion.span>
          </AnimatePresence>
        </div>
        <hr style={{ maxWidth: 900, margin: '2rem auto' }} />
        <AnimatePresence mode="wait">
          <motion.div
            key={index + '-author'}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="d-flex align-items-center justify-content-center mb-3"
          >
            <img src={img} alt={author} className="quote-author-img" />
            <div className="text-start">
              <div className="quote-author">{author}</div>
              <div className="quote-role">{role}</div>
            </div>
          </motion.div>
        </AnimatePresence>
        <div>
          <motion.button
            className="btn btn-link"
            onClick={prevQuote}
            aria-label="Previous quote"
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            style={{ outline: 'none', boxShadow: 'none' }}
          >
            <span style={{ fontSize: '2rem', color: '#222' }}>&larr;</span>
          </motion.button>
          <motion.button
            className="btn btn-link"
            onClick={nextQuote}
            aria-label="Next quote"
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            style={{ outline: 'none', boxShadow: 'none' }}
          >
            <span style={{ fontSize: '2rem', color: '#222' }}>&rarr;</span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
