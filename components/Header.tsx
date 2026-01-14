'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="bg-transparent w-full relative z-50">
      <nav className="w-full relative">
        <div className="relative flex items-center justify-between bg-brand-orange px-4 sm:px-6 md:px-8 lg:px-12 py-1">
          <Link href="/" className="flex items-center gap-2 sm:gap-2.5 z-10">
            <Image 
              src="/logo.png" 
              alt="FluvoSoft Logo"
              width={180} 
              height={180}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain"
            />
            <span className="text-white text-lg sm:text-xl md:text-2xl lg:text-2xl font-inter">
              <span className="font-bold">Fluvo</span>
              <span className="font-normal">Soft</span>
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-3 absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="px-3 xl:px-4 py-1 text-white hover:text-white font-medium font-inter transition-all border-b-2 border-transparent hover:border-white text-sm xl:text-base">
              Home
            </Link>
            <div className="relative group">
              <button className="px-3 xl:px-4 py-1 text-white hover:text-white font-medium font-inter flex items-center transition-all border-b-2 border-transparent hover:border-white text-sm xl:text-base">
                Brands
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link href="/esoul" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-brand-orange font-inter transition-colors rounded-xl text-sm">
                  eSoul
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="px-3 xl:px-4 py-1 text-white hover:text-white font-medium font-inter flex items-center transition-all border-b-2 border-transparent hover:border-white text-sm xl:text-base">
                Solutions
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link href="/fluvo-soft-lab" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-brand-orange font-inter transition-colors rounded-t-xl text-sm">
                  FluvoSoft Lab
                </Link>
                <Link href="/solana-toolkit" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-brand-orange font-inter transition-colors text-sm">
                  FluvoSoft Solana Toolkit
                </Link>
                <Link href="/corda" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-brand-orange font-inter transition-colors text-sm">
                  Corda
                </Link>
                <Link href="/service-support" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-brand-orange font-inter transition-colors rounded-b-xl text-sm">
                  Service and Support
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="px-3 xl:px-4 py-1 text-white hover:text-white font-medium font-inter flex items-center transition-all border-b-2 border-transparent hover:border-white text-sm xl:text-base">
                Resources
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[800px] max-w-[90vw] bg-white border border-gray-200 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden">
                <div className="grid grid-cols-2 gap-0">
                  {/* Left Column - Resources Links */}
                  <div className="p-6 border-r border-gray-200">
                    <div className="text-gray-800 text-xs font-semibold uppercase tracking-wider mb-4">RESOURCES</div>
                    <div className="grid grid-cols-2 gap-4">
                      {/* Left Column Links */}
                      <div className="space-y-3">
                        <Link href="/about" className="flex items-center gap-3 text-gray-800 hover:text-brand-orange transition-colors group">
                          <svg className="w-4 h-4 text-gray-500 group-hover:text-brand-orange transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          </svg>
                          <span className="text-sm">About</span>
                        </Link>
                        <Link href="/security" className="flex items-center gap-3 text-gray-800 hover:text-brand-orange transition-colors group">
                          <svg className="w-4 h-4 text-gray-500 group-hover:text-brand-orange transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                          <span className="text-sm">Security</span>
                        </Link>
                        <Link href="/guides" className="flex items-center gap-3 text-gray-800 hover:text-brand-orange transition-colors group">
                          <svg className="w-4 h-4 text-gray-500 group-hover:text-brand-orange transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          <span className="text-sm">Guides</span>
                        </Link>
                        <Link href="/careers" className="flex items-center gap-3 text-gray-800 hover:text-brand-orange transition-colors group">
                          <svg className="w-4 h-4 text-gray-500 group-hover:text-brand-orange transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <span className="text-sm">Careers</span>
                        </Link>
                        <Link href="/research" className="flex items-center gap-3 text-gray-800 hover:text-brand-orange transition-colors group">
                          <svg className="w-4 h-4 text-gray-500 group-hover:text-brand-orange transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                          <span className="text-sm">Research</span>
                        </Link>
                      </div>
                      {/* Right Column Links */}
                      <div className="space-y-3">
                        <Link href="/contact" className="flex items-center gap-3 text-gray-800 hover:text-brand-orange transition-colors group">
                          <svg className="w-4 h-4 text-gray-500 group-hover:text-brand-orange transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <span className="text-sm">Contact Us</span>
                        </Link>
                        <Link href="/blog" className="flex items-center gap-3 text-gray-800 hover:text-brand-orange transition-colors group">
                          <svg className="w-4 h-4 text-gray-500 group-hover:text-brand-orange transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          <span className="text-sm">Blog</span>
                        </Link>
                        <Link href="/events" className="flex items-center gap-3 text-gray-800 hover:text-brand-orange transition-colors group">
                          <svg className="w-4 h-4 text-gray-500 group-hover:text-brand-orange transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="text-sm">Events</span>
                        </Link>
                        <Link href="/open-source-contribution" className="flex items-center gap-3 text-gray-800 hover:text-brand-orange transition-colors group">
                          <svg className="w-4 h-4 text-gray-500 group-hover:text-brand-orange transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                          <span className="text-sm">Open Source</span>
                        </Link>
                        <Link href="/documentation" className="flex items-center gap-3 text-gray-800 hover:text-brand-orange transition-colors group">
                          <svg className="w-4 h-4 text-gray-500 group-hover:text-brand-orange transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          <span className="text-sm">Documentation</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Column - Featured Blog Posts */}
                  <div className="p-6 bg-gray-50">
                    <div className="text-gray-800 text-xs font-semibold uppercase tracking-wider mb-4">FEATURED BLOG POSTS</div>
                    <div className="space-y-4">
                      {/* Blog Post 1 */}
                      <Link href="/blog/post-1" className="block group">
                        <div className="flex gap-3">
                          <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden">
                            <div className="w-full h-full bg-gradient-to-br from-brand-orange/20 to-brand-orange/10 flex items-center justify-center">
                              <svg className="w-8 h-8 text-brand-orange/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-gray-800 text-sm font-medium group-hover:text-brand-orange transition-colors line-clamp-2">
                              The Future of AI in Enterprise Solutions
                            </h3>
                          </div>
                        </div>
                      </Link>
                      
                      {/* Blog Post 2 */}
                      <Link href="/blog/post-2" className="block group">
                        <div className="flex gap-3">
                          <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden">
                            <div className="w-full h-full bg-gradient-to-br from-brand-orange/20 to-brand-orange/10 flex items-center justify-center">
                              <svg className="w-8 h-8 text-brand-orange/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-gray-800 text-sm font-medium group-hover:text-brand-orange transition-colors line-clamp-2">
                              Building Scalable Blockchain Applications
                            </h3>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="px-3 xl:px-4 py-1 text-white hover:text-white font-medium font-inter flex items-center transition-all border-b-2 border-transparent hover:border-white text-sm xl:text-base">
                Company
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link href="/about" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-brand-orange font-inter transition-colors rounded-t-xl text-sm">
                  About
                </Link>
                <Link href="/contact" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-brand-orange font-inter transition-colors rounded-b-xl text-sm">
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* CTA Button - Right */}
          <div className="hidden lg:block z-10">
            <Link href="/contact" className="px-4 xl:px-5 py-1.5 xl:py-2 bg-white text-brand-orange font-semibold font-inter transition-all duration-300 rounded-lg hover:bg-gray-50 hover:shadow-lg hover:shadow-white/20 hover:scale-105 border-2 border-white hover:border-white/90 inline-flex items-center gap-1.5 text-sm xl:text-base group">
              Book a Demo
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white z-20 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation - Absolutely Positioned */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden absolute top-full left-0 w-full bg-brand-orange shadow-lg z-30"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="px-4 sm:px-6 md:px-8 pb-4 pt-2 space-y-1"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Link 
                  href="/" 
                  className="block py-2.5 text-white hover:text-white font-inter transition-all border-b-2 border-transparent hover:border-white text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <div className="pt-2 pb-1">
                  <span className="block py-2 text-white/80 font-inter text-sm font-semibold uppercase tracking-wide">Brands</span>
                  <Link 
                    href="/esoul" 
                    className="block py-2 pl-4 text-white hover:text-brand-orange-light font-inter transition-colors text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    eSoul
                  </Link>
                </div>
                <div className="pt-2 pb-1">
                  <span className="block py-2 text-white/80 font-inter text-sm font-semibold uppercase tracking-wide">Solutions</span>
                  <Link 
                    href="/fluvo-soft-lab" 
                    className="block py-2 pl-4 text-white hover:text-brand-orange-light font-inter transition-colors text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    FluvoSoft Lab
                  </Link>
                  <Link 
                    href="/solana-toolkit" 
                    className="block py-2 pl-4 text-white hover:text-brand-orange-light font-inter transition-colors text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    FluvoSoft Solana Toolkit
                  </Link>
                  <Link 
                    href="/corda" 
                    className="block py-2 pl-4 text-white hover:text-brand-orange-light font-inter transition-colors text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Corda
                  </Link>
                  <Link 
                    href="/service-support" 
                    className="block py-2 pl-4 text-white hover:text-brand-orange-light font-inter transition-colors text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Service and Support
                  </Link>
                </div>
                <div className="pt-2 pb-1">
                  <span className="block py-2 text-white/80 font-inter text-sm font-semibold uppercase tracking-wide">Resources</span>
                  <Link 
                    href="/blog" 
                    className="block py-2 pl-4 text-white hover:text-brand-orange-light font-inter transition-colors text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link 
                    href="/research" 
                    className="block py-2 pl-4 text-white hover:text-brand-orange-light font-inter transition-colors text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Research
                  </Link>
                  <Link 
                    href="/open-source-contribution" 
                    className="block py-2 pl-4 text-white hover:text-brand-orange-light font-inter transition-colors text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Open Source Contribution
                  </Link>
                  <Link 
                    href="/events" 
                    className="block py-2 pl-4 text-white hover:text-brand-orange-light font-inter transition-colors text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Events
                  </Link>
                </div>
                <div className="pt-2 pb-1">
                  <span className="block py-2 text-white/80 font-inter text-sm font-semibold uppercase tracking-wide">Company</span>
                  <Link 
                    href="/about" 
                    className="block py-2 pl-4 text-white hover:text-brand-orange-light font-inter transition-colors text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link 
                    href="/contact" 
                    className="block py-2 pl-4 text-white hover:text-brand-orange-light font-inter transition-colors text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
                <Link 
                  href="/contact" 
                  className="block py-3 px-6 bg-white text-brand-orange rounded-lg mt-3 hover:bg-gray-50 hover:shadow-lg font-semibold font-inter transition-all duration-300 inline-flex items-center gap-2 text-lg group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book a Demo
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

