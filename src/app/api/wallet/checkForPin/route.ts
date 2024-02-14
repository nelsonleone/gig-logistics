import { firebaseAdmin } from "@/lib/firebase/firebase-admin-config";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest, response:NextResponse) {
  try {
    
    const authSessionToken = cookies().get('authSessionToken')?.value;

    if(!authSessionToken){
      throw new Error("Unauthourized Action: Unauthenticated user")
    }

    const { uid } = await firebaseAdmin.auth().verifySessionCookie(authSessionToken, true)

    if (!uid) {
      return NextResponse.json({ error: 'Invalid UID query' }, { status: 400 })
    }

    const pinSnapshot = await firebaseAdmin.firestore().collection('TransactionPins').doc(uid).get()

    if (pinSnapshot.exists) {
      return NextResponse.json({ message: 'User has a transaction pin saved', status: 'has_pin' })
    } else {
      return NextResponse.json({ message: 'User does not have a transaction pin saved', status: 'no_pin' })
    }
  } catch (error:any|unknown) {
    return NextResponse.json({ error: error.message || 'Failed to check transaction pin' }, { status: 500 })
  }
}
  