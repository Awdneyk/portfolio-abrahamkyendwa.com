"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface FloatingActionButtonProps {
  showAfterScroll?: number;
  className?: string;
}

export default function FloatingActionButton({ 
  showAfterScroll = 300,
  className = ""
}: FloatingActionButtonProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > showAfterScroll) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [showAfterScroll]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const actions = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10m0 0V5a2 2 0 00-2-2H9a2 2 0 00-2 2v3m0 0v8a2 2 0 002 2h6a2 2 0 002-2V8M9 12h6" />
        </svg>
      ),
      label: "Download CV",
      action: () => {
        // Add download logic here
        console.log("Download CV");
      }
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Contact Me",
      action: () => {
        window.location.href = "/contact";
      }
    }
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
          <div className="flex flex-col items-end space-y-3">
            {/* Action buttons */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  className="flex flex-col space-y-2"
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 20 }}
                  transition={{ duration: 0.2 }}
                >
                  {actions.map((action, index) => (
                    <motion.button
                      key={action.label}
                      className="flex items-center space-x-3 bg-gray-800/90 backdrop-blur-sm text-white px-4 py-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors group"
                      onClick={action.action}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                      whileHover={{ scale: 1.05, x: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-sm font-medium whitespace-nowrap group-hover:text-blue-400 transition-colors">
                        {action.label}
                      </span>
                      <div className="text-gray-300 group-hover:text-blue-400 transition-colors">
                        {action.icon}
                      </div>
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main FAB */}
            <motion.div className="relative">
              {/* Pulse ring */}
              <motion.div
                className="absolute inset-0 rounded-full bg-blue-500/30"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 0, 0.7]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Main button */}
              <motion.button
                className="relative w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center group"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 260, 
                  damping: 20 
                }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: isExpanded ? 45 : 0
                }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  if (isExpanded) {
                    setIsExpanded(false);
                  } else {
                    setIsExpanded(true);
                    // Auto-collapse after a delay
                    setTimeout(() => setIsExpanded(false), 5000);
                  }
                }}
                onDoubleClick={scrollToTop}
              >
                <motion.div
                  animate={{ rotate: isExpanded ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isExpanded ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  )}
                </motion.div>

                {/* Tooltip */}
                <motion.div
                  className="absolute right-full mr-3 bg-gray-800 text-white text-sm px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  initial={{ opacity: 0, x: 10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                >
                  {isExpanded ? "Close menu" : "Double-tap: scroll to top"}
                </motion.div>
              </motion.button>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}