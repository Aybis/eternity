import { NextRequest, NextResponse } from 'next/server';
import { getAIConfig } from '@/lib/ai';

const { baseUrl, headers } = getAIConfig();

/**
 * API to create a new AI scenario.
 *
 * Accepts the following parameters in the request body:
 * - `scenario_title` (string): Title of the scenario.
 * - `ai_role` (string): Role of the AI.
 * - `my_role` (string): Role of the user.
 * - `scenario_description` (string): Description of the scenario.
 * - `organization_id` (string): Organization ID.
 *
 * Returns the response from the external API or an error message.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (process.env.NODE_ENV !== 'production') {
      console.log('Incoming AI scenario request:', body);
    }
    const response = await fetch(
      `${baseUrl}/assessment/live/scenarios/quick-create`,
      {
        method: 'POST',
        headers,
        body: JSON.stringify({
          scenario_title: body.scenario_title,
          ai_role: body.ai_role,
          my_role: body.my_role,
          scenario_description: body.scenario_description,
          organization_id: body.organization_id,
        }),
      },
    );

    console.log(response, '<< aiRes');

    const data = await response.json();
    console.log(data, '<< data');

    if (process.env.NODE_ENV !== 'production') {
      console.log('AI API response:', data);
    }

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('AI scenario creation error:', error);
    }
    return NextResponse.json(
      { error: 'Failed to create scenario', details: error },
      { status: 500 },
    );
  }
}

/**
 * Fetches a list of AI scenarios.
 *
 * @returns {Promise<NextResponse>} JSON response with scenarios or an error message.
 */
export async function GET() {
  try {
    const url = `${baseUrl}/assessment/scenarios`;
    const response = await fetch(url, {
      method: 'GET',
      headers,
    });

    const data = await response.json();

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error fetching AI scenarios:', error);
    }
    return NextResponse.json(
      { error: 'Failed to fetch scenarios', details: error },
      { status: 500 },
    );
  }
}
