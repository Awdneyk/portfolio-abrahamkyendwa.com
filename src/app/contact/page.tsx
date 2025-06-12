"use client";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";
import LiquidGlassCard from "@/components/LiquidGlassCard";
import AnimatedButton from "@/components/AnimatedButton";
import { staggerContainer, staggerItem } from "@/utils/animations";

export default function ContactPage() {
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
              Get in touch.
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Have a project in mind or want to discuss potential opportunities? 
              I&apos;d love to hear from you.
            </motion.p>
          </div>
        </AnimatedSection>

        {/* Contact Form Section */}
        <AnimatedSection className="py-16 bg-gradient-to-br from-gray-900 via-blue-900/40 to-gray-900" variant="fadeInUp">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-12"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={staggerItem}>
                <LiquidGlassCard padding="xl" glowIntensity="medium">
                  <h2 className="text-2xl font-bold mb-6 text-white">Send me a message</h2>
                  <ContactForm />
                </LiquidGlassCard>
              </motion.div>
              
              <motion.div variants={staggerItem} className="space-y-8">
                <LiquidGlassCard padding="xl" glowIntensity="medium">
                  <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <svg className="h-6 w-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-white">Email</h3>
                        <p className="mt-1 text-white/80">
                          <a href="mailto:abrahamkyendwa@gmail.com" className="hover:text-blue-400 transition-colors">
                            Abrahamkyendwa@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <svg className="h-6 w-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-white">Location</h3>
                        <p className="mt-1 text-white/80">
                          Nairobi, Kenya
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <svg className="h-6 w-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-white">Social Media</h3>
                        <div className="mt-1 space-y-2">
                          <p className="text-white/80">
                            <a href="https://linkedin.com/in/abrahamkyendwa" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                              LinkedIn
                            </a>
                          </p>
                          <p className="text-white/80">
                            <a href="https://github.com/Awdneyk" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                              GitHub
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </LiquidGlassCard>
                
                <LiquidGlassCard padding="xl" glowIntensity="medium">
                  <h2 className="text-2xl font-bold mb-6 text-white">Availability</h2>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                      <span className="text-white/90 font-medium">Currently available for internship opportunities</span>
                    </div>
                    <p className="text-white/80 leading-relaxed">
                      I&apos;m actively seeking internship positions in electrical engineering and power systems. 
                      My response time is typically within 24-48 hours.
                    </p>
                    <div className="pt-2">
                      <div className="flex items-center text-sm text-white/70">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Response time: 24-48 hours
                      </div>
                    </div>
                  </div>
                </LiquidGlassCard>
              </motion.div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Connect on LinkedIn CTA */}
        <AnimatedSection className="py-16 bg-gradient-to-br from-gray-900 via-purple-900/40 to-gray-900" variant="fadeInUp">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-between"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div 
                className="mb-6 sm:mb-0 text-center sm:text-left"
                variants={staggerItem}
              >
                <h2 className="text-2xl font-bold">Let&apos;s connect on LinkedIn</h2>
                <p className="text-gray-300 mt-2">Stay updated with my latest projects and insights</p>
              </motion.div>
              <motion.div variants={staggerItem}>
                <AnimatedButton
                  href="https://linkedin.com/in/abrahamkyendwa"
                  variant="primary"
                  size="lg"
                >
                  Connect on LinkedIn
                </AnimatedButton>
              </motion.div>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </PageTransition>
  );
}