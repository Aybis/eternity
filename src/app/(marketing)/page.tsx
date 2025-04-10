'use client';
import Navbar from '@/components/layout/Navbar';
import Cta from '@/components/ui/landing-page/Cta';
import Faq from '@/components/ui/landing-page/Faq';
import Feature from '@/components/ui/landing-page/Feature';
import Footer from '@/components/ui/landing-page/Footer';
import HeroSection from '@/components/ui/landing-page/HeroSection';
import HowItWork from '@/components/ui/landing-page/HowItWork';
import Pricing from '@/components/ui/landing-page/Pricing';
import Testimoni from '@/components/ui/landing-page/Testimoni';
import TrustIndicator from '@/components/ui/landing-page/TrustIndicator';

const EternityChainLanding = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-gray-800 font-sans">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Trust Indicators */}
      <TrustIndicator />

      {/* Features Section */}
      <Feature />

      {/* How It Works */}
      <HowItWork />

      {/* Pricing Section */}
      <Pricing />

      {/* Testimonials */}
      <Testimoni />

      {/* FAQ Section */}
      <Faq />

      {/* CTA Section */}
      <Cta />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default EternityChainLanding;
