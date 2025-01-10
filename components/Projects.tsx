"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "North Marketplace",
    description:
      "A modern e-commerce platform that enables users to buy and sell products through a bidding system.",
    image: "/images/p1.png",
    liveUrl: "https://north-market.onrender.com/",
    githubUrl: "https://github.com/sonpt-afk/north-martket",
  },
  {
    title: "AI SEO Tools Landing Page",
    description: `A modern, animated landing page to promote for an AI-powered tool`,
    image: "/images/p4.png",
    liveUrl:
      "https://next-ai-startup-landingpage-2oeb02u34-kypro2000s-projects.vercel.app/",
    githubUrl: "https://github.com/sonpt-afk/next-AI-startup-landingpage",
  },
  {
    title: "Online Movie Trailer Viewer (Netflix Clone)",
    description:
      "A movie trailer collection website with the following features: registration, login, movie search, movie selection and playback, and viewing personal account information across multiple devices.",
    image: "/images/p2.png",
    liveUrl: "https://movie-webapp-cp34.vercel.app/",
    githubUrl: "https://github.com/sonpt-afk/Movie-web",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-700 rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-400 hover:text-blue-300 transition duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ExternalLink size={20} className="mr-1" />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-400 hover:text-blue-300 transition duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Github size={20} className="mr-1" />
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
