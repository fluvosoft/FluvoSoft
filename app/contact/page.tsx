'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-orange to-brand-orange-dark py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Have a project in mind? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <Contact />

      {/* Additional Contact Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Other Ways to Reach Us
              </h2>
              <p className="text-gray-700 text-lg">
                Choose the method that works best for you
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Email */}
              <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-brand-orange/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Email Us</h3>
                <a 
                  href="mailto:contact@fluvosoft.com" 
                  className="text-brand-orange hover:text-brand-orange-dark transition-colors"
                >
                  contact@fluvosoft.com
                </a>
                <p className="text-gray-600 mt-2 text-sm">
                  We typically respond within 24 hours
                </p>
              </div>

              {/* Phone */}
              <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-brand-orange/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Call Us</h3>
                <a 
                  href="tel:+8801234567890" 
                  className="text-brand-orange hover:text-brand-orange-dark transition-colors"
                >
                  +880 1234 567890
                </a>
                <p className="text-gray-600 mt-2 text-sm">
                  Monday - Friday, 9 AM - 6 PM
                </p>
              </div>

              {/* Address */}
              <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-brand-orange/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Visit Us</h3>
                <p className="text-gray-700">
                  FluvoSoft Ltd.<br />
                  Dhaka, Bangladesh
                </p>
                <p className="text-gray-600 mt-2 text-sm">
                  Schedule a visit by appointment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-700 text-lg">
                Quick answers to common questions
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: 'What is your typical project timeline?',
                  answer: 'Small projects typically take 4-8 weeks, medium projects 8-16 weeks, and large projects 3-6+ months. We provide detailed estimates during the discovery phase.',
                },
                {
                  question: 'Do you provide support after project completion?',
                  answer: 'Yes! We offer 3 months of complimentary support after project completion. Extended support packages and SLA support are available for enterprise clients.',
                },
                {
                  question: 'Do you work with startups?',
                  answer: 'Absolutely! We work with startups and offer flexible engagement models with custom pricing packages designed for growing businesses.',
                },
                {
                  question: 'What technologies do you specialize in?',
                  answer: 'We work with Next.js 15, React 19, Node.js, MongoDB, PostgreSQL, AWS, Firebase, Solidity, and Web3.js, among other modern technologies.',
                },
                {
                  question: 'How do you ensure security?',
                  answer: 'We implement SSL/TLS encryption, two-factor authentication, regular security audits, GDPR compliance, encryption at rest and in transit, and penetration testing.',
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-bold text-black mb-3">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
