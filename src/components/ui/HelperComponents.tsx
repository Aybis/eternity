'use client';
import Link from 'next/link';
import { useState } from 'react';
import { ReactNode } from 'react';

const NavLink = ({ href, children }: { href: string; children: ReactNode }) => (
  <Link
    href={href}
    className="text-zinc-800 dark:text-zinc-100 hover:text-purple-600 dark:hover:text-purple-400 font-medium  transition-colors"
  >
    {children}
  </Link>
);

const MobileNavLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => (
  <Link
    href={href}
    className="block py-2 text-zinc-900 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium leading-relaxed transition-colors duration-300"
  >
    {children}
  </Link>
);

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) => (
  <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-700 hover:shadow-md transition-all">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-lg font-semibold mb-2 text-zinc-800 dark:text-zinc-200">
      {title}
    </h3>
    <p className="text-zinc-600 dark:text-zinc-400 text-sm">{description}</p>
  </div>
);

const StepCard = ({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold mb-4">
      {number}
    </div>
    <h3 className="text-lg font-semibold mb-2 text-zinc-800 dark:text-zinc-200">
      {title}
    </h3>
    <p className="text-zinc-600 dark:text-zinc-400 text-sm">{description}</p>
  </div>
);

const PricingCard = ({
  title,
  price,
  period,
  features,
  buttonText,
  highlighted = false,
}: {
  title: string;
  price: string;
  period: string;
  features: string[];
  buttonText: string;
  highlighted?: boolean;
}) => (
  <div
    className={`bg-white dark:bg-zinc-800 rounded-xl p-6 border ${
      highlighted
        ? 'border-purple-200 dark:border-purple-400 shadow-md'
        : 'border-zinc-200 dark:border-zinc-700 shadow-sm'
    } relative`}
  >
    {highlighted && (
      <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-purple-100 dark:bg-purple-700 text-purple-700 dark:text-purple-100 text-xs font-medium py-1 px-2 rounded-full">
        Most Popular
      </div>
    )}
    <h3 className="text-lg font-semibold mb-2 text-zinc-800 dark:text-zinc-200">
      {title}
    </h3>
    <div className="mb-6">
      <span className="text-3xl font-bold text-zinc-800 dark:text-zinc-200">
        {price}
      </span>
      <span className="text-zinc-500 dark:text-zinc-400 text-sm">{period}</span>
    </div>
    <ul className="space-y-3 mb-6">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <svg
            className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span className="text-sm text-zinc-600 dark:text-zinc-400">
            {feature}
          </span>
        </li>
      ))}
    </ul>
    <button
      className={`w-full py-2 rounded-lg text-sm font-medium transition-colors ${
        highlighted
          ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700'
          : 'border border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900'
      }`}
    >
      {buttonText}
    </button>
  </div>
);

const TestimonialCard = ({
  quote,
  name,
  title,
  initial,
}: {
  quote: string;
  name: string;
  title: string;
  initial: string;
}) => (
  <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-700">
    <div className="flex items-center mb-4">
      <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-700 flex items-center justify-center text-purple-600 dark:text-purple-100 font-bold text-sm mr-3">
        {initial}
      </div>
      <div>
        <h4 className="font-semibold text-sm text-zinc-800 dark:text-zinc-200">
          {name}
        </h4>
        <p className="text-zinc-500 dark:text-zinc-400 text-xs">{title}</p>
      </div>
    </div>
    <p className="text-zinc-600 dark:text-zinc-400 text-sm">{quote}</p>
    <div className="mt-4 flex text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  </div>
);

const FaqItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-sm overflow-hidden border border-zinc-100 dark:border-zinc-700">
      <button
        className="w-full px-6 py-4 text-left font-medium text-zinc-800 dark:text-zinc-200 focus:outline-none flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <svg
          className={`h-5 w-5 text-zinc-500 dark:text-zinc-400 transform transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`px-6 overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-zinc-600 dark:text-zinc-400 text-sm">{answer}</p>
      </div>
    </div>
  );
};

export {
  NavLink,
  MobileNavLink,
  FeatureCard,
  StepCard,
  PricingCard,
  TestimonialCard,
  FaqItem,
};
