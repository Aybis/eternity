import React from 'react';

export default function TrustIndicator() {
  return (
    <section className="max-w-6xl container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 border border-zinc-200">
      {/* Left Side */}
      <div className="w-3/5 py-14 px-8 border border-b-0 border-t-0 border-zinc-200">
        <h2 className="text-3xl font-medium text-zinc-900 dark:text-white mb-4">
          Ready to Immortalize Your Legacy?
          <span className="text-purple-600">Start today.</span>
          <span className="text-zinc-400">
            Create a digital twin that preserves your wisdom, personality, and
            stories for generations to come.
          </span>
        </h2>
        <p className="text-zinc-500 text-lg font-medium mb-8 max-w-xl leading-relaxed"></p>
        <div className="flex flex-col sm:flex-row justify-between md:justify-start gap-4">
          <button className="bg-purple-600 w-full text-white font-semibold py-3 px-8 rounded-md hover:bg-purple-700 transition">
            Reserve My Username
          </button>
          <button className="bg-purple-50 w-full text-purple-600 font-semibold py-3 px-8 rounded-md hover:bg-purple-100 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-2/5 dark:bg-zinc-950 bg-white ">
        <div className="flex flex-start flex-col">
          <span className="inline-block ml-12 w-fit bg-green-100 leading-relaxed text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
            ✨ Limited Time Offer
          </span>
          <p className="text-2xl text-center font-medium mb-2 text-zinc-800 dark:text-zinc-200">
            First 500 registrations receive
          </p>
        </div>
        <h1 className="text-7xl text-center font-medium text-zinc-950 dark:text-white mb-1 mt-8">
          50%
          <span className="text-zinc-400 text-sm mb-4">Discount</span>
        </h1>
        <p className="text-sm text-zinc-500 text-center mt-4">
          Spots left: <span className="text-yellow-600 font-semibold">127</span>
        </p>
      </div>
    </section>
  );
}
