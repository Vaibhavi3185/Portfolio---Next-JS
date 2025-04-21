// src/components/ProjectsSection.tsx
import React from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "E-commerce Backend API",
      description: "Developed a scalable RESTful API for an e-commerce platform with user authentication, product catalog, and order processing.",
      technologies: ["Java", "Spring Boot", "MySQL", "JWT"]
    },
    {
      title: "Microservices Architecture",
      description: "Implemented a microservices architecture for a distributed system, improving scalability and maintainability.",
      technologies: ["Spring Boot", "Docker", "Kafka", "PostgreSQL"]
    }
  ];

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-3 text-blue-700">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;