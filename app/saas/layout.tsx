import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SaaS Platform Development | FluvoSoft - Cloud-Based Software Solutions',
  description: 'SaaS platform development services by FluvoSoft. Build scalable cloud-based software-as-a-service solutions with subscription management, multi-tenancy, and comprehensive analytics. Expert SaaS development and migration services.',
  keywords: 'SaaS development, SaaS platform, software as a service, cloud-based software, subscription management, multi-tenant architecture, SaaS migration, SaaS consulting, cloud software development',
  openGraph: {
    title: 'SaaS Platform Development | FluvoSoft',
    description: 'SaaS platform development services. Build scalable cloud-based software-as-a-service solutions with subscription management.',
    type: 'website',
    url: 'https://fluvosoft.com/saas',
    siteName: 'FluvoSoft',
    images: [
      {
        url: '/Page pictures/SaaS.png',
        width: 1200,
        height: 630,
        alt: 'FluvoSoft SaaS Platform Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaaS Platform Development | FluvoSoft',
    description: 'SaaS platform development services. Build scalable cloud-based software-as-a-service solutions.',
    images: ['/Page pictures/SaaS.png'],
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
    canonical: 'https://fluvosoft.com/saas',
  },
};

export default function SaaSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
