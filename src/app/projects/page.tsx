"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedButton from "@/components/AnimatedButton";
import LiquidGlassCard from "@/components/LiquidGlassCard";
import { staggerContainer, staggerItem } from "@/utils/animations";

// Real projects by Abraham Kyendwa
const projects = [
  {
    id: "ticketbooth-app",
    title: "TicketBooth Application",
    description:
      "Currently developing a comprehensive seat mapping and ticketing application with real-time booking capabilities, intuitive user interface design, and seamless payment integration.",
    image: "/projects/ticketbooth.jpg",
    tags: ["Full-Stack Development", "Real-time Systems", "UI/UX Design"],
    challenge: "Event organizers needed a modern, intuitive ticketing system that could handle complex venue layouts, real-time seat availability, and provide a smooth user experience for both organizers and customers.",
    solution: "Building a full-stack application with interactive seat mapping, real-time availability updates, secure payment processing, and an admin dashboard for event management.",
    outcome: "Currently in development - aiming to create a user-friendly platform that simplifies event ticketing while providing powerful management tools for organizers.",
    technologies: ["React", "Node.js", "Socket.io", "PostgreSQL", "Stripe API"]
  },
  {
    id: "stem-player-device",
    title: "Stem Player Inspired Device",
    description:
      "Currently working on a hardware music device inspired by Kanye West's Stem Player, focusing on audio processing, user interaction design, and innovative music manipulation capabilities.",
    image: "/projects/stem-player.jpg",
    tags: ["Hardware Design", "Audio Processing", "Embedded Systems"],
    challenge: "Creating an affordable, user-friendly music manipulation device that allows real-time audio stem separation and creative mixing capabilities for both casual users and music enthusiasts.",
    solution: "Designing custom hardware with embedded audio processing, tactile controls, and wireless connectivity to enable intuitive music manipulation and creative expression.",
    outcome: "Currently in development - prototyping phase focusing on audio quality, user interface design, and manufacturing feasibility.",
    technologies: ["Embedded C++", "Audio DSP", "PCB Design", "Bluetooth", "Touch Sensors"]
  },
  {
    id: "silverbullet-algorithm",
    title: "Silverbullet Algorithm",
    description:
      "Developed a sophisticated trading strategy that exploits algorithmic price movements during high-liquidity time windows by entering on retracements in the direction of the dominant trend.",
    image: "/projects/trading-algorithm.jpg",
    tags: ["Algorithmic Trading", "Machine Learning", "Financial Technology"],
    challenge: "Developing a reliable trading algorithm that could identify and capitalize on predictable market patterns while managing risk in volatile trading conditions.",
    solution: "Created an algorithm that analyzes market liquidity, identifies Fair Value Gaps (FVGs), and executes trades based on trend direction and retracement patterns with built-in risk management.",
    outcome: "Successfully backtested strategy showing consistent performance in high-liquidity market conditions with improved risk-adjusted returns.",
    technologies: ["Python", "pandas", "NumPy", "TradingView Pine Script", "MetaTrader API"]
  },
  {
    id: "ml-pattern-analysis",
    title: "ML Pattern Analysis Tool",
    description:
      "Created a machine learning tool that analyzes chart patterns, performs historical lookbacks to find similar patterns, and advises users on optimal trading strategies based on historical performance.",
    image: "/projects/ml-analysis.jpg",
    tags: ["Machine Learning", "Pattern Recognition", "Data Analysis"],
    challenge: "Traders needed an automated way to identify profitable chart patterns and receive data-driven advice on trading decisions based on historical pattern performance.",
    solution: "Developed a machine learning system that uses computer vision and statistical analysis to identify chart patterns, match them with historical data, and provide probability-based trading recommendations.",
    outcome: "Created a tool that successfully identifies patterns with high accuracy and provides actionable insights, helping users make more informed trading decisions.",
    technologies: ["Python", "TensorFlow", "OpenCV", "Scikit-learn", "Matplotlib", "yfinance"]
  }
];

export default function ProjectsPage() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Header */}
        <AnimatedSection className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/40 to-gray-900" variant="fadeInUp">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              The work to reaching delightful experiences.
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A showcase of my engineering projects and the innovative solutions they provide.
            </motion.p>
          </div>
        </AnimatedSection>

        {/* Project Methodology */}
        <AnimatedSection className="py-16 bg-gradient-to-br from-gray-900 via-blue-900/40 to-gray-900" variant="fadeInUp">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">The end in mind</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                By confidently answering these questions, we can better position 
                ourselves and set a clear direction towards our end goal. This 
                approach helps reduce risks, increase value to users, and unlock the 
                full potential of a higher ROI.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={staggerItem}>
                <LiquidGlassCard padding="lg" glowIntensity="medium">
                  <h3 className="text-xl font-bold mb-4 text-white">Problem Definition</h3>
                  <p className="text-white/80">
                    Every project begins with clearly understanding the problem we&apos;re 
                    solving and for whom. This clarity guides all subsequent decisions.
                  </p>
                </LiquidGlassCard>
              </motion.div>

              <motion.div variants={staggerItem}>
                <LiquidGlassCard padding="lg" glowIntensity="medium">
                  <h3 className="text-xl font-bold mb-4 text-white">Systems Approach</h3>
                  <p className="text-white/80">
                    I consider how each component interacts within the larger system, 
                    ensuring holistic solutions that address current needs while 
                    allowing for future expansion.
                  </p>
                </LiquidGlassCard>
              </motion.div>

              <motion.div variants={staggerItem}>
                <LiquidGlassCard padding="lg" glowIntensity="medium">
                  <h3 className="text-xl font-bold mb-4 text-white">Iterative Refinement</h3>
                  <p className="text-white/80">
                    Through prototyping, testing, and refinement, I continuously 
                    improve designs to ensure optimal performance, efficiency, and 
                    user satisfaction.
                  </p>
                </LiquidGlassCard>
              </motion.div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Detailed Featured Project */}
        <section className="py-16 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12">Featured Project</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                  <span className="text-gray-500">Smart Grid Project Image</span>
                </div>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {projects[0].tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 text-xs font-medium bg-blue-900/30 text-blue-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-4">{projects[0].title}</h3>
                <p className="text-gray-300 mb-6">{projects[0].description}</p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-blue-400">Challenge</h4>
                    <p className="text-gray-300">{projects[0].challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-blue-400">Solution</h4>
                    <p className="text-gray-300">{projects[0].solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-blue-400">Outcome</h4>
                    <p className="text-gray-300">{projects[0].outcome}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-blue-400">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {projects[0].technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <AnimatedSection className="py-16" variant="fadeInUp">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              className="text-3xl font-bold mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              All Projects
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {projects.map((project, index) => (
                <motion.div key={project.id} variants={staggerItem}>
                  <ProjectCard
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    tags={project.tags}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Engineering Approach */}
        <section className="py-16 bg-gradient-to-br from-gray-900 via-violet-900/40 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Engineering Approach</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                My approach to electrical engineering combines theoretical knowledge with practical application, always focused on creating sustainable and efficient solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <LiquidGlassCard padding="lg" glowIntensity="medium">
                <h3 className="text-xl font-bold mb-4 text-white">First Principles Thinking</h3>
                <p className="text-white/80 mb-4">
                  I approach complex problems by breaking them down to their fundamental truths and then building solutions from the ground up. This methodology helps me create innovative solutions that aren&apos;t constrained by conventional thinking.
                </p>
                <p className="text-white/80">
                  By questioning assumptions and focusing on what is physically possible, I&apos;ve been able to bypass traditional constraints and develop more efficient electrical systems.
                </p>
              </LiquidGlassCard>
              
              <LiquidGlassCard padding="lg" glowIntensity="medium">
                <h3 className="text-xl font-bold mb-4 text-white">Sustainable Engineering</h3>
                <p className="text-white/80 mb-4">
                  I firmly believe that electrical engineering has a crucial role to play in creating a more sustainable future. Energy efficiency and reduced environmental impact are core considerations in all my projects.
                </p>
                <p className="text-white/80">
                  From material selection to energy optimization, I integrate sustainability principles throughout the design and implementation process, creating solutions that are both technically excellent and environmentally responsible.
                </p>
              </LiquidGlassCard>
            </div>
          </div>
        </section>

        {/* Project Timeline */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12">Project Timeline</h2>
            
            <div className="relative border-l-2 border-gray-700 ml-4 md:ml-8 pl-8 pb-8">
              {/* Timeline Item 1 */}
              <div className="mb-12 relative">
                <div className="absolute -left-[41px] mt-1.5 h-6 w-6 rounded-full border-4 border-gray-900 bg-blue-400"></div>
                <div>
                  <h3 className="text-xl font-bold">TicketBooth Application & Stem Player Device</h3>
                  <p className="text-sm text-gray-400 mb-4">2025 - Present</p>
                  <p className="text-gray-300">
                    Currently developing two major projects: a comprehensive seat mapping and ticketing 
                    application with real-time capabilities, and a hardware music device inspired by the 
                    Stem Player with advanced audio processing features.
                  </p>
                </div>
              </div>
              
              {/* Timeline Item 2 */}
              <div className="mb-12 relative">
                <div className="absolute -left-[41px] mt-1.5 h-6 w-6 rounded-full border-4 border-gray-900 bg-blue-400"></div>
                <div>
                  <h3 className="text-xl font-bold">Silverbullet Algorithm</h3>
                  <p className="text-sm text-gray-400 mb-4">2024</p>
                  <p className="text-gray-300">
                    Developed a sophisticated trading strategy that exploits algorithmic price movements 
                    during high-liquidity time windows, focusing on Fair Value Gaps and trend-based 
                    retracement patterns with robust risk management.
                  </p>
                </div>
              </div>
              
              {/* Timeline Item 3 */}
              <div className="mb-12 relative">
                <div className="absolute -left-[41px] mt-1.5 h-6 w-6 rounded-full border-4 border-gray-900 bg-blue-400"></div>
                <div>
                  <h3 className="text-xl font-bold">ML Pattern Analysis Tool</h3>
                  <p className="text-sm text-gray-400 mb-4">2024</p>
                  <p className="text-gray-300">
                    Created a machine learning tool that analyzes chart patterns, performs historical 
                    lookbacks to find similar patterns, and provides data-driven trading advice based on 
                    statistical analysis and pattern recognition.
                  </p>
                </div>
              </div>
              
              {/* Timeline Item 4 */}
              <div className="relative">
                <div className="absolute -left-[41px] mt-1.5 h-6 w-6 rounded-full border-4 border-gray-900 bg-blue-400"></div>
                <div>
                  <h3 className="text-xl font-bold">Started University Journey</h3>
                  <p className="text-sm text-gray-400 mb-4">2021</p>
                  <p className="text-gray-300">
                    Began pursuing Bachelor of Science in Electrical and Electronic Engineering at 
                    University of Nairobi, focusing on power systems, control theory, and signal processing 
                    while developing practical programming and analysis skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Interested in working together?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              I&apos;m always open to discussing new projects, innovative ideas, and opportunities to create impactful electrical engineering solutions.
            </p>
            <AnimatedButton
              href="/contact"
              size="lg"
            >
              Get in Touch
            </AnimatedButton>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}