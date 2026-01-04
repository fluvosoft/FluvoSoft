'use client';

import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

interface AIForEnterpriseProps {
  className?: string;
}

export default function AIForEnterprise({ className = '' }: AIForEnterpriseProps) {
  return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-md md:text-md uppercase lg:text-md font-bold text-gray-900 text-center font-inter mb-6">
              AI for the Enterprise
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 text-center mb-4">
              Full-Stack AI Solutions
            </h3>
            <p className="text-lg md:text-xl text-gray-600 text-center max-w-4xl mx-auto leading-relaxed mb-8">
              Outcomes delivered with world-class data, models, agents, and deployment.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.4}>
            <div className="flex justify-center">
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange hover:bg-brand-orange-dark text-white rounded-lg font-medium text-sm shadow-lg transition-colors duration-200"
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
                Book a Demo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

