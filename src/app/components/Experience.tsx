// src/components/Experience.tsx
import React from 'react';

interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
}

const Experience = () => {
  const experiences: Experience[] = [
    {
      company: "Virtusa (Client)",
      position: "Back-end Developer",
      period: "Aug 2021 - Present",
      description: "Worked on SaleZshark (Sony e-commerce platform). Developed APIs, handled bug fixes, coordinated with team members and contributed to high-performance backend features."
    }
  ];

  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-800">{exp.company}</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {exp.period}
                </span>
              </div>
              <h4 className="text-lg font-semibold text-blue-700 mb-3">{exp.position}</h4>
              <p className="text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;