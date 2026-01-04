import type { Metadata } from "next";
import { Poppins, Space_Grotesk, Georama, Inter, Syne_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const georama = Georama({
  subsets: ["latin"],
  variable: "--font-georama",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const syneMono = Syne_Mono({
  subsets: ["latin"],
  variable: "--font-syne-mono",
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "FluvoSoft - Technology Solutions Company | AI, Blockchain & Custom Software",
  description: "FluvoSoft helps businesses grow with innovative software solutions. We build AI tools, blockchain apps, and custom software for companies of all sizes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${spaceGrotesk.variable} ${georama.variable} ${inter.variable} ${syneMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

