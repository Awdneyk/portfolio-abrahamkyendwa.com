"use client";
import { useMemo } from "react";
import { TechIcon } from "@/icons";

const techStack = [
  { name: "Proteus", category: "simulation" },
  { name: "Multisim", category: "simulation" },
  { name: "TensorFlow", category: "ai" },
  { name: "Octave", category: "computation" },
  { name: "MATLAB", category: "computation" },
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Vercel", category: "deployment" },
  { name: "Tailwind CSS", category: "styling" },
  { name: "Figma", category: "design" },
  { name: "Claude", category: "ai" },
  { name: "ChatGPT", category: "ai" },
  { name: "Python", category: "programming" },
  { name: "C/C++", category: "programming" },
  { name: "Arduino IDE", category: "embedded" },
  { name: "Fritzing", category: "circuit" },
  { name: "VS Code", category: "development" },
  { name: "Notion", category: "productivity" }
];

interface TechStackBeltProps {
  className?: string;
}

export default function TechStackBelt({ className = "" }: TechStackBeltProps) {
  const duplicatedStack = useMemo(() => [...techStack, ...techStack, ...techStack], []);

  return (
    <div className={`relative overflow-hidden py-8 md:py-12 ${className}`}>
      {/* Liquid glass container with fade edges */}
      <div className="relative bg-white/5 backdrop-blur-xl border-y border-white/10 shadow-[0_4px_16px_rgba(255,255,255,0.08)]">
        {/* Left fade gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-black via-black/70 to-transparent z-10 pointer-events-none"></div>
        
        {/* Right fade gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-black via-black/70 to-transparent z-10 pointer-events-none"></div>
        
        {/* Glass overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
        
        {/* Scrolling content */}
        <div 
          className="tech-scroll-container flex gap-6 md:gap-8 py-6 md:py-8"
          style={{
            width: `${duplicatedStack.length * 160}px`,
          }}
        >
          {duplicatedStack.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex-shrink-0 flex items-center gap-3 px-4 py-2 md:px-6 md:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full shadow-sm text-white/90 text-sm md:text-base font-medium whitespace-nowrap select-none"
              style={{
                textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                minWidth: '150px'
              }}
            >
              <TechIcon name={tech.name} className="w-6 h-6 md:w-7 md:h-7 flex-shrink-0" />
              <span className="truncate">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}