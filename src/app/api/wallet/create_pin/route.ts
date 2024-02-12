import { firebaseAdmin } from '@/lib/firebase/firebase-admin-config';
import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';

// Define your custom salt
const customSaltRounds = 10; // You can adjust the number of rounds as needed
const customSalt = bcrypt.genSaltSync(customSaltRounds);

export async function POST(request:NextRequest, response:NextResponse) {
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

    const hashedPin = await bcrypt.hash(pin, 64)

    await firebaseAdmin.firestore().collection('TransactionPins').doc(uid).set({
      pin: hashedPin
    })

    return NextResponse.json({ message: 'Transaction pin created successfully' })

  } catch (error:any|unknown) {
    return NextResponse.json({ error: error.message || 'Failed to create transaction pin' }, { status: 500 })
  }
}
