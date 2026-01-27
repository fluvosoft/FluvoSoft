'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const wellnessImages = [
  '/Agentic Solution/Wellness Assistant AI 9 (1).png',
  '/Agentic Solution/Wellness Assistant AI 12.png',
  '/Agentic Solution/Wellness Assistant AI 14 (1).png',
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    // Smooth fade-in animation on mount
    if (containerRef.current) {
      containerRef.current.style.opacity = '0';
      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.style.transition = 'opacity 0.6s ease-in-out';
          containerRef.current.style.opacity = '1';
        }
      }, 100);
    }
  }, []);


  const openVideo = () => {
    setIsVideoOpen(true);
    // You can implement video modal here
    console.log('Open video');
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      <div ref={containerRef} className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10 w-full">
        <div className="max-w-6xl mx-auto text-center">
          {/* Small uppercase label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6"
          >
            <h2 className="text-md md:text-md uppercase lg:text-md font-bold text-white text-center font-inter mb-6">
              FluvoSoft Works With
            </h2>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-3xl md:text-4xl lg:text-5xl font-normal text-white text-center mb-4"
          >
            <span className="bg-gradient-to-r from-brand-orange via-brand-orange-dark to-brand-orange bg-clip-text text-transparent">
              Blockchain and Automation
            </span>
          </motion.h1>

          {/* Description text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-white/70 text-center max-w-4xl mx-auto leading-relaxed mb-8"
          >
            Transform your business with cutting-edge blockchain solutions and intelligent automation. Build secure, decentralized applications and streamline operations with FluvoSoft&apos;s innovative technology platform.
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          >
            {/* Watch Video Button */}
            <button
              onClick={openVideo}
              className="group relative w-[170px] max-lg:w-[160px] rounded-xl py-4 max-lg:py-2 flex items-center justify-center gap-2 bg-transparent text-white transition-colors duration-300 border-2 border-white hover:border-brand-orange hover:text-brand-orange"
            >
              <div className="relative flex items-center justify-center w-6 h-6">
                <div className="absolute inset-0 top-0 left-0 scale-0 duration-300 group-hover:scale-100 border-2 border-brand-orange rounded-full w-full h-full"></div>
                <svg 
                  className="w-6 h-6" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                </svg>
              </div>
              <span className="font-medium">Watch video</span>
            </button>

            {/* Get Started Button */}
            <Link
              href="/contact"
              className="group w-[170px] max-lg:w-[160px] flex items-center justify-center gap-2 shadow-lg rounded-xl py-4 max-lg:py-2 transition-transform duration-300 hover:scale-[1.03] bg-brand-orange text-white font-medium"
            >
              <span>Get started</span>
              <svg 
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
        
        {/* Wellness Assistant Images - Static Layout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="relative mt-4 md:mt-8 flex w-full items-center justify-center"
        >
          {/* Purple gradient background element */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[5%] h-[200px] w-[200px] bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-blue-500/30 rounded-full blur-3xl"></div>

          {/* Images Container */}
          <div className="relative w-full max-w-[95%] lg:max-w-[1400px] h-[600px] lg:h-[700px] flex items-center justify-center">
            {/* Left Image - Small, Background */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="absolute left-0 lg:left-4 w-[45%] lg:w-[550px] h-[65%] lg:h-[580px] z-0"
            >
              <Image
                src={wellnessImages[0]}
                alt="Wellness Assistant AI 1"
                fill
                className="object-contain opacity-85 grayscale"
                sizes="(max-width: 768px) 300px, 550px"
              />
            </motion.div>

            {/* Middle Image - Big, Foreground */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="relative w-[90%] lg:w-[800px] h-[80%] lg:h-[650px] z-10"
            >
              <Image
                src={wellnessImages[1]}
                alt="Wellness Assistant AI 2"
                fill
                className="object-contain drop-shadow-2xl grayscale"
                priority
                sizes="(max-width: 768px) 90vw, 800px"
              />
              
              {/* Analysis Overlay with Animated Graphs */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Top Analysis Bar with Animated Progress */}
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="hidden md:block absolute top-4 left-4 right-4 bg-black/80 backdrop-blur-md rounded-lg px-4 py-3 border border-white/20 shadow-lg z-20"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <motion.div 
                        className="w-2 h-2 rounded-full bg-white"
                        animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span className="text-white text-sm font-medium">Real-time Analysis</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-white/70 text-sm">98% Accuracy</span>
                      <div className="w-1 h-1 rounded-full bg-white/60 animate-pulse"></div>
                    </div>
                  </div>
                  {/* Animated Progress Bar */}
                  <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-brand-orange to-brand-orange-dark rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "98%" }}
                      transition={{ duration: 2, delay: 1.2, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>

                {/* Bottom Analysis Panel with Animated Charts */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.6 }}
                  className="hidden md:block absolute bottom-2 left-4 right-4 bg-black/80 backdrop-blur-md rounded-lg px-5 py-4 border border-white/20 shadow-lg z-20"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-white text-base font-semibold">Diagnostic Analysis</h4>
                    <motion.span 
                      className="text-white/80 text-sm flex items-center gap-1.5 font-medium"
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Verified
                    </motion.span>
                  </div>
                  
                  {/* Animated Bar Chart */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="bg-white/10 rounded-lg px-3 py-3 border border-white/20">
                      <div className="text-white/70 text-xs mb-2 font-medium">Confidence</div>
                      <div className="h-3 bg-white/20 rounded-full overflow-hidden mb-2">
                        <motion.div
                          className="h-full bg-gradient-to-r from-brand-orange to-brand-orange-dark rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: "98%" }}
                          transition={{ duration: 1.5, delay: 1.8, ease: "easeOut" }}
                        />
                      </div>
                      <motion.div 
                        className="text-white text-sm font-bold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 2 }}
                      >
                        98%
                      </motion.div>
                    </div>
                    <div className="bg-white/10 rounded-lg px-3 py-3 border border-white/20">
                      <div className="text-white/70 text-xs mb-2 font-medium">Status</div>
                      <div className="h-3 bg-white/20 rounded-full overflow-hidden mb-2">
                        <motion.div
                          className="h-full bg-gradient-to-r from-brand-orange to-brand-orange-dark rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: "95%" }}
                          transition={{ duration: 1.5, delay: 2, ease: "easeOut" }}
                        />
                      </div>
                      <motion.div 
                        className="text-white text-sm font-bold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 2.2 }}
                      >
                        95%
                      </motion.div>
                    </div>
                    <div className="bg-white/10 rounded-lg px-3 py-3 border border-white/20">
                      <div className="text-white/70 text-xs mb-2 font-medium">Score</div>
                      <div className="h-3 bg-white/20 rounded-full overflow-hidden mb-2">
                        <motion.div
                          className="h-full bg-gradient-to-r from-brand-orange to-brand-orange-dark rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: "98%" }}
                          transition={{ duration: 1.5, delay: 2.2, ease: "easeOut" }}
                        />
                      </div>
                      <motion.div 
                        className="text-white text-sm font-bold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 2.4 }}
                      >
                        98%
                      </motion.div>
                    </div>
                  </div>

                  {/* Animated Metrics - Professional */}
                  <div className="flex gap-3">
                    <motion.div
                      className="flex-1 bg-white/10 rounded-lg px-3 py-2.5 flex items-center gap-2.5 border border-white/20"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 2.2 }}
                    >
                      <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-white/70 text-[10px] font-medium uppercase tracking-wide">Data Points</div>
                        <div className="text-white text-sm font-bold">1,247</div>
                      </div>
                    </motion.div>
                    <motion.div
                      className="flex-1 bg-white/10 rounded-lg px-3 py-2.5 flex items-center gap-2.5 border border-white/20"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 2.3 }}
                    >
                      <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-white/70 text-[10px] font-medium uppercase tracking-wide">Speed</div>
                        <div className="text-white text-sm font-bold">0.32s</div>
                      </div>
                    </motion.div>
                    <motion.div
                      className="flex-1 bg-white/10 rounded-lg px-3 py-2.5 flex items-center gap-2.5 border border-white/20"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 2.4 }}
                    >
                      <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-white/70 text-[10px] font-medium uppercase tracking-wide">Precision</div>
                        <div className="text-white text-sm font-bold">99.2%</div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Side Analysis Indicators with Pulse Animation */}
                <div className="hidden md:flex absolute top-1/2 left-2 -translate-y-1/2 flex-col gap-3 z-20">
                  <motion.div
                    className="bg-gray-800 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      boxShadow: [
                        "0 10px 25px rgba(0,0,0,0.3)",
                        "0 15px 35px rgba(0, 0, 0, 0.5)",
                        "0 10px 25px rgba(0,0,0,0.3)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </motion.div>
                  <motion.div
                    className="bg-gray-700 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      boxShadow: [
                        "0 10px 25px rgba(0,0,0,0.3)",
                        "0 15px 35px rgba(0, 0, 0, 0.5)",
                        "0 10px 25px rgba(0,0,0,0.3)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </motion.div>
                </div>

                <div className="hidden md:flex absolute top-1/2 right-2 -translate-y-1/2 flex-col gap-3 z-20">
                  <motion.div
                    className="bg-gray-800 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </motion.div>
                  <motion.div
                    className="bg-gray-700 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, -5, 5, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Right Image - Small, Background */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="absolute right-0 lg:right-4 w-[45%] lg:w-[550px] h-[65%] lg:h-[580px] z-0"
            >
              <Image
                src={wellnessImages[2]}
                alt="Wellness Assistant AI 3"
                fill
                className="object-contain opacity-85 grayscale"
                sizes="(max-width: 768px) 300px, 550px"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
