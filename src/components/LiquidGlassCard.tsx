'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface LiquidGlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  glowIntensity?: 'low' | 'medium' | 'high';
}

const paddingMap = {
  sm: 'p-4',
  md: 'p-6', 
  lg: 'p-8',
  xl: 'p-10'
};

const glowMap = {
  low: 'shadow-[0_2px_12px_rgba(255,255,255,0.06)] hover:shadow-[0_4px_16px_rgba(255,255,255,0.1)]',
  medium: 'shadow-[0_4px_16px_rgba(255,255,255,0.08)] hover:shadow-[0_6px_20px_rgba(255,255,255,0.12)]',
  high: 'shadow-[0_6px_20px_rgba(255,255,255,0.1)] hover:shadow-[0_8px_24px_rgba(255,255,255,0.15)]'
};

export default function LiquidGlassCard({ 
  children, 
  className = '', 
  hover = true,
  padding = 'md',
  glowIntensity = 'medium' 
}: LiquidGlassCardProps) {
  const baseClasses = `
    relative overflow-hidden
    bg-white/10 backdrop-blur-xl
    border border-white/20
    rounded-2xl
    transition-all duration-300 ease-out
    ${paddingMap[padding]}
    ${glowMap[glowIntensity]}
  `;

  const hoverClasses = hover ? `
    hover:bg-white/15 hover:border-white/30
    hover:-translate-y-1
  ` : '';

  if (hover) {
    return (
      <motion.div
        className={`${baseClasses} ${hoverClasses} ${className}`}
        whileHover={{ 
          y: -2,
          transition: { duration: 0.15 }
        }}
        whileTap={{ y: 0 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
        {children}
      </motion.div>
    );
  }

  return (
    <div className={`${baseClasses} ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
      {children}
    </div>
  );
}