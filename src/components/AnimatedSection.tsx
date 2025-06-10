"use client";
import { ReactNode } from "react";
import { motion, Variants, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, prefersReducedMotion, reduceMotion } from "@/utils/animations";

type AnimationVariant = "fadeInUp" | "fadeInDown" | "fadeInLeft" | "fadeInRight" | "scaleIn" | "slideUp";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: AnimationVariant;
  duration?: number;
  once?: boolean;
  threshold?: number;
};

const variantMap: Record<AnimationVariant, Variants> = {
  fadeInUp: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -60 },
    visible: { opacity: 1, y: 0 }
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 }
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 }
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  },
  slideUp: {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }
};

export default function AnimatedSection({ 
  children, 
  className = "", 
  delay = 0,
  variant = "fadeInUp",
  duration = 0.6,
  once = true,
  threshold = 0.1
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });
  
  const shouldReduceMotion = prefersReducedMotion();
  const animations = shouldReduceMotion ? reduceMotion(variantMap[variant]) : variantMap[variant];

  return (
    <motion.section
      ref={ref}
      className={className}
      variants={animations}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ 
        duration: shouldReduceMotion ? 0.01 : duration, 
        delay: shouldReduceMotion ? 0 : delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.section>
  );
}