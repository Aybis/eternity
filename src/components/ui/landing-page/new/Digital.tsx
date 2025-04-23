import { Terminal } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default function Digital() {
  return (
    <section className="flex justify-between gap-x-24 mt-24 items-center mx-auto container max-w-6xl">
      <div className="flex flex-col gap-y-8">
        <h1 className="text-5xl font-semibold dark:text-zinc-50 text-zinc-800 max-w-xl ">
          Your Digital Life Monument
        </h1>
        <p className="text-3xl w-xl mt-4 text-zinc-500">
          Eternity Chain combines cutting-edge AI and blockchain technology to
          preserve your authentic self for generations to come.
        </p>
      </div>
      <div>
        <div className="flex justify-center items-center p-3">
          <Image
            src={'/assets/digital.svg'}
            alt="Digital Life"
            className=""
            width={400}
            height={400}
          />
        </div>
        <div className="bg-purple-500 p-12">
          <div className="flex gap-2 items-center">
            <span className="px-4.5 py-2 rounded-full bg-purple-400 text-zinc-50 text-xl font-medium">
              1
            </span>
            <Terminal className="text-zinc-50" />
            <h3 className="text-2xl font-medium text-zinc-50">
              AI-Generated Personality
            </h3>
          </div>
          <h1 className="mt-4 text-4xl font-semibold text-zinc-100 max-w-2xl text-left">
            Advanced AI technology learns your personality, values, and
            knowledge{' '}
            <span className="opacity-55">
              to create a digital twin that thinks and speaks like you.
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}
