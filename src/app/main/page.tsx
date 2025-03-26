'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const EternityChainLanding = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedPreference = localStorage.getItem('theme');
    if (storedPreference) {
      setIsDarkMode(storedPreference === 'dark');
    } else {
      setIsDarkMode(userPrefersDark);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-800'} font-sans w-full`}>
      {/* Navigation */}
      <nav className={`fixed w-full ${isDarkMode ? 'bg-gray-800' : 'bg-white'} bg-opacity-95 backdrop-blur-sm z-50 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-100'} shadow-sm`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full ${isDarkMode ? 'bg-gradient-to-r from-purple-600 to-indigo-600' : 'bg-gradient-to-r from-purple-600 to-indigo-600'} flex items-center justify-center text-white font-medium text-sm`}>
                EC
              </div>
              <span className="ml-2 text-lg font-medium">Eternity Chain</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#how-it-works">How It Works</NavLink>
              <NavLink href="#pricing">Pricing</NavLink>
              <NavLink href="#faq">FAQ</NavLink>
              <button className="ml-4 px-4 py-2 rounded-md bg-gray-100 text-gray-800 font-medium text-sm hover:bg-gray-200 transition-colors">
                Login
              </button>
              <button className="px-4 py-2 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium text-sm hover:from-purple-700 hover:to-indigo-700 transition-colors">
                Get Started
              </button>
              <button
                onClick={toggleDarkMode}
                className="ml-4 px-4 py-2 rounded-md bg-gray-100 text-gray-800 font-medium text-sm hover:bg-gray-200 transition-colors"
              >
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      mobileMenuOpen
                        ? 'M6 18L18 6M6 6l12 12'
                        : 'M4 6h16M4 12h16M4 18h16'
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} py-2`}>
            <div className="px-4 pt-2 pb-3 space-y-1">
              <MobileNavLink href="#features">Features</MobileNavLink>
              <MobileNavLink href="#how-it-works">How It Works</MobileNavLink>
              <MobileNavLink href="#pricing">Pricing</MobileNavLink>
              <MobileNavLink href="#faq">FAQ</MobileNavLink>
              <div className="pt-4 flex flex-col space-y-3">
                <button className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 font-medium text-sm">
                  Login
                </button>
                <button className="px-4 py-2 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium text-sm">
                  Get Started
                </button>
                <button
                  onClick={toggleDarkMode}
                  className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 font-medium text-sm"
                >
                  {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className={`text-4xl md:text-5xl font-bold leading-tight ${isDarkMode ? 'text-gray-200' : 'text-gray-900'} mb-6`}>
              Immortalize Your Legacy with
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
                {' '}
                AI + Web3
              </span>
            </h1>
            <p className={`text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-8`}>
              Turn your life memories into a living, interactive AI bound
              forever on the blockchain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium text-sm hover:from-purple-700 hover:to-indigo-700 transition-colors">
                Get Started
              </button>
              <button className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium text-sm hover:bg-gray-50 transition-colors">
                Reserve My Spot
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -z-10 w-72 h-72 bg-purple-200 rounded-full opacity-50 blur-3xl top-0 -right-10"></div>
            <div className="rounded-2xl overflow-hidden shadow-lg bg-white p-4">
              <Image
                src="/api/placeholder/600/400"
                alt="AI Digital Legacy"
                width={600}
                height={400}
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className={`py-10 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex flex-wrap justify-center gap-8 md:gap-16 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>
            <div className="flex items-center">
              <span className="font-semibold text-purple-600 mr-2">500+</span>{' '}
              Digital Legacies Created
            </div>
            <div className="flex items-center">
              <span className="font-semibold text-purple-600 mr-2">20+</span>{' '}
              Countries Represented
            </div>
            <div className="flex items-center">
              Secured on{' '}
              <span className="font-semibold text-purple-600 ml-2">
                Solana Blockchain
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Your Digital Life Monument
          </h2>
          <p className={`text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Eternity Chain combines cutting-edge AI and blockchain technology to
            preserve your authentic self for generations to come.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon="🧠"
            title="AI-Generated Personality"
            description="Advanced AI technology learns your personality, values, and knowledge to create a digital twin that thinks and speaks like you."
          />
          <FeatureCard
            icon="⛓️"
            title="Secured on Blockchain"
            description="Your digital legacy is secured on the Solana blockchain, ensuring it remains accessible and tamper-proof for generations."
          />
          <FeatureCard
            icon="💰"
            title="Monetize Your Wisdom"
            description="Your digital twin can generate income by sharing your expertise and insights with others who value your knowledge."
          />
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              How Eternity Chain Works
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Three simple steps to create your living digital legacy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <StepCard
              number="1"
              title="Reserve Your Digital Lot"
              description="Secure your unique username on the blockchain and set up your personal Eternity Chain account."
            />
            <StepCard
              number="2"
              title="Upload Your Data"
              description="Share your stories, knowledge, values, and experiences through text, audio, or video inputs."
            />
            <StepCard
              number="3"
              title="Meet Your AI Twin"
              description="Watch as our AI creates your digital twin 'Elwyn' that preserves your personality and wisdom."
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className={`text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Invest in your digital immortality with our flexible pricing options
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard
            title="Initial Package"
            price="$99"
            period="one-time"
            features={[
              'Secure your unique username on-chain',
              'First AI personality generation (1GB data)',
              'Basic AI twin setup',
            ]}
            buttonText="Get Started"
            highlighted={true}
          />

          <PricingCard
            title="Upload-as-you-go"
            price="$0.99"
            period="/GB"
            features={[
              'Add stories, voice notes, texts, photos',
              'Pay only for what you upload',
              'AI retraining with each update',
            ]}
            buttonText="Learn More"
          />

          <PricingCard
            title="Monetize Plan"
            price="20%"
            period="commission"
            features={[
              'Let your AI become a digital mentor',
              'Earn passive income from your wisdom',
              'Automatic payments to your wallet',
            ]}
            buttonText="Learn More"
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
            <p className={`text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Real experiences from people preserving their legacy with Eternity
              Chain
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <TestimonialCard
              quote="As someone who's spent a lifetime collecting stories, Eternity Chain gives me peace of mind knowing my research and personal insights will live on."
              name="Marcus J."
              title="Historian & Author"
              initial="M"
            />

            <TestimonialCard
              quote="My Elwyn AI is already generating revenue by sharing my business insights. It's amazing to see my digital twin helping others."
              name="Sophia R."
              title="Tech Entrepreneur"
              initial="S"
            />

            <TestimonialCard
              quote="After losing family members, I wanted to preserve our stories. My grandchildren can now interact with our ancestors' wisdom."
              name="David T."
              title="Family Historian"
              initial="D"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className={`text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Everything you need to know about preserving your legacy
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <FaqItem
            question="How secure is my data on Eternity Chain?"
            answer="Your data is encrypted and secured on the Solana blockchain, making it virtually impossible to tamper with or delete. We use military-grade encryption and decentralized storage to ensure your digital legacy remains intact for generations."
          />

          <FaqItem
            question="How accurate is my AI twin?"
            answer="The accuracy depends on the quality and quantity of data you provide. Most users report that their Elwyn AI captures 85-95% of their personality and communication style after uploading sufficient data. The AI continues to improve as you add more content."
          />

          <FaqItem
            question="What happens to my AI after I'm gone?"
            answer="You can designate inheritors who will manage access to your AI. They can decide whether to keep it private for family only or make it public. Any revenue generated will go to designated beneficiaries according to your instructions."
          />

          <FaqItem
            question="How is my privacy protected?"
            answer="You have complete control over what data you share. Our platform uses zero-knowledge proofs to ensure only authorized users can access your AI. You decide what's private, what's shared with family, and what's public."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Immortalize Your Legacy?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Start today. Create a digital twin that preserves your wisdom,
            personality, and stories for generations to come.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-6 py-3 bg-white text-indigo-700 font-medium rounded-lg hover:bg-gray-100 transition-colors">
              Reserve My Username
            </button>
            <button className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors">
              Learn More
            </button>
          </div>

          <p className="mt-8 text-sm opacity-80 max-w-lg mx-auto">
            Limited time offer: First 500 registrations receive 50% off the
            initial package.{' '}
            <span className="font-medium">Only 127 spots left!</span>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-900'} text-gray-400`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className={`w-8 h-8 rounded-full ${isDarkMode ? 'bg-purple-600' : 'bg-purple-600'} flex items-center justify-center text-white font-medium text-sm`}>
                  EC
                </div>
                <span className="ml-2 text-lg font-medium text-white">
                  Eternity Chain
                </span>
              </div>
              <p className="text-sm">
                Immortalize your legacy with AI + Web3 technology.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#features"
                    className="hover:text-white transition-colors"
                    legacyBehavior
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    className="hover:text-white transition-colors"
                    legacyBehavior
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-colors"
                    legacyBehavior
                  >
                    Demo
                  </Link>
                </li>
                <li>
                  <Link
                    legacyBehavior
                    href="#faq"
                    className="hover:text-white transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-white mb-4">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Discord
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
            <p>&copy; 2025 Eternity Chain. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Helper Components
const NavLink = ({ href, children }) => (
  <Link
    href={href}
    className="text-gray-600 hover:text-purple-600 font-medium text-sm transition-colors"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ href, children }) => (
  <Link
    href={href}
    className="block py-2 text-gray-600 hover:text-purple-600 font-medium text-sm"
  >
    {children}
  </Link>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const StepCard = ({ number, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold mb-4">
      {number}
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const PricingCard = ({
  title,
  price,
  period,
  features,
  buttonText,
  highlighted = false,
}) => (
  <div
    className={`bg-white rounded-xl p-6 border ${
      highlighted ? 'border-purple-200 shadow-md' : 'border-gray-200 shadow-sm'
    } relative`}
  >
    {highlighted && (
      <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-purple-100 text-purple-700 text-xs font-medium py-1 px-2 rounded-full">
        Most Popular
      </div>
    )}
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <div className="mb-6">
      <span className="text-3xl font-bold">{price}</span>
      <span className="text-gray-500 text-sm">{period}</span>
    </div>
    <ul className="space-y-3 mb-6">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <svg
            className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span className="text-sm text-gray-600">{feature}</span>
        </li>
      ))}
    </ul>
    <button
      className={`w-full py-2 rounded-lg text-sm font-medium transition-colors ${
        highlighted
          ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700'
          : 'border border-purple-600 text-purple-600 hover:bg-purple-50'
      }`}
    >
      {buttonText}
    </button>
  </div>
);

const TestimonialCard = ({ quote, name, title, initial }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
    <div className="flex items-center mb-4">
      <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-sm mr-3">
        {initial}
      </div>
      <div>
        <h4 className="font-semibold text-sm">{name}</h4>
        <p className="text-gray-500 text-xs">{title}</p>
      </div>
    </div>
    <p className="text-gray-600 text-sm">{quote}</p>
    <div className="mt-4 flex text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  </div>
);

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm  border border-gray-100">
      <button
        className="w-full px-6 py-4 text-left font-medium text-gray-800 focus:outline-none flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <svg
          className={`h-5 w-5 text-gray-500 transform transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`px-6 transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600 text-sm">{answer}</p>
      </div>
    </div>
  );
};

export default EternityChainLanding;
