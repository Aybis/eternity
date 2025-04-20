'use client';
import Navbar from '@/components/layout/Navbar';
import Faq from '@/components/ui/landing-page/Faq';
import Pricing from '@/components/ui/landing-page/Pricing';
import TrustIndicator from '@/components/ui/landing-page/TrustIndicator';
import { LockClosedIcon } from '@radix-ui/react-icons';
import { Terminal } from 'lucide-react';
import Image from 'next/image';

const EternityChainLanding = () => {
  const imageAsset = [
    '/assets/image.png',
    '/assets/image2.png',
    '/assets/image3.png',
    '/assets/image4.png',
  ];
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-gray-800 font-sans">
      {/* Navigation */}
      <Navbar showMenu={true} />

      {/* Hero Secttion  */}
      <section className="pt-24 container mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-center gap-y-4">
          <h1 className="text-7xl font-semibold text-zinc-800 dark:text-zinc-100 text-center">
            Secure Your <span className="text-purple-700">Legacy.</span>
          </h1>
          <p className="text-center text-zinc-400 text-2xl w-lg mt-4">
            Turn your life’s memories into digital treasures that live forever
            on the blockchain.
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
            Digitalized your loved ones, instantly and securely connected
            through the Solana blockchain.
          </h3>
        </div>
      </section>

      {/* Digital Life  */}
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

      {/* How it Work */}
      <section className="mx-auto max-w-6xl container py-12 mt-12">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl font-semibold leading-relaxed text-zinc-800 dark:text-zinc-100">
            How Eternity Chain Works
          </h1>
          <h2 className="text-3xl leading-relaxed text-zinc-500 w-xl text-center">
            Three simple steps to create your living digital legacy
          </h2>
        </div>

        <div className="flex justify-between items-center">
          {/* sub set 1 & 2 */}
          <div className="flex flex-col">
            <div className="py-14 px-8">
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
            <div className="py-14 px-8">
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
          <div className="py-14 px-8">
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

      <Pricing />

      <section className="py-24 bg-white dark:bg-zinc-950 text-zinc-800 dark:text-zinc-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-semibold mb-4">What Our Users Say</h2>
          <p className="text-xl text-zinc-500 mb-16">
            Real experiences from people preserving their legacy with Eternity
            Chain
          </p>
          <div className="grid sm:grid-cols-1 md:grid-cols-2">
            {/* Testimonial 1 */}
            <div className="p-6 border border-zinc-200  dark:border-zinc-800">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-4">
                  <Image
                    src="/assets/avatar-marcus.png"
                    alt="Marcus"
                    width={50}
                    height={50}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Marcus Ibrahim</h4>
                    <p className="text-sm text-zinc-500">Historian & Author</p>
                  </div>
                </div>
                <div className="text-purple-500 text-xl">★★★★★</div>
              </div>
              <p className="text-left text-zinc-600 dark:text-zinc-400">
                As someone whos spent a lifetime collecting stories, Eternity
                Chain gives me peace of mind knowing my research and personal
                insights will live on.
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="p-6 border border-zinc-200  dark:border-zinc-800">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-4">
                  <Image
                    src="/assets/avatar-jackson.png"
                    alt="Jackson"
                    width={50}
                    height={50}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Jackson Blum</h4>
                    <p className="text-sm text-zinc-500">Historian & Author</p>
                  </div>
                </div>
                <div className="text-purple-500 text-xl">★★★★★</div>
              </div>
              <p className="text-left text-zinc-600 dark:text-zinc-400">
                After losing family members, I wanted to preserve our stories.
                My grandchildren can now interact with our ancestors wisdom.
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="p-6 border border-zinc-200  dark:border-zinc-800">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-4">
                  <Image
                    src="/assets/avatar-jack.png"
                    alt="Jack"
                    width={50}
                    height={50}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Jack Lockley</h4>
                    <p className="text-sm text-zinc-500">Tech Entrepreneur</p>
                  </div>
                </div>
                <div className="text-purple-500 text-xl">★★★★★</div>
              </div>
              <p className="text-left text-zinc-600 dark:text-zinc-400">
                My Elwyn AI is already generating revenue by sharing my business
                insights. Its amazing to see my digital twin helping others.
              </p>
            </div>

            {/* Testimonial 4 */}
            <div className="p-6 border border-zinc-200  dark:border-zinc-800">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-4">
                  <Image
                    src="/assets/avatar-joceline.png"
                    alt="Joceline"
                    width={50}
                    height={50}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Joceline Ann</h4>
                    <p className="text-sm text-zinc-500">Teacher</p>
                  </div>
                </div>
                <div className="text-purple-500 text-xl">★★★★★</div>
              </div>
              <p className="text-left text-zinc-600 dark:text-zinc-400">
                After losing loved ones, I felt the need to preserve our
                family’s stories. Now, my grandchildren can connect with the
                wisdom of those who came before them.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Faq />
      <TrustIndicator />
      {/* Footer */}
      <footer className="bg-white dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-purple-600">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  Demo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-purple-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
              Connect
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-purple-600">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-purple-600 mb-4">
              Eternity Chain
            </h3>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EternityChainLanding;
