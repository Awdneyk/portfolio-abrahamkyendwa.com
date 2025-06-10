"use client";
import { motion, useAnimation } from "framer-motion";
import { useMemo, useEffect, useState } from "react";

const techStack = [
  {
    name: "TensorFlow",
    icon: (
      <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564.015-5.31zm21.416 5.311l-6.168-3.564v14.019L12.46 24V0l10.248 5.856v5.311z" fill="#FF6F00"/>
      </svg>
    ),
    bgColor: "bg-gradient-to-r from-orange-500/20 to-orange-600/20",
    borderColor: "border-orange-500/30",
    hoverBg: "rgba(251, 146, 60, 0.2)",
    hoverBorder: "rgba(251, 146, 60, 0.5)"
  },
  {
    name: "Octave",
    icon: (
      <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#0790C0"/>
      </svg>
    ),
    bgColor: "bg-gradient-to-r from-blue-500/20 to-blue-600/20",
    borderColor: "border-blue-500/30",
    hoverBg: "rgba(59, 130, 246, 0.2)",
    hoverBorder: "rgba(59, 130, 246, 0.5)"
  },
  {
    name: "MATLAB",
    icon: (
      <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.61 7.442s-1.505-.398-2.117.609c-.612 1.007-1.095 1.482-1.095 1.482s-.528.086-.87-.179c-.342-.265-.664-.85-.664-.85s-1.124-.086-1.535.225c-.411.311-.9.955-.9.955s-.535.088-.898-.152c-.363-.24-.726-.812-.726-.812s-1.165-.026-1.576.285c-.411.311-.9.955-.9.955s-.535.088-.898-.152c-.363-.24-.726-.812-.726-.812s-1.165-.026-1.576.285c-.411.311-.9.955-.9.955s-.535.088-.898-.152c-.363-.24-.726-.812-.726-.812s-1.165-.026-1.576.285c-.411.311-.9.955-.9.955s-.535.088-.898-.152c-.363-.24-.726-.812-.726-.812s-1.165-.026-1.576.285C.899 9.066.41 9.71.41 9.71l2.07 6.58 19.72-6.58c.21-.67.41-1.63.41-2.268z" fill="#E16737"/>
      </svg>
    ),
    bgColor: "bg-gradient-to-r from-orange-600/20 to-red-500/20",
    borderColor: "border-orange-600/30",
    hoverBg: "rgba(234, 88, 12, 0.2)",
    hoverBorder: "rgba(234, 88, 12, 0.5)"
  },
  {
    name: "Notion",
    icon: (
      <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.746c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933z" fill="#000000"/>
      </svg>
    ),
    bgColor: "bg-gradient-to-r from-gray-700/20 to-gray-800/20",
    borderColor: "border-gray-600/30",
    hoverBg: "rgba(75, 85, 99, 0.2)",
    hoverBorder: "rgba(75, 85, 99, 0.5)"
  },
  {
    name: "C++",
    icon: (
      <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.109-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79V11.61h-.79v.785h-.79v.79h.79v.785h.79v-.785h.79zm2.962 0h-.79V11.61h-.79v.785h-.79v.79h.79v.785h.79v-.785h.79z" fill="#00599C"/>
      </svg>
    ),
    bgColor: "bg-gradient-to-r from-blue-600/20 to-blue-700/20",
    borderColor: "border-blue-600/30",
    hoverBg: "rgba(37, 99, 235, 0.2)",
    hoverBorder: "rgba(37, 99, 235, 0.5)"
  },
  {
    name: "C#",
    icon: (
      <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0zM9.426 7.12c.974 0 1.81.35 2.426.943l1.44-1.674c-.9-.823-2.018-1.235-3.354-1.235-1.337 0-2.545.412-3.624 1.235C5.235 7.212 4.696 8.247 4.696 9.518c0 1.271.54 2.306 1.618 3.13 1.079.823 2.287 1.234 3.624 1.234 1.336 0 2.454-.41 3.354-1.234l-1.44-1.675c-.617.594-1.452.943-2.426.943-.974 0-1.84-.35-2.426-.943-.587-.594-.9-1.33-.9-2.118 0-.789.313-1.524.9-2.118.587-.594 1.452-.943 2.426-.943zm7.742.361h-.855v1.026h-.855v.684h.855v1.026h.684V9.19h.855v-.684h-.855V7.48h-.684zm2.565 0h-.855v1.026h-.855v.684h.855v1.026h.684V9.19h.855v-.684h-.855V7.48h-.684z" fill="#239120"/>
      </svg>
    ),
    bgColor: "bg-gradient-to-r from-green-500/20 to-green-600/20",
    borderColor: "border-green-500/30",
    hoverBg: "rgba(34, 197, 94, 0.2)",
    hoverBorder: "rgba(34, 197, 94, 0.5)"
  },
  {
    name: "Python",
    icon: (
      <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.20-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.20.35-.14.33-.10.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" fill="#3776ab"/>
      </svg>
    ),
    bgColor: "bg-gradient-to-r from-blue-500/20 to-yellow-400/20",
    borderColor: "border-blue-500/30",
    hoverBg: "rgba(59, 130, 246, 0.2)",
    hoverBorder: "rgba(59, 130, 246, 0.5)"
  },
  {
    name: "Claude",
    icon: (
      <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm-1 4v12h2V6h-2z" fill="#D97757"/>
      </svg>
    ),
    bgColor: "bg-gradient-to-r from-orange-400/20 to-orange-500/20",
    borderColor: "border-orange-400/30",
    hoverBg: "rgba(251, 146, 60, 0.2)",
    hoverBorder: "rgba(251, 146, 60, 0.5)"
  },
  {
    name: "ChatGPT",
    icon: (
      <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.078 6.078 0 0 0 6.283 2.9 5.952 5.952 0 0 0 2.248.193 6.098 6.098 0 0 0 8.413-4.062 5.989 5.989 0 0 0 4.016-2.9 6.13 6.13 0 0 0-.914-7.548ZM12.007 20.086a4.017 4.017 0 0 1-2.173-.614l-.22-.128-2.443 1.209A8.89 8.89 0 0 0 6.8 20.24l2.186-1.358-.3-.267a3.996 3.996 0 0 1-1.298-2.926 4.018 4.018 0 0 1 .597-2.13l.149-.264L6.8 11.937a8.89 8.89 0 0 0 .37-.313l1.334 1.348.264-.148a3.996 3.996 0 0 1 2.926-1.299c.762 0 1.507.221 2.13.598l.264.149 1.358-1.186a8.89 8.89 0 0 0 .313.37l-1.348 1.334.148.264a3.996 3.996 0 0 1 1.299 2.926 4.017 4.017 0 0 1-.614 2.173l-.128.22 1.209 2.443a8.89 8.89 0 0 0-.313.37l-1.358-2.186-.267.3a3.996 3.996 0 0 1-2.926 1.298Z" fill="#10A37F"/>
      </svg>
    ),
    bgColor: "bg-gradient-to-r from-green-400/20 to-teal-500/20",
    borderColor: "border-green-400/30",
    hoverBg: "rgba(52, 211, 153, 0.2)",
    hoverBorder: "rgba(52, 211, 153, 0.5)"
  }
];

interface TechStackBeltProps {
  className?: string;
}

export default function TechStackBelt({ className = "" }: TechStackBeltProps) {
  const duplicatedStack = useMemo(() => [...techStack, ...techStack], []);
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);

  const startAnimation = () => {
    controls.start({
      x: [-120 * techStack.length, 0],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 30,
        ease: "linear",
      },
    });
  };

  useEffect(() => {
    startAnimation();
  }, []);

  useEffect(() => {
    if (!isPaused) {
      startAnimation();
    }
  }, [isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
    controls.stop();
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };
  
  return (
    <div className={`overflow-hidden py-6 md:py-8 ${className}`}>
      <motion.div
        className="flex gap-4 md:gap-6 whitespace-nowrap will-change-transform"
        animate={controls}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          width: `${duplicatedStack.length * 180}px`,
        }}
      >
        {duplicatedStack.map((tech, index) => (
          <motion.div
            key={`${tech.name}-${index}`}
            className={`flex-shrink-0 flex items-center gap-2 px-3 py-2 md:px-4 md:py-2.5 ${tech.bgColor} backdrop-blur-sm border ${tech.borderColor} rounded-full shadow-md hover:shadow-lg transition-all duration-200`}
            whileHover={{
              scale: 1.05,
              backgroundColor: tech.hoverBg,
              borderColor: tech.hoverBorder,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
            }}
          >
            <div className="flex-shrink-0">
              {tech.icon}
            </div>
            <span className="text-xs md:text-sm font-medium text-white select-none pointer-events-none whitespace-nowrap">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}