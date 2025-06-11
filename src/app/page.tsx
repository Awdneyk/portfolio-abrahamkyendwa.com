"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import TechStackBelt from "@/components/TechStackBelt";
import AnimatedSection from "@/components/AnimatedSection";
import SkillsSection from "@/components/SkillsSection";
import Timeline from "@/components/Timeline";
import AnimatedButton, { ArrowRightIcon, ExternalLinkIcon } from "@/components/AnimatedButton";
import ParallaxSection from "@/components/ParallaxSection";
import LiquidGlassCard from "@/components/LiquidGlassCard";
import { staggerContainer, staggerItem } from "@/utils/animations";

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 flex items-center overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20"></div>
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h1 
                  className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  I&apos;m Abraham.
                </motion.h1>
                <motion.h2 
                  className="text-2xl md:text-4xl mb-8 text-blue-100 font-semibold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Electrical Engineering Student
                </motion.h2>
                <motion.p 
                  className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Passionate about creating innovative electrical solutions through 
                  power systems, circuit design, and automation technologies. 
                  This portfolio showcases my engineering journey and technical expertise.
                </motion.p>
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={staggerItem}>
                    <AnimatedButton
                      href="/projects"
                      icon={<ArrowRightIcon />}
                      iconPosition="right"
                      size="lg"
                    >
                      View My Work
                    </AnimatedButton>
                  </motion.div>
                  <motion.div variants={staggerItem}>
                    <AnimatedButton
                      href="/contact"
                      variant="outline"
                      icon={<ExternalLinkIcon />}
                      iconPosition="right"
                      size="lg"
                    >
                      Get In Touch
                    </AnimatedButton>
                  </motion.div>
                </motion.div>
              </div>
              <motion.div 
                className="flex justify-center md:justify-end"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.7,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  {/* Glowing ring effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-transparent blur-2xl"></div>
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10"></div>
                    <Image 
                      src="/profile.jpg" 
                      alt="Abraham" 
                      width={320} 
                      height={320}
                      className="object-cover relative z-10"
                      priority
                    />
                  </div>
                  {/* Floating elements */}
                  <motion.div 
                    className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400/30 rounded-full blur-sm"
                    animate={{ 
                      y: [0, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div 
                    className="absolute -bottom-6 -left-6 w-6 h-6 bg-purple-400/30 rounded-full blur-sm"
                    animate={{ 
                      y: [0, 10, 0],
                      scale: [1, 0.9, 1]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-12 bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              className="text-2xl md:text-3xl font-bold text-center mb-8 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Tools I Use
            </motion.h2>
          </div>
          <TechStackBelt className="bg-gray-950" />
        </section>

        {/* Expertise Section */}
        <AnimatedSection className="py-16 bg-gradient-to-br from-gray-900 via-purple-900/40 to-gray-900" variant="fadeInUp">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              className="section-heading text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              My Expertise
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Expertise Card 1 */}
              <motion.div variants={staggerItem}>
                <LiquidGlassCard padding="lg" glowIntensity="medium">
                  <motion.div 
                    className="mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-white">Power Systems</h3>
                  <p className="text-white/80">
                    Designing and optimizing electrical power systems for efficiency, 
                    reliability, and safety across residential and industrial applications.
                  </p>
                </LiquidGlassCard>
              </motion.div>

              {/* Expertise Card 2 */}
              <motion.div variants={staggerItem}>
                <LiquidGlassCard padding="lg" glowIntensity="medium">
                  <motion.div 
                    className="mb-4"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-white">Circuit Design</h3>
                  <p className="text-white/80">
                    Creating custom circuit solutions for complex problems, 
                    from analog to digital and everything in between.
                  </p>
                </LiquidGlassCard>
              </motion.div>

              {/* Expertise Card 3 */}
              <motion.div variants={staggerItem}>
                <LiquidGlassCard padding="lg" glowIntensity="medium">
                  <motion.div 
                    className="mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-white">Automation & Control</h3>
                  <p className="text-white/80">
                    Implementing smart control systems and automation solutions 
                    that enhance efficiency and precision in various environments.
                  </p>
                </LiquidGlassCard>
              </motion.div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Skills Section */}
        <SkillsSection />

        {/* Timeline Section */}
        <Timeline />

        {/* Featured Projects Preview */}
        <ParallaxSection className="py-16 bg-gradient-to-br from-gray-900 via-blue-900/40 to-gray-900" offset={30}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="flex justify-between items-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold">Featured Projects</h2>
              <Link href="/projects" className="text-blue-400 hover:text-blue-300">
                View all projects →
              </Link>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Project Preview 1 */}
              <LiquidGlassCard className="overflow-hidden" padding="lg" glowIntensity="medium">
                <div className="aspect-video relative bg-gray-800/30 rounded-xl overflow-hidden mb-6">
                  {/* Placeholder for project image */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <span>Project Image</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Smart Power Grid Optimization</h3>
                  <p className="text-white/80 mb-4">
                    Developed an intelligent system to optimize power distribution and reduce energy losses.
                  </p>
                  <Link href="/projects#smart-grid" className="text-white/90 hover:text-white transition-colors duration-200 flex items-center gap-2">
                    Learn more
                    <span className="transform transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </LiquidGlassCard>

              {/* Project Preview 2 */}
              <LiquidGlassCard className="overflow-hidden" padding="lg" glowIntensity="medium">
                <div className="aspect-video relative bg-gray-800/30 rounded-xl overflow-hidden mb-6">
                  {/* Placeholder for project image */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <span>Project Image</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Renewable Energy Integration</h3>
                  <p className="text-white/80 mb-4">
                    Created a system for seamlessly integrating renewable energy sources into existing power networks.
                  </p>
                  <Link href="/projects#renewable-energy" className="text-white/90 hover:text-white transition-colors duration-200 flex items-center gap-2">
                    Learn more
                    <span className="transform transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </LiquidGlassCard>
            </div>
          </div>
        </ParallaxSection>
      </div>
    </PageTransition>
  );
}