"use client";
import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import { prefersReducedMotion } from "@/utils/animations";

interface PageTransitionProps {
  children: ReactNode;
  variant?: "fade" | "slide" | "scale";
}

const pageVariants: Record<string, Variants> = {
  fade: {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 }
  },
  slide: {
    initial: { opacity: 0, x: 100 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: -100 }
  },
  scale: {
    initial: { opacity: 0, scale: 0.9 },
    in: { opacity: 1, scale: 1 },
    out: { opacity: 0, scale: 1.1 }
  }
};

const pageTransition = {
  duration: 0.4,
  ease: "easeInOut"
};

export default function PageTransition({ children, variant = "fade" }: PageTransitionProps) {
  const shouldReduceMotion = prefersReducedMotion();
  const variants = pageVariants[variant];

  if (shouldReduceMotion) {
    return <div>{children}</div>;
  }

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={variants}
      transition={pageTransition}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}