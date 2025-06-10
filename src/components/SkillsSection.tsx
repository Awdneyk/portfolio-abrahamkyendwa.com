"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, staggerItem } from "@/utils/animations";

interface Skill {
  name: string;
  percentage: number;
  category: string;
  icon?: string;
}

const skills: Skill[] = [
  { name: "Python", percentage: 90, category: "Programming", icon: "🐍" },
  { name: "C++", percentage: 85, category: "Programming", icon: "⚡" },
  { name: "C#", percentage: 80, category: "Programming", icon: "💎" },
  { name: "MATLAB", percentage: 88, category: "Engineering", icon: "📊" },
  { name: "TensorFlow", percentage: 75, category: "AI/ML", icon: "🧠" },
  { name: "Circuit Design", percentage: 92, category: "Engineering", icon: "🔌" },
  { name: "Power Systems", percentage: 88, category: "Engineering", icon: "⚡" },
  { name: "Control Systems", percentage: 85, category: "Engineering", icon: "🎛️" }
];

const skillCategories = ["Programming", "Engineering", "AI/ML"];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across programming, 
            engineering, and emerging technologies.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category}
              variants={staggerItem}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50"
            >
              <h3 className="text-xl font-semibold mb-6 text-blue-400">{category}</h3>
              <div className="space-y-4">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      index={index}
                      isInView={isInView}
                    />
                  ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

interface SkillBarProps {
  skill: Skill;
  index: number;
  isInView: boolean;
}

function SkillBar({ skill, index, isInView }: SkillBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg">{skill.icon}</span>
          <span className="font-medium text-gray-100">{skill.name}</span>
        </div>
        <motion.span
          className="text-sm font-semibold text-blue-400"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
        >
          {skill.percentage}%
        </motion.span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: skill.percentage / 100 } : { scaleX: 0 }}
          transition={{ 
            duration: 1.2, 
            delay: 0.3 + index * 0.1,
            ease: "easeOut"
          }}
          style={{ originX: 0 }}
        />
      </div>
    </div>
  );
}