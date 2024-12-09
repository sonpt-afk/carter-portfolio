'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import AnimatedBackground from './AnimatedBackground'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      <AnimatedBackground />
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Image
            src="/placeholder.svg?height=200&width=200"
            alt="Developer"
            width={200}
            height={200}
            className="rounded-full mx-auto border-4 border-blue-500"
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Hi, I'm Carter
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 h-[60px]"
        >
          <TypeAnimation
            sequence={[
              'A developer building awesome websites',
              1000,
              'A solo entrepreneur turning ideas into reality',
              1000,
              'An AI enthusiast',
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition duration-300"
          >
            Get in touch
            <ArrowRight className="ml-2" size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

