import { firebaseAdmin } from "@/lib/firebase/firebase-admin-config";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const res = await request.json()
    const { phoneNumber } = await res;

    const { searchParams } = new URL(request.url)
    const uid = searchParams.get('uid')

    if(!uid || !phoneNumber){
      throw new Error("Error Adding Phone Number: invalid 'uid or phoneNumber' input")
    }


    const userDocRef = firebaseAdmin.firestore().collection('AuthUsers').doc(uid)

    await userDocRef.update({
      phoneNumber: phoneNumber,
    })

    const updatedUserDoc = await userDocRef.get()

    if (updatedUserDoc.exists) {
      const userData = updatedUserDoc.data()
      return NextResponse.json(userData)
    } else {
      throw new Error("User document not found after update")
    }
  }
  catch(err:any|unknown){
    console.log("Errir:", err.message)
    return NextResponse.json({ error: err.message || "Error updating phone number" }, { status: 500 })
  }
}
  