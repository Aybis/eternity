'use client';

import Header from '@/components/layout/Header';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function WaitlistPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    occupation: '',
    knowGenAI: '',
    reason: '',
  });
  // Carousel state
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '/assets/bg/memory.svg',
    '/assets/bg/personalize.svg',
    '/assets/bg/payment.svg',
  ];
  const imageCaptions = [
    {
      title: 'Title 1',
      subtitle:
        'Immortalize your memories knowledge and experiences for future generations',
    },
    {
      title: 'Title 2',
      subtitle:
        'Transform your knowledge & experiences into personalized virtual characters',
    },
    {
      title: 'Title 3',
      subtitle:
        'Get paid everytime people consult your virtual characters so you can do what you love',
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email) return; // basic guard
    setLoading(true);
    try {
      // TODO: replace with real API route
      await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert('Something went wrong, please try again later.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black px-4 text-center text-neutral-50">
        <div>
          <h1 className="mb-4 text-3xl font-semibold">
            Thank you for joining!
          </h1>
          <p className="text-neutral-400">
            We&apos;ll keep you posted with early‑access details and exclusive
            offers.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row h-auto md:h-screen w-full overflow-hidden">
      <Header />
      {/* Image  */}
      <div className="w-full md:w-1/2 relative h-[100vh] md:h-auto">
        {/* <div className="absolute inset-0 bg-black opacity-50 z-[5]" /> */}
        {/* Desktop caption (md and up) */}
        <div className="absolute bottom-20 sm:bottom-24 md:bottom-28 left-1/2 -translate-x-1/2 text-center text-white z-20 hidden md:block">
          {/* <h2 className="text-base sm:text-lg md:text-xl font-semibold">
            {imageCaptions[currentIndex].title}
          </h2> */}
          <p className="text-md sm:text-base md:text-xl leading-relaxed">
            {imageCaptions[currentIndex].subtitle}
          </p>
        </div>
        {/* Mobile caption and button, vertically centered */}
        <div className="absolute -mt-24 inset-0 flex flex-col items-center justify-end text-center text-white z-20 px-4 pb-16 md:hidden">
          <p className="text-base font-medium mb-4">
            {imageCaptions[currentIndex].subtitle}
          </p>
          <button
            onClick={() =>
              document
                .getElementById('waitlist-form')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="bg-indigo-600 text-white text-sm px-6 py-2 rounded-md shadow-md mb-3"
          >
            Join the Waitlist
          </button>
        </div>
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt="Engramind Background"
            width={300}
            height={300}
            className={`absolute -mt-12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            priority={index === currentIndex}
          />
        ))}
        <div className="absolute bottom-4 w-full flex justify-center gap-2 z-30">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full transition-all cursor-pointer ${
                index === currentIndex ? 'bg-white w-6' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              type="button"
            />
          ))}
        </div>
      </div>

      {/* Form  */}
      <div
        id="waitlist-form"
        className="w-full md:w-1/2 flex flex-col items-center justify-center px-6 sm:px-8 md:px-12 dark:bg-zinc-800"
      >
        <div className="rounded-lg dark:bg-zinc-800 bg-zinc-50 md:p-8 shadow-lg w-full max-w-xl pt-8 pb-12">
          <h1 className="mb-2 text-center text-2xl font-semibold dark:text-neutral-50 text-neutral-900">
            Request Early Access to Engramind
          </h1>
          <p className="mb-8 text-center text-sm text-neutral-400">
            Share your details and let us know why Engramind matters to you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <FormInput
              form={form}
              handleChange={handleChange}
              name="name"
              label="Full Name"
              type="text"
              placeholder="John Doe"
            />

            <FormInput
              form={form}
              handleChange={handleChange}
              name="email"
              label="Email"
              type="text"
              placeholder="you@example.com"
            />

            <FormInput
              form={form}
              handleChange={handleChange}
              name="occupation"
              label="Occupation"
              type="text"
              placeholder="Your occupation"
            />

            <div>
              <span className="mb-1 block text-sm font-medium dark:text-neutral-300 text-neutral-700">
                Do you know about generative AI?
              </span>
              <div className="flex gap-6">
                <label className="inline-flex items-center gap-2 dark:text-neutral-300 text-neutral-700 text-sm">
                  <input
                    type="radio"
                    name="knowGenAI"
                    value="yes"
                    checked={form.knowGenAI === 'yes'}
                    onChange={handleChange}
                    className="accent-indigo-500"
                  />
                  Yes
                </label>
                <label className="inline-flex items-center gap-2 dark:text-neutral-300 text-neutral-700 text-md">
                  <input
                    type="radio"
                    name="knowGenAI"
                    value="no"
                    checked={form.knowGenAI === 'no'}
                    onChange={handleChange}
                    className="accent-indigo-500"
                  />
                  No
                </label>
              </div>
            </div>

            <div>
              <label
                htmlFor="reason"
                className="mb-1 block text-sm font-medium dark:text-neutral-300 text-neutral-700"
              >
                Why do you want to join Engramind?
              </label>
              <textarea
                id="reason"
                name="reason"
                rows={2}
                onChange={handleChange}
                value={form.reason}
                className="w-full rounded-md border dark:border-neutral-600 border-zinc-300 dark:bg-neutral-700 bg-zinc-50 p-3 text-neutral-50 placeholder-neutral-500 focus:border-indigo-500 focus:outline-none text-md"
                placeholder="Tell us what inspires you..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-md bg-indigo-600 py-3 font-medium text-white transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:bg-indigo-900"
            >
              {loading ? 'Submitting...' : 'Join Early Access'}
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-neutral-500">
            Your information is secure and will only be used for Engramind
            updates.
          </p>
        </div>
      </div>
    </div>
  );
}

const FormInput = ({
  form,
  handleChange,
  name,
  label,
  type,
  placeholder,
}: {
  form: {
    name: string;
    email: string;
    occupation: string;
    knowGenAI: string;
    reason: string;
  };
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  name: string;
  label: string;
  type: string;
  placeholder: string;
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1 block text-sm font-medium dark:text-neutral-300 text-neutral-700"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        onChange={handleChange}
        value={form[name as keyof typeof form]}
        className="w-full rounded-md border dark:border-neutral-600 border-neutral-300 dark:bg-neutral-700 bg-neutral-50 p-2 dark:text-neutral-50 text-neutral-900 dark:placeholder-neutral-500 placeholder-neutral-400 focus:border-indigo-500 focus:outline-none"
        placeholder={placeholder}
      />
    </div>
  );
};
