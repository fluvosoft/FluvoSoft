'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import Image from 'next/image';

interface AIForEnterpriseProps {
  className?: string;
}

type ImageType = 'default' | 'rlhf' | 'foundation-models' | 'data-engine';

const imageMap: Record<ImageType, { src: string; alt: string }> = {
  'default': {
    src: '/Scale elements/whole-model.webp',
    alt: 'Complete AI model'
  },
  'rlhf': {
    src: '/Scale elements/rlhf.webp',
    alt: 'RLHF layer from data model'
  },
  'foundation-models': {
    src: '/Scale elements/foundation-models.webp',
    alt: 'Foundation models layer from data model'
  },
  'data-engine': {
    src: '/Scale elements/data-engine.webp',
    alt: 'Data Engine layer from data model'
  }
};

export default function AIForEnterprise({ className = '' }: AIForEnterpriseProps) {
  const [hoveredImage, setHoveredImage] = useState<ImageType | null>(null);
  
  const currentImage: ImageType = hoveredImage || 'default';

  return (
    <section className={`py-18 lg:py-20 bg-black relative ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-md md:text-md uppercase lg:text-md font-bold text-white text-center font-inter mb-6">
              AI for the Enterprise
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white text-center mb-4">
              Full-Stack AI Solutions
            </h3>
            <p className="text-lg md:text-xl text-white/70 text-center max-w-4xl mx-auto leading-relaxed mb-8">
              Outcomes delivered with world-class data, models, agents, and deployment.
            </p>
          </AnimatedSection>

          {/* Content and Image Section */}
          <AnimatedSection delay={0.4}>
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Left Side - Text Content */}
              <div className="space-y-8 text-left">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  onMouseEnter={() => setHoveredImage('rlhf')}
                  onMouseLeave={() => setHoveredImage(null)}
                  className="space-y-3 text-left w-full cursor-pointer"
                >
                  <h4 className={`text-2xl font-bold transition-colors ${
                    hoveredImage === 'rlhf' ? 'text-brand-orange' : 'text-white'
                  }`}>
                    Fine-Tuning and RLHF
                  </h4>
                  <p className="text-white/70 leading-relaxed">
                    Adapt best-in-class foundation models to your business and your specific data to build sustainable, successful AI programs and data from your enterprise.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  onMouseEnter={() => setHoveredImage('foundation-models')}
                  onMouseLeave={() => setHoveredImage(null)}
                  className="space-y-3 text-left w-full cursor-pointer"
                >
                  <h4 className={`text-2xl font-bold transition-colors ${
                    hoveredImage === 'foundation-models' ? 'text-brand-orange' : 'text-white'
                  }`}>
                    Foundation Models
                  </h4>
                  <p className="text-white/70 leading-relaxed">
                    Scale partners or integrates with all of the leading AI models, from open-source to closed-source, including Google, Meta, Cohere, and more.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  onMouseEnter={() => setHoveredImage('data-engine')}
                  onMouseLeave={() => setHoveredImage(null)}
                  className="space-y-3 text-left w-full cursor-pointer"
                >
                  <h4 className={`text-2xl font-bold transition-colors ${
                    hoveredImage === 'data-engine' ? 'text-brand-orange' : 'text-white'
                  }`}>
                    Enterprise Data
                  </h4>
                  <p className="text-white/70 leading-relaxed">
                    Scale&apos;s Data Engine enables you to integrate your enterprise data into the fold of these models, providing the base for long-term strategic differentiation.
                  </p>
                </motion.div>
              </div>

              {/* Right Side - Image Display */}
              <div className="flex flex-col justify-center items-center relative">
                <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[590px] flex items-center justify-center relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImage}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="w-full h-full flex items-center justify-center"
                    >
                      <Image
                        src={imageMap[currentImage].src}
                        alt={imageMap[currentImage].alt}
                        width={600}
                        height={500}
                        className="object-contain w-full h-auto max-w-full"
                        loading="lazy"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.6}>
            <div className="flex justify-center">
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-brand-orange hover:bg-brand-orange-dark text-white rounded-lg font-medium text-base shadow-lg transition-colors duration-200"
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
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

