import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import Download from '@/components/landing/Download';
import Footer from '@/components/landing/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full">
      <Hero />
      <Features />
      <Download />
      <Footer />
    </div>
  );
}
