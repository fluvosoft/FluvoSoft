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
    <header className="bg-transparent">
      <nav className="container">
        <div className="relative flex items-center justify-between bg-brand-orange px-12 py-2">
          <Link href="/" className="flex items-center gap-1">
            <Image 
              src="/illustrations/fluvo_logo.png" 
              alt="FluvoSoft Logo" 
              width={60} 
              height={60}
              className="object-contain"
            />
            <span className="text-2xl font-bold text-white font-logo">FluvoSoft</span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-3 absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="px-4 py-2 text-white hover:text-brand-orange-light font-medium font-inter transition-colors rounded-xl">
              Home
            </Link>
            <div className="relative group">
              <button className="px-4 py-2 text-white hover:text-brand-orange-light font-medium font-inter flex items-center transition-colors rounded-xl">
                What we do
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-brand-orange-dark border border-brand-orange-light/30 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/fluvo-soft-lab" className="block px-4 py-2 text-white hover:bg-brand-orange-light/20 hover:text-brand-orange-light font-inter transition-colors rounded-t-xl">
                  FluvoSoft Lab
                </Link>
                <Link href="/solana-toolkit" className="block px-4 py-2 text-white hover:bg-brand-orange-light/20 hover:text-brand-orange-light font-inter transition-colors">
                  FluvoSoft Solana Toolkit
                </Link>
                <Link href="/corda" className="block px-4 py-2 text-white hover:bg-brand-orange-light/20 hover:text-brand-orange-light font-inter transition-colors">
                  Corda
                </Link>
                <Link href="/service-support" className="block px-4 py-2 text-white hover:bg-brand-orange-light/20 hover:text-brand-orange-light font-inter transition-colors rounded-b-xl">
                  Service and Support
                </Link>
              </div>
            </div>
            <Link href="/solutions" className="px-4 py-2 text-white hover:text-brand-orange-light font-medium font-inter transition-colors rounded-xl">
              Solutions
            </Link>
            <Link href="/resources" className="px-4 py-2 text-white hover:text-brand-orange-light font-medium font-inter transition-colors rounded-xl">
              Resources
            </Link>
            <Link href="/about" className="px-4 py-2 text-white hover:text-brand-orange-light font-medium font-inter transition-colors rounded-xl">
              About
            </Link>
          </div>

          {/* CTA Button - Right */}
          <div className="hidden md:block">
            <Link href="/contact" className="px-5 py-2.5 bg-brand-orange-dark text-white font-medium font-inter transition-colors rounded-xl hover:bg-brand-orange-light inline-flex items-center gap-1">
              Book a Demo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
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

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden mt-4 pb-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <Link href="/" className="block py-2 text-white hover:text-brand-orange-light font-inter transition-colors">
                  Home
                </Link>
                <Link href="/fluvo-soft-lab" className="block py-2 text-white hover:text-brand-orange-light font-inter transition-colors">
                  FluvoSoft Lab
                </Link>
                <Link href="/solana-toolkit" className="block py-2 text-white hover:text-brand-orange-light font-inter transition-colors">
                  FluvoSoft Solana Toolkit
                </Link>
                <Link href="/corda" className="block py-2 text-white hover:text-brand-orange-light font-inter transition-colors">
                  Corda
                </Link>
                <Link href="/solutions" className="block py-2 text-white hover:text-brand-orange-light font-inter transition-colors">
                  Solutions
                </Link>
                <Link href="/resources" className="block py-2 text-white hover:text-brand-orange-light font-inter transition-colors">
                  Resources
                </Link>
                <Link href="/about" className="block py-2 text-white hover:text-brand-orange-light font-inter transition-colors">
                  About
                </Link>
                <Link href="/contact" className="block py-2.5 px-5 bg-brand-orange-dark text-white rounded-xl inline-block mt-2 hover:bg-brand-orange-light font-inter transition-colors inline-flex items-center gap-1">
                  Book a Demo
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

