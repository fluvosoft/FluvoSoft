'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Script from 'next/script';

export default function BlockchainPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Blockchain Development Services',
    provider: {
      '@type': 'Organization',
      name: 'FluvoSoft',
      url: 'https://fluvosoft.com',
    },
    description: 'Expert blockchain development services including smart contracts, decentralized applications, and enterprise blockchain solutions.',
    serviceType: 'Blockchain Development',
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Blockchain Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Smart Contract Development',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Decentralized Application Development',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Enterprise Blockchain Solutions',
          },
        },
      ],
    },
  };
  const technologies = [
    {
      name: 'Ethereum',
      description: 'Smart contract development on the world\'s most popular blockchain platform',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      name: 'Solana',
      description: 'High-performance blockchain for scalable decentralized applications',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      name: 'Hyperledger',
      description: 'Enterprise-grade blockchain frameworks for business applications',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      name: 'Corda',
      description: 'Distributed ledger technology for regulated financial markets',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      name: 'Solidity',
      description: 'Smart contract programming language for Ethereum and EVM-compatible chains',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      name: 'Web3.js',
      description: 'JavaScript library for interacting with Ethereum blockchain',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
  ];

  const products = [
    {
      name: 'FluvoSoft Solana Toolkit',
      description: 'Comprehensive development toolkit for building Solana-based applications with pre-built components and utilities.',
      features: ['Smart Contract Templates', 'Wallet Integration', 'Transaction Management', 'Testing Framework'],
      link: '/solana-toolkit',
    },
    {
      name: 'Corda Enterprise Solutions',
      description: 'Enterprise blockchain solutions built on Corda for regulated industries and financial institutions.',
      features: ['Regulatory Compliance', 'Privacy Features', 'Scalable Architecture', 'Enterprise Support'],
      link: '/corda',
    },
    {
      name: 'Custom Smart Contracts',
      description: 'Tailored smart contract development for DeFi, NFTs, DAOs, and other blockchain applications.',
      features: ['Custom Logic', 'Security Audits', 'Gas Optimization', 'Multi-chain Support'],
      link: '/contact',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements, identify use cases, and design the optimal blockchain architecture for your needs.',
    },
    {
      step: '02',
      title: 'Architecture Design',
      description: 'Our team designs a scalable, secure blockchain solution tailored to your business requirements and compliance needs.',
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'We develop smart contracts and dApps using best practices, followed by comprehensive testing and security audits.',
    },
    {
      step: '04',
      title: 'Deployment & Integration',
      description: 'We deploy your blockchain solution and integrate it with existing systems, ensuring seamless operation.',
    },
    {
      step: '05',
      title: 'Maintenance & Support',
      description: 'Ongoing support, monitoring, and updates to keep your blockchain solution secure and optimized.',
    },
  ];

  return (
    <main className="min-h-screen bg-black">
      <Script
        id="blockchain-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/20 via-brand-orange/10 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-4">
              <span className="bg-gradient-to-r from-brand-orange via-brand-orange-dark to-brand-orange bg-clip-text text-transparent">
                Blockchain Development
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 text-center max-w-4xl mx-auto leading-relaxed mb-8">
              Building secure, transparent, and decentralized solutions that transform how businesses operate and trust is established.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand-orange text-white rounded-lg font-semibold text-base hover:bg-brand-orange-dark transition-colors shadow-lg hover:shadow-xl hover:shadow-brand-orange/25"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              Get Started
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-4">
                <span className="bg-gradient-to-r from-brand-orange via-brand-orange-dark to-brand-orange bg-clip-text text-transparent">
                  How Our Team Works
                </span>
              </h2>
              <p className="text-lg md:text-xl text-white/70 text-center max-w-4xl mx-auto leading-relaxed mb-8">
                Our blockchain development team combines deep technical expertise with business acumen to deliver solutions that drive real value.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl md:text-3xl font-normal text-white mb-4">Collaborative Approach</h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  Our blockchain team works closely with your business stakeholders to understand your unique challenges and opportunities. We believe in transparent communication and iterative development, ensuring you&apos;re involved at every stage of the process.
                </p>
                <p className="text-white/70 leading-relaxed mb-6">
                  We combine agile methodologies with blockchain best practices, allowing us to adapt quickly to changing requirements while maintaining the highest standards of security and quality.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start text-white/70">
                    <svg className="w-6 h-6 text-brand-orange mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Cross-functional teams with blockchain, security, and business expertise</span>
                  </li>
                  <li className="flex items-start text-white/70">
                    <svg className="w-6 h-6 text-brand-orange mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Regular sprints and demos to keep you informed</span>
                  </li>
                  <li className="flex items-start text-white/70">
                    <svg className="w-6 h-6 text-brand-orange mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Security-first mindset with regular audits and reviews</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative h-[400px] rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <Image
                  src="/Page pictures/Blockchain.png"
                  alt="FluvoSoft blockchain development team working on decentralized solutions and smart contracts"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-4">
                <span className="bg-gradient-to-r from-brand-orange via-brand-orange-dark to-brand-orange bg-clip-text text-transparent">
                  Our Development Process
                </span>
              </h2>
              <p className="text-lg md:text-xl text-white/70 text-center max-w-4xl mx-auto leading-relaxed mb-8">
                A proven methodology that ensures secure, scalable, and successful blockchain implementations
              </p>
            </motion.div>

            <div className="space-y-8">
              {processSteps.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-brand-orange/20 rounded-xl flex items-center justify-center text-brand-orange font-bold text-xl">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-normal text-white mb-3">{item.title}</h3>
                    <p className="text-white/70 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-4">
                <span className="bg-gradient-to-r from-brand-orange via-brand-orange-dark to-brand-orange bg-clip-text text-transparent">
                  Blockchain Technologies We Use
                </span>
              </h2>
              <p className="text-lg md:text-xl text-white/70 text-center max-w-4xl mx-auto leading-relaxed mb-8">
                We work with leading blockchain platforms and tools to build the right solution for your needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-brand-orange/20 rounded-xl flex items-center justify-center text-brand-orange mb-4">
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-normal text-white mb-3">{tech.name}</h3>
                  <p className="text-white/70 leading-relaxed text-sm">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-4">
                <span className="bg-gradient-to-r from-brand-orange via-brand-orange-dark to-brand-orange bg-clip-text text-transparent">
                  Our Blockchain Products
                </span>
              </h2>
              <p className="text-lg md:text-xl text-white/70 text-center max-w-4xl mx-auto leading-relaxed mb-8">
                Explore our suite of blockchain solutions designed to solve real-world business challenges
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 flex flex-col"
                >
                  <div className="w-14 h-14 bg-brand-orange/20 rounded-xl flex items-center justify-center text-brand-orange mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-normal text-white mb-3">{product.name}</h3>
                  <p className="text-white/70 leading-relaxed text-sm mb-4 flex-1">{product.description}</p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-white/80">
                        <svg className="w-4 h-4 text-brand-orange mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.a
                    href={product.link}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold text-sm hover:bg-brand-orange hover:border-brand-orange transition-all duration-300"
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    Learn more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="p-12 rounded-2xl bg-gradient-to-br from-brand-orange/10 via-brand-orange/5 to-transparent border border-brand-orange/20 backdrop-blur-sm">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-4">
                <span className="bg-gradient-to-r from-brand-orange via-brand-orange-dark to-brand-orange bg-clip-text text-transparent">
                  Ready to Build Your Blockchain Solution?
                </span>
              </h2>
              <p className="text-lg md:text-xl text-white/70 text-center max-w-4xl mx-auto leading-relaxed mb-8">
                Let&apos;s discuss how blockchain technology can transform your business operations and create new opportunities for growth.
              </p>
              <motion.a
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-brand-orange text-white rounded-lg font-semibold text-base hover:bg-brand-orange-dark transition-colors shadow-lg hover:shadow-xl hover:shadow-brand-orange/25"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                Get Started
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
