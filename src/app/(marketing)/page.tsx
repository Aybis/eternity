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
    <div className="min-h-screen bg-white text-gray-800 font-sans">
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

      {/* Back to Top Button */}
      <a
        href="#top"
        className="fixed bottom-4 right-4 bg-purple-600 text-white p-2 rounded-full shadow-lg hover:bg-purple-700 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </a>
    </div>
  );
};

export default EternityChainLanding;
