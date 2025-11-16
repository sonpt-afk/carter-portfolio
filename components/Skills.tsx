"use client";

import { motion } from "framer-motion";
import { Code, Server, Palette, Sparkles } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    icon: Code,
    color: "cyan",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "MySQL", "MongoDB", "REST APIs"],
    icon: Server,
    color: "coral",
    gradient: "from-orange-500/20 to-pink-500/20",
  },
  {
    category: "Design",
    items: ["UI/UX", "Responsive Design", "Figma", "User-Centered Design"],
    icon: Palette,
    color: "lime",
    gradient: "from-lime-500/20 to-green-500/20",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 left-20 w-64 h-64 bg-brand-purple/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-brand-lime/20 rounded-full blur-3xl" />
      </div>

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
            <Sparkles size={16} className="text-brand-cyan" />
            <span className="text-sm font-medium text-muted-foreground">
              Technical Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
            My <span className="text-gradient-rainbow">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A versatile tech stack combining modern frameworks, robust backend solutions, and user-focused design
          </p>
        </motion.div>

        {/* Skills Grid - Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const colorClasses = {
              cyan: {
                border: "border-brand-cyan/30",
                text: "text-brand-cyan",
                glow: "hover:shadow-brand-cyan/20",
                badge: "bg-brand-cyan/10 text-brand-cyan",
              },
              coral: {
                border: "border-brand-coral/30",
                text: "text-brand-coral",
                glow: "hover:shadow-brand-coral/20",
                badge: "bg-brand-coral/10 text-brand-coral",
              },
              lime: {
                border: "border-brand-lime/30",
                text: "text-brand-lime",
                glow: "hover:shadow-brand-lime/20",
                badge: "bg-brand-lime/10 text-brand-lime",
              },
            };

            const currentColor = colorClasses[skill.color as keyof typeof colorClasses];

            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group relative glass-strong rounded-2xl p-8 border-2 ${currentColor.border} ${currentColor.glow} transition-all duration-300 hover:shadow-2xl overflow-hidden`}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${currentColor.badge} mb-6`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <skill.icon className={`w-8 h-8 ${currentColor.text}`} strokeWidth={2} />
                  </motion.div>

                  {/* Category */}
                  <h3 className={`text-2xl font-display font-bold mb-4 ${currentColor.text}`}>
                    {skill.category}
                  </h3>

                  {/* Skills List */}
                  <ul className="space-y-3">
                    {skill.items.map((item, itemIndex) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 + itemIndex * 0.05 }}
                        className="flex items-center gap-3 group/item"
                      >
                        <motion.div
                          className={`w-1.5 h-1.5 rounded-full ${currentColor.text} bg-current`}
                          whileHover={{ scale: 2 }}
                        />
                        <span className="text-foreground/90 group-hover/item:text-foreground transition-colors">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Decorative element */}
                  <motion.div
                    className={`absolute top-4 right-4 w-24 h-24 ${currentColor.text} opacity-5`}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <skill.icon size={96} strokeWidth={1} />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground">
            Want to see these skills in action?{" "}
            <button
              onClick={() => {
                const projectsSection = document.getElementById("projects");
                projectsSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-brand-cyan hover:text-brand-cyan/80 font-semibold underline underline-offset-4 transition-colors"
            >
              Check out my projects
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
