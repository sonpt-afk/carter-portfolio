"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Braces,
  Terminal,
  Cpu,
  Zap,
  LucideIcon,
} from "lucide-react";

const icons = [Code, Database, Braces, Terminal, Cpu, Zap];

const colors = [
  "text-brand-cyan",
  "text-brand-coral",
  "text-brand-lime",
  "text-brand-purple",
];

interface AnimatedIconProps {
  Icon: LucideIcon;
  initialPosition: { x: number; y: number };
  color: string;
  delay: number;
}

const AnimatedIcon = ({ Icon, initialPosition, color, delay }: AnimatedIconProps) => {
  const [position, setPosition] = useState(initialPosition);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition({
        x: Math.random() * (window.innerWidth - 100),
        y: Math.random() * (window.innerHeight - 100),
      });
    }, Math.random() * 8000 + 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ ...initialPosition, opacity: 0 }}
      animate={{ ...position, opacity: 0.08 }}
      transition={{
        duration: 8,
        ease: "easeInOut",
        delay: delay,
      }}
      className={`absolute ${color}`}
    >
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <Icon size={40} strokeWidth={1.5} />
      </motion.div>
    </motion.div>
  );
};

const AnimatedBackground = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-coral/10 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating icons */}
      {icons.map((Icon, index) => (
        <AnimatedIcon
          key={index}
          Icon={Icon}
          color={colors[index % colors.length]}
          delay={index * 0.5}
          initialPosition={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
