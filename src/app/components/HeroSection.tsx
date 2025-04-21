// src/components/HeroSection.tsx
"use client";
import React, { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const titles = ['Java Developer', 'Backend Expert', 'API Architect'];
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const current = titles[titleIndex];
    
    if (isDeleting) {
      if (displayText.length === 0) {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
        setTypingSpeed(150);
      } else {
        const timeout = setTimeout(() => {
          setDisplayText(current.substring(0, displayText.length - 1));
        }, 100);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length === current.length) {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setDisplayText(current.substring(0, displayText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      }
    }
  }, [displayText, isDeleting, titleIndex, titles, typingSpeed]);

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-700 to-accent-900"></div>
      
      {/* Decorative grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className={`md:w-3/5 text-white transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-accent-300 font-medium mb-2">Hello, I am</p>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
              Gayatri Rana
            </h1>
            <h2 className="text-2xl md:text-4xl font-display font-medium mb-6 h-10">
              <span className="text-accent-300">I'm a </span>
              <span className="relative">
                {displayText}
                <span className="absolute right-[-4px] top-0 h-full w-[2px] bg-white animate-blink"></span>
              </span>
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white/80 max-w-lg">
              Specialized in building robust and scalable backend solutions with Spring Boot, REST APIs, and database systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="px-8 py-3 bg-accent-600 text-white rounded-full font-medium hover:bg-accent-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="px-8 py-3 bg-transparent border-2 border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition duration-300"
              >
                View Projects
              </a>
            </div>
          </div>
          
          <div className={`md:w-2/5 mt-12 md:mt-0 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-accent-500/20"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-primary-500/20"></div>
              
              {/* Profile image */}
              <div className="relative z-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-2 rounded-2xl shadow-custom-lg">
                <div className="bg-gradient-to-br from-primary-600 to-accent-600 p-1 rounded-xl">
                  {/* Replace with actual image if available */}
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-lg bg-secondary-200 flex items-center justify-center text-5xl font-display font-bold text-primary-700">
                    GR
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white animate-bounce">
        <span className="text-sm mb-2">Scroll Down</span>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;