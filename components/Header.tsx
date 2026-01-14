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
          <Link href="/" className="flex items-center gap-1 sm:gap-1.5 z-10">
            <Image 
              src="/logo.png" 
              alt="FluvoSoft Logo"
              width={180} 
              height={180}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain"
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-3 absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="px-3 xl:px-4 py-1 text-white hover:text-brand-orange-light font-medium font-inter transition-colors rounded-xl text-sm xl:text-base">
              Home
            </Link>
            <div className="relative group">
              <button className="px-3 xl:px-4 py-1 text-white hover:text-brand-orange-light font-medium font-inter flex items-center transition-colors rounded-xl text-sm xl:text-base">
                What we do
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-brand-orange-dark border border-brand-orange-light/30 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link href="/fluvo-soft-lab" className="block px-4 py-2 text-white hover:bg-brand-orange-light/20 hover:text-brand-orange-light font-inter transition-colors rounded-t-xl text-sm">
                  FluvoSoft Lab
                </Link>
                <Link href="/solana-toolkit" className="block px-4 py-2 text-white hover:bg-brand-orange-light/20 hover:text-brand-orange-light font-inter transition-colors text-sm">
                  FluvoSoft Solana Toolkit
                </Link>
                <Link href="/corda" className="block px-4 py-2 text-white hover:bg-brand-orange-light/20 hover:text-brand-orange-light font-inter transition-colors text-sm">
                  Corda
                </Link>
                <Link href="/service-support" className="block px-4 py-2 text-white hover:bg-brand-orange-light/20 hover:text-brand-orange-light font-inter transition-colors rounded-b-xl text-sm">
                  Service and Support
                </Link>
              </div>
            </div>
            <Link href="/solutions" className="px-3 xl:px-4 py-1 text-white hover:text-brand-orange-light font-medium font-inter transition-colors rounded-xl text-sm xl:text-base">
              Solutions
            </Link>
            <Link href="/resources" className="px-3 xl:px-4 py-1 text-white hover:text-brand-orange-light font-medium font-inter transition-colors rounded-xl text-sm xl:text-base">
              Resources
            </Link>
            <Link href="/about" className="px-3 xl:px-4 py-1 text-white hover:text-brand-orange-light font-medium font-inter transition-colors rounded-xl text-sm xl:text-base">
              About
            </Link>
          </div>

          {/* CTA Button - Right */}
          <div className="hidden lg:block z-10">
            <Link href="/contact" className="px-6 xl:px-7 py-2.5 xl:py-3 bg-brand-orange-dark text-white font-medium font-inter transition-colors rounded-xl hover:bg-brand-orange-light inline-flex items-center gap-2 text-base xl:text-lg">
              Book a Demo
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  className="block py-2.5 text-white hover:text-brand-orange-light font-inter transition-colors text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <div className="pt-2 pb-1">
                  <span className="block py-2 text-white/80 font-inter text-sm font-semibold uppercase tracking-wide">What we do</span>
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
                <Link 
                  href="/solutions" 
                  className="block py-2.5 text-white hover:text-brand-orange-light font-inter transition-colors text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Solutions
                </Link>
                <Link 
                  href="/resources" 
                  className="block py-2.5 text-white hover:text-brand-orange-light font-inter transition-colors text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Resources
                </Link>
                <Link 
                  href="/about" 
                  className="block py-2.5 text-white hover:text-brand-orange-light font-inter transition-colors text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  href="/contact" 
                  className="block py-3 px-6 bg-brand-orange-dark text-white rounded-xl mt-3 hover:bg-brand-orange-light font-inter transition-colors inline-flex items-center gap-2 text-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book a Demo
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

