'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [showLoadingModal, setShowLoadingModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [scenarioTitle, setScenarioTitle] = useState('');
  const [myRole, setMyRole] = useState('');
  const [aiRole, setAiRole] = useState('');
  const [scenarioDescription, setScenarioDescription] = useState('');

  const router = useRouter();

  const handleCreateScenario = async () => {
    setLoading(true);
    setShowLoadingModal(true);

    try {
      const res = await fetch('/api/ai/scenario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          scenario_title: scenarioTitle,
          ai_role: aiRole,
          my_role: myRole,
          scenario_description: scenarioDescription,
          organization_id: 'engramind',
        }),
      });

      const data = await res.json();
      setShowLoadingModal(false);
      setShowSuccessModal(true);
      setTimeout(() => {
        router.push('/showcase');
      }, 500);
      return data;
    } catch (err) {
      console.error(err, '<<< error');
      alert('Failed to create persona. Please try again.');
      setShowLoadingModal(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6 text-white">
      {/* Form Section  */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          ⚡ Quick Create Scenario
        </h2>

        <div>
          <label className="block mb-1 text-sm">
            Scenario Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={scenarioTitle}
            onChange={(e) => setScenarioTitle(e.target.value)}
            placeholder="Enter scenario title"
            className={`w-full border border-zinc-700 rounded p-2 text-sm ${
              loading ? 'bg-zinc-700 cursor-not-allowed' : 'bg-zinc-800'
            }`}
            disabled={loading}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-sm">
              My Role <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={myRole}
              onChange={(e) => setMyRole(e.target.value)}
              placeholder="Enter your role (e.g., 'Sales')"
              className={`w-full border border-zinc-700 rounded p-2 text-sm ${
                loading ? 'bg-zinc-700 cursor-not-allowed' : 'bg-zinc-800'
              }`}
              disabled={loading}
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">
              AI Role <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={aiRole}
              onChange={(e) => setAiRole(e.target.value)}
              placeholder="Enter AI's role (e.g., 'Customer')"
              className={`w-full border border-zinc-700 rounded p-2 text-sm ${
                loading ? 'bg-zinc-700 cursor-not-allowed' : 'bg-zinc-800'
              }`}
              disabled={loading}
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 text-sm">
            Scenario Description <span className="text-red-500">*</span>
          </label>
          <textarea
            value={scenarioDescription}
            onChange={(e) => setScenarioDescription(e.target.value)}
            placeholder="Make a scenario based on the uploaded document on page 3"
            className={`w-full border border-zinc-700 rounded p-2 text-sm ${
              loading ? 'bg-zinc-700 cursor-not-allowed' : 'bg-zinc-800'
            }`}
            rows={4}
            disabled={loading}
          />
        </div>

        <div className="pt-4">
          <button
            onClick={handleCreateScenario}
            disabled={
              !scenarioTitle ||
              !myRole ||
              !aiRole ||
              !scenarioDescription ||
              loading
            }
            className={`bg-purple-600 text-white px-4 py-2 rounded ${
              !scenarioTitle ||
              !myRole ||
              !aiRole ||
              !scenarioDescription ||
              loading
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-purple-700'
            }`}
          >
            {loading ? 'Creating...' : 'Create Scenario'}
          </button>
        </div>
      </div>
      {/* End Form Section */}

      {/* Modal Loading Section */}
      {showLoadingModal && (
        <div className="fixed inset-0 z-50 bg-zinc-900/50  backdrop-blur-sm flex items-center justify-center">
          <div className="fixed left-[50%] top-[50%] z-50 grid translate-x-[-50%] translate-y-[-50%] gap-4 bg-background p-6 shadow-lg sm:rounded-lg md:w-full w-full max-w-3xl overflow-y-auto max-h-[95vh]">
            <div className="flex flex-col mx-auto justify-center items-center gap-4">
              <Image
                className="w-full h-64"
                width={1241}
                height={619}
                src={'/assets/prepare.gif'}
                alt="Preparing your scenario"
              />
              <div className="font-bold text-md">
                This process will take about 1 to 2 minutes
              </div>
              <div className="font-light text-sm">
                {
                  "If you don't want to wait, you can close this, and we will notify you when it’s done"
                }
              </div>
              <button
                type="button"
                className="bg-zinc-700 cursor-pointer hover:bg-zinc-600 text-white px-4 py-2 rounded-full"
                onClick={() => setShowLoadingModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {/* End Modal Section */}

      {/* Modal Success */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 bg-zinc-900/50  backdrop-blur-sm flex items-center justify-center">
          <div className="fixed left-[50%] top-[50%] z-50 grid translate-x-[-50%] translate-y-[-50%] gap-4 bg-background p-6 shadow-lg sm:rounded-lg md:w-full w-full max-w-3xl overflow-y-auto max-h-[95vh]">
            <div className="flex flex-col mx-auto justify-center items-center gap-4">
              <Image
                className="w-full h-64"
                width={1241}
                height={619}
                src={'/assets/check.svg'}
                alt="Scenario created successfully!"
              />
              <div className="font-bold text-md">
                Scenario created successfully!
              </div>
              <div className="font-light text-sm">
                Your scenario has been created. You can view it in the showcase.
              </div>
              <button
                type="button"
                className="bg-purple-600 cursor-pointer hover:bg-purple-700 text-white px-4 py-2 rounded-full"
                onClick={() => setShowSuccessModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {/* End Modal Success  */}
    </div>
  );
}
