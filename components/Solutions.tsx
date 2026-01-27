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
    <section id="solutions" className="py-20 bg-black relative overflow-hidden">
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-tight mb-6">
                Our <span className="text-brand-orange">Solutions.</span>
              </h2>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
                Innovative technology solutions to help your business grow and succeed. We deliver cutting-edge software that transforms operations and drives success.
              </p>
            </div>
          </AnimatedSection>

          {/* Modern Grid Layout with Glassmorphism Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {solutions.map((solution, index) => (
              <AnimatedSection key={index} delay={0.1 + index * 0.1}>
                <motion.div
                  className="group relative h-full"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {/* Glassmorphism Card Container */}
                  <div className="relative h-full p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl hover:border-white/20 hover:shadow-2xl hover:shadow-brand-orange/10 transition-all duration-500 overflow-hidden">
                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon and Badge Row */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-brand-orange/20 group-hover:border-brand-orange/30 transition-all duration-300 shadow-lg">
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
                        <span className="px-4 py-1.5 bg-brand-orange/20 backdrop-blur-sm text-brand-orange text-xs font-bold uppercase tracking-wider rounded-full border border-brand-orange/30 shadow-sm">
                          {solution.word}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-brand-orange transition-colors duration-300">
                        {solution.title}
                      </h3>

                      {/* Description */}
                      <p className="text-white/70 leading-relaxed mb-6 text-base">
                        {solution.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-3 mb-8">
                        {solution.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-white/80 group/item">
                            <div className="w-6 h-6 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mr-3 flex-shrink-0 group-hover/item:bg-brand-orange/20 group-hover/item:border-brand-orange/30 transition-all duration-300">
                              <svg className="w-3.5 h-3.5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="group-hover/item:text-white transition-colors">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA Link */}
                      <motion.a
                        href={solution.link}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold group/link hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-brand-orange/20"
                        whileHover={{ x: 4 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        <span>Learn more</span>
                        <svg className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </motion.a>
                    </div>
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
