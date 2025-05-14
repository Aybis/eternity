import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, message: 'All fields are required.' },
        { status: 400 },
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10); // bcryptjs with saltRounds = 10

    console.log('Start writing to Firestore...');
    const docRef = await addDoc(collection(db, 'users'), {
      name,
      email,
      password: hashedPassword,
      registeredAt: serverTimestamp(),
      method: 'email-password',
    });
    console.log('Firestore write completed');

    return NextResponse.json({ success: true, id: docRef.id });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    console.error('Register error:', error);
    return NextResponse.json(
      { success: false, message: errorMessage },
      { status: 500 },
    );
  }
}

export const config = {
  runtime: 'nodejs',
  regions: ['all'], // Or replace with your Firestore region like 'asia-southeast1'
};
