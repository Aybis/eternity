import React from 'react';

export default function TrustIndicator() {
  return (
    <section className="py-10 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-gray-500 text-sm">
          <div className="flex items-center">
            <span className="font-semibold text-purple-600 mr-2">500+</span>{' '}
            <span className="text-zinc-800 dark:text-zinc-100">
              Digital Legacies Created
            </span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold text-purple-600 mr-2">20+</span>{' '}
            <span className="text-zinc-800 dark:text-zinc-100">
              Countries Represented
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-zinc-800 dark:text-zinc-100">
              Secured on{' '}
            </span>
            <span className="font-semibold text-purple-600 ml-2">
              Solana Blockchain
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
