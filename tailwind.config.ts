import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          orange: '#FF6B35',
          'orange-dark': '#E55A2B',
          'orange-light': '#FF8C5A',
          black: '#000000',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
        logo: ['var(--font-syne-mono)', 'monospace'],
        georama: ['var(--font-georama)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        satoshi: ['var(--font-syne-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;

