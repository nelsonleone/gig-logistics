import { NextRequest, NextResponse } from 'next/server';
import { firebaseAdmin } from '@/lib/firebase/firebase-admin-config';
import { cookies } from 'next/headers';

export async function GET(request: NextRequest, response: NextResponse) {
  try {

    const authSessionToken = cookies().get('authSessionToken')?.value;

    if(!authSessionToken){
      throw new Error("Unauthourized Action: Unauthenticated user")
    }

    const decodedClaims = await firebaseAdmin.auth().verifySessionCookie(authSessionToken, true)

    const userDocRef = firebaseAdmin.firestore().collection('ShoppingData').doc(decodedClaims.uid)
    const userDoc = await userDocRef.get()

    if (!userDoc.exists) {
      return NextResponse.json([])
    }

    const userData = userDoc.data()
    const shoppingInfo = await userData?.shoppingInfo;

    return NextResponse.json(shoppingInfo)

  } catch (error:any|unknown) {
    return NextResponse.json({ error: error.message || 'Error retrieving shopping info' }, { status: 500 })
  }
}
