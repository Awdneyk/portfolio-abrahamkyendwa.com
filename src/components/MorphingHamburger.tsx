"use client";
import { motion } from "framer-motion";

interface MorphingHamburgerProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export default function MorphingHamburger({ 
  isOpen, 
  onClick, 
  className = "" 
}: MorphingHamburgerProps) {
  return (
    <motion.button
      className={`relative w-8 h-8 flex flex-col justify-center items-center focus:outline-none ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle menu"
    >
      {/* Top line */}
      <motion.span
        className="absolute w-6 h-0.5 bg-current rounded-full"
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 0 : -6,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      
      {/* Middle line */}
      <motion.span
        className="absolute w-6 h-0.5 bg-current rounded-full"
        animate={{
          opacity: isOpen ? 0 : 1,
          x: isOpen ? -10 : 0,
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      />
      
      {/* Bottom line */}
      <motion.span
        className="absolute w-6 h-0.5 bg-current rounded-full"
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? 0 : 6,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      
      {/* Animated background circle */}
      <motion.div
        className="absolute inset-0 border border-current rounded-full"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isOpen ? 1 : 0,
          opacity: isOpen ? 0.2 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </motion.button>
  );
}

// Alternative morphing style - expand/collapse
export function ExpandingHamburger({ 
  isOpen, 
  onClick, 
  className = "" 
}: MorphingHamburgerProps) {
  return (
    <motion.button
      className={`relative w-8 h-8 flex flex-col justify-center items-center focus:outline-none ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle menu"
    >
      {/* Top line */}
      <motion.span
        className="w-6 h-0.5 bg-current rounded-full mb-1"
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 4 : 0,
          width: isOpen ? 24 : 18,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      
      {/* Middle line */}
      <motion.span
        className="w-6 h-0.5 bg-current rounded-full mb-1"
        animate={{
          opacity: isOpen ? 0 : 1,
          width: isOpen ? 0 : 24,
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      />
      
      {/* Bottom line */}
      <motion.span
        className="w-6 h-0.5 bg-current rounded-full"
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? -4 : 0,
          width: isOpen ? 24 : 18,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </motion.button>
  );
}