'use client';

import Header from '@/components/layout/Header';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function WaitlistPage() {
  const [mounted, setMounted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);
  const [form, setForm] = useState({
    name: '',
    email: '',
    occupation: '',
    knowGenAI: '',
    reason: '',
  });
  // Carousel state
  const [currentIndex, setCurrentIndex] = useState(0);

  const imagesDark = [
    '/assets/waitlist/immortalize_dark.svg',
    '/assets/waitlist/transform_dark.png',
    '/assets/waitlist/paid_dark.svg',
  ];

  const imagesLight = [
    '/assets/waitlist/immortalize.svg',
    '/assets/waitlist/transform.png',
    '/assets/waitlist/paid.svg',
  ];
  const images = theme.resolvedTheme === 'dark' ? imagesDark : imagesLight;
  const imageCaptions = [
    {
      title: 'Immortalize',
      subtitle:
        'your memories knowledge and experiences for future generations',
    },
    {
      title: 'Transform',
      subtitle:
        'your knowledge & experiences into personalized virtual characters',
    },
    {
      title: 'Get Paid',
      subtitle:
        'everytime people consult your virtual characters so you can do what you love',
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  if (!mounted) return null;

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
      const formData = new FormData();
      formData.append('entry.399147236', form.name); // Name
      formData.append('entry.1533644389', form.email); // Email
      formData.append('entry.2041900269', form.occupation); // Occupation
      formData.append('entry.1817060152', form.reason); // Describe your goal
      formData.append('entry.2073995304', form.knowGenAI); // Familiar with GenAI

      // TODO: Replace with actual Google Form POST URL
      await fetch(
        'https://docs.google.com/forms/d/e/1FAIpQLSdPXCuAv9ztIWfZMcvmRPeAsvZyBfcnbiAdiKGvnOGJjb6IxQ/formResponse',
        {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-type': 'application/json',
          },
          body: formData,
        },
      );
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
          <Link
            onClick={() => {
              window.location.reload();
            }}
            href="/"
            className="text-purple-500 hover:underline text-sm font-medium cursor-pointer no-underline"
          >
            Go back to Home
          </Link>
        </div>

        <div className="mt-6"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row h-auto md:h-screen w-full overflow-hidden dark:bg-zinc-900 bg-zinc-100">
      <Header />
      <div className="relative max-w-6xl mx-auto container grid grid-cols-1 md:grid-cols-2 overflow-auto dark:bg-zinc-900 bg-white">
        {/* Image  */}
        <div className="col-span-1 relative bg-zinc-100 dark:bg-zinc-900 ">
          <div className="h-screen md:hidden mt-4">
            <MobileCarouselSlide
              images={images}
              imageCaptions={imageCaptions}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
            />
          </div>

          <DesktopCarouselSlide
            images={images}
            imageCaptions={imageCaptions}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        </div>

        {/* Form  */}
        <div
          id="waitlist-form"
          className="w-full flex flex-col items-center justify-center  col-span-1 bg-zinc-100 dark:bg-zinc-900"
        >
          <div className="rounded-lg px-8 border-none md:max-w-md md:p-8 md:border dark:border-zinc-300 w-full pt-8 pb-12">
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
                label="Name"
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
                <span className="mb-1 block text-sm font-medium dark:text-neutral-300 text-neutral-700 capitalize">
                  Are you familiar with Generative AI technology
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
                  <label className="inline-flex items-center gap-2 dark:text-neutral-300 text-neutral-700 text-sm">
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
                  className="mb-1 block text-sm font-medium dark:text-neutral-300 text-neutral-700 capitalize"
                >
                  Describe your goal to utilize engramind
                </label>
                <textarea
                  id="reason"
                  name="reason"
                  rows={2}
                  onChange={handleChange}
                  value={form.reason}
                  className="w-full rounded-md border dark:border-neutral-600 border-zinc-300 dark:bg-neutral-700 bg-zinc-50 p-3 text-sm lg:text-base dark:text-neutral-50 placeholder-neutral-500 focus:border-indigo-500 focus:outline-none"
                  placeholder="Tell us what inspires you..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-md bg-purple-600 py-3 font-medium text-white transition hover:bg-purple-500 disabled:cursor-not-allowed disabled:bg-indigo-900"
              >
                {loading ? 'Submitting...' : 'Join Early Access'}
              </button>
              <p className="text-xs text-center text-zinc-400 mt-2">
                Your information is secure and will only be used for Engramind
                updates.
              </p>
              <p className="mt-4 text-center text-xs text-neutral-400 dark:text-neutral-500 hidden">
                By logging in, you agree to our{' '}
                <a
                  href="/terms"
                  className="text-purple-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms of Service
                </a>{' '}
                and{' '}
                <a
                  href="/privacy"
                  className="text-purple-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy
                </a>
              </p>
            </form>
          </div>
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
        className="w-full rounded-md border dark:border-neutral-600 border-zinc-300 dark:bg-neutral-700 bg-zinc-50 p-3 text-sm lg:text-base dark:text-neutral-50 placeholder-neutral-500 focus:border-indigo-500 focus:outline-none"
        placeholder={placeholder}
      />
    </div>
  );
};

const DesktopCarouselSlide = ({
  images,
  imageCaptions,
  currentIndex,
  setCurrentIndex,
}: {
  images: string[];
  imageCaptions: { title: string; subtitle: string }[];
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}) => (
  <div className="hidden relative md:flex flex-col justify-center items-center h-full">
    <div className="w-full flex justify-center items-center mb-8 h-[350px] relative">
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt="Engramind Background"
          width={300}
          height={300}
          className={`absolute object-contain transition-opacity duration-300 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          priority={index === currentIndex}
        />
      ))}
    </div>
    <div className="relative z-10 lg:px-12 text-center flex justify-center items-center mx-auto container flex-col mt-12 h-[160px]">
      <h2 className="text-base sm:text-lg md:text-2xl text-purple-600 font-semibold">
        {imageCaptions[currentIndex].title}
      </h2>
      <p className="text-base md:text-lg dark:text-zinc-200 text-zinc-800 leading-relaxed">
        {imageCaptions[currentIndex].subtitle}
      </p>
    </div>
    <div className="flex justify-center mt-4 space-x-2">
      {images.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentIndex(index)}
          className={`w-2 h-2 rounded-full cursor-pointer ${
            index === currentIndex ? 'bg-purple-600' : 'bg-gray-400'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  </div>
);

const MobileCarouselSlide = ({
  images,
  imageCaptions,
  currentIndex,
  setCurrentIndex,
}: {
  images: string[];
  imageCaptions: { title: string; subtitle: string }[];
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}) => (
  <div className="absolute inset-0 flex flex-col items-center justify-start text-center text-white z-20 px-4 pt-24 pb-10 md:hidden">
    <div className="w-full flex justify-center items-center mb-8 h-[250px] relative">
      <Image
        src={images[currentIndex]}
        alt="Engramind Mobile Background"
        width={250}
        height={250}
        className="mb-6"
        priority
      />
    </div>

    <h2 className="text-2xl text-purple-600 font-semibold mb-2">
      {imageCaptions[currentIndex].title}
    </h2>
    <p className="text-base font-medium text-neutral-700 dark:text-neutral-300 mb-6 px-4">
      {imageCaptions[currentIndex].subtitle}
    </p>
    <div className="flex justify-center mb-12 space-x-2">
      {images.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentIndex(index)}
          className={`w-2 h-2 rounded-full cursor-pointer ${
            index === currentIndex ? 'bg-purple-600' : 'bg-gray-400'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
    <button
      onClick={() =>
        document
          .getElementById('waitlist-form')
          ?.scrollIntoView({ behavior: 'smooth' })
      }
      className="bg-purple-600 font-medium leading-relaxed text-white text-sm px-6 py-2 rounded-md shadow-md"
    >
      Join the Waitlist
    </button>
  </div>
);
