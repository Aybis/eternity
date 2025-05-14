import { NextRequest, NextResponse } from 'next/server';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Email and password are required.' },
        { status: 400 },
      );
    }

    const q = query(collection(db, 'users'), where('email', '==', email));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return NextResponse.json(
        { success: false, message: 'Invalid credentials.' },
        { status: 401 },
      );
    }

    const userDoc = querySnapshot.docs[0];
    const userData = userDoc.data();
    const passwordMatch = await bcrypt.compare(password, userData.password);

    if (!passwordMatch) {
      return NextResponse.json(
        { success: false, message: 'Invalid credentials.' },
        { status: 401 },
      );
    }

    const accessToken = jwt.sign(
      { name: userData.name, email: userData.email },
      process.env.JWT_SECRET!,
      { expiresIn: '1d' },
    );

    const refreshToken = crypto.randomUUID();

    const response = NextResponse.json({
      success: true,
      message: 'Login successful',
      userId: userDoc.id,
      name: userData.name,
      accessToken,
    });

    response.cookies.set('session', 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60 * 24, // 1 day
    });

    response.cookies.set('access_token', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60 * 24, // 1 day
    });

    response.cookies.set('refresh_token', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    console.error('Login error:', error);
    return NextResponse.json(
      { success: false, message: errorMessage },
      { status: 500 },
    );
  }
}
