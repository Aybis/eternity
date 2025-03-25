import {
  ArrowTopRightIcon,
  CardStackIcon,
  ChevronDownIcon,
  HomeIcon,
  LinkBreak2Icon,
  MagicWandIcon,
  MixIcon,
  PersonIcon,
  ReaderIcon,
} from '@radix-ui/react-icons';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative bg-zinc-100 box-content flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="absolute ml-4 w-12 z-20 bg-white/20 backdrop-blur-sm inset-y-0 my-6 rounded-lg p-4 text-zinc-800 shadow-lg shadow-zinc-200 hover:w-48 box-content transition-all duration-500">
        <div className="flex flex-col">
          <div className="p-1.5 flex items-center gap-3 overflow-hidden w-full hover:bg-zinc-200/70 transition-all duration-500 rounded-lg">
            <div className="rounded-lg bg-zinc-300 flex-none flex justify-center items-center w-10 h-10 ">
              <h1 className="font-semibold text-3xl">M</h1>
            </div>
            <div className="flex-col gap-y-0.5 flex-1">
              <p className="font-semibold text-zinc-800 text-nowrap">Muchtar</p>
              <p className="font-light text-zinc-700 text-nowrap">Free plan</p>
            </div>
            <ChevronDownIcon className="w-6 h-6" />
          </div>

          {/* Menu  */}
          <nav className="mt-6 overflow-hidden flex flex-col gap-y-4">
            <ul className="overflow-hidden flex flex-col gap-y-4">
              <li className="flex-1 w-full  flex items-center gap-4.5 p-2 rounded-lg hover:bg-zinc-200/60 bg-zinc-50">
                <span>
                  <HomeIcon className="w-8 h-8" />
                </span>
                <p className="font-semibold text-zinc-800">Home</p>
              </li>
            </ul>
            <hr className="mx-1.5 border-zinc-300 " />
            <ul className="overflow-hidden flex flex-col gap-y-4">
              <li className="flex-1 w-full  flex items-center gap-4.5 p-2 rounded-lg hover:bg-zinc-200/60 ">
                <span>
                  <PersonIcon className="w-8 h-8 text-zinc-500" />
                </span>
                <p className="font-semibold text-zinc-800">Agents</p>
              </li>
              <li className="flex-1 w-full  flex items-center gap-4.5 p-2 rounded-lg hover:bg-zinc-200/60 ">
                <span>
                  <CardStackIcon className="w-8 h-8 text-zinc-500" />
                </span>
                <p className="font-semibold text-zinc-800">Agent Marketplace</p>
              </li>
            </ul>
            <hr className="mx-1.5 border-zinc-300 " />
            <ul className="overflow-hidden flex flex-col gap-y-4">
              <li className="flex-1 w-full  flex items-center gap-4.5 p-2 rounded-lg hover:bg-zinc-200/60">
                <span>
                  <ReaderIcon className="w-8 h-8 text-zinc-500" />
                </span>
                <p className="font-semibold text-zinc-800">Knowledge Base</p>
              </li>
              <li className="flex-1 w-full  flex items-center gap-4.5 p-2 rounded-lg hover:bg-zinc-200/60">
                <span>
                  <MixIcon className="w-8 h-8 text-zinc-500" />
                </span>
                <p className="font-semibold text-zinc-800">Models</p>
              </li>
              <li className="flex-1 w-full  flex items-center gap-4.5 p-2 rounded-lg hover:bg-zinc-200/60">
                <span>
                  <LinkBreak2Icon className="w-8 h-8 text-zinc-500" />
                </span>
                <p className="font-semibold text-zinc-800">Data Connectors</p>
              </li>
            </ul>
            <hr className="mx-1.5 border-zinc-300 " />
            <ul className="overflow-hidden flex flex-col gap-y-4">
              <li className="flex-1 w-full  flex items-center gap-4.5 p-2 rounded-lg hover:bg-zinc-200/60">
                <span>
                  <MagicWandIcon className="w-8 h-8" />
                </span>
                <p className="font-semibold text-zinc-800">AI Virtual</p>
                <span className=" bg-zinc-700 text-zinc-100 rounded-full px-2 py-0.5">
                  Beta
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Chat Screen */}
      <main className="relative w-full h-screen bg-zinc-50 text-zinc-800 py-6 pl-28 pr-6">
        <div>
          <h1 className="text-3xl text-zinc-800 font-semibold flex gap-x-2">
            <p className="text-zinc-500 font-medium ">Welcome,</p>
            Muchtar
          </h1>
        </div>

        <div className="grid grid-cols-6 gap-4 mt-12">
          <div className="col-span-3 flex gap-4 items-center shadow-lg shadow-zinc-200 p-4 rounded-lg bg-white ">
            <div>
              <Image
                alt="Image"
                src={'https://studio.lyzr.ai/agent-creation.svg'}
                width={200}
                height={200}
              />
            </div>
            <div className="w-2/3 flex flex-col gap-y-3 justify-center items-start h-full ">
              <h1 className="text-lg text-zinc-800 font-semibold">
                Create your Own Eternity Chain
              </h1>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Aliqua velit sint cupidatat aute consectetur quis fugiat quis
                adipisicing do adipisicing. Adipisicing ut voluptate officia
                culpa esse aliquip proident. Consequat quis nostrud id aliqua
                amet elit deserunt nostrud consequat.
              </p>

              <button className="bg-zinc-800 text-white text-sm font-semibold leading-relaxed px-4 py-2 rounded-lg">
                Build Eternity
              </button>
            </div>
          </div>
          <div className="col-span-2 border border-zinc-200 p-4 rounded-lg bg-white ">
            Sample Video
          </div>
          <div className="col-span-1 border flex flex-col justify-between border-zinc-200 p-4 rounded-lg bg-white ">
            <h1 className="text-lg font-semibold text-zinc-800">Resources</h1>

            <ul>
              <li className="flex justify-between items-center">
                <p>API Documentation</p>
                <ArrowTopRightIcon className="w-4 h-4" />
              </li>
              <li className="flex justify-between items-center">
                <p>Join our Community</p>
                <ArrowTopRightIcon className="w-4 h-4" />
              </li>
              <li className="flex justify-between items-center">
                <p>Join us on Github</p>
                <ArrowTopRightIcon className="w-4 h-4" />
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <ul className="flex gap-x-2 bg-zinc-200 w-fit px-1.5 py-1.5 rounded-lg">
            <li className="text-sm font-semibold text-zinc-700 bg-white px-2 py-1 rounded-sm">
              Trends Eternity
            </li>
            <li className="text-sm font-light text-zinc-500 px-2 py-1 rounded-sm">
              Featured Agents
            </li>
          </ul>

          <div className="mt-8 flex overflow-x-scroll gap-4">
            {/* Card */}
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="flex-1 p-4 bg-white rounded-lg shadow-none shadow-zinc-200 box-content w-2/3  hover:shadow-lg hover:shadow-zinc-300/30 transition-all duration-300"
              >
                <h1 className="text-lg font-semibold text-zinc-800">
                  Heading Card
                </h1>
                <p className="text-sm text-zinc-700 mt-1">
                  Esse sit irure commodo nulla nostrud adipisicing sit culpa
                  voluptate voluptate quis incididunt.
                </p>

                <div className="flex justify-between items-center mt-8">
                  <div className="flex gap-1 items-center">
                    <div className="rounded-full h-5 w-5 bg-zinc-400" />
                    <p className="text-xs text-zinc-400">Name</p>
                  </div>

                  <div className="flex gap-0.5 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-thumbs-up mr-2 size-4"
                    >
                      <path d="M7 10v12"></path>
                      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path>
                    </svg>
                    <p>24</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-8">
                  <span className="bg-zinc-200 text-zinc-700 px-2 py-1 rounded-full text-xs">
                    #hashtag1
                  </span>
                  <span className="bg-zinc-200 text-zinc-700 px-2 py-1 rounded-full text-xs">
                    #hashtag2
                  </span>
                  <span className="bg-zinc-200 text-zinc-700 px-2 py-1 rounded-full text-xs">
                    #hashtag3
                  </span>
                  <span className="bg-zinc-200 text-zinc-700 px-2 py-1 rounded-full text-xs">
                    #hashtag4
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
