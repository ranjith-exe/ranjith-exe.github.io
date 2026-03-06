import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center transition-all duration-300 ${
          isScrolled
            ? 'glass rounded-full mx-4 px-6 py-3 bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <a href="/" className="text-2xl font-bold tracking-tighter hover:scale-105 transition-transform">
          <span className="text-gray-900 dark:text-white">Ranjith</span>
          <span className="text-sky-500">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-base font-semibold text-gray-700 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-500 transition-all group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <i className="ri-sun-line text-yellow-400 text-xl"></i>
            ) : (
              <i className="ri-moon-line text-gray-700 text-xl"></i>
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
            <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <i className="ri-sun-line text-yellow-400 text-xl"></i>
            ) : (
              <i className="ri-moon-line text-gray-700 text-xl"></i>
            )}
          </button>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-900 dark:text-white focus:outline-none"
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? (
              <i className="ri-close-line text-2xl"></i>
            ) : (
              <i className="ri-menu-4-line text-2xl"></i>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 glass rounded-2xl p-6 md:hidden flex flex-col items-center gap-6 z-40"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-sky-500 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
