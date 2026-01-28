import React, { useState, useEffect } from 'react';
import ParticleBackground from './ParticleBackground';
import MagneticText from './MagneticText';
import { motion } from 'framer-motion';
const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'A Full Stack Developer and Designer';
  const [isTyping, setIsTyping] = useState(true);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Typewriter effect
  useEffect(() => {
    let timeout;
    if (isTyping) {
      if (text.length < fullText.length) {
        timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(text.slice(0, -1));
        }, 50);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(true);
        }, 1000);
      }
    }
    return () => clearTimeout(timeout);
  }, [text, isTyping]);

  // Cursor blinking
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden px-6">
      <ParticleBackground />

      <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 z-10">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex flex-col items-start"
        >
          <MagneticText text="Hey there, I'm Ranjith!" />

          <h2 className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-6 h-8">
            {text}
            <span className={`${cursorVisible ? 'opacity-100' : 'opacity-0'} text-sky-500 ml-1`}>|</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
            Passionate Full Stack Developer crafting seamless digital experiences with modern web technologies.
          </p>

          <div className="flex gap-4">
            <a href="/cv.pdf" download className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium shadow-lg hover:shadow-sky-500/30 transition-all hover:-translate-y-1">
              <span className="relative z-10 flex items-center gap-2">
                Download CV <i className="ri-arrow-right-up-line group-hover:translate-x-1 transition-transform"></i>
              </span>
              <div className="absolute inset-0 rounded-full bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a href="#contact" className="px-8 py-3 rounded-full glass border border-gray-300 dark:border-white/10 text-gray-800 dark:text-white font-medium hover:bg-gray-100 dark:hover:bg-white/10 transition-all hover:-translate-y-1">
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 flex justify-center md:justify-end"
        >
          <div className="relative w-80 h-80 md:w-[30rem] md:h-[30rem]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-500 to-purple-600 blur-[50px] opacity-40 animate-pulse"></div>
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-sky-400 to-purple-500 blur-[20px] opacity-40"></div>
            <img
              src="/assets/RanjithGovindasamy.png"
              alt="Ranjith Govindasamy"
              className="relative w-full h-full object-cover rounded-full border-4 border-white/10 shadow-2xl  transition-all duration-700"
            />

            {/* Floating Tech Badges (Decorative) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-12 h-12 glass rounded-xl flex items-center justify-center p-2"
            >
              <img src="/assets/reactjs.svg" alt="React" className="w-full h-full" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-8 -left-8 w-12 h-12 glass rounded-xl flex items-center justify-center p-2"
            >
              <img src="/assets/nodejs.svg" alt="Node" className="w-full h-full" />
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="text-gray-400 hover:text-sky-500 transition-colors">
          <i className="ri-arrow-down-double-line text-3xl"></i>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
