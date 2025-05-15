export type AIConfig = {
  headers: Record<string, string>;
  baseUrl: string;
};

export const getAIHeaders = (): Record<string, string> => {
  const token = process.env.NEXT_PUBLIC_AI_KEY;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL_AI;

  if (!token || !baseUrl) {
    console.warn('⚠️ Missing AI config in environment variables');
  }

  return {
    'X-AI_TOKEN': token || '',
    'X-REQUEST_FROM': 'AI_TOKEN',
    'Content-Type': 'application/json',
  };
};

export const getAIBasUrl = (): string => {
  return process.env.NEXT_PUBLIC_BASE_URL_AI || '';
};

export const getAIConfig = (): AIConfig => ({
  headers: getAIHeaders(),
  baseUrl: getAIBasUrl(),
});
