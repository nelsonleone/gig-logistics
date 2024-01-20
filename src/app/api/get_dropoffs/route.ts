import { NextRequest, NextResponse } from 'next/server';
import { firebaseAdmin } from '@/lib/firebase/firebase-admin-config';
import { cookies } from 'next/headers';

export async function GET(request: NextRequest, response: NextResponse) {
  try {
    const authSessionToken = cookies().get("authSessionToken")?.value;

    if (!authSessionToken) {
      throw new Error('Unauthorized action: Unauthenticated user')
    }

    const decodedClaims = await firebaseAdmin.auth().verifySessionCookie(authSessionToken, true)

    const userDocRef = firebaseAdmin.firestore().collection('XpressDropOffs').doc(decodedClaims.uid)
    const userDoc = await userDocRef.get()

    if (!userDoc.exists) {
      return NextResponse.json({ dropOffs: [] })
    }

    const userData = userDoc.data()
    const dropOffs = userData?.dropOffs || []

    return NextResponse.json({ dropOffs })
  } catch (error:any|unknown) {
    return NextResponse.json({ error: error.message || 'Error retrieving dropOffs' }, { status: 500 })
  }
}
