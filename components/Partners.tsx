'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

const partners = [
  { name: 'Dolby', logo: '/illustrations/dolby-logo-white.svg', isTextOnly: false },
  { name: 'Nike', logo: '/illustrations/nike-logo-icon_light.svg', isTextOnly: false },
  { name: 'Zoom', logo: '/illustrations/zoom-logo-white.svg', isTextOnly: false },
  { name: 'Adept', isTextOnly: true },
  { name: 'TIME', isTextOnly: true, useTimesNewRoman: true },
  { name: 'Character.ai', isTextOnly: true },
];

export default function Partners() {
  // Duplicate partners for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-semibold text-center text-gray-900 mb-12">
          <span className="inline-block bg-gradient-to-r from-brand-orange via-brand-orange-light via-brand-orange to-brand-orange-dark bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">Fluvosoft works with</span> Generative AI Companies, BD Government Agencies & Enterprises
        </h2>
        <div className="relative">
          {/* Gradient masks for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-64 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-64 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
          
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
                  {partner.isTextOnly ? (
                    <div 
                      className={`text-gray-400 text-lg md:text-xl lg:text-2xl font-bold whitespace-nowrap hover:text-brand-orange transition-colors duration-300 ${
                        partner.useTimesNewRoman ? 'font-serif' : ''
                      }`}
                      style={partner.useTimesNewRoman ? { fontFamily: "'Times New Roman', Times, serif" } : {}}
                    >
                      {partner.name}
                    </div>
                  ) : partner.logo ? (
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={120}
                      height={60}
                      className="object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 brightness-0"
                    />
                  ) : null}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

