import { CategoryFilter } from '@/components/ui/showcase/CategoryFilter';
import { Header } from '@/components/ui/showcase/Header';
import Relic from '@/components/ui/showcase/Relic';
import { SearchBar } from '@/components/ui/showcase/SearchBar';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

export default async function Page() {
  const cookieStore = cookies();
  const token = (await cookieStore).get('access_token')?.value;
  let name = 'Guest';

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
        name?: string;
      };
      name = decoded.name || 'User';
      console.log('Decoded token:', name);
    } catch (e) {
      console.log(e, '<< errr');
      console.error('Invalid token');
    }
  }

  return (
    <div className="relative bg-zinc-50 dark:bg-zinc-900 min-h-screen overflow-auto">
      <Header name={name} />
      <div className="max-w-7xl mx-auto px-4 py-10 text-neutral-900 dark:text-neutral-100">
        <div>
          <h1 className="text-3xl font-bold mb-2 capitalize">
            Welcome, {name}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Curated profiles. Proven expertise. Find and connect with your AI
            Mentor, at your own time.
          </p>
        </div>
        <SearchBar />
        <CategoryFilter />
        <Relic />
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 shadow-lg rounded-lg">
          {relics.map((relic, idx) => (
            <RelicCard key={idx} {...relic} />
          ))}
        </div> */}
      </div>
    </div>
  );
}
