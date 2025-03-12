"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface Certification {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  issuer: string;
  verifyLink?: string;
  date: string;
  imageUrl?: string;
  pdfUrl?: string;
}

const categories = [
  "Cloud",
  "Frontend",
  "Backend",
  "Security"
];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1
//     }
//   }
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 10 },
//   visible: { 
//     opacity: 1, 
//     y: 0,
//     transition: { 
//       duration: 0.4,
//       ease: "easeOut"
//     }
//   }
// };

const CertificationsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Cloud");
  const [selectedCertification, setSelectedCertification] = useState<Certification | null>(null);
  
  const certifications: Certification[] = [
    {
      title: "AWS Certified Solutions Architect",
      description: "Validates the ability to design and implement distributed systems on AWS. Demonstrates expertise in designing optimal AWS architectures based on business requirements.",
      technologies: ["AWS", "Cloud Computing", "Infrastructure", "Lambda", "EC2"],
      category: "Cloud",
      issuer: "Amazon Web Services",
      verifyLink: "https://aws.amazon.com/verification",
      date: "2024",
      imageUrl: "/aws-cert.jpg"
    },
    {
      title: "React Developer Certification",
      description: "Demonstrates proficiency in building React applications using functional components, hooks, context API, and modern state management techniques.",
      technologies: ["React", "JavaScript", "Redux", "CSS", "Responsive Design"],
      category: "Frontend",
      issuer: "Meta",
      verifyLink: "https://reactcertification.dev",
      date: "2023",
      imageUrl: "/react-cert.jpg"
    },
    {
      title: "TypeScript Professional",
      description: "Validates expertise in TypeScript including interfaces, generics, type inference, advanced types, and integration with JavaScript frameworks.",
      technologies: ["TypeScript", "JavaScript", "OOP", "Generics"],
      category: "Frontend",
      issuer: "Microsoft",
      date: "2023",
      imageUrl: "/typescript-cert.jpg"
    },
    {
      title: "Next.js Certification",
      description: "Certifies knowledge of server-side rendering, static site generation, API routes, and data fetching strategies in Next.js applications.",
      technologies: ["Next.js", "React", "SSR", "API Routes"],
      category: "Frontend",
      issuer: "Vercel",
      date: "2022",
      imageUrl: "/nextjs-cert.jpg"
    },
    {
      title: "MongoDB Database Administrator",
      description: "Validates expertise in MongoDB database design, query optimization, data modeling, aggregation, and database management.",
      technologies: ["MongoDB", "NoSQL", "Database", "Aggregation"],
      category: "Backend",
      issuer: "MongoDB University",
      verifyLink: "https://university.mongodb.com/certification/verify",
      date: "2022",
      imageUrl: "/mongodb-cert.jpg"
    },
    {
      title: "Certified Kubernetes Administrator",
      description: "Demonstrates ability to perform the responsibilities of a Kubernetes Administrator including cluster deployment and application lifecycle management.",
      technologies: ["Kubernetes", "Docker", "Container Orchestration", "Cloud Native"],
      category: "Backend",
      issuer: "Cloud Native Computing Foundation",
      verifyLink: "https://www.cncf.io/certification/verify",
      date: "2023",
      imageUrl: "/k8s-cert.jpg"
    },
    {
      title: "Certified Data Scientist",
      description: "Validates expertise in applying statistical analysis, machine learning algorithms, and data visualization techniques to extract insights from data.",
      technologies: ["Python", "Statistics", "Machine Learning", "Data Visualization", "Pandas"],
      category: "Data Science",
      issuer: "DataCamp",
      date: "2024",
      imageUrl: "/assets/data-cert.jpg"
    },
    {
      title: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
      description: "Certifies the ability to design, develop, and manage robust, secure, scalable, highly available, and dynamic solutions on Google Cloud.",
      technologies: ["Oracle Cloud", "Cloud Architecture", "Gen ai", "Large Language Models (LLM)", "Storage"],
      category: "Cloud",
      issuer: "Oracle",
      verifyLink: "https://cloud.google.com/certification/verify",
      date: "2024",
      imageUrl: "/oracle.png"
    },
    {
      title: "ManageEngine Certified Product Associate",
      description: "Certifies the ability to design, develop, and manage robust, secure, scalable, highly available, and dynamic solutions on Google Cloud.",
      technologies: ["Cybersecurity ", "Risk Management", " Information Security"],
      category: "Security",
      issuer: "ManageEngine",
      verifyLink: "https://cloud.google.com/certification/verify",
      date: "2024",
      imageUrl: "/manageengine.jpeg"
    }
  ];

  // Get certifications for the active category
  const categoryFilteredCertifications = certifications.filter(cert => cert.category === activeCategory);
  
  // Initialize with first certification of the selected category if none selected
  React.useEffect(() => {
    if (!selectedCertification && categoryFilteredCertifications.length > 0) {
      setSelectedCertification(categoryFilteredCertifications[0]);
    }
  }, [activeCategory, selectedCertification, categoryFilteredCertifications]);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    const certsInCategory = certifications.filter(cert => cert.category === category);
    if (certsInCategory.length > 0) {
      setSelectedCertification(certsInCategory[0]);
    } else {
      setSelectedCertification(null);
    }
  };

  // const displayCertifications = categoryFilteredCertifications.map((cert) => ({
  //   ...cert,
  //   isSelected: selectedCertification?.title === cert.title
  // }));

  return (
    <section className="bg-black text-white min-h-screen p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1 bg-[#121212] rounded-lg p-4">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-4">Certifications</h2>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category} className="space-y-2">
                    <motion.button
                      onClick={() => handleCategoryClick(category)}
                      className={`block w-full text-left px-4 py-2 rounded-md text-sm transition-colors
                                ${activeCategory === category 
                                  ? 'bg-gradient-to-r from-teal-500 to-teal-700 text-white font-medium' 
                                  : 'text-gray-300 hover:text-white hover:bg-[#282828]'}`}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {category}
                    </motion.button>
                    
                    {/* Display certification names under each category when it's active */}
                    {activeCategory === category && (
                      <div className="ml-4 space-y-1">
                        {certifications
                          .filter(cert => cert.category === category)
                          .map((cert) => (
                            <motion.button
                              key={cert.title}
                              onClick={() => setSelectedCertification(cert)}
                              className={`block w-full text-left px-4 py-1 rounded-md text-xs transition-colors
                                        ${selectedCertification?.title === cert.title
                                          ? 'text-teal-400 font-medium' 
                                          : 'text-gray-400 hover:text-white'}`}
                              whileHover={{ x: 2 }}
                            >
                              {cert.title}
                            </motion.button>
                          ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Main Content - Always shows certification details */}
          <div className="md:col-span-3 bg-gradient-to-b from-[#1E1E1E] to-[#121212] rounded-lg">
            {selectedCertification ? (
              <motion.div 
                className="p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                key={selectedCertification.title} // This ensures animation runs on certification change
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Certification Image */}
                  <div className="w-full md:w-64 h-66 bg-[#333] rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
                    {selectedCertification.imageUrl ? 
                      <img src={selectedCertification.imageUrl} alt={selectedCertification.title} className="w-full h-full object-cover" /> :
                      <div className="text-6xl font-bold text-gray-300">{selectedCertification.title.charAt(0)}</div>
                    }
                  </div>
                  
                  {/* Certification Info */}
                  <div className="flex-1">
                    <div className="mb-4">
                      <h1 className="text-4xl font-bold mt-1">{selectedCertification.title}</h1>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <span className="text-xs text-gray-400">Issuing Organization</span>
                        <p className="text-white">{selectedCertification.issuer}</p>
                      </div>
                      <div>
                        <span className="text-xs text-gray-400">Date</span>
                        <p className="text-white">{selectedCertification.date}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6">{selectedCertification.description}</p>
                    
                    {/* <div className="mb-6">
                      <h3 className="text-lg font-medium mb-2">Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedCertification.technologies.map((tech, idx) => (
                          <span key={idx} className="text-sm text-gray-200 px-3 py-1 bg-[#333] rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div> */}
                    
                    <div className="flex gap-4">
                      {selectedCertification.verifyLink && (
                        <motion.a
                          href={selectedCertification.verifyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-gradient-to-r from-teal-500 to-teal-700 text-white px-4 py-2 rounded-full transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink size={18} />
                          Upcoming
                        </motion.a>
                      )}
                      <motion.button
                        className="flex items-center gap-2 bg-[#333] hover:bg-[#444] text-white px-4 py-2 rounded-full transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Certificate
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="p-6 flex items-center justify-center h-full">
                <p className="text-gray-400">No certifications found for this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;