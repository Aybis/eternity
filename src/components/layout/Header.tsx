'use client';
import ThemeToggle from '@/theme/theme-toggle';
import Image from 'next/image';

export default function Header() {
  return (
    <nav className="fixed w-full bg-white/30 backdrop-blur-sm bg-opacity-95 z-50 border-b border-gray-100 shadow-sm dark:bg-zinc-950/30 dark:border-zinc-700 ">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ">
        {/* Menu Content  */}
        <div className="flex justify-between items-center py-4">
          {/* Header Logo */}
          <div
            onClick={() => {
              window.location.href = '/';
            }}
            className="flex items-center cursor-pointer"
          >
            <Image src="/engramind.svg" alt="Logo" width={120} height={80} />
          </div>

          {/* Button Get Started */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex gap-x-2">
              <button className="px-4 py-2 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium text-sm hover:from-purple-700 hover:to-indigo-700 transition-colors">
                Contact
              </button>
            </div>

            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
