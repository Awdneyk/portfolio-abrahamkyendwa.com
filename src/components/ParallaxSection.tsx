"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  offset?: number;
  className?: string;
}

export default function ParallaxSection({ 
  children, 
  offset = 30,
  className = ""
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div
        style={{ y, willChange: 'transform' }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}

// Background parallax component
export function ParallaxBackground({ 
  children, 
  speed = 0.3,
  className = ""
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 800 * speed]);

  return (
    <motion.div
      style={{ y, willChange: 'transform' }}
      className={`absolute inset-0 ${className}`}
    >
      {children}
    </motion.div>
  );
}