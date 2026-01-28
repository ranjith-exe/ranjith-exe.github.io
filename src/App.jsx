import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact, { Footer } from './components/Contact';
import NoiseOverlay from './components/NoiseOverlay';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-[#0a0a0a] dark:text-white font-poppins selection:bg-sky-500 selection:text-white transition-colors duration-300">
        <NoiseOverlay />
        <CustomCursor />
        <Navbar />
        <main className="space-y-10">
          <Hero />
          <About />
          <Skills />
          <Services />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
