"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { timelineContainer, timelineItem } from "@/utils/animations";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  category: "education" | "experience" | "project";
  icon: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "2024",
    title: "Advanced Power Systems Project",
    description: "Designed and implemented a smart grid optimization system using machine learning algorithms to reduce energy losses by 15%.",
    category: "project",
    icon: "⚡"
  },
  {
    year: "2023",
    title: "Electrical Engineering Student",
    description: "Currently pursuing Bachelor's degree with focus on power systems, control theory, and renewable energy integration.",
    category: "education", 
    icon: "🎓"
  },
  {
    year: "2023",
    title: "Renewable Energy Integration System",
    description: "Developed a comprehensive system for seamlessly integrating solar and wind energy sources into existing power networks.",
    category: "project",
    icon: "🌱"
  },
  {
    year: "2022",
    title: "Industrial Automation Internship",
    description: "Worked on PLC programming and SCADA systems for manufacturing process optimization, gaining hands-on industry experience.",
    category: "experience",
    icon: "🏭"
  },
  {
    year: "2022",
    title: "Smart Home Automation",
    description: "Created an IoT-based home automation system with energy monitoring, security features, and mobile app control.",
    category: "project",
    icon: "🏠"
  }
];

const categoryColors = {
  education: "bg-blue-500",
  experience: "bg-green-500", 
  project: "bg-purple-500"
};

const categoryLabels = {
  education: "Education",
  experience: "Experience",
  project: "Project"
};

export default function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="py-20 bg-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Journey</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A timeline of my educational milestones, professional experiences, and key projects.
          </p>
        </motion.div>

        <motion.div
          variants={timelineContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline line */}
          <motion.div
            className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ originY: 0 }}
          />

          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={`${event.year}-${index}`}
                variants={timelineItem}
                className="relative flex items-start"
              >
                {/* Timeline dot */}
                <motion.div
                  className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-4 border-gray-900 ${categoryColors[event.category]} shadow-lg`}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.3 + index * 0.15,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                >
                  <span className="text-2xl">{event.icon}</span>
                </motion.div>

                {/* Content card */}
                <motion.div
                  className="ml-8 flex-1 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 shadow-lg"
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.4 + index * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{
                    y: -4,
                    transition: { duration: 0.15 }
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl font-bold text-blue-400">{event.year}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${categoryColors[event.category]}`}>
                      {categoryLabels[event.category]}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{event.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{event.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}