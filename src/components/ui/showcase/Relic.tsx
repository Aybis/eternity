'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import ModalDetailRelic from './ModalDetailRelic';
import {
  DetailDescription,
  Scenario,
  ScenarioListResponse,
} from '@/interface/scenario';
import RenderIf from '@/utils/RenderIf';
import Link from 'next/link';

export default function Relic() {
  const [scenarioList, setScenarioList] = useState<ScenarioListResponse | null>(
    null,
  );

  const [detailDescription, setdetailDescription] =
    useState<DetailDescription | null>(null);
  const [fetchingScenarios, setFetchingScenarios] = useState(false);
  const [showModalDescription, setshowModalDescription] = useState(false);
  const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(
    null,
  );
  const [showRoleplayModal, setShowRoleplayModal] = useState(false);
  const [selectedMode, setSelectedMode] = useState<'speech' | 'text' | null>(
    'speech',
  );
  const [timerEnabled, setTimerEnabled] = useState(false);

  useEffect(() => {
    const fetchScenarios = async () => {
      setFetchingScenarios(true);
      const res = await fetch('/api/ai/scenario?soft_delete=false');
      const data = await res.json();
      setScenarioList(data);
      if (data?.data?.length) {
        setdetailDescription(JSON.parse(data.data[0].description));
      }
      setFetchingScenarios(false);
    };

    fetchScenarios();
  }, []);

  const handleSelectedScenario = (item: Scenario) => {
    setSelectedScenario(item);
    setdetailDescription(JSON.parse(item.description));
    setshowModalDescription(true);
  };

  return (
    <div className="relative flex gap-2">
      {fetchingScenarios ? (
        <div className="mt-6 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="bg-zinc-900 rounded-lg shadow-lg overflow-hidden animate-pulse w-full"
            >
              {/* Image Placeholder */}
              <div className="w-full h-48 bg-zinc-700" />

              {/* Text Placeholder */}
              <div className="p-4 bg-zinc-800 space-y-2">
                {/* Title */}
                <div className="h-5 bg-zinc-600 rounded w-3/4" />
                {/* Name + Gender */}
                <div className="h-4 bg-zinc-700 rounded w-1/3" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        scenarioList?.data && (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {scenarioList.data.map((item: Scenario) => (
              <div
                key={item.id}
                onClick={() => handleSelectedScenario(item)}
                className="dark:bg-zinc-800 bg-zinc-200 w-full h-full rounded-xl shadow-lg cursor-pointer transition-all duration-300 hover:opacity-60"
              >
                <Image
                  src={`https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                  alt="character"
                  className="w-full h-64 object-cover rounded-t-xl"
                  width={400}
                  height={300}
                />
                <div className="p-4  ">
                  <>
                    <h3 className="text-base font-semibold dark:text-white text-zinc-800">
                      {item.name}
                    </h3>
                    <p className="text-sm dark:text-zinc-200 text-zinc-700 font-medium">
                      {JSON.parse(item.description)?.charactersName}
                      <span
                        className={[
                          JSON.parse(item.description)?.charactersGender ===
                          'Female'
                            ? 'text-pink-500'
                            : 'text-blue-500',
                          'ml-1 text-lg font-semibold',
                        ].join(' ')}
                      >
                        {JSON.parse(item.description)?.charactersGender ===
                        'Female'
                          ? '♀️'
                          : '♂️'}
                      </span>
                    </p>
                  </>

                  {/* Category */}
                  {
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.category
                        .flatMap((category: string) =>
                          category.split(',').map((cat) => cat.trim()),
                        )
                        .map((category: string, index: number) => {
                          return (
                            <span
                              key={index}
                              className="bg-purple-500 text-white text-xs font-medium px-2 py-1 rounded-full"
                            >
                              {category}
                            </span>
                          );
                        })}
                    </div>
                  }
                </div>
              </div>
            ))}
          </div>
        )
      )}

      <RenderIf condition={showModalDescription}>
        <ModalDetailRelic
          selectedScenario={selectedScenario}
          setshowModalDescription={setshowModalDescription}
          detailDescription={detailDescription}
          setShowRoleplayModal={setShowRoleplayModal}
        />
      </RenderIf>

      <RenderIf condition={showRoleplayModal}>
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-zinc-900 rounded-xl p-8 w-[640px] max-w-full text-white shadow-xl">
            <h2 className="text-2xl font-semibold mb-2">Roleplay Mode</h2>
            <p className="text-zinc-400 mb-6">
              Choose between{' '}
              <span className="text-purple-400">Speech-to-Speech Mode</span> or{' '}
              <span className="text-purple-400">Text Mode</span> for your
              role-playing sessions!
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div
                className={`relative rounded-lg p-6 cursor-pointer transition-all ${
                  selectedMode === 'speech'
                    ? 'border-2 border-purple-500 bg-zinc-800'
                    : 'border border-zinc-700 bg-zinc-800'
                }`}
                onClick={() => setSelectedMode('speech')}
              >
                <span className="absolute -top-3 right-3 bg-purple-600 text-xs text-white px-2 py-0.5 rounded-full">
                  Popular🔥
                </span>
                <h3 className="text-lg font-bold mb-2">Speech to speech</h3>
                <p className="text-sm text-zinc-300">
                  Speech to Speech Mode feature allows users to communicate with
                  video calls.
                </p>
              </div>

              <div
                className={`rounded-lg p-6 cursor-pointer transition-all ${
                  selectedMode === 'text'
                    ? 'border-2 border-purple-500 bg-zinc-800'
                    : 'border border-zinc-700 bg-zinc-800'
                }`}
                onClick={() => setSelectedMode('text')}
              >
                <h3 className="text-lg font-bold mb-2">Text Mode</h3>
                <p className="text-sm text-zinc-300">
                  Text Mode allows users to communicate through written
                  messages.
                </p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-md font-medium mb-1">Set Timer</h4>
              <p className="text-sm text-zinc-400 mb-2">
                Don’t set a time if you want to talk without limits
              </p>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={timerEnabled}
                  onChange={() => setTimerEnabled(!timerEnabled)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:bg-purple-600 transition-all duration-200"></div>
                <span className="ml-3 text-sm font-medium">Set Timer</span>
              </label>
            </div>

            <Link
              href={`/showcase/roleplay/${selectedScenario?.id}`}
              className={`bg-purple-600 hover:bg-purple-700 text-sm right-0 text-white font-semibold py-2 px-4 rounded transition-all ${
                selectedMode ? '' : 'opacity-50 cursor-not-allowed'
              }`}
            >
              Start Conversation
            </Link>
          </div>
        </div>
      </RenderIf>
    </div>
  );
}
