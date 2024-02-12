import { NextRequest, NextResponse } from 'next/server';
import { firebaseAdmin } from '@/lib/firebase/firebase-admin-config';
import bcrypt from 'bcrypt';

export async function GET(request: NextRequest, response: NextResponse) {
  try {

    const { pin } = await request.json()
    const { searchParams } = new URL(request.url)
    const uid = searchParams.get('uid')

    if (!pin) {
      return NextResponse.json({ error: 'User ID and transaction pin are required' }, { status: 400 })
    }

    if(!uid){
        return NextResponse.json({ error: "'UID' query is invalid" }, { status: 400 })
    }

    const pinDoc = await firebaseAdmin.firestore().collection('transactionPins').doc(uid).get()
    const hashedPin = pinDoc.data()?.pin

    if (!hashedPin) {
      return NextResponse.json({ error: 'Transaction pin not found' }, { status: 404 })
    }

    const pinMatch = await bcrypt.compare(pin, hashedPin)

    if (!pinMatch) {
      return NextResponse.json({ error: 'Incorrect transaction pin' }, { status: 401 })
    }

    return NextResponse.json({ message: 'Transaction pin verified successfully' })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to check transaction pin' }, { status: 500 })
  }
}
