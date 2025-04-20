import Image from 'next/image';
import React from 'react';

export default function Testimoni() {
  return (
    <section className="py-24 bg-white dark:bg-zinc-950 text-zinc-800 dark:text-zinc-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-semibold mb-4">What Our Users Say</h2>
        <p className="text-xl text-zinc-500 mb-16">
          Real experiences from people preserving their legacy with Eternity
          Chain
        </p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2">
          {/* Testimonial 1 */}
          <div className="p-6 border border-b-0 border-zinc-200  dark:border-zinc-800">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-4">
                <Image
                  src="/assets/avatar/avatar1.png"
                  alt="Marcus"
                  width={50}
                  height={50}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Marcus Ibrahim</h4>
                  <p className="text-sm text-zinc-500">Historian & Author</p>
                </div>
              </div>
              <div className="text-purple-500 text-xl">★★★★★</div>
            </div>
            <p className="text-left text-zinc-600 dark:text-zinc-400">
              As someone whos spent a lifetime collecting stories, Eternity
              Chain gives me peace of mind knowing my research and personal
              insights will live on.
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="p-6 border border-l-white border-b-0 border-zinc-200  dark:border-zinc-800">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-4">
                <Image
                  src="/assets/avatar/avatar3.png"
                  alt="Jackson"
                  width={50}
                  height={50}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Jackson Blum</h4>
                  <p className="text-sm text-zinc-500">Historian & Author</p>
                </div>
              </div>
              <div className="text-purple-500 text-xl">★★★★★</div>
            </div>
            <p className="text-left text-zinc-600 dark:text-zinc-400">
              After losing family members, I wanted to preserve our stories. My
              grandchildren can now interact with our ancestors wisdom.
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="p-6 border  border-zinc-200  dark:border-zinc-800">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-4">
                <Image
                  src="/assets/avatar/avatar2.png"
                  alt="Jack"
                  width={50}
                  height={50}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Jack Lockley</h4>
                  <p className="text-sm text-zinc-500">Tech Entrepreneur</p>
                </div>
              </div>
              <div className="text-purple-500 text-xl">★★★★★</div>
            </div>
            <p className="text-left text-zinc-600 dark:text-zinc-400">
              My Elwyn AI is already generating revenue by sharing my business
              insights. Its amazing to see my digital twin helping others.
            </p>
          </div>

          {/* Testimonial 4 */}
          <div className="p-6 border border-l-0 border-zinc-200  dark:border-zinc-800">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-4">
                <Image
                  src="/assets/avatar/avatar4.png"
                  alt="Joceline"
                  width={50}
                  height={50}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Joceline Ann</h4>
                  <p className="text-sm text-zinc-500">Teacher</p>
                </div>
              </div>
              <div className="text-purple-500 text-xl">★★★★★</div>
            </div>
            <p className="text-left text-zinc-600 dark:text-zinc-400">
              After losing loved ones, I felt the need to preserve our family’s
              stories. Now, my grandchildren can connect with the wisdom of
              those who came before them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
