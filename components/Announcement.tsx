'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Announcement() {
  return (
    <section className="bg-black py-3 border-b border-white/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3">
          <div className="flex items-center gap-2">
            <Image 
              src="/logo.png" 
              alt="FluvoSoft Logo" 
              width={24} 
              height={24}
              className="object-contain"
            />
            <p className="text-sm text-white text-center">
              We are open-sourcing Scale GenAI Platform&apos;s agentic infrastructure layer.
            </p>
          </div>
          <Link 
            href="#" 
            className="text-sm text-white hover:text-brand-orange-light font-bold transition-colors inline-flex items-center gap-1 whitespace-nowrap"
          >
            Try now
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

