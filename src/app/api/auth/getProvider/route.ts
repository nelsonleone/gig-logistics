import { firebaseAdmin } from '@/lib/firebase/firebase-admin-config';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, response: NextResponse) {
  try {

    const session = cookies().get("authSessionToken")?.value || "";

    if (!session) {
      throw new Error('Unauthorized action: Unauthenticated user')
    }

    const { uid } = await firebaseAdmin.auth().verifySessionCookie(session, true)

    const user = await firebaseAdmin.auth().getUser(uid)

    const providers = user.providerData.map(provider => provider.providerId)

    const providerName = providers.length > 0 ? providers[0] : 'No providers found';

    return NextResponse.json({ provider: providerName })

  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error: 'An error occurred while processing the request' }, { status: 500 })
  }
}
