'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Script from 'next/script';

export default function CustomDevelopmentPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Custom Software Development',
    provider: {
      '@type': 'Organization',
      name: 'FluvoSoft',
      url: 'https://fluvosoft.com',
    },
    description: 'Custom software development services including enterprise applications, web applications, and legacy system modernization.',
    serviceType: 'Software Development',
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Custom Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Enterprise Applications',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Applications',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Legacy System Modernization',
          },
        },
      ],
    },
  };
  const technologies = [
    {
      name: 'Next.js & React',
      description: 'Modern React framework for building scalable, high-performance web applications with server-side rendering',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      name: 'Node.js',
      description: 'Server-side JavaScript runtime for building fast, scalable backend services and APIs',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
    },
    {
      name: 'Cloud Infrastructure',
      description: 'AWS, Azure, and GCP for scalable, reliable cloud-based solutions with global reach',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
    },
    {
      name: 'Databases',
      description: 'MongoDB, PostgreSQL, and other databases tailored to your data requirements and scale',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
    },
    {
      name: 'Microservices Architecture',
      description: 'Scalable, maintainable applications built with microservices for flexibility and growth',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      name: 'TypeScript',
      description: 'Type-safe development for robust, maintainable code with better developer experience',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
  ];

  const services = [
    {
      name: 'Enterprise Applications',
      description: 'Custom enterprise software solutions designed to streamline operations, improve efficiency, and drive business growth.',
      features: ['Custom Workflows', 'Integration Capabilities', 'Scalable Architecture', 'Enterprise Security'],
      link: '/contact',
    },
    {
      name: 'Web Applications',
      description: 'Modern, responsive web applications built with cutting-edge technologies for optimal performance and user experience.',
      features: ['Responsive Design', 'Performance Optimization', 'SEO Friendly', 'Cross-browser Compatible'],
      link: '/contact',
    },
    {
      name: 'Legacy System Modernization',
      description: 'Transform outdated systems into modern, efficient solutions with improved performance and maintainability.',
      features: ['System Audits', 'Migration Services', 'Performance Improvements', 'Feature Development'],
      link: '/contact',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Requirements',
      description: 'We conduct in-depth discussions to understand your business needs, goals, and technical requirements. We analyze your current systems and identify opportunities for improvement.',
    },
    {
      step: '02',
      title: 'Architecture & Design',
      description: 'Our team designs a scalable architecture and creates detailed specifications. We select the optimal technology stack and define the development approach.',
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'We build your custom solution using agile methodologies, with regular demos and feedback cycles. Comprehensive testing ensures quality and reliability.',
    },
    {
      step: '04',
      title: 'Deployment & Integration',
      description: 'We deploy your solution to production, integrate with existing systems, and ensure smooth operation. Comprehensive documentation and training are provided.',
    },
    {
      step: '05',
      title: 'Support & Maintenance',
      description: 'Ongoing support, monitoring, and updates to keep your solution running smoothly. We offer 3 months complimentary support with extended packages available.',
    },
  ];

  return (
    <main className="min-h-screen bg-black">
      <Script
        id="custom-development-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/20 via-brand-orange/10 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-4">
              <span className="bg-gradient-to-r from-brand-orange via-brand-orange-dark to-brand-orange bg-clip-text text-transparent">
                Custom Development
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 text-center max-w-4xl mx-auto leading-relaxed mb-8">
              Tailored applications built specifically for your needs. From web apps to enterprise solutions, we deliver software that scales with your business.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand-orange text-white rounded-lg font-semibold text-base hover:bg-brand-orange-dark transition-colors shadow-lg hover:shadow-xl hover:shadow-brand-orange/25"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              Get Started
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-4">
                <span className="bg-gradient-to-r from-brand-orange via-brand-orange-dark to-brand-orange bg-clip-text text-transparent">
                  How Our Team Works
                </span>
              </h2>
              <p className="text-lg md:text-xl text-white/70 text-center max-w-4xl mx-auto leading-relaxed mb-8">
                Our development team combines technical excellence with business understanding to deliver custom solutions that perfectly fit your needs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl md:text-3xl font-normal text-white mb-4">Client-Centric Development</h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  We believe in close collaboration with our clients throughout the development process. Our team works as an extension of yours, ensuring that every feature and functionality aligns with your business objectives and user needs.
                </p>
                <p className="text-white/70 leading-relaxed mb-6">
                  We use agile methodologies with regular sprints, demos, and feedback cycles. This iterative approach ensures you&apos;re always in the loop and can make adjustments as we build, resulting in a solution that truly fits your requirements.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start text-white/70">
                    <svg className="w-6 h-6 text-brand-orange mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Agile development with regular sprints and demos</span>
                  </li>
                  <li className="flex items-start text-white/70">
                    <svg className="w-6 h-6 text-brand-orange mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Transparent communication and collaborative decision-making</span>
                  </li>
                  <li className="flex items-start text-white/70">
                    <svg className="w-6 h-6 text-brand-orange mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Flexible engagement models for startups to enterprises</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative h-[400px] rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <Image
                  src="/Page pictures/custom development.png"
                  alt="FluvoSoft custom software development team building tailored enterprise applications and web solutions"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-4">
                <span className="bg-gradient-to-r from-brand-orange via-brand-orange-dark to-brand-orange bg-clip-text text-transparent">
                  Our Development Process
                </span>
              </h2>
              <p className="text-lg md:text-xl text-white/70 text-center max-w-4xl mx-auto leading-relaxed mb-8">
                A proven methodology that ensures successful delivery of custom software solutions from concept to deployment
              </p>
            </motion.div>

            <div className="space-y-8">
              {processSteps.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-brand-orange/20 rounded-xl flex items-center justify-center text-brand-orange font-bold text-xl">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-normal text-white mb-3">{item.title}</h3>
                    <p className="text-white/70 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-4">
                <span className="bg-gradient-to-r from-brand-orange via-brand-orange-dark to-brand-orange bg-clip-text text-transparent">
                  Technologies We Use
                </span>
              </h2>
              <p className="text-lg md:text-xl text-white/70 text-center max-w-4xl mx-auto leading-relaxed mb-8">
                We leverage modern, proven technologies to build scalable, maintainable, and high-performance custom solutions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-brand-orange/20 rounded-xl flex items-center justify-center text-brand-orange mb-4">
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-normal text-white mb-3">{tech.name}</h3>
                  <p className="text-white/70 leading-relaxed text-sm">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-4">
                <span className="bg-gradient-to-r from-brand-orange via-brand-orange-dark to-brand-orange bg-clip-text text-transparent">
                  Our Custom Development Services
                </span>
              </h2>
              <p className="text-lg md:text-xl text-white/70 text-center max-w-4xl mx-auto leading-relaxed mb-8">
                Comprehensive custom software solutions tailored to your specific business needs and requirements
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 flex flex-col"
                >
                  <div className="w-14 h-14 bg-brand-orange/20 rounded-xl flex items-center justify-center text-brand-orange mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-normal text-white mb-3">{service.name}</h3>
                  <p className="text-white/70 leading-relaxed text-sm mb-4 flex-1">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-white/80">
                        <svg className="w-4 h-4 text-brand-orange mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.a
                    href={service.link}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold text-sm hover:bg-brand-orange hover:border-brand-orange transition-all duration-300"
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    Learn more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Timeline Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-4">
                <span className="bg-gradient-to-r from-brand-orange via-brand-orange-dark to-brand-orange bg-clip-text text-transparent">
                  Project Timelines
                </span>
              </h2>
              <p className="text-lg md:text-xl text-white/70 text-center max-w-4xl mx-auto leading-relaxed mb-8">
                We provide flexible timelines based on project complexity and requirements
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  type: 'Small Projects',
                  duration: '4-8 weeks',
                  description: 'Ideal for MVPs, prototypes, and focused feature development',
                },
                {
                  type: 'Medium Projects',
                  duration: '8-16 weeks',
                  description: 'Perfect for web applications, integrations, and mid-scale solutions',
                },
                {
                  type: 'Large Projects',
                  duration: '3-6+ months',
                  description: 'Comprehensive enterprise solutions with complex requirements',
                },
              ].map((project, index) => (
                <motion.div
                  key={project.type}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-brand-orange/20 rounded-xl flex items-center justify-center text-brand-orange font-bold text-2xl mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-normal text-white mb-2">{project.type}</h3>
                  <p className="text-brand-orange font-semibold mb-3">{project.duration}</p>
                  <p className="text-white/70 leading-relaxed text-sm">{project.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="p-12 rounded-2xl bg-gradient-to-br from-brand-orange/10 via-brand-orange/5 to-transparent border border-brand-orange/20 backdrop-blur-sm">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-4">
                <span className="bg-gradient-to-r from-brand-orange via-brand-orange-dark to-brand-orange bg-clip-text text-transparent">
                  Ready to Build Your Custom Solution?
                </span>
              </h2>
              <p className="text-lg md:text-xl text-white/70 text-center max-w-4xl mx-auto leading-relaxed mb-8">
                Let&apos;s discuss your project requirements and create a custom software solution that perfectly fits your business needs.
              </p>
              <motion.a
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-brand-orange text-white rounded-lg font-semibold text-base hover:bg-brand-orange-dark transition-colors shadow-lg hover:shadow-xl hover:shadow-brand-orange/25"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                Get Started
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
