import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Automation Solutions | FluvoSoft - AI Automation & RPA Services',
  description: 'Intelligent automation solutions by FluvoSoft. Streamline workflows with AI automation, RPA, and intelligent agents. Reduce manual tasks by up to 80% and boost productivity.',
  keywords: 'automation solutions, AI automation, robotic process automation, RPA, workflow automation, business process automation, intelligent automation, neural agents, process optimization',
  openGraph: {
    title: 'Automation Solutions | FluvoSoft',
    description: 'Intelligent automation solutions. Streamline workflows with AI automation, RPA, and intelligent agents.',
    type: 'website',
    url: 'https://fluvosoft.com/automation',
    siteName: 'FluvoSoft',
    images: [
      {
        url: '/Page pictures/automation.png',
        width: 1200,
        height: 630,
        alt: 'FluvoSoft Automation Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automation Solutions | FluvoSoft',
    description: 'Intelligent automation solutions. Streamline workflows with AI automation and RPA.',
    images: ['/Page pictures/automation.png'],
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
    canonical: 'https://fluvosoft.com/automation',
  },
};

export default function AutomationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
