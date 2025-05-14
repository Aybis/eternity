import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const session = req.cookies.get('session')?.value;
  const { pathname } = req.nextUrl;

  // Redirect authenticated users away from /auth/login
  if (pathname.startsWith('/auth/login') && session) {
    return NextResponse.redirect(new URL('/showcase', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/auth/login', '/showcase'], // add more as needed
};
