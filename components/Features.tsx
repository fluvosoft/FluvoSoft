'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
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
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <AnimatedSection>
              <h2 className="text-md md:text-md uppercase lg:text-md font-bold text-white font-inter mb-6">
                Apply AI
              </h2>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-4">
                <span className=" bg-gradient-to-r from-brand-orange via-brand-orange-light to-brand-orange-dark bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">Agentic</span> Solutions
              </h3>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <p className="text-lg md:text-xl text-white/70 text-center max-w-4xl mx-auto leading-relaxed mb-8">
                Transform your data and expertise into agentic solutions that continuously improve with human interaction.
              </p>
            </AnimatedSection>
          </div>

          {/* Grid Section */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {/* First Card */}
            <AnimatedSection delay={0.6}>
              <div>
                {/* Text Content */}
                <div className="mb-4 md:mb-6">
                  <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 md:mb-3">
                    Defense & Intelligence
                  </h4>
                  <p className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed">
                    Orchestrate agent workflows for decision advantage. Transform complex data into actionable intelligence with advanced AI agents.
                  </p>
                </div>
                {/* Image with gap from top and left only */}
                <div className="mt-6 md:mt-8 pl-0 sm:pl-4 md:pl-8">
                  <div className="relative w-full aspect-video bg-white/10 rounded-lg overflow-hidden">
                    <Image 
                      src="/Agentic Solution/donovan.png" 
                      alt="Defense & Intelligence Solutions"
                      fill
                      className="object-cover grayscale"
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Second Card */}
            <AnimatedSection delay={0.8}>
              <div>
                {/* Text Content */}
                <div className="mb-4 md:mb-6">
                  <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 md:mb-3">
                    Enterprise Solutions
                  </h4>
                  <p className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed">
                    Deploy intelligent agents that automate workflows and enhance productivity across your organization with continuous learning.
                  </p>
                </div>
                {/* Image with gap from top and left only */}
                <div className="mt-6 md:mt-8 pl-0 sm:pl-4 md:pl-8">
                  <div className="relative w-full aspect-video bg-white/10 rounded-lg overflow-hidden">
                    <Image 
                      src="/Agentic Solution/gen-ai.png" 
                      alt="Enterprise Solutions"
                      fill
                      className="object-cover grayscale"
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}

