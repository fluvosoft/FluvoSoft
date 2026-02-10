'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Script from 'next/script';

export default function SaaSPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'SaaS Platform Development',
    provider: {
      '@type': 'Organization',
      name: 'FluvoSoft',
      url: 'https://fluvosoft.com',
    },
    description: 'SaaS platform development services including cloud-based software solutions, subscription management, and multi-tenant architecture.',
    serviceType: 'Software as a Service',
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'SaaS Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SaaS Platform Development',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SaaS Migration Services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SaaS Analytics Platform',
          },
        },
      ],
    },
  };
  const technologies = [
    {
      name: 'Cloud Infrastructure',
      description: 'AWS, Azure, and GCP for scalable, reliable cloud-based SaaS platforms with global reach and high availability',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
    },
    {
      name: 'Subscription Management',
      description: 'Robust billing and subscription systems with payment processing, plan management, and automated renewals',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
    },
    {
      name: 'Multi-tenancy Architecture',
      description: 'Secure, scalable multi-tenant architecture that efficiently serves multiple customers from a single platform',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      name: 'API & Integrations',
      description: 'Comprehensive APIs and third-party integrations to connect with popular tools and services',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      name: 'Analytics & Reporting',
      description: 'Advanced analytics dashboards and reporting tools to track usage, performance, and business metrics',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      name: 'Security & Compliance',
      description: 'Enterprise-grade security with SSL/TLS, 2FA, GDPR compliance, and regular security audits',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
  ];

  const products = [
    {
      name: 'SaaS Platform Development',
      description: 'End-to-end SaaS platform development with subscription management, user management, and scalable architecture.',
      features: ['Subscription Billing', 'User Management', 'Scalable Infrastructure', 'Multi-tenant Architecture'],
      link: '/contact',
    },
    {
      name: 'SaaS Migration Services',
      description: 'Migrate your existing application to a SaaS model with cloud infrastructure and subscription management.',
      features: ['Cloud Migration', 'Architecture Redesign', 'Data Migration', 'Zero Downtime'],
      link: '/contact',
    },
    {
      name: 'SaaS Analytics Platform',
      description: 'Comprehensive analytics and reporting solutions for SaaS businesses to track metrics and optimize performance.',
      features: ['Usage Analytics', 'Revenue Tracking', 'User Behavior Insights', 'Custom Dashboards'],
      link: '/contact',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Strategy & Planning',
      description: 'We analyze your business model, define pricing strategies, and plan the SaaS architecture. We identify key features, user flows, and technical requirements.',
    },
    {
      step: '02',
      title: 'Architecture Design',
      description: 'Our team designs a scalable, multi-tenant SaaS architecture with subscription management, billing systems, and integration capabilities.',
    },
    {
      step: '03',
      title: 'Development & Integration',
      description: 'We build your SaaS platform with payment processing, user management, analytics, and third-party integrations. Agile development ensures rapid iteration.',
    },
    {
      step: '04',
      title: 'Testing & Launch',
      description: 'Comprehensive testing including load testing, security audits, and user acceptance testing. We deploy to production with monitoring and support.',
    },
    {
      step: '05',
      title: 'Growth & Optimization',
      description: 'Ongoing monitoring, performance optimization, feature development, and scaling to support your growing user base and business needs.',
    },
  ];

  return (
    <main className="min-h-screen bg-black">
      <Script
        id="saas-structured-data"
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
                SaaS Products
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 text-center max-w-4xl mx-auto leading-relaxed mb-8">
              Scalable software-as-a-service solutions that grow with your business. Cloud-based platforms with subscription management, analytics, and seamless integrations.
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
                Our SaaS development team specializes in building scalable, cloud-native platforms that deliver exceptional user experiences and drive business growth.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl md:text-3xl font-normal text-white mb-4">Scalability-First Approach</h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  We design SaaS platforms with scalability at the core. Our team builds cloud-native solutions using microservices architecture, ensuring your platform can handle growth from startup to enterprise scale.
                </p>
                <p className="text-white/70 leading-relaxed mb-6">
                  We focus on creating seamless user experiences, robust subscription management, and comprehensive analytics that help you understand and optimize your business performance.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start text-white/70">
                    <svg className="w-6 h-6 text-brand-orange mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Cloud-native architecture designed for scale and reliability</span>
                  </li>
                  <li className="flex items-start text-white/70">
                    <svg className="w-6 h-6 text-brand-orange mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Agile development with continuous deployment and iteration</span>
                  </li>
                  <li className="flex items-start text-white/70">
                    <svg className="w-6 h-6 text-brand-orange mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Data-driven insights and analytics to optimize growth</span>
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
                  src="/Page pictures/SaaS.png"
                  alt="FluvoSoft SaaS platform development team creating scalable cloud-based software-as-a-service solutions"
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
                  Our SaaS Development Process
                </span>
              </h2>
              <p className="text-lg md:text-xl text-white/70 text-center max-w-4xl mx-auto leading-relaxed mb-8">
                A comprehensive approach to building successful SaaS platforms from concept to launch and beyond
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
                  SaaS Technologies We Use
                </span>
              </h2>
              <p className="text-lg md:text-xl text-white/70 text-center max-w-4xl mx-auto leading-relaxed mb-8">
                We leverage cutting-edge technologies and best practices to build robust, scalable SaaS platforms
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
                  Our SaaS Services
                </span>
              </h2>
              <p className="text-lg md:text-xl text-white/70 text-center max-w-4xl mx-auto leading-relaxed mb-8">
                Comprehensive SaaS development and management services to help you build and scale your platform
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
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
                  Ready to Build Your SaaS Platform?
                </span>
              </h2>
              <p className="text-lg md:text-xl text-white/70 text-center max-w-4xl mx-auto leading-relaxed mb-8">
                Let&apos;s discuss how we can help you build a scalable, successful SaaS platform that grows with your business and delights your users.
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
