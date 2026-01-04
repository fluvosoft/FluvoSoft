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
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <AnimatedSection>
              <h2 className="text-md md:text-md uppercase lg:text-md font-bold text-gray-900 font-inter mb-6">
                Apply AI
              </h2>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 mb-4">
                Agentic Solutions
              </h3>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <p className="text-lg md:text-xl text-gray-600 text-center max-w-4xl mx-auto leading-relaxed mb-8">
                Transform your data and expertise into agentic solutions that continuously improve with human interaction.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}

