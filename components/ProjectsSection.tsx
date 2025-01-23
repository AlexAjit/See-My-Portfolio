"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  imageUrl?: string;
}

const ProjectCard: React.FC<Project> = ({ 
  title, 
  description, 
  technologies, 
  githubLink 
}) => {
  return (
    <motion.div 
      className="bg-gray-900 rounded-xl p-6 space-y-4 
                 transform transition-transform duration-300 
                 hover:scale-105 hover:shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <a 
          href={githubLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-white text-gray-400"
        >
          <Github />
        </a>
      </div>
      <p className="text-gray-300">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span 
            key={index}
            className="px-2 py-1 bg-gray-800 text-xs 
                       rounded-full text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

// Projects Section Component
const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Secure-File-Sharing-AI ",
      description: "Secure File sharing software. this application will enable users to upload, download, share",
      technologies: ["Next.js", "OpenAI", "Tailwind"],
      githubLink: "https://github.com/AlexAjit/Secure-File-Sharing-AI"
    },
    {
      title: "Log Ingestor tool",
      description: "Comprehensive cloud infrastructure monitoring platform",
      technologies: ["React", "Kubernetes", "Nextjs", "MongoDB"],
      githubLink: "https://github.com/AlexAjit/Log-mumbaihacks"
    },
    {
      title: "Interact-UI",
      description: "responsive UI to ensure that users can easily interact with the page",
      technologies: ["Python", "TensorFlow", "Docker"],
      githubLink: "https://github.com/AlexAjit/Interact-UI"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="section-title text-center mb-12">Projects</h2>
      
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectsSection;