'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function EvolutionSection() {
  return (
    <section className="bg-white">
      {/* Top Section - Quote */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl">
            <motion.p
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              FluvoSoft is supporting the evolution of digital financial markets through openness, collaboration and trust.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Bottom Section - CTA with Graphic */}
      <div className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="space-y-6"
              >
                {/* Tag */}
                <motion.div
                  className="inline-block bg-white rounded-lg px-4 py-2 mb-6"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <span className="text-sm font-semibold text-gray-900">FluvoSoft Lab</span>
                </motion.div>

                {/* Heading */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  The Old Economy is Dying. We Are Building the New One.
                </h2>

                {/* Description */}
                <p className="text-xl text-white/90 leading-relaxed mb-8">
                  Don't just watch the next trillion-dollar wealth transfer—control it. We are moving the world's real assets on-chain, making finance instant, borderless, and programmable. The future belongs to those who build it first.
                </p>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Link
                    href="/fluvo-soft-lab"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange text-white rounded-lg font-semibold hover:bg-brand-orange-dark transition-colors shadow-lg"
                  >
                    Seize the Future
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right Column - Network Graphic */}
              <motion.div
                className="relative w-full h-[500px] flex items-center justify-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              >
                <svg
                  className="w-full h-full"
                  viewBox="0 0 600 500"
                  preserveAspectRatio="xMidYMid meet"
                >
                  {/* Connecting Lines */}
                  <g stroke="#ffffff" strokeWidth="2" strokeOpacity="0.3" fill="none">
                    {/* Lines from center to various nodes */}
                    <motion.line
                      x1="300"
                      y1="250"
                      x2="150"
                      y2="100"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                    <motion.line
                      x1="300"
                      y1="250"
                      x2="450"
                      y2="100"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.6 }}
                    />
                    <motion.line
                      x1="300"
                      y1="250"
                      x2="150"
                      y2="400"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.7 }}
                    />
                    <motion.line
                      x1="300"
                      y1="250"
                      x2="450"
                      y2="400"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.8 }}
                    />
                    <motion.line
                      x1="300"
                      y1="250"
                      x2="100"
                      y2="250"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.9 }}
                    />
                    <motion.line
                      x1="300"
                      y1="250"
                      x2="500"
                      y2="250"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 1 }}
                    />
                    <motion.line
                      x1="300"
                      y1="250"
                      x2="200"
                      y2="150"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 1.1 }}
                    />
                    <motion.line
                      x1="300"
                      y1="250"
                      x2="400"
                      y2="350"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 1.2 }}
                    />
                  </g>

                  {/* Central Node - Large Orange Circle */}
                  <motion.circle
                    cx="300"
                    cy="250"
                    r="40"
                    fill="#FF6B35"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  />
                  {/* Icon inside central node */}
                  <motion.g
                    fill="white"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                  >
                    <rect x="285" y="235" width="15" height="15" rx="2" />
                    <rect x="285" y="250" width="15" height="15" rx="2" />
                    <rect x="300" y="235" width="15" height="15" rx="2" />
                    <rect x="300" y="250" width="15" height="15" rx="2" />
                  </motion.g>

                  {/* Small Red Circles */}
                  <motion.circle
                    cx="150"
                    cy="100"
                    r="8"
                    fill="#ef4444"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 1 }}
                  />
                  <motion.circle
                    cx="200"
                    cy="150"
                    r="8"
                    fill="#ef4444"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 1.1 }}
                  />
                  <motion.circle
                    cx="100"
                    cy="250"
                    r="8"
                    fill="#ef4444"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 1.2 }}
                  />

                  {/* Red Circles with White Center */}
                  <motion.circle
                    cx="150"
                    cy="400"
                    r="10"
                    fill="#ef4444"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 1.3 }}
                  />
                  <motion.circle
                    cx="150"
                    cy="400"
                    r="5"
                    fill="#ffffff"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 1.5 }}
                  />

                  {/* Orange Circles */}
                  <motion.circle
                    cx="450"
                    cy="100"
                    r="8"
                    fill="#FF6B35"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 1.1 }}
                  />
                  <motion.circle
                    cx="500"
                    cy="250"
                    r="8"
                    fill="#FF6B35"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 1.2 }}
                  />

                  {/* Purple Circle */}
                  <motion.circle
                    cx="450"
                    cy="400"
                    r="8"
                    fill="#a855f7"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 1.3 }}
                  />

                  {/* White Circle with Blue Top */}
                  <motion.circle
                    cx="400"
                    cy="350"
                    r="10"
                    fill="#ffffff"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 1.4 }}
                  />
                  <motion.path
                    d="M 400 340 A 10 10 0 0 1 410 350 L 390 350 A 10 10 0 0 1 400 340 Z"
                    fill="#60a5fa"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 1.6 }}
                  />

                  {/* Orange Diamond */}
                  <motion.polygon
                    points="300,180 310,190 300,200 290,190"
                    fill="#FF6B35"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 1.2 }}
                  />

                  {/* Purple Square */}
                  <motion.rect
                    x="245"
                    y="320"
                    width="16"
                    height="16"
                    fill="#a855f7"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 1.3 }}
                  />

                  {/* White Hexagon */}
                  <motion.polygon
                    points="480,200 490,206 490,214 480,220 470,214 470,206"
                    fill="#ffffff"
                    stroke="#ffffff"
                    strokeWidth="2"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 1.4 }}
                  />
                </svg>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
