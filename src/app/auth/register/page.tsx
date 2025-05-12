import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-gray-800 font-sans">
      {/* Navigation */}
      <Navbar showMenu={false} />
      <section className="flex justify-center items-center min-h-[calc(100vh-64px)] px-4">
        <div className="max-w-md w-full bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-700 shadow-sm">
          <h1 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            One sign-up.
            <br />A lifetime of impact.
          </h1>

          <form className="space-y-4">
            <InputField
              id="name"
              label="Your Name"
              type="text"
              placeholder="Johnny Silverhand"
              required
            />

            <InputField
              id="email"
              label="Your Email"
              type="email"
              placeholder="johnny@example.com"
              required
            />

            <InputField
              id="birthdate"
              label="Your Birthdate"
              type="text"
              placeholder="January 23rd, 2023"
              required
            />

            <div>
              <label
                htmlFor="gender"
                className="block text-sm font-medium mb-1 dark:text-zinc-200"
              >
                Your Gender <span className="text-red-500">*</span>
              </label>
              <select
                id="gender"
                className="w-full border border-zinc-300 dark:border-zinc-600 rounded-md px-3 py-2 text-sm bg-white dark:bg-zinc-800 text-gray-900 dark:text-white outline-none"
              >
                <option value="">Prefer not to say</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
            </div>

            <InputField
              id="phone"
              label="Your Phone Number"
              type="tel"
              placeholder="+62 812-3456-7890"
              required
            />

            <Link href={'/auth/register/ai'}>
              <div className=" w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 rounded-md transition text-center">
                Continue
              </div>
            </Link>
          </form>

          <p className="text-xs text-center mt-4 text-zinc-500 dark:text-zinc-400">
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

// Define the InputFieldProps interface
interface InputFieldProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type,
  placeholder,
  required = false,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium mb-1 dark:text-zinc-200"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="w-full border border-zinc-300 dark:border-zinc-600 rounded-md px-3 py-2 text-sm bg-white dark:bg-zinc-800 text-gray-900 dark:text-white outline-none"
      />
    </div>
  );
};
