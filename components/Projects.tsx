"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Sparkles, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "North Marketplace",
    description:
      "A modern e-commerce platform that enables users to buy and sell products through a bidding system.",
    image: "/images/p1.png",
    liveUrl: "https://north-market.onrender.com/",
    githubUrl: "https://github.com/sonpt-afk/north-martket",
    color: "cyan",
    tags: ["E-commerce", "Bidding", "Full-stack"],
  },
  {
    title: "AI SEO Tools Landing Page",
    description: `A modern, animated landing page to promote for an AI-powered tool`,
    image: "/images/p4.png",
    liveUrl:
      "https://next-ai-startup-landingpage-2oeb02u34-kypro2000s-projects.vercel.app/",
    githubUrl: "https://github.com/sonpt-afk/next-AI-startup-landingpage",
    color: "coral",
    tags: ["Landing Page", "AI", "Animation"],
  },
  {
    title: "Online Movie Trailer Viewer",
    description:
      "A movie trailer collection website with registration, login, movie search, movie selection and playback across multiple devices.",
    image: "/images/p2.png",
    liveUrl: "https://movie-webapp-cp34.vercel.app/",
    githubUrl: "https://github.com/sonpt-afk/Movie-web",
    color: "lime",
    tags: ["Streaming", "Authentication", "Multi-device"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-coral/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <Sparkles size={16} className="text-brand-coral" />
            <span className="text-sm font-medium text-muted-foreground">
              Featured Work
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
            My <span className="text-gradient-rainbow">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work in web development, from e-commerce platforms to AI-powered tools
          </p>
        </motion.div>

        {/* Projects Grid - Asymmetric Bento Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => {
              const colorClasses = {
                cyan: {
                  border: "border-brand-cyan/30",
                  text: "text-brand-cyan",
                  glow: "group-hover:shadow-brand-cyan/30",
                  gradient: "from-cyan-500/10 to-blue-500/10",
                },
                coral: {
                  border: "border-brand-coral/30",
                  text: "text-brand-coral",
                  glow: "group-hover:shadow-brand-coral/30",
                  gradient: "from-orange-500/10 to-pink-500/10",
                },
                lime: {
                  border: "border-brand-lime/30",
                  text: "text-brand-lime",
                  glow: "group-hover:shadow-brand-lime/30",
                  gradient: "from-lime-500/10 to-green-500/10",
                },
              };

              const currentColor = colorClasses[project.color as keyof typeof colorClasses];

              // First project spans 2 columns on larger screens
              const gridClass = index === 0 ? "md:col-span-2 lg:col-span-2" : "";

              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`group relative ${gridClass}`}
                >
                  <div className={`relative glass-strong rounded-2xl border-2 ${currentColor.border} overflow-hidden transition-all duration-500 hover-lift ${currentColor.glow} hover:shadow-2xl h-full`}>
                    {/* Image Container */}
                    <div className="relative overflow-hidden aspect-video">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-full"
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={800}
                          height={450}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>

                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${currentColor.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                      {/* Floating badge */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className={`absolute top-4 right-4 px-3 py-1 rounded-full glass-strong border ${currentColor.border}`}
                      >
                        <span className={`text-xs font-semibold ${currentColor.text}`}>
                          Featured
                        </span>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium rounded-full glass border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Title */}
                      <h3 className={`text-2xl md:text-3xl font-display font-bold mb-3 ${currentColor.text}`}>
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground mb-6 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Links */}
                      <div className="flex flex-wrap gap-3">
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`group/btn relative px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl inline-flex items-center gap-2 transition-all duration-300 hover:shadow-lg ${currentColor.glow} overflow-hidden`}
                        >
                          <span className="relative z-10">Live Demo</span>
                          <ArrowUpRight
                            size={18}
                            className="relative z-10 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-r ${currentColor.gradient} opacity-0 group-hover/btn:opacity-100 transition-opacity`} />
                        </motion.a>

                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-6 py-3 glass-strong font-semibold rounded-xl inline-flex items-center gap-2 transition-all duration-300 hover:border-white/30"
                        >
                          <Github size={18} />
                          <span>Code</span>
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">
            Interested in working together?
          </p>
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact");
              contactSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-coral text-white font-display font-semibold rounded-xl inline-flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-brand-cyan/30"
          >
            Let&apos;s talk
            <ArrowUpRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
