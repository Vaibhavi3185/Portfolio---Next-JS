// src/components/AboutSection.tsx
"use client";
import React, { useEffect, useRef } from "react";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (contentRef.current) {
              contentRef.current.classList.remove("opacity-0", "translate-y-10");
              contentRef.current.classList.add("opacity-100", "translate-y-0");
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white to-secondary-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left side - Image with decorative elements */}
          <div className="md:w-1/2 relative">
            <div className="relative z-10">
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-primary-200 rounded"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-2 border-accent-200 rounded"></div>
              <div className="bg-white p-4 shadow-custom-lg rounded-lg">
                {/* Replace with actual image if available */}
                <div className="aspect-video bg-secondary-100 rounded flex items-center justify-center">
                  <span className="text-4xl font-display font-bold text-primary-700">About Me</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - About content */}
          <div
            ref={contentRef}
            className="md:w-1/2 transition-all duration-1000 opacity-0 translate-y-10"
          >
            <h2 className="text-3xl font-display font-bold mb-4 text-secondary-900 relative inline-block">
              <span className="relative z-10">About Me</span>
              <span className="absolute bottom-0 left-0 h-3 w-full bg-accent-200 -z-10 opacity-60"></span>
            </h2>
            
            <p className="text-lg text-secondary-700 mb-6">
              I am a Java Backend Developer with 3.2 years of experience in building scalable applications. 
              I specialize in Spring Boot, REST APIs, Hibernate, and database systems like MySQL and PostgreSQL.
            </p>
            
            <p className="text-lg text-secondary-700 mb-6">
              My passion lies in creating efficient and maintainable code that solves real-world problems. I enjoy working in collaborative environments where I can contribute my expertise to build innovative solutions.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                  <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-secondary-900">Experience</h3>
                  <p className="text-secondary-600">3.2+ Years</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-accent-100 flex items-center justify-center mr-4">
                  <svg className="h-6 w-6 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-secondary-900">Education</h3>
                  <p className="text-secondary-600">B.Tech in CS</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                  <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-secondary-900">Languages</h3>
                  <p className="text-secondary-600">English, Hindi</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-accent-100 flex items-center justify-center mr-4">
                  <svg className="h-6 w-6 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-secondary-900">Projects</h3>
                  <p className="text-secondary-600">5+ Completed</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="#contact" 
                className="inline-flex items-center text-accent-600 font-medium hover:text-accent-700 transition-colors duration-300"
              >
                <span>Contact Me</span>
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;