'use client';

import React from 'react';
import { useEffect, useState, useRef } from 'react';

export default function ScenarioIntroPage() {
  const [volume, setVolume] = useState(0);
  const [transcript, setTranscript] = useState('');
  const [listening, setListening] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const recognitionRef = useRef<any>(null);
  const lastTranscriptUpdate = useRef(0);

  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const audioContext = new AudioContext();
        const analyser = audioContext.createAnalyser();
        const source = audioContext.createMediaStreamSource(stream);

        analyser.fftSize = 128;
        const dataArray = new Uint8Array(analyser.frequencyBinCount);

        audioContextRef.current = audioContext;
        analyserRef.current = analyser;
        dataArrayRef.current = dataArray;

        source.connect(analyser);

        const updateVolume = () => {
          if (!analyserRef.current || !dataArrayRef.current) return;
          analyserRef.current.getByteFrequencyData(dataArrayRef.current);
          const avg =
            dataArrayRef.current.reduce((sum, val) => sum + val, 0) /
            dataArrayRef.current.length;
          setVolume(avg);
          animationFrameRef.current = requestAnimationFrame(updateVolume);
        };

        updateVolume();
      })
      .catch((err) => console.error('Microphone error:', err));

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 min-h-screen bg-zinc-900/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6 space-y-6">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
            Meet Your Character
          </h2>
          <p className="text-lg font-medium text-zinc-800 dark:text-white">
            Andi Saputra
          </p>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">Employee</p>
        </div>

        <div className="bg-zinc-100 dark:bg-zinc-700 p-4 rounded space-y-2">
          <p className="font-semibold text-sm text-zinc-800 dark:text-white">
            Quick Profile
          </p>
          <p className="text-sm text-zinc-700 dark:text-zinc-200">
            <strong>Age:</strong> 33
          </p>
          <p className="text-sm text-zinc-700 dark:text-zinc-200">
            <strong>Background:</strong> Andi is a regular customer of Bank
            Sentra. He is generally cooperative and follows instructions. He
            works as an employee in a private company and lives in Jakarta.
          </p>
        </div>

        <div className="bg-zinc-100 dark:bg-zinc-700 p-4 rounded space-y-2">
          <p className="font-semibold text-sm text-zinc-800 dark:text-white">
            Current Scenario
          </p>
          <p className="text-sm text-zinc-700 dark:text-zinc-200">
            Andi calls Bank Sentra to report his lost ATM card, seeking
            assistance from the customer service representative.
          </p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <button
            onClick={() => {
              if (!listening) {
                const recognition =
                  new // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  (window as any).webkitSpeechRecognition();
                recognition.continuous = true;
                recognition.lang = 'id-ID';
                recognition.interimResults = true;

                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                recognition.onresult = (event: any) => {
                  let interim = '';
                  let final = '';

                  for (
                    let i = event.resultIndex;
                    i < event.results.length;
                    ++i
                  ) {
                    const result = event.results[i];
                    if (result.isFinal) {
                      final += result[0].transcript + ' ';
                    } else {
                      interim += result[0].transcript;
                    }
                  }

                  const now = Date.now();
                  if (now - lastTranscriptUpdate.current > 100) {
                    setTranscript(final + interim);
                    lastTranscriptUpdate.current = now;
                  }
                };

                recognitionRef.current = recognition;
                recognition.start();
                setListening(true);
              } else {
                recognitionRef.current?.stop();
                setListening(false);
              }
            }}
            className={`inline-flex items-center justify-center w-10 h-10 text-white rounded-full ${
              listening
                ? 'bg-red-600 hover:bg-red-700'
                : 'bg-green-600 hover:bg-green-700'
            }`}
            aria-label="Toggle Microphone"
          >
            {listening ? '⏹️' : '▶️'}
          </button>
          <p className="text-green-600 text-sm">🎤 Microphone connected</p>
          <p className="text-xs text-zinc-500 italic">
            Test your microphone here by pressing the mic button
          </p>
          <div className="w-full h-3 bg-zinc-300 dark:bg-zinc-600 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500 transition-[width] duration-500 ease-in-out rounded-full"
              style={{ width: `${Math.min(volume, 100)}%` }}
            />
          </div>
          {volume < 5 && listening && (
            <p className="text-xs text-zinc-500">
              No sound detected. Try speaking louder.
            </p>
          )}
          <div className="bg-zinc-200 dark:bg-zinc-600 p-3 rounded w-full text-left">
            <p className="text-sm font-semibold text-zinc-800 dark:text-white">
              Transcription:
            </p>
            <p className="text-sm text-zinc-900 dark:text-white italic">
              {transcript || '...'}
            </p>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded">
            Start Roleplay
          </button>
          <p className="mt-2 text-xs text-zinc-500">
            Your microphone is ready for the roleplay session
          </p>
        </div>
      </div>
    </div>
  );
}
