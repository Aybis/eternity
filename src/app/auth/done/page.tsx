import Navbar from '@/components/layout/Navbar';
import { Mail } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-gray-800 font-sans">
      {/* Navigation */}
      <Navbar showMenu={false} />

      <section className="flex justify-center items-center min-h-[calc(100vh-64px)] px-4">
        <div className="max-w-md w-full bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-700 shadow-sm text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            One sign-up.
            <br />A lifetime of impact.
          </h1>

          <div className="flex justify-center mb-6">
            <Mail className="h-12 w-12 text-zinc-800 dark:text-zinc-200" />
          </div>

          <p className="text-sm text-gray-700 dark:text-zinc-300 mb-8">
            Weve sent a verification email to your inbox. Please click the link
            in that email to complete your sign-up.
          </p>

          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            By joining, you agree to our{' '}
            <a href="#" className="text-purple-600 hover:underline">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-purple-600 hover:underline">
              Privacy
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
