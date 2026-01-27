'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

export default function ProgressMarkets() {
  const gridItems = [
    {
      title: 'Blockchain Infrastructure',
      description: 'Scalable and secure blockchain solutions for enterprise needs.',
    },
    {
      title: 'Smart Contracts',
      description: 'Automated and transparent contract execution on-chain.',
    },
    {
      title: 'Tokenization',
      description: 'Transform assets into digital tokens with ease.',
    },
    {
      title: 'Decentralized Networks',
      description: 'Build robust decentralized applications and systems.',
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left Column - Image (1 col) */}
            <AnimatedSection delay={0.2}>
              <div className="flex items-center justify-center">
                <div className="w-full relative">
                  <Image
                    src="/Agentic Solution/fluvosot_blockchain_solution.png"
                    alt="FluvoSoft Blockchain Solution"
                    width={600}
                    height={600}
                    className="w-full h-auto object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </AnimatedSection>

            {/* Right Column - Content (2 cols) */}
            <AnimatedSection delay={0.4} className="lg:col-span-2">
              <div className="space-y-4 md:space-y-6">
                {/* Small On-Chain Button */}
                <motion.button
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-brand-orange text-white rounded-lg text-xs sm:text-sm font-medium inline-block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  On-Chain
                </motion.button>

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-black leading-tight">
                  Our focus is progressing markets
                </h2>

                {/* Paragraph */}
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                  Effectively deploying enterprise solutions requires a deep knowledge of business operations, technology implementation, practical workflows, and industry best practices.
                </p>

                {/* Subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold text-black pt-2 sm:pt-4">
                  Enterprise Blockchain Solutions
                </h3>

                {/* Grid Section with 2 cols */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-4">
                  {gridItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="space-y-2"
                    >
                      <h4 className="text-base sm:text-lg font-bold text-black">
                        {item.title}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3 sm:gap-4 pt-4 sm:pt-6">
                  <motion.a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 bg-brand-orange hover:bg-brand-orange-dark text-white rounded-lg font-medium text-xs sm:text-sm shadow-lg transition-colors duration-200"
                    whileHover={{ 
                      scale: 1.05, 
                      y: -3,
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)'
                    }}
                    whileTap={{ scale: 0.97, y: 0 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 17,
                    }}
                  >
                    Get Started
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 bg-white hover:bg-gray-50 text-black border-2 border-black rounded-lg font-medium text-xs sm:text-sm transition-colors duration-200"
                    whileHover={{ 
                      scale: 1.05, 
                      y: -3,
                      boxShadow: '0 10px 15px -3px rgba(249, 115, 22, 0.2), 0 4px 6px -2px rgba(249, 115, 22, 0.1)'
                    }}
                    whileTap={{ scale: 0.97, y: 0 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 17,
                    }}
                  >
                    Learn More
                  </motion.a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}

