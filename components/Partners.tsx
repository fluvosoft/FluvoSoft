'use client';

import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const partners = [
  { name: 'HSBC', logo: '/logos/hsbc.svg' },
  { name: 'Bank of America', logo: '/logos/bank-of-america.svg' },
  { name: 'Euroclear', logo: '/logos/euroclear.svg' },
  { name: 'MUFG', logo: '/logos/mufg.svg' },
  { name: 'Vodafone', logo: '/logos/vodafone.svg' },
  { name: 'HQLA', logo: '/logos/hqla.svg' },
  { name: 'SDX', logo: '/logos/sdx.svg' },
  { name: 'Fnality', logo: '/logos/fnality.svg' },
];

export default function Partners() {
  // Duplicate partners for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Trusted by leading financial institutions
          </h2>
        </AnimatedSection>
        <div className="relative">
          {/* Gradient masks for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
          
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-12 items-center"
              animate={{
                x: [0, -50 + '%'],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 25,
                  ease: 'linear',
                },
              }}
            >
              {duplicatedPartners.map((partner, index) => (
                <motion.div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center px-8 py-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-gray-400 text-lg md:text-xl lg:text-2xl font-medium whitespace-nowrap hover:text-brand-orange transition-colors duration-300">
                    {partner.name}
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

