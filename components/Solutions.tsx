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

          {/* Complex Asymmetrical Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 auto-rows-fr">
            {/* First Card - Large Featured (Spans 2 columns) */}
            <AnimatedSection delay={0.1}>
              <motion.div
                className="group lg:col-span-7 bg-gradient-to-br from-gray-50 via-white to-gray-50 rounded-3xl border-2 border-gray-200 hover:border-brand-orange/40 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-brand-orange/15 relative"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                whileHover={{ y: -8, scale: 1.01 }}
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-10 lg:p-12 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-8">
                    {/* Large Icon */}
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-orange/20 via-brand-orange/10 to-brand-orange/5 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                      <div className="w-12 h-12 relative">
                        <Image
                          src={solutions[0].image}
                          alt={solutions[0].title}
                          fill
                          className="object-contain"
                          style={{ filter: 'brightness(0) saturate(100%) invert(52%) sepia(94%) saturate(1352%) hue-rotate(346deg) brightness(101%) contrast(101%)' }}
                        />
                      </div>
                    </div>
                    
                    {/* Badge */}
                    <span className="px-4 py-2 bg-brand-orange text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-lg">
                      {solutions[0].word}
                    </span>
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5 group-hover:text-brand-orange transition-colors duration-300 leading-tight">
                    {solutions[0].title}
                  </h3>

                  <p className="text-lg text-gray-600 leading-relaxed mb-8 flex-grow">
                    {solutions[0].description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {solutions[0].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700 bg-white/60 rounded-lg p-3 border border-gray-200">
                        <svg className="w-4 h-4 text-brand-orange mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <motion.a
                    href={solutions[0].link}
                    className="inline-flex items-center text-brand-orange font-bold text-lg group/link self-start"
                    whileHover={{ x: 8 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <span>Learn more</span>
                    <svg className="ml-3 w-6 h-6 group-hover/link:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.a>

                  {/* Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-orange via-brand-orange-dark to-brand-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </motion.div>
            </AnimatedSection>

            {/* Second Column - Two Stacked Cards */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-6 lg:gap-8">
              {/* Second Card - Medium */}
              <AnimatedSection delay={0.2}>
                <motion.div
                  className="group bg-white rounded-3xl border-2 border-gray-200 hover:border-brand-orange/40 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-brand-orange/10 relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                >
                  <div className="p-8 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-brand-orange/15 to-brand-orange/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <div className="w-10 h-10 relative">
                          <Image
                            src={solutions[1].image}
                            alt={solutions[1].title}
                            fill
                            className="object-contain"
                            style={{ filter: 'brightness(0) saturate(100%) invert(52%) sepia(94%) saturate(1352%) hue-rotate(346deg) brightness(101%) contrast(101%)' }}
                          />
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-brand-orange/10 text-brand-orange rounded-lg text-xs font-bold uppercase tracking-wide">
                        {solutions[1].word}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-brand-orange transition-colors duration-300">
                      {solutions[1].title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                      {solutions[1].description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {solutions[1].features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-brand-orange mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <motion.a
                      href={solutions[1].link}
                      className="inline-flex items-center text-brand-orange font-semibold group/link text-sm"
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      <span>Learn more</span>
                      <svg className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.a>

                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-orange via-brand-orange-dark to-brand-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>
                </motion.div>
              </AnimatedSection>

              {/* Third Card - Compact */}
              <AnimatedSection delay={0.3}>
                <motion.div
                  className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl border-2 border-gray-700 hover:border-brand-orange/50 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-brand-orange/20 text-white relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative p-8 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 rounded-xl bg-brand-orange/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <div className="w-8 h-8 relative">
                          <Image
                            src={solutions[2].image}
                            alt={solutions[2].title}
                            fill
                            className="object-contain"
                            style={{ filter: 'brightness(0) invert(1)' }}
                          />
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-brand-orange text-white rounded-lg text-xs font-bold uppercase tracking-wide">
                        {solutions[2].word}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-brand-orange transition-colors duration-300">
                      {solutions[2].title}
                    </h3>

                    <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                      {solutions[2].description}
                    </p>

                    <motion.a
                      href={solutions[2].link}
                      className="inline-flex items-center text-white font-semibold group/link text-sm"
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      <span>Learn more</span>
                      <svg className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.a>

                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>
                </motion.div>
              </AnimatedSection>
            </div>

            {/* Fourth Card - Full Width Horizontal */}
            <AnimatedSection delay={0.4}>
              <motion.div
                className="group lg:col-span-12 bg-white rounded-3xl border-2 border-gray-200 hover:border-brand-orange/40 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-brand-orange/10 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
                whileHover={{ y: -6 }}
              >
                <div className="grid md:grid-cols-12 gap-8 p-8 lg:p-10">
                  {/* Left Side - Icon & Badge */}
                  <div className="md:col-span-3 flex flex-col items-center md:items-start justify-center">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-brand-orange/20 via-brand-orange/10 to-brand-orange/5 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 mb-6 shadow-lg">
                      <div className="w-14 h-14 relative">
                        <Image
                          src={solutions[3].image}
                          alt={solutions[3].title}
                          fill
                          className="object-contain"
                          style={{ filter: 'brightness(0) saturate(100%) invert(52%) sepia(94%) saturate(1352%) hue-rotate(346deg) brightness(101%) contrast(101%)' }}
                        />
                      </div>
                    </div>
                    <span className="px-4 py-2 bg-brand-orange/10 text-brand-orange rounded-xl text-xs font-bold uppercase tracking-wider">
                      {solutions[3].word}
                    </span>
                  </div>

                  {/* Middle - Content */}
                  <div className="md:col-span-6 flex flex-col justify-center">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-brand-orange transition-colors duration-300">
                      {solutions[3].title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {solutions[3].description}
                    </p>
                    <div className="grid grid-cols-3 gap-3">
                      {solutions[3].features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs text-gray-600">
                          <svg className="w-3 h-3 text-brand-orange mr-1.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Side - CTA */}
                  <div className="md:col-span-3 flex items-center justify-center md:justify-end">
                    <motion.a
                      href={solutions[3].link}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange text-white rounded-xl font-semibold group/link shadow-lg hover:shadow-xl transition-all"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      <span>Learn more</span>
                      <svg className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.a>
                  </div>

                  {/* Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-orange via-brand-orange-dark to-brand-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </motion.div>
            </AnimatedSection>
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
