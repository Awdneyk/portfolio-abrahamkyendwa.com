import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                I'm Abraham.
              </h1>
              <h2 className="text-2xl md:text-3xl mb-8">
                Currently studying to be an electrical engineer.
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                This portfolio showcases my engineering experience, methods, and 
                outcomes in creating innovative electrical solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link 
                  href="/projects" 
                  className="button"
                >
                  View My Work
                </Link>
                <Link 
                  href="/contact" 
                  className="button bg-transparent border border-white hover:bg-white hover:text-black"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative w-64 h-64 md:w-72 md:h-72">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-gray-800">
                  <Image 
                    src="/profile.jpg" 
                    alt="John Smith" 
                    width={300} 
                    height={300}
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-16">My Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Expertise Card 1 */}
            <div className="card p-8">
              <div className="mb-4">
                <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Power Systems</h3>
              <p className="text-gray-300">
                Designing and optimizing electrical power systems for efficiency, 
                reliability, and safety across residential and industrial applications.
              </p>
            </div>

            {/* Expertise Card 2 */}
            <div className="card p-8">
              <div className="mb-4">
                <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Circuit Design</h3>
              <p className="text-gray-300">
                Creating custom circuit solutions for complex problems, 
                from analog to digital and everything in between.
              </p>
            </div>

            {/* Expertise Card 3 */}
            <div className="card p-8">
              <div className="mb-4">
                <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Automation & Control</h3>
              <p className="text-gray-300">
                Implementing smart control systems and automation solutions 
                that enhance efficiency and precision in various environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <Link href="/projects" className="text-blue-400 hover:text-blue-300">
              View all projects →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Preview 1 */}
            <div className="card hover:transform hover:scale-[1.02] transition-all">
              <div className="aspect-video relative bg-gray-800">
                {/* Placeholder for project image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <span>Project Image</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Smart Power Grid Optimization</h3>
                <p className="text-gray-300 mb-4">
                  Developed an intelligent system to optimize power distribution and reduce energy losses.
                </p>
                <Link href="/projects#smart-grid" className="text-blue-400 hover:text-blue-300">
                  Learn more →
                </Link>
              </div>
            </div>

            {/* Project Preview 2 */}
            <div className="card hover:transform hover:scale-[1.02] transition-all">
              <div className="aspect-video relative bg-gray-800">
                {/* Placeholder for project image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <span>Project Image</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Renewable Energy Integration</h3>
                <p className="text-gray-300 mb-4">
                  Created a system for seamlessly integrating renewable energy sources into existing power networks.
                </p>
                <Link href="/projects#renewable-energy" className="text-blue-400 hover:text-blue-300">
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}