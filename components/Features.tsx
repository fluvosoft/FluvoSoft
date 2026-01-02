'use client';

import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const stats = [
  { 
    number: '95%', 
    label: 'Client Retention Rate',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  { 
    number: '10+', 
    label: 'Years of Experience',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  { 
    number: '25+', 
    label: 'Team Members',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-brand-orange">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Why Choose FluvoSoft
                </h2>
                
                <div className="space-y-5 mb-8">
                  <p className="text-lg md:text-xl text-white/95 leading-relaxed">
                    We build smart, safe, and reliable software that helps businesses everywhere. We make new technology easy to use and affordable for companies big and small.
                  </p>
                  
                  <p className="text-lg md:text-xl text-white/95 leading-relaxed">
                    We started as a small team who love technology. Today, we work with over 50 companies around the world, building AI tools, blockchain apps, and custom software. Our focus on doing great work and helping clients succeed makes us a trusted choice for businesses looking for technology solutions.
                  </p>
                </div>
              </div>

              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-orange rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-shadow"
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
                Get in touch
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>

            {/* Right Column - Statistics */}
            <motion.div
              className="grid grid-cols-2 gap-4 md:gap-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ 
                    y: -5,
                    scale: 1.02,
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  {/* Icon */}
                  <div className="mb-4 text-white">
                    {stat.icon}
                  </div>
                  
                  {/* Number */}
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  
                  {/* Label */}
                  <div className="text-base md:text-lg text-white/90 leading-relaxed font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

