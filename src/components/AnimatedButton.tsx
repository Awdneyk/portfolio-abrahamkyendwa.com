"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  type?: "button" | "submit" | "reset";
}

const variants = {
  primary: "bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/15 hover:border-white/30 shadow-[0_4px_16px_rgba(255,255,255,0.08)] hover:shadow-[0_6px_20px_rgba(255,255,255,0.12)]",
  secondary: "bg-white/5 backdrop-blur-xl border border-white/10 text-white/80 hover:bg-white/10 hover:border-white/20 shadow-[0_2px_12px_rgba(255,255,255,0.06)] hover:shadow-[0_4px_16px_rgba(255,255,255,0.1)]",
  outline: "bg-transparent backdrop-blur-xl border border-white/30 text-white/90 hover:bg-white/10 hover:border-white/40 shadow-[0_2px_12px_rgba(255,255,255,0.06)] hover:shadow-[0_4px_16px_rgba(255,255,255,0.1)]",
  ghost: "bg-white/5 backdrop-blur-xl text-white/80 hover:bg-white/10 hover:text-white"
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base", 
  lg: "px-8 py-4 text-lg"
};

export default function AnimatedButton({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  href,
  disabled = false,
  loading = false,
  icon,
  iconPosition = "left",
  type = "button"
}: AnimatedButtonProps) {
  const baseClasses = `
    relative inline-flex items-center justify-center gap-2 overflow-hidden
    font-medium rounded-2xl transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-transparent
    disabled:opacity-50 disabled:cursor-not-allowed
    ${variants[variant]} ${sizes[size]} ${className}
  `;

  const content = (
    <>
      {loading && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-current rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          exit={{ opacity: 0 }}
        />
      )}
      
      {loading && (
        <motion.div
          className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      )}
      
      {!loading && icon && iconPosition === "left" && (
        <motion.span
          initial={{ x: 0 }}
          whileHover={{ x: -2 }}
          transition={{ duration: 0.2 }}
        >
          {icon}
        </motion.span>
      )}
      
      {!loading && (
        <motion.span
          initial={{ y: 0 }}
          whileHover={{ y: -1 }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.span>
      )}
      
      {!loading && icon && iconPosition === "right" && (
        <motion.span
          initial={{ x: 0 }}
          whileHover={{ x: 2 }}
          transition={{ duration: 0.2 }}
        >
          {icon}
        </motion.span>
      )}
      
      {/* Glass overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none rounded-2xl" />
      
      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        whileTap={{
          background: "radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)"
        }}
        transition={{ duration: 0.3 }}
      />
    </>
  );

  const motionProps = {
    whileHover: disabled || loading ? {} : { y: -2, scale: 1.02 },
    whileTap: disabled || loading ? {} : { y: 0, scale: 0.98 },
    transition: { duration: 0.15 }
  };

  if (href && !disabled) {
    return (
      <motion.a
        href={href}
        className={baseClasses}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={baseClasses}
      onClick={onClick}
      disabled={disabled || loading}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
}

// Icon components for common use cases
export const ArrowRightIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export const DownloadIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

export const ExternalLinkIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);