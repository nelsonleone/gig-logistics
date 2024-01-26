import { NextRequest, NextResponse } from 'next/server';
import { firebaseAdmin } from '@/lib/firebase/firebase-admin-config';
import { cookies } from 'next/headers';
import { SavedDropOffs } from '../../../../types';

export async function GET(request: NextRequest, response: NextResponse) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    const authSessionToken = cookies().get('authSessionToken')?.value;

    if(!id){        
      throw new Error("ID query is invalid")
    }

    if(!authSessionToken){
      throw new Error("Unauthourized Action: Unauthenticated user")
    }

    const decodedClaims = await firebaseAdmin.auth().verifySessionCookie(authSessionToken, true)

    const userDocRef = firebaseAdmin.firestore().collection('XpressDropOffs').doc(decodedClaims.uid)
    const userDoc = await userDocRef.get()

    if (!userDoc.exists) {
      return NextResponse.json([])
    }

    const userData = userDoc.data()
    const dropOffs : SavedDropOffs[] = await userData?.dropOffs;
    const dropOff = dropOffs.find((dropOff) => dropOff.dropOffID.toString() === id.toString())

    return NextResponse.json(dropOff)
  } catch (error:any|unknown) {
    return NextResponse.json({ error: error.message || 'Error retrieving dropOffs' }, { status: 500 })
  }
}
