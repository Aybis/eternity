import { getAIConfig } from '@/lib/ai';

export async function POST(req: Request) {
  const body = await req.json();

  const { headers } = getAIConfig();
  const upstreamRes = await fetch(`${process.env.NEXT_PUBLIC_URL_AI}/chat-v2`, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  });

  if (!upstreamRes.body) {
    return new Response('No body from AI', { status: 500 });
  }

  return new Response(upstreamRes.body, {
    status: 200,
    headers: {
      'Content-Type': 'text/event-stream', // or text/plain if AI doesn’t use SSE
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    },
  });
}
