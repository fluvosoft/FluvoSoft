import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blockchain Development Services | FluvoSoft - Smart Contracts & Decentralized Solutions',
  description: 'Expert blockchain development services by FluvoSoft. We build secure smart contracts, decentralized applications, and enterprise blockchain solutions using Ethereum, Solana, Hyperledger, and Corda.',
  keywords: 'blockchain development, smart contracts, decentralized applications, Ethereum, Solana, Hyperledger, Corda, Web3, Solidity, blockchain consulting, dApp development',
  openGraph: {
    title: 'Blockchain Development Services | FluvoSoft',
    description: 'Expert blockchain development services. Build secure smart contracts, decentralized applications, and enterprise blockchain solutions.',
    type: 'website',
    url: 'https://fluvosoft.com/blockchain',
    siteName: 'FluvoSoft',
    images: [
      {
        url: '/Page pictures/Blockchain.png',
        width: 1200,
        height: 630,
        alt: 'FluvoSoft Blockchain Development Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blockchain Development Services | FluvoSoft',
    description: 'Expert blockchain development services. Build secure smart contracts and decentralized applications.',
    images: ['/Page pictures/Blockchain.png'],
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
    canonical: 'https://fluvosoft.com/blockchain',
  },
};

export default function BlockchainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
