'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedText({
  children,
  className = '',
  delay = 0,
}: AnimatedTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

