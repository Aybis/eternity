import { BellDot } from 'lucide-react';
import Image from 'next/image';

export const Header = async (
  { name }: { name: string } = { name: 'User' }, // Default value for name
) => {
  return (
    <header className="w-full border-b bg-white dark:bg-zinc-800 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
          Relics
        </div>
        <nav className="hidden md:flex gap-6 text-md text-gray-700 dark:text-gray-300 leading-relaxed">
          <a
            href="#"
            className="hover:text-purple-600 dark:hover:text-purple-400 text-purple-500 font-semibold"
          >
            Relics Showcase
          </a>
          <a
            href="#"
            className="hover:text-purple-600 dark:hover:text-purple-400"
          >
            How It Works
          </a>
          <a
            href="#"
            className="hover:text-purple-600 dark:hover:text-purple-400"
          >
            FAQ
          </a>
        </nav>
        <div className="flex gap-4 items-center">
          <div className="text-sm text-purple-600 dark:text-purple-300 capitalize">
            Hi, {name}
          </div>
          <BellDot className="text-purple-600 dark:text-purple-400" />
          <button>
            <Image
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Profile"
              className="rounded-full w-8 h-8"
              width={400}
              height={300}
            />
          </button>
        </div>
      </div>
    </header>
  );
};
