import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const MagneticText = ({ text }) => {
  return (
    <div className="flex flex-wrap gap-2 text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 mb-4 leading-tight">
      {text.split(" ").map((word, i) => (
        <MagneticWrapper key={i}>
            {word === "Ranjith!" ? (
                 <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-purple-600 cursor-pointer">
                    {word}
                  </span>
            ) : (
                <span className="cursor-default hover:text-sky-500 transition-colors duration-300">{word}</span>
            )}
        </MagneticWrapper>
      ))}
    </div>
  );
};

const MagneticWrapper = ({ children }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);

        setPosition({ x: middleX * 0.5, y: middleY * 0.5 });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;

    return (
        <motion.div
            ref={ref}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            className="inline-block"
        >
            {children}
        </motion.div>
    );
}

export default MagneticText;
