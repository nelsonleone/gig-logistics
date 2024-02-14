import { NextRequest, NextResponse } from 'next/server';
import { firebaseAdmin } from '@/lib/firebase/firebase-admin-config';
import bcrypt from 'bcrypt';
import { handleHashPin } from '@/helperFns/handleHashPin';

export async function POST(request: NextRequest, response: NextResponse) {
  try {

    const { oldPin, newPin } = await request.json()
    const { searchParams } = new URL(request.url)
    const uid = searchParams.get('uid')

    if (!oldPin || !newPin) {
      return NextResponse.json({ error: 'New and Old transaction pin are required' }, { status: 400 })
    }

    if(!uid){
      return NextResponse.json({ error: "'UID' query is invalid" }, { status: 400 })
    }

    const pinDoc = await firebaseAdmin.firestore().collection('TransactionPins').doc(uid).get()
    const hashedPin = pinDoc.data()?.pin

    if (!hashedPin) {
      return NextResponse.json({ error: 'Transaction pin not found' }, { status: 404 })
    }

    const pinMatch = await bcrypt.compare(oldPin, hashedPin)

    if (!pinMatch) {
      return NextResponse.json({ error: 'Incorrect transaction pin' }, { status: 401 })
    }

    const newHashedPin = await handleHashPin(newPin)

    await firebaseAdmin.firestore().collection('TransactionPins').doc(uid).update({
      pin: newHashedPin
    })

    return NextResponse.json({ message: 'Transaction pin changed successfully' })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to check transaction pin' }, { status: 500 })
  }
}
