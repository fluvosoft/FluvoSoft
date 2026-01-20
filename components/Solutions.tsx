'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

const solutions = [
  {
    title: 'AI Automation',
    description: 'Streamline workflows with intelligent automation that learns and adapts to your business processes. Reduce manual tasks by up to 80% and boost productivity.',
    image: '/illustrations/programmer.svg',
    word: 'Automate',
    link: '/ai-automation',
    features: ['Workflow Optimization', 'Process Learning', 'Task Reduction'],
  },
  {
    title: 'Blockchain Development',
    description: 'Secure, transparent, decentralized solutions built on cutting-edge blockchain technology. Ensure data integrity and trust in every transaction.',
    image: '/illustrations/communication.svg',
    word: 'Decentralize',
    link: '/blockchain-development',
    features: ['Smart Contracts', 'Data Integrity', 'Trust & Security'],
  },
  {
    title: 'Custom Software',
    description: 'Tailored applications built specifically for your needs. From web apps to enterprise solutions, we deliver software that scales with your business.',
    image: '/illustrations/data-analysis.svg',
    word: 'Customize',
    link: '/custom-software',
    features: ['Enterprise Solutions', 'Scalable Architecture', 'Custom Development'],
  },
  {
    title: 'SaaS Products',
    description: 'Scalable software-as-a-service solutions that grow with your business. Cloud-based platforms with subscription management, analytics, and seamless integrations.',
    image: '/illustrations/presentation.svg',
    word: 'Scale',
    link: '/saas-products',
    features: ['Cloud-Based', 'Subscription Management', 'Seamless Integration'],
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <AnimatedSection>
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-block mb-6"
              >
                <span className="px-4 py-2 bg-brand-orange/10 text-brand-orange rounded-full text-sm font-semibold uppercase tracking-wide">
                  Solutions
                </span>
              </motion.div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 leading-tight mb-6">
                Our <span className="text-brand-orange">Solutions.</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Innovative technology solutions to help your business grow and succeed. We deliver cutting-edge software that transforms operations and drives success.
              </p>
            </div>
          </AnimatedSection>

          {/* Stats Bar */}
          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
              <motion.div
                className="text-center p-6 bg-gray-50 rounded-xl border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">80%</div>
                <div className="text-sm text-gray-600 font-medium">Efficiency</div>
              </motion.div>
              <motion.div
                className="text-center p-6 bg-gray-50 rounded-xl border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">95%</div>
                <div className="text-sm text-gray-600 font-medium">Success Rate</div>
              </motion.div>
              <motion.div
                className="text-center p-6 bg-gray-50 rounded-xl border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">50+</div>
                <div className="text-sm text-gray-600 font-medium">Projects</div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Simple Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {solutions.map((solution, index) => (
              <AnimatedSection key={index} delay={0.1 + index * 0.1}>
                <motion.div
                  className="group bg-white rounded-2xl border-2 border-gray-200 hover:border-brand-orange/40 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-brand-orange/10 relative h-full flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="p-8 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-brand-orange/15 to-brand-orange/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <div className="w-10 h-10 relative">
                          <Image
                            src={solution.image}
                            alt={solution.title}
                            fill
                            className="object-contain"
                            style={{ filter: 'brightness(0) saturate(100%) invert(52%) sepia(94%) saturate(1352%) hue-rotate(346deg) brightness(101%) contrast(101%)' }}
                          />
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-brand-orange/10 text-brand-orange rounded-lg text-xs font-bold uppercase tracking-wide">
                        {solution.word}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-brand-orange transition-colors duration-300">
                      {solution.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                      {solution.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-brand-orange mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <motion.a
                      href={solution.link}
                      className="inline-flex items-center text-brand-orange font-semibold group/link text-sm"
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      <span>Learn more</span>
                      <svg className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.a>

                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-orange via-brand-orange-dark to-brand-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* CTA Section */}
          <AnimatedSection delay={0.4}>
            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-brand-orange text-white rounded-lg font-semibold text-base hover:bg-brand-orange-dark transition-colors shadow-lg hover:shadow-xl hover:shadow-brand-orange/25"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                Explore All Solutions
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.a>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
