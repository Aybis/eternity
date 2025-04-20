import { LockClosedIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import React from 'react';

export default function Hero() {
  const imageAsset = [
    '/assets/image.png',
    '/assets/image2.png',
    '/assets/image3.png',
    '/assets/image4.png',
  ];

  return (
    <section className="pt-24 container mx-auto max-w-6xl">
      <div className="flex flex-col items-center justify-center gap-y-4">
        <h1 className="text-7xl font-semibold text-zinc-800 dark:text-zinc-100 text-center">
          Secure Your <span className="text-purple-700">Legacy.</span>
        </h1>
        <p className="text-center text-zinc-400 text-2xl w-lg mt-4">
          Turn your life’s memories into digital treasures that live forever on
          the blockchain.
        </p>
        <button className="mt-12 px-4 py-2 flex items-center gap-x-2 text-sm bg-purple-600 leading-relaxed text-white rounded-md hover:bg-purple-700 transition duration-300 ease-in-out text-lg">
          <LockClosedIcon />
          Secure Your Slot
        </button>
      </div>

      <div className="flex justify-center items-center my-12">
        {imageAsset.map((image, index) => (
          <div key={index} className="relative">
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              className=""
              width={400}
              height={600}
            />
            <div className="absolute inset-0 dark:bg-black dark:opacity-30 "></div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mb-12 mt-20">
        <h3 className="text-3xl font-semibold text-zinc-800 dark:text-zinc-100 max-w-3xl text-center">
          Digitalized your loved ones, instantly and securely connected through
          the Solana blockchain.
        </h3>
      </div>
    </section>
  );
}
