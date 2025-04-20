import React from 'react';

export default function Footer() {
  return (
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
  );
}
