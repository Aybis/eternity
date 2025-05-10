'use client';

import WalletModal from '@/components/ui/wallet/WalletModal';
import { GalleryVerticalEndIcon } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

function Button({
  children,
  className = '',
  variant = 'solid',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'solid' | 'outline';
}) {
  const base = 'text-sm font-medium px-4 py-2 rounded-md transition';
  const styles =
    variant === 'outline'
      ? 'border border-zinc-300 text-zinc-700 dark:text-zinc-200 bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800'
      : 'bg-purple-500 hover:bg-purple-600 text-white';
  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
}

function Input({
  className = '',
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-sm text-zinc-900 dark:text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 ${className}`}
      {...props}
    />
  );
}

export default function Dashboard() {
  const [search, setSearch] = useState('');

  return (
    <div className="flex h-screen bg-white dark:bg-zinc-950 text-zinc-800">
      {/* Sidebar */}
      <aside className="w-60 border-r border-zinc-200 dark:border-zinc-800 p-4 flex flex-col justify-between">
        <div>
          <div className=" mb-4 flex gap-x-2 items-center">
            <GalleryVerticalEndIcon className="w-8 h-8 text-white bg-zinc-900 p-2 rounded-lg" />
            <div>
              <h4 className="text-base -mb-1 font-semibold">Eternity Chain</h4>
              <p className="text-sm font-light">Personal</p>
            </div>
          </div>
          <WalletModal />

          <div className="text-xs uppercase text-zinc-500 mb-2">Platform</div>
          <nav className="space-y-2 text-sm">
            {[
              { label: 'Memory Locker', icon: '🧠', active: true },
              { label: 'General Personality', icon: '🧬' },
              { label: 'Activity', icon: '🕘' },
              { label: 'Heir Key', icon: '🗝️' },
              { label: 'Publish', icon: '📤' },
              { label: 'Settings', icon: '⚙️' },
            ].map(({ label, icon, active }) => (
              <div
                key={label}
                className={`flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer ${
                  active
                    ? 'bg-purple-100 text-purple-700 font-medium'
                    : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                }`}
              >
                <span>{icon}</span>
                <span>{label}</span>
              </div>
            ))}
          </nav>
        </div>
        <div className="text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/avatar/avatar1.png"
              alt="user"
              width={24}
              height={24}
              className="w-6 h-6 rounded-full"
            />
            <div>
              <div className="text-sm font-medium text-zinc-800 dark:text-white">
                shadcn
              </div>
              <div>Connect your wallet first</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 w-full">
        <div className="flex items-cente justify-center gap-4 mb-6 inset-x-0 ">
          <Button variant="outline" className="text-sm">
            Available Locker: 0
          </Button>
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Memory Locker..."
            className="w-full max-w-4xl"
          />
          <select className="border border-zinc-300 text-sm rounded-md px-3 py-2">
            <option>Sort by Activity</option>
          </select>
          <Button className="bg-purple-500 hover:bg-purple-600 text-white">
            Buy Locker
          </Button>
        </div>

        <div className="text-center mt-40 text-zinc-400 text-xl">
          All quiet here… ready to build something cool?
        </div>
      </main>
    </div>
  );
}
