"use client";
import ContactForm from "@/components/ContactForm";
import PageTransition from "@/components/PageTransition";

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Header */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in touch.
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Have a project in mind or want to discuss potential opportunities? 
              I&apos;d love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">Send me a message</h2>
                <ContactForm />
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="h-6 w-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">Email</h3>
                      <p className="mt-1 text-gray-300">
                        <a href="mailto:john.smith@example.com" className="hover:text-blue-400">
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
                      <h3 className="text-lg font-medium">Location</h3>
                      <p className="mt-1 text-gray-300">
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
                      <h3 className="text-lg font-medium">Social Media</h3>
                      <div className="mt-1 space-y-2">
                        <p className="text-gray-300">
                          <a href="https://linkedin.com/in/johnsmith" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                            LinkedIn
                          </a>
                        </p>
                        <p className="text-gray-300">
                          <a href="https://github.com/johnsmith" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                            GitHub
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h2 className="text-2xl font-bold mb-6">Availability</h2>
                  <p className="text-gray-300">
                    Currently available for internship opportunities.
                    My response time is typically within 24-48 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Connect on LinkedIn CTA */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between">
            <div className="mb-6 sm:mb-0 text-center sm:text-left">
              <h2 className="text-2xl font-bold">Let&apos;s connect on LinkedIn</h2>
              <p className="text-gray-300 mt-2">Stay updated with my latest projects and insights</p>
            </div>
            <a
              href="https://linkedin.com/in/johnsmith"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Connect on LinkedIn
            </a>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}