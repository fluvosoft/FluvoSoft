'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-orange to-brand-orange-dark py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              About FluvoSoft
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Building smart, safe, and reliable software that helps businesses everywhere
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Story</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-white/70 text-lg leading-relaxed mb-6">
                  We started as a small team who love technology. Today, we work with over 50 companies around the world. We build AI tools, blockchain apps, and custom software. Our focus on doing great work and helping clients succeed makes us a trusted choice for businesses looking for technology solutions.
                </p>
                <p className="text-white/70 text-lg leading-relaxed">
                  From startups to enterprise companies, we&apos;ve helped businesses transform their operations with innovative technology solutions. Our commitment to excellence and client success drives everything we do.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white/5 rounded-2xl p-8 md:p-10 border border-white/20"
              >
                <div className="w-16 h-16 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-white/70 text-lg leading-relaxed">
                  To build smart, safe, and reliable software that helps businesses everywhere. We make new technology easy to use and affordable for companies big and small.
                </p>
              </motion.div>

              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white/5 rounded-2xl p-8 md:p-10 border border-white/20"
              >
                <div className="w-16 h-16 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-white/70 text-lg leading-relaxed">
                  To be a world leader in helping businesses use technology better. We want to set the standard for great ideas and reliable work. We see a future where every business can use technology to grow and succeed.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Values</h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Innovation First',
                  description: 'We keep up with the latest technology and always look for new ways to build better solutions.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                },
                {
                  title: 'Client Success',
                  description: 'When you succeed, we succeed. We know we did a good job when our clients are happy and growing.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
                {
                  title: 'Excellence',
                  description: 'We do our best work every time. From writing clean code to talking with clients, we keep our standards high.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  ),
                },
                {
                  title: 'Security & Trust',
                  description: 'We keep your data safe and build trust by being honest about how we work and building reliable software.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  ),
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/5 rounded-xl p-6 border border-white/20 hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 bg-brand-orange/10 rounded-lg flex items-center justify-center text-brand-orange mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-white/70 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Impact</h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Numbers that reflect our commitment to excellence
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: '50+', label: 'Projects Delivered', description: 'Successfully completed projects' },
                { number: '95%', label: 'Client Retention', description: 'Long-term partnerships' },
                { number: '10+', label: 'Years Experience', description: 'Industry expertise' },
                { number: '25+', label: 'Team Members', description: 'Expert professionals' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl md:text-6xl font-bold text-brand-orange mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xl font-semibold text-white mb-2">{stat.label}</div>
                  <div className="text-white/60">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Our Technology Expertise</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8 text-center">
                We work with cutting-edge technologies to deliver the best solutions for our clients
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Next.js 15',
                  'React 19',
                  'Node.js',
                  'MongoDB',
                  'PostgreSQL',
                  'AWS',
                  'Firebase',
                  'Solidity',
                  'Web3.js',
                ].map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="bg-white/5 rounded-lg px-6 py-4 border border-white/20 hover:border-brand-orange hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
                      <span className="text-white font-medium">{tech}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-brand-orange to-brand-orange-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let&apos;s discuss how we can help transform your business with innovative technology solutions.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-brand-orange font-semibold rounded-lg hover:bg-white/90 transition-colors shadow-lg"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
