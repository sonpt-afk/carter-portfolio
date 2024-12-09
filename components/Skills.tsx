'use client'

import { motion } from 'framer-motion'
import { Code, Server, Palette } from 'lucide-react'

const skills = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    icon: Code,
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'],
    icon: Server,
  },
  {
    category: 'Design',
    items: ['Figma', 'Adobe XD', 'UI/UX', 'Responsive Design'],
    icon: Palette,
  },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-700 rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <skill.icon className="w-6 h-6 mr-2 text-blue-500" />
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

