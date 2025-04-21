// src/components/SkillsSection.tsx
"use client";
import React, { useState, useEffect, useRef } from 'react';

interface Skill {
  name: string;
  level: number; // 1-100
  color: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entries[0].target);
        }
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

  const skillCategories: SkillCategory[] = [
    {
      title: "Backend Development",
      skills: [
        { name: "Java", level: 90, color: "primary" },
        { name: "Spring Boot", level: 85, color: "primary" },
        { name: "Spring Security", level: 75, color: "primary" },
        { name: "JPA/Hibernate", level: 80, color: "primary" },
        { name: "RESTful APIs", level: 90, color: "primary" },
        { name: "Microservices", level: 70, color: "primary" },
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", level: 85, color: "accent" },
        { name: "PostgreSQL", level: 80, color: "accent" },
        { name: "Redis", level: 65, color: "accent" },
        { name: "MongoDB", level: 60, color: "accent" },
      ]
    },
    {
      title: "Frontend & Tools",
      skills: [
        { name: "HTML/CSS", level: 70, color: "secondary" },
        { name: "JavaScript", level: 65, color: "secondary" },
        { name: "Angular", level: 60, color: "secondary" },
        { name: "Git", level: 85, color: "secondary" },
        { name: "Maven", level: 80, color: "secondary" },
        { name: "Docker", level: 75, color: "secondary" },
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: 70, color: "primary" },
        { name: "Kafka", level: 65, color: "primary" },
        { name: "CI/CD", level: 75, color: "primary" },
        { name: "Jenkins", level: 65, color: "primary" },
      ]
    },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display font-bold text-secondary-900 mb-4">Technical Skills</h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            I've developed a diverse set of skills throughout my career as a Java Backend Developer,
            focusing on building robust and scalable applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div 
              key={catIndex} 
              className={`bg-white p-6 rounded-lg border border-secondary-100 shadow-custom transition-all duration-1000 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${catIndex * 200}ms` }}
            >
              <h3 className="text-xl font-display font-semibold mb-6 text-secondary-900 pb-2 border-b border-secondary-100">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium text-secondary-700">{skill.name}</span>
                      <span className="text-sm text-secondary-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-${skill.color}-600 rounded-full transition-all duration-1500 ease-out`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(catIndex * 200) + (index * 100)}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;