import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lumiro - Professional Landing Page Template | FluvoSoft',
  description: 'Lumiro is a professional landing page template with modern design components and seamless customization. Build your perfect business landing page with comprehensive documentation and modern web technologies.',
  keywords: 'Lumiro, landing page template, business landing page, SaaS landing page, website template, Next.js template, React template, professional landing page, conversion-optimized website',
  openGraph: {
    title: 'Lumiro - Professional Landing Page Template',
    description: 'Professional landing page template with modern design components and seamless customization for your business.',
    type: 'website',
    url: 'https://fluvosoft.com/lumiro',
    siteName: 'FluvoSoft',
    images: [
      {
        url: '/Page info/carosel_5.jpeg',
        width: 1200,
        height: 630,
        alt: 'Lumiro Professional Landing Page Template',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumiro - Professional Landing Page Template',
    description: 'Professional landing page template with modern design components and seamless customization.',
    images: ['/Page info/carosel_5.jpeg'],
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
    canonical: 'https://fluvosoft.com/lumiro',
  },
};

export default function LumiroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
