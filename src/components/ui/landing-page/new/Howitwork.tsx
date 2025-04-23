import React from 'react';

export default function Howitwork() {
  return (
    <section className="mx-auto max-w-6xl container py-12 mt-12">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl font-semibold leading-relaxed text-zinc-800 dark:text-zinc-100">
          How Eternity Chain Works
        </h1>
        <h2 className="text-3xl leading-relaxed text-zinc-500 w-xl text-center">
          Three simple steps to create your living digital legacy
        </h2>
      </div>

      <div className="flex  mt-14">
        {/* sub set 1 & 2 */}
        <div className="flex flex-col">
          <div className=" h-full py-14 px-8 border border-zinc-200 dark:border-zinc-700 ">
            <div className="h-12 w-12 flex justify-center items-center text-xl rounded-full bg-zinc-800 dark:bg-zinc-200 dark:text-zinc-600 text-white">
              1
            </div>
            <h4 className="text-2xl mt-8 font-semibold text-zinc-800 dark:text-zinc-100">
              Reserve Your Digital Lot
            </h4>
            <p className="tex-xl w-lg font-medium leading-relaxed text-zinc-500">
              Secure your unique username on the blockchain and set up your
              personal Eternity Chain account.
            </p>
          </div>

          {/* section 2  */}
          <div className="py-14 px-8 border border-t-0 border-zinc-200 dark:border-zinc-700 ">
            <div className="h-12 w-12 flex justify-center items-center text-xl rounded-full bg-zinc-800 dark:bg-zinc-200 dark:text-zinc-600 text-white">
              2
            </div>
            <h4 className="text-2xl mt-8 font-semibold text-zinc-800 dark:text-zinc-100">
              Upload Your Data
            </h4>
            <p className="tex-xl w-xl font-medium leading-relaxed text-zinc-500">
              Share your stories, knowledge, values, and experiences through
              text, audio, or video inputs.
            </p>
          </div>
        </div>

        {/* sub set 3  */}
        <div className="py-14 px-16 border border-l-0 border-zinc-200 dark:border-zinc-700 flex flex-col justify-center items-start flex-1 inset-y-0">
          <div className="h-12 w-12 flex justify-center items-center text-xl rounded-full bg-zinc-800 dark:bg-zinc-200 dark:text-zinc-600 text-white">
            3
          </div>
          <h4 className="text-2xl mt-8 font-semibold text-zinc-800 dark:text-zinc-100">
            Meet Your AI Twin
          </h4>
          <p className="tex-xl w-xl font-medium leading-relaxed text-zinc-500">
            {
              "Watch as our AI creates your digital twin 'Elwyn' that preserves your personality and wisdom."
            }
          </p>
        </div>
      </div>
    </section>
  );
}
