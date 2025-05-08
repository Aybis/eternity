'use client';
import {
  BellDot,
  Star,
  Users,
  Palette,
  HandCoins,
  BriefcaseBusiness,
  Database,
  CircleDollarSign,
  PersonStanding,
  Computer,
  Scroll,
  Tag,
  PencilRuler,
  Signal,
} from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { JSX } from 'react/jsx-runtime';

const Header = () => (
  <header className="w-full border-b bg-white dark:bg-neutral-900 dark:border-neutral-800">
    <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
      <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
        Relics
      </div>
      <nav className="hidden md:flex gap-6 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <a
          href="#"
          className="hover:text-purple-600 dark:hover:text-purple-400 text-purple-500 font-medium"
        >
          Relics Showcase
        </a>
        <a
          href="#"
          className="hover:text-purple-600 dark:hover:text-purple-400"
        >
          How It Works
        </a>
        <a
          href="#"
          className="hover:text-purple-600 dark:hover:text-purple-400"
        >
          FAQ
        </a>
      </nav>
      <div className="flex gap-4 items-center">
        {/* <button className="text-purple-600 dark:text-purple-400">🔔</button> */}
        <BellDot className="text-purple-600 dark:text-purple-400" />
        <button>
          <Image
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Profile"
            className="rounded-full w-8 h-8"
            width={400}
            height={300}
          />
        </button>
      </div>
    </div>
  </header>
);

const categories = [
  'Art & Design', //pallete
  'Accounting', //hand-coins
  'Business', //briefcase-business
  'Data', //database
  'Finance', //circle-dollar-sign
  'Human Resource', //person-standing
  'IT & Engineering', //computer
  'Law & Consulting', //scroll
  'Marketing', //tag
  'Product', //pencil-ruler
  'Sales & Ops', //signal
];

const relics = [
  {
    title: 'Jason Blum (Director)',
    tags: ['Camera', 'Film'],
    image:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    creator: '@jas0n_blum',
    followers: '101k',
    rating: '4.5/5',
  },
  {
    title: 'Jason Blum (Group Band)',
    tags: ['Vocal', 'Guitar'],
    image:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    creator: '@jas0n_blum',
    followers: '21k',
    rating: '4.7/5',
  },
  {
    title: 'Jason Blum (Group Band)',
    tags: ['Vocal', 'Guitar'],
    image:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    creator: '@jas0n_blum',
    followers: '21k',
    rating: '4.7/5',
  },
  {
    title: 'Jason Blum (Group Band)',
    tags: ['Vocal', 'Guitar'],
    image:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    creator: '@jas0n_blum',
    followers: '21k',
    rating: '4.7/5',
  },
  {
    title: 'Jason Blum (Group Band)',
    tags: ['Vocal', 'Guitar'],
    image:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    creator: '@jas0n_blum',
    followers: '21k',
    rating: '4.7/5',
  },
  {
    title: 'Jason Blum (Group Band)',
    tags: ['Vocal', 'Guitar'],
    image:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    creator: '@jas0n_blum',
    followers: '21k',
    rating: '4.7/5',
  },
  {
    title: 'Jason Blum (Group Band)',
    tags: ['Vocal', 'Guitar'],
    image:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    creator: '@jas0n_blum',
    followers: '21k',
    rating: '4.7/5',
  },
  {
    title: 'Jason Blum (Group Band)',
    tags: ['Vocal', 'Guitar'],
    image:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    creator: '@jas0n_blum',
    followers: '21k',
    rating: '4.7/5',
  },
  {
    title: 'Jason Blum (Group Band)',
    tags: ['Vocal', 'Guitar'],
    image:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    creator: '@jas0n_blum',
    followers: '21k',
    rating: '4.7/5',
  },
  {
    title: 'Jason Blum (Group Band)',
    tags: ['Vocal', 'Guitar'],
    image:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    creator: '@jas0n_blum',
    followers: '21k',
    rating: '4.7/5',
  },
  {
    title: 'Jason Blum (Group Band)',
    tags: ['Vocal', 'Guitar'],
    image:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    creator: '@jas0n_blum',
    followers: '21k',
    rating: '4.7/5',
  },

  // Add more relics here
];

const categoryIcons: { [key: string]: JSX.Element } = {
  'Art & Design': <Palette className="w-4 h-4 mr-1" />,
  Accounting: <HandCoins className="w-4 h-4 mr-1" />,
  Business: <BriefcaseBusiness className="w-4 h-4 mr-1" />,
  Data: <Database className="w-4 h-4 mr-1" />,
  Finance: <CircleDollarSign className="w-4 h-4 mr-1" />,
  'Human Resource': <PersonStanding className="w-4 h-4 mr-1" />,
  'IT & Engineering': <Computer className="w-4 h-4 mr-1" />,
  'Law & Consulting': <Scroll className="w-4 h-4 mr-1" />,
  Marketing: <Tag className="w-4 h-4 mr-1" />,
  Product: <PencilRuler className="w-4 h-4 mr-1" />,
  'Sales & Ops': <Signal className="w-4 h-4 mr-1" />,
};

const CategoryFilter = () => (
  <div className="flex flex-wrap gap-2 mb-4">
    {categories.map((cat) => (
      <button
        key={cat}
        className="flex items-center text-sm px-3 py-1 rounded-full bg-purple-100 text-purple-700 hover:bg-purple-200 dark:bg-purple-900 dark:text-purple-300 dark:hover:bg-purple-800"
      >
        {categoryIcons[cat]}
        {cat}
      </button>
    ))}
  </div>
);

const SearchBar = () => (
  <div className="flex gap-3 w-full flex-wrap mb-6">
    <input
      type="text"
      placeholder="Search Relic..."
      className="flex-1 px-4 py-2 border rounded-md dark:bg-neutral-700 dark:border-neutral-200 border-zinc-400 dark:text-neutral-100"
    />
    <select className="border rounded-md px-3 py-2 dark:bg-neutral-700 dark:border-neutral-200 border-zinc-400 dark:text-neutral-100 appearance-auto">
      <option>Sort by Role</option>
    </select>
  </div>
);

const RelicCard = ({
  title,
  tags,
  image,
  creator,
  followers,
  rating,
}: (typeof relics)[0]) => (
  <div className=" dark:bg-neutral-800 border border-zinc-200 rounded-lg p-4 hover hover:shadow-lg shadow-none transition-all duration-300 hover:border-purple-500">
    <Image
      src={image}
      width={400}
      height={300}
      alt={title}
      className="rounded-md w-full h-48 object-cover mb-4"
    />
    <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
    <div className="flex flex-wrap gap-2 my-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="inline-flex items-center justify-center text-xs font-medium text-white bg-purple-500 rounded-full px-3 py-1"
        >
          {tag}
        </span>
      ))}
    </div>
    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
      created by
    </div>
    <div className="flex justify-between items-center text-sm">
      <span className="text-purple-700 dark:text-purple-400 flex items-center text-xs">
        <Image
          height={200}
          width={200}
          src={image}
          alt={title}
          className="rounded-full w-4 h-4 mr-1"
        />
        {creator}
      </span>
      <div className="flex gap-3">
        <span className="flex text-purple-600 items-center">
          <Users className="text-purple-600 h-4" />
          {followers}
        </span>
        <span className="text-green-600 flex items-center">
          <Star className="text-green-600 fill-green-600 h-4" /> {rating}
        </span>
      </div>
    </div>
  </div>
);

export default function Page() {
  return (
    <div className="relative bg-zinc-100 min-h-screen overflow-auto">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-10 text-neutral-900 dark:text-neutral-100">
        <h1 className="text-3xl font-bold mb-2">Welcome Back, John Doe</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>
        <SearchBar />
        <CategoryFilter />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 shadow-lg rounded-lg">
          {relics.map((relic, idx) => (
            <RelicCard key={idx} {...relic} />
          ))}
        </div>
      </div>
    </div>
  );
}
