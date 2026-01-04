'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.2 }
      );
    }
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.5 }
      );
    }
    if (buttonsRef.current) {
      gsap.fromTo(
        buttonsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.8 }
      );
    }
  }, []);

  const illustrations = [
    { src: '/illustrations/programmer.svg', word: 'Innovate' },
    { src: '/illustrations/communication.svg', word: 'Transform' },
    { src: '/illustrations/data-analysis.svg', word: 'Build' },
    { src: '/illustrations/presentation.svg', word: 'Scale' },
    { src: '/illustrations/analytics.svg', word: 'Succeed' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-50 opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5 }}
      />

      {/* Enhanced orange shades from 4 corners */}
      {/* Top-left corner - Soft warm glow */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] rounded-full blur-[120px] pointer-events-none z-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: [0.4, 0.55, 0.4],
          scale: [0.98, 1.08, 0.98],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ 
          background: 'radial-gradient(ellipse 80% 80% at 30% 30%, rgba(255, 152, 0, 0.35) 0%, rgba(255, 111, 97, 0.25) 30%, rgba(255, 140, 90, 0.15) 60%, transparent 100%)',
          transform: 'translate(-45%, -45%)',
        }}
      />

      {/* Top-right corner - Vibrant orange light */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] rounded-full blur-[120px] pointer-events-none z-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: [0.45, 0.6, 0.45],
          scale: [0.98, 1.08, 0.98],
        }}
        transition={{
          duration: 6,
          delay: 1.2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ 
          background: 'radial-gradient(ellipse 80% 80% at 70% 30%, rgba(255, 107, 53, 0.4) 0%, rgba(255, 152, 0, 0.3) 25%, rgba(255, 140, 90, 0.2) 55%, transparent 100%)',
          transform: 'translate(45%, -45%)',
        }}
      />

      {/* Bottom-left corner - Gentle amber glow */}
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] rounded-full blur-[120px] pointer-events-none z-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: [0.4, 0.55, 0.4],
          scale: [0.98, 1.08, 0.98],
        }}
        transition={{
          duration: 6,
          delay: 2.4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ 
          background: 'radial-gradient(ellipse 80% 80% at 30% 70%, rgba(255, 183, 77, 0.35) 0%, rgba(255, 152, 0, 0.25) 30%, rgba(255, 140, 90, 0.15) 60%, transparent 100%)',
          transform: 'translate(-45%, 45%)',
        }}
      />

      {/* Bottom-right corner - Rich orange accent */}
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] rounded-full blur-[120px] pointer-events-none z-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: [0.45, 0.6, 0.45],
          scale: [0.98, 1.08, 0.98],
        }}
        transition={{
          duration: 6,
          delay: 3.6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ 
          background: 'radial-gradient(ellipse 80% 80% at 70% 70%, rgba(229, 90, 43, 0.4) 0%, rgba(255, 107, 53, 0.3) 30%, rgba(255, 140, 90, 0.2) 60%, transparent 100%)',
          transform: 'translate(45%, 45%)',
        }}
      />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Illustrations row */}
          <div className="flex items-center justify-center gap-2 md:gap-4 lg:gap-6 mb-6 flex-wrap">
            {illustrations.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center gap-3"
                initial={{ opacity: 0, y: -30, scale: 0.9 }}
                animate={{ 
                  opacity: 1,
                  y: [0, -15, 0],
                  scale: 1
                }}
                transition={{ 
                  opacity: { duration: 0.8, delay: 0.3 + index * 0.1, ease: 'easeOut' },
                  y: {
                    duration: 3,
                    delay: 1 + index * 0.2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                  scale: { duration: 0.8, delay: 0.3 + index * 0.1, ease: 'easeOut' }
                }}
              >
                {/* Vector Illustration */}
                <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48">
                  <img
                    src={item.src}
                    alt={`Professional illustration ${index + 1}`}
                    className="w-full h-full object-contain brightness-0"
                    style={{ filter: 'brightness(0)' }}
                  />
                </div>
                
                {/* Curved Word Card */}
                <motion.div
                  className="bg-white rounded-xl px-4 py-2 shadow-lg border border-gray-200"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)' }}
                >
                  <span className="text-sm md:text-base font-semibold text-gray-900">{item.word}</span>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Title */}
          <h1
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-gray-900 leading-tight text-center mb-6 font-georama"
          >
            We Don&apos;t Just Write Code. We Build <span className="inline-block bg-gradient-to-r from-brand-orange via-brand-orange-light via-brand-orange to-brand-orange-dark bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">Revenue</span>.
          </h1>
          <p
            ref={textRef}
            className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto text-center"
          >
            We bridge the gap between human innovation and digital reality. Fluvosoft is the venture studio that transforms raw concepts into automated, blockchain-secured ecosystems.
          </p>
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#solutions"
              className="px-8 py-4 bg-brand-orange hover:bg-brand-orange-dark text-white rounded-lg font-semibold shadow-lg relative overflow-hidden transition-colors duration-200"
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
                boxShadow: { duration: 0.2 }
              }}
            >
              <span className="relative z-10">Partner With Us →

</span>
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-4 bg-white hover:bg-orange-50 text-brand-orange border-2 border-brand-orange rounded-lg font-semibold relative overflow-hidden transition-colors duration-200"
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
                boxShadow: { duration: 0.2 }
              }}
            >
              <span className="relative z-10">Fix an Appointment</span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}

