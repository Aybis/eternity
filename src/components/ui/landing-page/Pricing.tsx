import React from 'react';
import { PricingCard } from '../HelperComponents';

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
  );
}
