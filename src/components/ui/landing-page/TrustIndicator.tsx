import React from 'react';

export default function TrustIndicator() {
  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-gray-500 text-sm">
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
  );
}
