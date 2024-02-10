import { firebaseAdmin } from '@/lib/firebase/firebase-admin-config';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { AuthUser } from '../../../../types';

export async function POST(request: NextRequest, response: NextResponse) {
  try {

    const { searchParams} = new URL(request.url)
    const uid = searchParams.get('uid')
    const res = await request.json()
    const { updatedFirstName, updatedLastName, updatedProfilePicture } = await res;


    if (!uid) {
      return NextResponse.json({ error: "Unauthorized action: 'UID' query was not provided" }, { status: 400 })
    }

    const authUserDocRef = firebaseAdmin.firestore().collection('AuthUsers').doc(uid)
    const userDoc = await authUserDocRef.get()

    if (!userDoc.exists) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const userProfileUpdate : Partial<Pick<AuthUser,'firstName'|'lastName'|'picture'>> = {}

    if (updatedFirstName) userProfileUpdate['firstName'] = updatedFirstName;
    if (updatedLastName) userProfileUpdate['lastName'] = updatedLastName;
    if (updatedProfilePicture) userProfileUpdate['picture'] = updatedProfilePicture;

    await authUserDocRef.update(userProfileUpdate)

    const updatedUserDoc = await authUserDocRef.get()
    const updatedUserData = updatedUserDoc.data()

    return NextResponse.json(updatedUserData)

  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error: 'An error occurred while processing the request' }, { status: 500 })
  }
}
