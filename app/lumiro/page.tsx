'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Script from 'next/script';

export default function LumiroPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Lumiro',
    applicationCategory: 'WebApplication',
    operatingSystem: 'Web',
    description: 'Professional landing page template with modern design components and seamless customization for your business.',
    provider: {
      '@type': 'Organization',
      name: 'FluvoSoft',
      url: 'https://fluvosoft.com',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '150',
    },
  };
  return (
    <main className="min-h-screen bg-black">
      <Script
        id="lumiro-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Page info/Hero_right_side.png"
            alt="Lumiro professional landing page template hero background with modern design elements"
            fill
            className="object-cover"
            sizes="100vw"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-black/20"></div>
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
                Lumiro
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 text-center max-w-4xl mx-auto leading-relaxed mb-8">
              Professional landing page template with modern design components and seamless customization for your business.
            </p>
            <motion.a
              href="https://www.meshprojukti.cloud/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-orange rounded-lg font-semibold text-base hover:bg-white/90 transition-colors shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              Visit Lumiro
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Lumiro</h2>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
                Lumiro is a professional landing page template, meticulously crafted with modern web technologies. Build your business landing page with modern design components and seamless customization.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">What is Lumiro?</h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  Lumiro provides everything you need to create a stunning business landing page. With modern design components, seamless customization, and comprehensive documentation, building your perfect website has never been easier.
                </p>
                <p className="text-white/70 leading-relaxed">
                  Whether you&apos;re a startup looking to establish your online presence or an established business wanting to refresh your landing page, Lumiro offers the tools and flexibility to create a professional, conversion-optimized website.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative h-[400px] rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <Image
                  src="/Page info/carosel_5.jpeg"
                  alt="Lumiro business landing page template showcase with modern UI components and seamless customization"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                  quality={85}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Key Features</h2>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
                Why choose Lumiro for your landing page needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Modern Components',
                  description: 'Build with confidence using Lumiro\'s pre-built, modern UI components. Each component is carefully designed and ready to use.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  ),
                },
                {
                  title: 'Easy Customization',
                  description: 'Customize your landing page effortlessly with Lumiro\'s flexible template structure. Tailor colors, layouts, and content to match your brand.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  ),
                },
                {
                  title: 'Complete Documentation',
                  description: 'Get started quickly with Lumiro\'s comprehensive documentation and guides. From setup to deployment, we provide everything you need.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  ),
                },
                {
                  title: 'Professional Design',
                  description: 'Create stunning landing pages with Lumiro\'s user-centric design approach. Every element is crafted to deliver beautiful aesthetics.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  ),
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-brand-orange/20 rounded-xl flex items-center justify-center text-brand-orange mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/70 leading-relaxed text-sm">{feature.description}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Build Your Landing Page?
              </h2>
              <p className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                Experience Lumiro and discover how easy it is to create a professional, conversion-optimized landing page for your business.
              </p>
              <motion.a
                href="https://www.meshprojukti.cloud/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-brand-orange text-white rounded-lg font-semibold text-base hover:bg-brand-orange-dark transition-colors shadow-lg hover:shadow-xl hover:shadow-brand-orange/25"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                Get Started with Lumiro
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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
