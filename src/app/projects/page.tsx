"use client";
import Link from "next/link";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import PageTransition from "@/components/PageTransition";

// This could be fetched from a database or API in a real application
const projects = [
  {
    id: "smart-grid",
    title: "Smart Power Grid Optimization",
    description:
      "Developed an intelligent system that uses machine learning algorithms to predict and optimize power distribution across the grid, resulting in a 15% reduction in energy losses and improved reliability during peak usage times.",
    image: "/projects/smart-grid.jpg",
    tags: ["Power Systems", "Machine Learning", "Energy Efficiency"],
    challenge: "Existing power grid infrastructure faced significant energy losses during peak usage periods and lacked dynamic response capabilities to handle fluctuating demand patterns.",
    solution: "Implemented a machine learning system that analyzes historical usage data, weather patterns, and real-time grid metrics to dynamically adjust distribution parameters and optimize power flow.",
    outcome: "Achieved 15% reduction in energy losses, improved grid stability by 22%, and reduced maintenance costs by implementing predictive maintenance based on real-time monitoring.",
    technologies: ["TensorFlow", "MATLAB", "Power System Simulator", "IoT Sensors"]
  },
  {
    id: "renewable-energy",
    title: "Renewable Energy Integration",
    description:
      "Created a hybrid controller system that seamlessly integrates solar and wind energy sources into existing power networks, with intelligent load balancing and storage management capabilities.",
    image: "/projects/renewable-energy.jpg",
    tags: ["Renewable Energy", "Control Systems", "Power Electronics"],
    challenge: "Intermittent nature of renewable energy sources created stability issues when attempting to integrate them into traditional power networks at scale.",
    solution: "Designed a hybrid controller that manages the transition between renewable and traditional energy sources, integrating battery storage systems to buffer supply fluctuations and implementing load prediction algorithms.",
    outcome: "Enabled 40% renewable energy penetration in a previously fossil-fuel dependent industrial facility while maintaining operational stability and reducing carbon emissions by 12,000 tons annually.",
    technologies: ["Power Electronics", "SCADA Systems", "Battery Management Systems", "Microcontrollers"]
  },
  {
    id: "industrial-automation",
    title: "Industrial Automation Suite",
    description:
      "Designed and implemented a comprehensive automation solution for manufacturing facilities, including custom PCB design, PLC programming, and SCADA system integration.",
    image: "/projects/industrial-automation.jpg",
    tags: ["Automation", "PCB Design", "PLC", "Industrial IoT"],
    challenge: "Manufacturing client was experiencing significant production inefficiencies and quality control issues due to outdated manual processes and disconnected control systems.",
    solution: "Created a unified automation system with custom-designed sensor arrays, central PLC control architecture, and a comprehensive SCADA interface that provides real-time monitoring and control capabilities.",
    outcome: "Increased production throughput by 35%, reduced defect rates by 27%, and improved worker safety metrics through automated hazard detection and emergency response systems.",
    technologies: ["Siemens S7 PLC", "Altium Designer", "Industrial IoT Gateways", "HMI Interfaces"]
  },
  {
    id: "smart-home",
    title: "Smart Home Energy Management",
    description:
      "Developed a residential energy management system that optimizes electricity usage based on real-time pricing, weather forecasts, and user preferences, reducing energy bills by up to 25%.",
    image: "/projects/smart-home.jpg",
    tags: ["Smart Home", "Energy Management", "IoT", "Embedded Systems"],
    challenge: "Homeowners faced increasing energy costs with no clear visibility into consumption patterns or effective tools to optimize usage without sacrificing comfort.",
    solution: "Created an integrated system that combines smart metering, appliance control, and an AI-powered optimization engine that learns user preferences and automatically adjusts energy usage patterns.",
    outcome: "Average energy bill reduction of 25% across pilot homes, with 92% user satisfaction rate and seamless integration with existing smart home platforms.",
    technologies: ["ESP32 Microcontrollers", "Z-Wave", "React Native", "Cloud Computing"]
  },
  {
    id: "microgrid",
    title: "Campus Microgrid Project",
    description:
      "Led the electrical design for a university campus microgrid project, incorporating renewable energy sources, battery storage systems, and intelligent load management to create a resilient and sustainable power infrastructure.",
    image: "/projects/microgrid.jpg",
    tags: ["Microgrids", "Sustainable Energy", "Power Distribution"],
    challenge: "University campus experienced multiple power outages annually due to grid vulnerabilities, while also seeking to reduce energy costs and environmental impact.",
    solution: "Designed and implemented a comprehensive microgrid solution with 2MW solar capacity, 3MWh battery storage, and advanced control systems capable of islanding operation during grid outages.",
    outcome: "Reduced campus energy costs by 31%, eliminated power outage disruptions, and created a living laboratory for engineering students to study advanced energy systems.",
    technologies: ["Grid-Tie Inverters", "Battery Storage", "ETAP Modeling", "Protection Systems"]
  },
  {
    id: "ev-charging",
    title: "Electric Vehicle Charging Network",
    description:
      "Designed a scalable electric vehicle charging network with load balancing capabilities to prevent grid overloading during peak charging times while maximizing charging efficiency.",
    image: "/projects/ev-charging.jpg",
    tags: ["EV Charging", "Power Electronics", "Smart Grid"],
    challenge: "City transportation authority needed to deploy extensive EV charging infrastructure without requiring costly grid upgrades or causing system instability during peak demand periods.",
    solution: "Created a networked charging system with dynamic load balancing, time-of-use optimization, and integrated battery storage to buffer demand peaks while ensuring reliable charging availability.",
    outcome: "Successfully deployed 200+ charging stations that automatically adjust charging rates based on grid conditions, vehicle needs, and energy pricing while maintaining grid stability.",
    technologies: ["Power Electronics", "CCS Protocol", "Load Management Systems", "Energy Storage"]
  },
];

export default function ProjectsPage() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Header */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The work to reaching delightful experiences.
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A showcase of my engineering projects and the innovative solutions they provide.
            </p>
          </div>
        </section>

        {/* Project Methodology */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">The end in mind</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                By confidently answering these questions, we can better position 
                ourselves and set a clear direction towards our end goal. This 
                approach helps reduce risks, increase value to users, and unlock the 
                full potential of a higher ROI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card p-8">
                <h3 className="text-xl font-bold mb-4">Problem Definition</h3>
                <p className="text-gray-300">
                  Every project begins with clearly understanding the problem we're 
                  solving and for whom. This clarity guides all subsequent decisions.
                </p>
              </div>

              <div className="card p-8">
                <h3 className="text-xl font-bold mb-4">Systems Approach</h3>
                <p className="text-gray-300">
                  I consider how each component interacts within the larger system, 
                  ensuring holistic solutions that address current needs while 
                  allowing for future expansion.
                </p>
              </div>

              <div className="card p-8">
                <h3 className="text-xl font-bold mb-4">Iterative Refinement</h3>
                <p className="text-gray-300">
                  Through prototyping, testing, and refinement, I continuously 
                  improve designs to ensure optimal performance, efficiency, and 
                  user satisfaction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Featured Project */}
        <section className="py-16 bg-gray-900">
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
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12">All Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Engineering Approach */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Engineering Approach</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                My approach to electrical engineering combines theoretical knowledge with practical application, always focused on creating sustainable and efficient solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="card p-8">
                <h3 className="text-xl font-bold mb-4">First Principles Thinking</h3>
                <p className="text-gray-300 mb-4">
                  I approach complex problems by breaking them down to their fundamental truths and then building solutions from the ground up. This methodology helps me create innovative solutions that aren't constrained by conventional thinking.
                </p>
                <p className="text-gray-300">
                  By questioning assumptions and focusing on what is physically possible, I've been able to bypass traditional constraints and develop more efficient electrical systems.
                </p>
              </div>
              
              <div className="card p-8">
                <h3 className="text-xl font-bold mb-4">Sustainable Engineering</h3>
                <p className="text-gray-300 mb-4">
                  I firmly believe that electrical engineering has a crucial role to play in creating a more sustainable future. Energy efficiency and reduced environmental impact are core considerations in all my projects.
                </p>
                <p className="text-gray-300">
                  From material selection to energy optimization, I integrate sustainability principles throughout the design and implementation process, creating solutions that are both technically excellent and environmentally responsible.
                </p>
              </div>
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
                  <h3 className="text-xl font-bold">Campus Microgrid Project</h3>
                  <p className="text-sm text-gray-400 mb-4">2023 - 2024</p>
                  <p className="text-gray-300">
                    Led the electrical design for a comprehensive university campus microgrid, incorporating 
                    renewable energy sources and advanced control systems to create a resilient and 
                    sustainable power infrastructure.
                  </p>
                </div>
              </div>
              
              {/* Timeline Item 2 */}
              <div className="mb-12 relative">
                <div className="absolute -left-[41px] mt-1.5 h-6 w-6 rounded-full border-4 border-gray-900 bg-blue-400"></div>
                <div>
                  <h3 className="text-xl font-bold">Smart Grid Optimization</h3>
                  <p className="text-sm text-gray-400 mb-4">2022 - 2023</p>
                  <p className="text-gray-300">
                    Developed an intelligent system using machine learning algorithms to predict and 
                    optimize power distribution, resulting in significant reductions in energy losses and 
                    improved reliability during peak usage times.
                  </p>
                </div>
              </div>
              
              {/* Timeline Item 3 */}
              <div className="mb-12 relative">
                <div className="absolute -left-[41px] mt-1.5 h-6 w-6 rounded-full border-4 border-gray-900 bg-blue-400"></div>
                <div>
                  <h3 className="text-xl font-bold">Industrial Automation Suite</h3>
                  <p className="text-sm text-gray-400 mb-4">2021 - 2022</p>
                  <p className="text-gray-300">
                    Designed and implemented a comprehensive automation solution for manufacturing 
                    facilities, including custom PCB design, PLC programming, and advanced control systems 
                    integration.
                  </p>
                </div>
              </div>
              
              {/* Timeline Item 4 */}
              <div className="relative">
                <div className="absolute -left-[41px] mt-1.5 h-6 w-6 rounded-full border-4 border-gray-900 bg-blue-400"></div>
                <div>
                  <h3 className="text-xl font-bold">Renewable Energy Integration</h3>
                  <p className="text-sm text-gray-400 mb-4">2020 - 2021</p>
                  <p className="text-gray-300">
                    Created a hybrid controller system that seamlessly integrates renewable energy sources 
                    into existing power networks, with intelligent load balancing and storage management 
                    capabilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Interested in working together?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, innovative ideas, and opportunities to create impactful electrical engineering solutions.
            </p>
            <Link
              href="/contact"
              className="button"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}