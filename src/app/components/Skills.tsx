// src/components/Skills.tsx
import React from 'react';

interface SkillCategory {
  title: string;
  skills: string[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Backend Development",
      skills: ["Java", "Spring Boot", "Spring Security", "JPA", "Hibernate", "RESTful APIs", "Microservices"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "PostgreSQL"]
    },
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "Angular"]
    },
    {
      title: "DevOps & Tools",
      skills: ["AWS", "Kafka", "Docker", "Maven", "Git", "IntelliJ", "Eclipse", "STS"]
    }
  ];

  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
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

export default Skills;
