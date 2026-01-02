'use client';

import { motion } from 'framer-motion';

const solutions = [
  {
    title: 'AI Automation',
    description: 'Streamline workflows with intelligent automation that learns and adapts to your business processes. Reduce manual tasks by up to 80% and boost productivity.',
    image: '/illustrations/programmer.svg',
    word: 'Automate',
    link: '/ai-automation',
  },
  {
    title: 'Blockchain Development',
    description: 'Secure, transparent, decentralized solutions built on cutting-edge blockchain technology. Ensure data integrity and trust in every transaction.',
    image: '/illustrations/communication.svg',
    word: 'Decentralize',
    link: '/blockchain-development',
  },
  {
    title: 'Custom Software',
    description: 'Tailored applications built specifically for your needs. From web apps to enterprise solutions, we deliver software that scales with your business.',
    image: '/illustrations/data-analysis.svg',
    word: 'Customize',
    link: '/custom-software',
  },
  {
    title: 'SaaS Products',
    description: 'Scalable software-as-a-service solutions that grow with your business. Cloud-based platforms with subscription management, analytics, and seamless integrations.',
    image: '/illustrations/presentation.svg',
    word: 'Scale',
    link: '/saas-products',
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-[2fr_3fr] gap-20 items-start">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="space-y-10 max-w-xl ml-auto"
            >
              {/* Heading */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight whitespace-nowrap">
                Our <span className="text-brand-orange">Solutions.</span>
              </h2>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Innovative technology solutions to help your business grow and succeed. We deliver cutting-edge software that transforms operations and drives success.
              </p>

              {/* Statistics/Percentages */}
              <div className="space-y-4 my-6">
                {/* Top Row - Full Width */}
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">80%</div>
                  <div className="border-t border-gray-300 pt-2">
                    <div className="text-sm text-gray-600">Efficiency</div>
                  </div>
                </div>
                
                {/* Bottom Row - Two Columns */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">95%</div>
                    <div className="border-t border-gray-300 pt-2">
                      <div className="text-sm text-gray-600">Success</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">50+</div>
                    <div className="border-t border-gray-300 pt-2">
                      <div className="text-sm text-gray-600">Projects</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Read More Button */}
              <motion.a
                href="#solutions-detail"
                className="inline-flex items-center gap-3 px-6 py-4 bg-brand-orange text-white rounded-xl font-semibold hover:bg-brand-orange-dark transition-colors shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                Read more
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </motion.a>
            </motion.div>

            {/* Right Column - Solution Cards (Auto-sliding Carousel) */}
            <motion.div
              className="relative w-full"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.3, delay: 0.1, ease: 'easeOut' }}
            >
              <div className="overflow-hidden w-full">
                <motion.div
                  className="flex gap-6"
                  animate={{
                    x: [0, -50 + '%'],
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: 'loop',
                      duration: 30,
                      ease: 'linear',
                    },
                  }}
                >
                  {/* Duplicate solutions for seamless infinite scroll */}
                  {[...solutions, ...solutions].map((solution, index) => (
                    <motion.div
                      key={`${solution.title}-${index}`}
                      className="flex-shrink-0 w-[280px] md:w-[300px] lg:w-[320px]"
                    >
                      <div className="bg-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 h-full min-h-[400px] flex flex-col">
                        {/* Illustration */}
                        <div className="p-6 pb-4 flex flex-col items-center">
                          <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
                            <img
                              src={solution.image}
                              alt={solution.title}
                              className="w-full h-full object-contain"
                              style={{ filter: 'brightness(0)' }}
                            />
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="p-8 pt-4 flex-1 flex flex-col justify-between">
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            {solution.title}
                          </h3>
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {solution.description}
                          </p>
                          <motion.a
                            href={solution.link}
                            className="inline-flex items-center text-brand-orange font-semibold group"
                            whileHover={{ x: 5 }}
                            transition={{ type: 'spring', stiffness: 400 }}
                          >
                            Read more
                            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </motion.a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

