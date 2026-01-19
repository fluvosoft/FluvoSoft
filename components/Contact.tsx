'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { submitContactForm } from '@/lib/firebase-contact';
import AnimatedSection from './AnimatedSection';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await submitContactForm(formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {/* Left Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="bg-white rounded-lg border border-gray-200 shadow-md p-6 md:p-8"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 mb-6 md:mb-8">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-black mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition-colors resize-y"
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-brand-orange hover:bg-brand-orange-dark text-white rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                  whileHover={!isSubmitting ? { 
                    scale: 1.02, 
                    y: -2,
                  } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98, y: 0 } : {}}
                  transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 17,
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800"
                    >
                      Thank you! Your message has been sent successfully.
                    </motion.div>
                  )}
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800"
                    >
                      There was an error sending your message. Please try again.
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>

            {/* Right Column - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="bg-white rounded-lg border border-gray-200 shadow-md p-6 md:p-8"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 mb-6 md:mb-10">
                Contact Info
              </h2>
              
              <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
                {/* Email */}
                <motion.a
                  href="mailto:fluvosoftinfo@gmail.com"
                  className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl hover:bg-gray-50 transition-colors group cursor-pointer"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center group-hover:bg-brand-orange/20 transition-colors">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-gray-700 mb-1 text-xs md:text-sm uppercase tracking-wide">Email</div>
                    <div className="text-sm md:text-base text-black font-medium group-hover:text-brand-orange transition-colors break-words">fluvosoftinfo@gmail.com</div>
                  </div>
                </motion.a>

                {/* Phone */}
                <motion.a
                  href="tel:+8801762746646"
                  className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl hover:bg-gray-50 transition-colors group cursor-pointer"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center group-hover:bg-brand-orange/20 transition-colors">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-gray-700 mb-1 text-xs md:text-sm uppercase tracking-wide">Phone</div>
                    <div className="text-sm md:text-base text-black font-medium group-hover:text-brand-orange transition-colors">01762746646</div>
                  </div>
                </motion.a>

                {/* Address */}
                <motion.div
                  className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-gray-700 mb-1 text-xs md:text-sm uppercase tracking-wide">Address</div>
                    <div className="text-sm md:text-base text-black font-medium leading-relaxed">
                      FluvoSoft Ltd.<br />
                      Dhaka, Bangladesh
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Social Media */}
              <div className="pt-6 md:pt-8 border-t border-gray-200">
                <div className="font-semibold text-black mb-4 md:mb-6 text-base md:text-lg">Connect with us</div>
                <div className="flex gap-3">
                  <motion.a 
                    href="https://www.linkedin.com/company/fluvo-soft" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-xl hover:bg-brand-orange hover:text-white transition-all group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </motion.a>
                  <motion.a 
                    href="https://github.com/fluvosoft" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-xl hover:bg-brand-orange hover:text-white transition-all group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

