'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import ModalDetailRelic from './ModalDetailRelic';

interface DetailDescription {
  Categories: string;
  SubCategories: string;
  characterChallengesAndGrowthAreas: string;
  charactersAge: string;
  charactersAgreeableness: string;
  charactersAppearance: string;
  charactersBackground: string;
  charactersConscientiousness: string;
  charactersEnneagramType: string;
  charactersExtraversion: string;
  charactersGender: string;
  charactersLanguage: string;
  charactersMbtiType: string;
  charactersMotiivationsandGoals: string;
  charactersName: string;
  charactersNeuroticism: string;
  charactersOccupation: string;
  charactersOpenness: string;
  charactersRelevanceToScenario: string;
  charactersScenarioSnippet: string;
  charactersSkillsAndAbilities: string;
  scenarioBackground: string;
  scenarioDetails: {
    'Achievement Badges': string[];
    'Assessment Milestones': string;
    'Character Memory': string;
    'Difficulty Level': string;
    Guidelines: string;
    'Interaction Phase': string;
    'Interaction Rules': string;
    'Interactive Elements': string;
    'Key Challenges': string;
    'Learner Profile': string;
    'Learning Objectives': string;
    'Main Quest': string;
    'Other Relevant Information': string;
    Overview: string;
    "Participant's Character Role": string;
    'Persona (NPC Character)': string;
    'Response Guide': string;
    'Side Quest': string;
    'Time Limit': string;
    'Win/Lose Conditions': string;
  };
}

interface Scenario {
  id: string;
  name: string;
  description: string;
  timestamp: string;
  organization_id: string;
  user_id: string;
  soft_delete: boolean;
  visibility: boolean;
}
interface ScenarioListResponse {
  data: Scenario[];
}

export default function Relic() {
  // const [loading, setLoading] = useState(false);
  // const [result, setResult] = useState(null);
  const [scenarioList, setScenarioList] = useState<ScenarioListResponse | null>(
    null,
  );

  const [detailDescription, setdetailDescription] =
    useState<DetailDescription | null>(null);
  const [fetchingScenarios, setFetchingScenarios] = useState(false);

  const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(
    null,
  );

  useEffect(() => {
    const fetchScenarios = async () => {
      setFetchingScenarios(true);
      const res = await fetch('/api/elwyn/scenario?soft_delete=false');
      const data = await res.json();
      setScenarioList(data);
      if (data?.data?.length) {
        setdetailDescription(JSON.parse(data.data[0].description));
      }
      setFetchingScenarios(false);
    };

    fetchScenarios();
  }, []);

  // const handleCreateScenario = async () => {
  //   setLoading(true);

  //   const res = await fetch('/api/elwyn/scenario', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       scenario_title: 'Buyer Persona Discovery Call',
  //       ai_role: 'Prospective Customer',
  //       my_role: 'Sales Development Rep',
  //       scenario_description:
  //         'Conduct a discovery call to understand the buyer persona...',
  //       organization_id: 'your-organization-id',
  //     }),
  //   });

  //   const data = await res.json();
  //   setResult(data);
  //   setLoading(false);
  // };

  const handleSelectedScenario = (item: Scenario) => {
    setSelectedScenario(item);
    setdetailDescription(JSON.parse(item.description));
  };

  return (
    <div className="relative flex gap-2">
      {/* <button
        onClick={handleCreateScenario}
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
      >
        {loading ? 'Creating...' : 'Create Scenario'}
      </button>

      {result && (
        <pre className="mt-4 bg-gray-100 p-4 rounded">
          {JSON.stringify(result, null, 2)}
        </pre>
      )} */}

      {fetchingScenarios ? (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-zinc-800 rounded-lg animate-pulse shadow-lg overflow-hidden"
            >
              <div className="w-full h-48 bg-zinc-700" />
              <div className="p-4 space-y-2">
                <div className="h-4 bg-zinc-600 rounded w-3/4" />
                <div className="h-3 bg-zinc-700 rounded w-1/2" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        scenarioList?.data && (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {scenarioList.data.map((item: Scenario) => (
              <div
                key={item.id}
                onClick={() => handleSelectedScenario(item)}
                className="bg-zinc-900 rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:opacity-60"
              >
                <Image
                  src={`https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                  alt="character"
                  className="w-full h-48 object-cover"
                  width={400}
                  height={300}
                />
                <div className="p-4 bg-zinc-800">
                  <h3 className="text-lg font-semibold text-white">
                    {item.name}
                  </h3>
                  <p className="text-sm text-zinc-400 font-medium mt-1">
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
                </div>
              </div>
            ))}
          </div>
        )
      )}

      {selectedScenario && (
        <ModalDetailRelic
          selectedScenario={selectedScenario}
          setSelectedScenario={setSelectedScenario}
          detailDescription={detailDescription}
        />
      )}
    </div>
  );
}
