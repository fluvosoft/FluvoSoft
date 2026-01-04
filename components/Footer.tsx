'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white py-16">
      <div className="mx-auto px-2 md:px-8">
        {/* Main Content Container - White Rounded Rectangle */}
        <div className="bg-black rounded-2xl px-6 py-16 md:py-20 shadow-sm">
          {/* Logo and Company Name - Top Center */}
          <div className="flex flex-col items-center mb-6">
            <div className="flex items-center mb-4">
              <h3 className="text-2xl font-bold text-white font-logo">FluvoSoft</h3>
            </div>
            
            {/* Navigation Links with Vertical Bar */}
            <div className="flex items-center gap-4 text-sm text-white">
              <Link href="/about" className="hover:text-white transition-colors">
                About us
              </Link>
              <span className="text-gray-400">|</span>
              <Link href="/resources" className="hover:text-white transition-colors">
                Documents
              </Link>
            </div>
          </div>

          {/* Address - Centered */}
          <div className="text-center text-sm text-white mb-8">
            <p>FluvoSoft Ltd.</p>
            <p>Dhaka, Bangladesh</p>
          </div>

          {/* Social Media Icons - Centered */}
          <div className="flex justify-center gap-4 mb-8">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>

          {/* Email Subscription Form - Centered */}
          <div className="max-w-md mx-auto mb-8">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white border-gray-800 rounded-xl text-black
                text-sm placeholder-gray-400 focus:outline-none focus:border-brand-orange"
              />
              <button className="px-6 py-3 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition-colors font-medium text-sm flex items-center gap-2">
                Subscribe
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>

          {/* Bottom Bar - Copyright and Legal Links */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-gray-800 text-sm text-white">
            <p>FluvoSoft | Copyright &copy; {new Date().getFullYear()}</p>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-400">|</span>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Use
              </Link>
              <span className="text-gray-400">|</span>
              <Link href="/user-agreement" className="hover:text-white transition-colors">
                User Agreement
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

