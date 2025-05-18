import { getAIConfig } from '@/lib/ai';
import { NextResponse } from 'next/server';

const { baseUrl, headers } = getAIConfig();

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  const scenarioId = params.id;

  if (!scenarioId) {
    return NextResponse.json(
      { error: 'Missing scenario ID in route params' },
      { status: 400 },
    );
  }

  try {
    const response = await fetch(
      `${baseUrl}/assessment/scenarios/${scenarioId}`,
      {
        method: 'GET',
        headers,
      },
    );

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('Error fetching scenario by ID:', error);
    return NextResponse.json(
      { error: 'Failed to fetch scenario by ID', details: error },
      { status: 500 },
    );
  }
}
