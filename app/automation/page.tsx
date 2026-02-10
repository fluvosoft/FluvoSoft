'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Script from 'next/script';

export default function AutomationPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Automation Solutions',
    provider: {
      '@type': 'Organization',
      name: 'FluvoSoft',
      url: 'https://fluvosoft.com',
    },
    description: 'Intelligent automation solutions including AI automation, RPA, workflow automation, and intelligent agents.',
    serviceType: 'Business Process Automation',
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Automation Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Automation',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Robotic Process Automation',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Workflow Automation',
          },
        },
      ],
    },
  };
  const technologies = [
    {
      name: 'AI/ML Integration',
      description: 'Machine learning models and AI algorithms that learn from your business processes and optimize workflows automatically',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      name: 'RPA (Robotic Process Automation)',
      description: 'Automate repetitive tasks and business processes with intelligent bots that work 24/7',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
    },
    {
      name: 'Workflow Automation',
      description: 'Design and implement automated workflows that connect your systems and streamline operations',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
    },
    {
      name: 'API Integration',
      description: 'Seamlessly connect disparate systems and applications through robust API integrations',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      name: 'Neural Agent Integration',
      description: 'Intelligent agents that understand context and make autonomous decisions to optimize business operations',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      name: 'Generative Media Pipelines',
      description: 'Automated content generation and media processing pipelines for marketing and operations',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  const products = [
    {
      name: 'Intelligent Workflow Engine',
      description: 'AI-powered workflow automation platform that learns from your business processes and continuously optimizes operations.',
      features: ['Process Learning', 'Auto-Optimization', 'Real-time Analytics', 'Multi-system Integration'],
      link: '/contact',
    },
    {
      name: 'RPA Solutions',
      description: 'Robotic Process Automation tools that handle repetitive tasks, data entry, and routine operations with precision and speed.',
      features: ['Task Automation', '24/7 Operation', 'Error Reduction', 'Cost Savings'],
      link: '/contact',
    },
    {
      name: 'Algorithmic Business Operations',
      description: 'Advanced algorithms that automate complex business decisions, resource allocation, and operational planning.',
      features: ['Decision Automation', 'Resource Optimization', 'Predictive Analytics', 'Scalable Architecture'],
      link: '/contact',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Process Analysis',
      description: 'We analyze your current workflows, identify automation opportunities, and map out processes that can be optimized through automation.',
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'Our team designs a customized automation solution that aligns with your business goals, integrates with existing systems, and scales with your growth.',
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'We build and configure automation workflows using best practices, followed by rigorous testing to ensure reliability and accuracy.',
    },
    {
      step: '04',
      title: 'Deployment & Training',
      description: 'We deploy your automation solution, provide comprehensive training to your team, and ensure smooth integration with your operations.',
    },
    {
      step: '05',
      title: 'Monitoring & Optimization',
      description: 'Continuous monitoring, performance analysis, and optimization to ensure your automation solution delivers maximum value over time.',
    },
  ];

  return (
    <main className="min-h-screen bg-black">
      <Script
        id="automation-structured-data"
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
                Automation Solutions
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 text-center max-w-4xl mx-auto leading-relaxed mb-8">
              Streamline workflows with intelligent automation that learns and adapts to your business processes. Reduce manual tasks and boost productivity.
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
                Our automation specialists combine deep technical expertise with business process knowledge to deliver solutions that drive real efficiency gains.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl md:text-3xl font-normal text-white mb-4">Data-Driven Approach</h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  Our automation team starts by deeply understanding your business processes, analyzing data flows, and identifying bottlenecks. We work closely with your team to ensure our solutions align with your operational needs and strategic objectives.
                </p>
                <p className="text-white/70 leading-relaxed mb-6">
                  We leverage AI and machine learning to create automation solutions that not only execute tasks but also learn and improve over time, continuously optimizing your operations.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start text-white/70">
                    <svg className="w-6 h-6 text-brand-orange mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Process mining and workflow analysis to identify automation opportunities</span>
                  </li>
                  <li className="flex items-start text-white/70">
                    <svg className="w-6 h-6 text-brand-orange mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Iterative development with continuous feedback and refinement</span>
                  </li>
                  <li className="flex items-start text-white/70">
                    <svg className="w-6 h-6 text-brand-orange mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>AI-powered solutions that learn and adapt to your business needs</span>
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
                  src="/Page pictures/automation.png"
                  alt="FluvoSoft automation solutions team developing intelligent workflow automation and RPA systems"
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
                  Our Automation Process
                </span>
              </h2>
              <p className="text-lg md:text-xl text-white/70 text-center max-w-4xl mx-auto leading-relaxed mb-8">
                A systematic approach to identifying, designing, and implementing automation solutions that deliver measurable results
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
                  Automation Technologies We Use
                </span>
              </h2>
              <p className="text-lg md:text-xl text-white/70 text-center max-w-4xl mx-auto leading-relaxed mb-8">
                We leverage cutting-edge automation technologies and tools to build solutions tailored to your business needs
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

      {/* Products Section */}
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
                  Our Automation Products
                </span>
              </h2>
              <p className="text-lg md:text-xl text-white/70 text-center max-w-4xl mx-auto leading-relaxed mb-8">
                Discover our suite of automation solutions designed to streamline operations and drive efficiency
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 flex flex-col"
                >
                  <div className="w-14 h-14 bg-brand-orange/20 rounded-xl flex items-center justify-center text-brand-orange mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-normal text-white mb-3">{product.name}</h3>
                  <p className="text-white/70 leading-relaxed text-sm mb-4 flex-1">{product.description}</p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-white/80">
                        <svg className="w-4 h-4 text-brand-orange mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.a
                    href={product.link}
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
                  Ready to Automate Your Operations?
                </span>
              </h2>
              <p className="text-lg md:text-xl text-white/70 text-center max-w-4xl mx-auto leading-relaxed mb-8">
                Let&apos;s discuss how intelligent automation can transform your business processes, reduce costs, and increase productivity.
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
