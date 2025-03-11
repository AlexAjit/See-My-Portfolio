"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowLeft, ChevronRight } from 'lucide-react';

interface Certification {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  issuer: string;
  verifyLink?: string;
  date: string;
  imageUrl?: string;
}

const categories = [
  "Cloud",
  "Frontend",
  "Backend",
  "Data Science",
  "Security"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const CertificationsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedCertification, setSelectedCertification] = useState<Certification | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  
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
      imageUrl: "/data-cert.jpg"
    },
    {
      title: "Google Cloud Professional Architect",
      description: "Certifies the ability to design, develop, and manage robust, secure, scalable, highly available, and dynamic solutions on Google Cloud.",
      technologies: ["GCP", "Cloud Architecture", "Security", "Networking", "Storage"],
      category: "Cloud",
      issuer: "Google Cloud",
      verifyLink: "https://cloud.google.com/certification/verify",
      date: "2023",
      imageUrl: "/gcp-cert.jpg"
    }
  ];

  const filteredCertifications = activeCategory === "Cloud" 
    ? certifications 
    : certifications.filter(certification => certification.category === activeCategory);

  const handleBackToList = () => {
    setShowDetails(false);
    setSelectedCertification(null);
  };

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
                  <motion.button
                    key={category}
                    onClick={() => {
                      setActiveCategory(category);
                      setShowDetails(false);
                      setSelectedCertification(null);
                    }}
                    className={`block w-full text-left px-4 py-2 rounded-md text-sm transition-colors
                              ${activeCategory === category 
                                ? 'bg-gradient-to-r from-teal-500 to-teal-700 text-white font-medium' 
                                : 'text-gray-300 hover:text-white hover:bg-[#282828]'}`}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="md:col-span-3 bg-gradient-to-b from-[#1E1E1E] to-[#121212] rounded-lg">
            {showDetails && selectedCertification ? (
              // Certification Details View
              <motion.div 
                className="p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {/* Back Button */}
                <motion.button
                  onClick={handleBackToList}
                  className="flex items-center text-gray-400 hover:text-white mb-6"
                  whileHover={{ x: -4 }}
                >
                  <ArrowLeft size={18} className="mr-2" />
                  Back to certifications
                </motion.button>
                
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
                      {/* <span className="text-sm text-[#0F766E] font-medium">{selectedCertification.category}</span> */}
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
                    
                    <div className="mb-6">
                      {/* <h3 className="text-lg font-medium mb-2">Technologies</h3> */}
                      {/* <div className="flex flex-wrap gap-2">
                        {selectedCertification.technologies.map((tech, idx) => (
                          <span key={idx} className="text-sm text-gray-200 px-3 py-1 bg-[#333] rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div> */}
                    </div>
                    
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
                          Verify
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
              // Certification List View
              <motion.div 
                className="p-4"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                <div className="grid grid-cols-[auto_1fr_auto] gap-4 items-center text-xs text-gray-400 border-b border-[#282828] pb-2 px-4">
                  <div>#</div>
                  <div>CERTIFICATION</div>
                  <div>TECHNOLOGIES</div>
                </div>
                
                {filteredCertifications.map((certification, index) => (
                  <motion.div 
                    key={certification.title}
                    className="grid grid-cols-[auto_1fr_auto] gap-4 items-center p-4 rounded-md hover:bg-[#282828] cursor-pointer transition-colors group"
                    onClick={() => {
                      setSelectedCertification(certification);
                      setShowDetails(true);
                    }}
                    variants={itemVariants}
                  >
                    <div className="text-gray-400 group-hover:text-white flex items-center justify-center w-6">
                      <span className="group-hover:hidden">{index + 1}</span>
                      <ChevronRight size={16} className="hidden group-hover:block text-[#1DB954]" />
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#333] rounded flex-shrink-0 flex items-center justify-center overflow-hidden">
                        {certification.imageUrl ? 
                          <img src={certification.imageUrl} alt={certification.title} className="w-full h-full object-cover" /> :
                          <div className="text-lg font-bold text-gray-300">{certification.title.charAt(0)}</div>
                        }
                      </div>
                      <div>
                        <h3 className="font-medium text-white">{certification.title}</h3>
                        <p className="text-xs text-gray-400">
                          {certification.issuer} • {certification.date}
                        </p>
                      </div>
                    </div>
                    {/* <div className="flex gap-2 flex-wrap justify-end">
                      {certification.technologies.slice(0, 2).map((tech, idx) => (
                        <span key={idx} className="text-xs text-gray-300 px-2 py-1 bg-[#333] rounded-full">
                          {tech}
                        </span>
                      ))}
                      {certification.technologies.length > 2 && (
                        <span className="text-xs text-gray-300 px-2 py-1 bg-[#333] rounded-full">
                          +{certification.technologies.length - 2}
                        </span>
                      )}
                    </div> */}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
        
        {/* Bottom Status Bar - Only shown when a certification is selected but details aren't shown */}
        {selectedCertification && !showDetails && (
          <motion.div 
            className="fixed bottom-0 left-0 right-0 bg-[#181818] border-t border-[#282828] p-4"
            initial={{ y: 80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              {/* Selected Certification Info */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#333] rounded flex-shrink-0 flex items-center justify-center overflow-hidden">
                  {selectedCertification.imageUrl ? 
                    <img src={selectedCertification.imageUrl} alt={selectedCertification.title} className="w-full h-full object-cover" /> :
                    <div className="text-2xl font-bold text-gray-300">{selectedCertification.title.charAt(0)}</div>
                  }
                </div>
                <div>
                  <h4 className="font-medium text-white">{selectedCertification.title}</h4>
                  <p className="text-xs text-gray-400">{selectedCertification.issuer} • {selectedCertification.date}</p>
                </div>
              </div>
              
              {/* Action Links */}
              <div className="flex gap-3">
                {selectedCertification.verifyLink && (
                  <motion.a
                    href={selectedCertification.verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                )}
                <motion.button
                  onClick={() => setShowDetails(true)}
                  className="text-xs bg-transparent text-[#1DB954] border border-[#1DB954] hover:bg-[#1DB954]/10 px-3 py-1 rounded-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Details
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CertificationsSection;