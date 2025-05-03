'use client';

import Header from '@/components/layout/Header';
import { useState } from 'react';

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
    <div className="flex min-h-screen items-center justify-center dark:bg-zinc-900 bg-zinc-100 px-4 py-12">
      <Header />
      <div className="w-full max-w-lg rounded-lg dark:bg-zinc-800 bg-zinc-50 p-8 shadow-lg">
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
        value={form.name}
        className="w-full rounded-md border dark:border-neutral-600 border-neutral-300 dark:bg-neutral-700 bg-neutral-50 p-2 dark:text-neutral-50 text-neutral-900 dark:placeholder-neutral-500 placeholder-neutral-400 focus:border-indigo-500 focus:outline-none"
        placeholder={placeholder}
      />
    </div>
  );
};
