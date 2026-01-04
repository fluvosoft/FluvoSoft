'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
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
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-transparent"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between bg-black rounded-2xl px-6 py-4 shadow-sm">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-white font-logo">FluvoSoft</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3">
            <Link href="/" className="px-4 py-2 text-white hover:text-brand-orange font-medium transition-colors rounded-xl">
              Home
            </Link>
            <div className="relative group">
              <button className="px-4 py-2 text-white hover:text-brand-orange font-medium flex items-center transition-colors rounded-xl">
                What we do
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-black border border-gray-800 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/fluvo-soft-lab" className="block px-4 py-2 text-white hover:bg-gray-900 hover:text-brand-orange transition-colors rounded-t-xl">
                  FluvoSoft Lab
                </Link>
                <Link href="/solana-toolkit" className="block px-4 py-2 text-white hover:bg-gray-900 hover:text-brand-orange transition-colors">
                  FluvoSoft Solana Toolkit
                </Link>
                <Link href="/corda" className="block px-4 py-2 text-white hover:bg-gray-900 hover:text-brand-orange transition-colors">
                  Corda
                </Link>
                <Link href="/service-support" className="block px-4 py-2 text-white hover:bg-gray-900 hover:text-brand-orange transition-colors rounded-b-xl">
                  Service and Support
                </Link>
              </div>
            </div>
            <Link href="/solutions" className="px-4 py-2 text-white hover:text-brand-orange font-medium transition-colors rounded-xl">
              Solutions
            </Link>
            <Link href="/resources" className="px-4 py-2 text-white hover:text-brand-orange font-medium transition-colors rounded-xl">
              Resources
            </Link>
            <Link href="/about" className="px-4 py-2 text-white hover:text-brand-orange font-medium transition-colors rounded-xl">
              About
            </Link>
            <Link href="/contact" className="px-5 py-2.5 bg-brand-orange text-white font-medium transition-colors rounded-xl hover:bg-brand-orange-dark">
              Contact
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
                <Link href="/" className="block py-2 text-white hover:text-brand-orange transition-colors">
                  Home
                </Link>
                <Link href="/fluvo-soft-lab" className="block py-2 text-white hover:text-brand-orange transition-colors">
                  FluvoSoft Lab
                </Link>
                <Link href="/solana-toolkit" className="block py-2 text-white hover:text-brand-orange transition-colors">
                  FluvoSoft Solana Toolkit
                </Link>
                <Link href="/corda" className="block py-2 text-white hover:text-brand-orange transition-colors">
                  Corda
                </Link>
                <Link href="/solutions" className="block py-2 text-white hover:text-brand-orange transition-colors">
                  Solutions
                </Link>
                <Link href="/resources" className="block py-2 text-white hover:text-brand-orange transition-colors">
                  Resources
                </Link>
                <Link href="/about" className="block py-2 text-white hover:text-brand-orange transition-colors">
                  About
                </Link>
                <Link href="/contact" className="block py-2.5 px-5 bg-brand-orange text-white rounded-xl inline-block mt-2 hover:bg-brand-orange-dark transition-colors">
                  Contact
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}

