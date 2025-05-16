'use client';

import { getAIConfig } from '@/lib/ai';
import Image from 'next/image';
import React, { useRef, useState, useEffect } from 'react';

export default function ScenarioInteractionPage() {
  const [recording, setRecording] = useState(false);
  const [transcription, setTranscription] = useState('');
  const [aiSpeech, setAiSpeech] = useState('');
  const [interimTranscript, setInterimTranscript] = useState('');
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const recordedChunksRef = useRef<Blob[]>([]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    if (!aiSpeech) return;

    const utterance = new SpeechSynthesisUtterance(aiSpeech);
    utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
  }, [aiSpeech]);

  const handleToggleRecording = async () => {
    if (!recording) {
      setTranscription('');
      setInterimTranscript('');
      recordedChunksRef.current = [];

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      recordedChunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          recordedChunksRef.current.push(e.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const blob = new Blob(recordedChunksRef.current, {
          type: 'audio/webm',
        });
        const formData = new FormData();
        formData.append('file', blob, 'recording.webm');

        const { headers } = getAIConfig();

        const sttRes = await fetch(
          `https://elwyn.ai/api/stt?model=whisper-large-v3&language=en&prompt=`,
          {
            method: 'POST',
            headers,
            body: formData,
          },
        );

        console.log('STT response:', sttRes);

        const sttData = await sttRes.json();
        console.log('Transcription response:', sttData);

        if (sttData && sttData.text) {
          setTranscription(sttData.text);
          setInterimTranscript('');

          // Now send the transcribed text to AI backend
          const aiRes = await fetch('/api/generate-reply', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: sttData.text }),
          });

          const aiData = await aiRes.json();
          setAiSpeech(aiData.text || '[No AI reply]');
        } else {
          setTranscription('[Speech detected but no transcript returned]');
        }
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const recognition = new (window as any).webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      recognition.onresult = (event: any) => {
        let final = '';
        let interim = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          const result = event.results[i];
          if (result.isFinal) {
            final += result[0].transcript + ' ';
          } else {
            interim += result[0].transcript;
          }
        }

        setInterimTranscript(interim);
        setTranscription((prev) => prev + final);
      };

      recognition.start();
      recognitionRef.current = recognition;
      mediaRecorderRef.current = mediaRecorder;
      mediaRecorder.start();
      setRecording(true);
    } else {
      recognitionRef.current?.stop();
      mediaRecorderRef.current?.stop();
      setRecording(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-4 flex items-center justify-center">
      <div className="max-w-4xl w-full flex flex-col items-center justify-center gap-6 bg-zinc-800 p-6 rounded-lg shadow-lg">
        <div className="relative">
          <Image
            src={`https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
            alt="Avatar"
            className="w-32 h-32 rounded-full border-4 border-white"
            width={128}
            height={128}
          />
        </div>
        <div className="flex w-full gap-4">
          <div className="flex-1 bg-zinc-700 p-4 rounded-lg">
            <p className="font-semibold">Kenji Tanaka</p>
            <p className="text-sm mt-1">{aiSpeech}</p>
          </div>
          <div className="flex-1 bg-zinc-700 p-4 rounded-lg">
            <p className="font-semibold">You</p>
            <p className="text-sm mt-1">
              {recording
                ? interimTranscript || 'Listening...'
                : transcription || 'Say something...'}
            </p>
          </div>
        </div>
        <div className="text-center text-sm text-zinc-400">Kenji Tanaka</div>
        <div className="flex items-center gap-6 mt-4">
          <button className="text-2xl" title="Instructions">
            ❓
          </button>
          <button className="text-2xl" title="Keyboard">
            ⌨️
          </button>
          <button
            onClick={handleToggleRecording}
            className={`w-12 h-12 rounded-full ${
              recording ? 'bg-red-600' : 'bg-green-600'
            } flex items-center justify-center text-white text-xl`}
            title="Toggle Mic"
          >
            {recording ? '⏹️' : '🎤'}
          </button>
          <button className="ml-auto px-6 py-2 bg-red-600 rounded-full text-white">
            End Conversation
          </button>
        </div>
      </div>
    </div>
  );
}
