import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (process.env.NODE_ENV !== 'production') {
      console.log('Incoming Elwyn scenario request:', body);
    }

    const elwynRes = await fetch(
      'https://api.elwyn.ai/gateway/ai/assessment/live/scenarios/quick-create',
      {
        method: 'POST',
        headers: {
          'X-AI_TOKEN': process.env.ELWYN_API_KEY || '',
          'X-REQUEST_FROM': 'AI_TOKEN',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          scenario_title: body.scenario_title,
          ai_role: body.ai_role,
          my_role: body.my_role,
          scenario_description: body.scenario_description,
          organization_id: body.organization_id,
        }),
      },
    );

    console.log(elwynRes, '<< elwynRes');

    const data = await elwynRes.json();
    console.log(data, '<< data');

    if (process.env.NODE_ENV !== 'production') {
      console.log('Elwyn API response:', data);
    }

    return NextResponse.json(data, { status: elwynRes.status });
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Elwyn scenario creation error:', error);
    }
    return NextResponse.json(
      { error: 'Failed to create scenario', details: error },
      { status: 500 },
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    console.log(req, '<< req');
    // const { searchParams } = new URL(req.url);
    // const softDelete = searchParams.get('soft_delete') ?? 'false';

    const url = `https://api.elwyn.ai/gateway/ai/assessment/scenarios`;

    const elwynRes = await fetch(url, {
      method: 'GET',
      headers: {
        'X-AI_TOKEN': process.env.ELWYN_API_KEY || '',
        'X-REQUEST_FROM': 'AI_TOKEN',
      },
    });

    const data = await elwynRes.json();

    if (process.env.NODE_ENV !== 'production') {
      console.log('Elwyn scenario list response:', data);
    }

    return NextResponse.json(data, { status: elwynRes.status });
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error fetching Elwyn scenarios:', error);
    }
    return NextResponse.json(
      { error: 'Failed to fetch scenarios', details: error },
      { status: 500 },
    );
  }
}
