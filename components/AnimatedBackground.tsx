'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Globe, Server, Smartphone, Wifi } from 'lucide-react'

const icons = [Code, Database, Globe, Server, Smartphone, Wifi]

const AnimatedIcon = ({ Icon, initialPosition }) => {
  const [position, setPosition] = useState(initialPosition)

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      })
    }, Math.random() * 5000 + 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={initialPosition}
      animate={position}
      transition={{ duration: 5, ease: "easeInOut" }}
      className="absolute text-blue-400 opacity-30"
    >
      <Icon size={32} />
    </motion.div>
  )
}

const AnimatedBackground = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {icons.map((Icon, index) => (
        <AnimatedIcon
          key={index}
          Icon={Icon}
          initialPosition={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
        />
      ))}
    </div>
  )
}

export default AnimatedBackground

