import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import AIForEnterprise from '@/components/AIForEnterprise';
import AIWorkflowDemo from '@/components/AIWorkflowDemo';
import Features from '@/components/Features';
import ProgressMarkets from '@/components/ProgressMarkets';
import Solutions from '@/components/Solutions';
import Stats from '@/components/Stats';
import DigitalFuture from '@/components/DigitalFuture';
import EvolutionSection from '@/components/EvolutionSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Partners />
      <AIForEnterprise />
      <AIWorkflowDemo />
      <Features />
      <ProgressMarkets />
      <Solutions />
      <Stats />
      <EvolutionSection />
      <DigitalFuture />
      <Contact />
      <Footer />
    </main>
  );
}

