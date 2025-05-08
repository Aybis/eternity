import { NextRequest, NextResponse } from 'next/server';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export async function POST(req: NextRequest) {
  try {
    const form = await req.json();

    await addDoc(collection(db, 'submissions'), {
      ...form,
      submittedAt: serverTimestamp(),
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error('Firestore error:', error);
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { success: false, message: errorMessage },
      { status: 500 },
    );
  }
}
