'use client';

import { motion } from 'framer-motion';

export default function ProgressMarkets() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Our focus is progressing markets
              </h2>
              
              <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                Effectively deploying enterprise solutions requires a deep knowledge of business operations, technology implementation, practical workflows, and industry best practices.
              </p>
              
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                Trusted by leading businesses worldwide, FluvoSoft&apos;s technology meets the highest standards of enterprise software. We empower companies with innovative solutions, expert services, and strategic guidance.
              </p>

              <motion.a
                href="#contact"
                className="inline-block px-8 py-4 bg-brand-orange text-white rounded-lg font-semibold shadow-lg"
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
                Request a demo →
              </motion.a>
            </motion.div>

            {/* Right Column - Illustration */}
            <motion.div
              className="relative w-full flex items-center justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="w-full max-w-lg"
              >
                <img
                  src="/illustrations/ai-collaboration.svg"
                  alt="AI Collaboration - Technology and Innovation"
                  className="w-full h-auto object-contain brightness-0"
                  style={{ filter: 'brightness(0)' }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

