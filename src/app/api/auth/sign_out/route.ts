import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export function POST(request: NextRequest, response: NextResponse) {
  try {
    const options = {
      name: 'authSessionToken',
      value: '',
      maxAge: 0,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'development' ? false : true,
      sameSite: process.env.NODE_ENV === 'development' ? 'lax' as 'lax' : 'none' as 'none',
    }

    cookies().set(options)

    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_APP_URL}/` || new URL("/", request.url), { status: 302 })
  } catch (error: any) {
    console.error('Error signing out user:', error.message)
    return NextResponse.json({ error: 'Sign out failed' }, { status: 500 })
  }
}
