import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Software Development | FluvoSoft - Enterprise Applications & Web Solutions',
  description: 'Custom software development services by FluvoSoft. We build tailored enterprise applications, web apps, and custom solutions that scale with your business. Expert development with Next.js, React, Node.js, and cloud technologies.',
  keywords: 'custom software development, enterprise applications, web development, custom web apps, software development services, Next.js development, React development, Node.js development, custom solutions',
  openGraph: {
    title: 'Custom Software Development | FluvoSoft',
    description: 'Custom software development services. Build tailored enterprise applications and web solutions that scale with your business.',
    type: 'website',
    url: 'https://fluvosoft.com/custom-development',
    siteName: 'FluvoSoft',
    images: [
      {
        url: '/Page pictures/custom development.png',
        width: 1200,
        height: 630,
        alt: 'FluvoSoft Custom Software Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Software Development | FluvoSoft',
    description: 'Custom software development services. Build tailored enterprise applications and web solutions.',
    images: ['/Page pictures/custom development.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://fluvosoft.com/custom-development',
  },
};

export default function CustomDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
