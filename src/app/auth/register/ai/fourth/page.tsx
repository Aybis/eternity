import Header from '@/components/layout/Header';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-gray-800 font-sans">
      <Header />
      <div className="flex justify-center items-center min-h-[calc(100vh-64px)] px-4">
        <div className="max-w-md w-full bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-700 shadow-sm text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Time to meet your AI version!
          </h1>

          <div className="flex justify-center mb-6">
            <Image
              src="/assets/oc-on-the-laptop.png"
              alt="AI version illustration"
              width={240}
              height={240}
            />
          </div>

          <p className="text-sm text-gray-700 dark:text-zinc-300 mb-6 max-w-sm mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id
            quam ac elit condimentum congue sit amet sit amet nisl.
          </p>

          <button className="bg-black text-white w-full font-medium text-sm px-4 py-2 rounded-md">
            View Summary
          </button>
        </div>
      </div>
    </div>
  );
}
