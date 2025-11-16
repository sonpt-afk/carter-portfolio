"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code2, Rocket } from "lucide-react";
import Image from "next/image";
import AnimatedBackground from "./AnimatedBackground";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden gradient-mesh"
    >
      <AnimatedBackground />

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 right-10 text-brand-cyan opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Code2 size={80} />
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-10 text-brand-coral opacity-20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Rocket size={60} />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-left order-2 md:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <Sparkles size={16} className="text-brand-lime" />
              <span className="text-sm font-medium text-muted-foreground">
                Available for new projects
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-5xl md:text-7xl font-display font-bold mb-4 leading-tight"
            >
              Hi, I&apos;m{" "}
              <span className="text-gradient-rainbow">Son Pham</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground mb-2"
            >
              aka <span className="text-brand-cyan font-semibold">Carter</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-2xl md:text-3xl font-display font-semibold mb-8 h-[80px] md:h-[100px] flex items-center"
            >
              <TypeAnimation
                sequence={[
                  "Building awesome websites 🚀",
                  2000,
                  "Turning ideas into reality ✨",
                  2000,
                  "AI enthusiast & innovator 🤖",
                  2000,
                  "Full-stack developer 💻",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-gradient-cyan"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  contactSection?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group relative px-8 py-4 bg-primary text-primary-foreground font-display font-semibold rounded-xl inline-flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-brand-cyan/50 overflow-hidden"
              >
                <span className="relative z-10">Get in touch</span>
                <ArrowRight
                  className="relative z-10 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              <button
                onClick={() => {
                  const projectsSection = document.getElementById("projects");
                  projectsSection?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-4 glass-strong font-display font-semibold rounded-xl inline-flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:border-brand-coral/50"
              >
                View projects
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan via-brand-purple to-brand-coral opacity-30 blur-3xl rounded-full transform scale-110" />

              {/* Animated ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-brand-cyan/30"
                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />

              {/* Image */}
              <div className="relative">
                <Image
                  src="/images/dev_ava.jpg"
                  alt="Son Pham - Full Stack Developer"
                  width={400}
                  height={400}
                  className="rounded-full border-4 border-brand-cyan shadow-2xl hover-lift"
                  priority
                />

                {/* Floating badge */}
                <motion.div
                  className="absolute -bottom-4 -right-4 px-6 py-3 glass-strong rounded-2xl border-2 border-brand-lime shadow-xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-brand-lime rounded-full animate-pulse" />
                    <span className="font-display font-semibold text-sm">
                      Open to work
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
