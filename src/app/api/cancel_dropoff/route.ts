import { firebaseAdmin, initializeFirebaseAdmin } from "@/lib/firebase/firebase-admin-config"
import { NextRequest, NextResponse } from "next/server"
import { SavedDropOffs } from "../../../../types"

initializeFirebaseAdmin()

export async function DELETE(request: NextRequest, response: NextResponse) {
  try {

    const { searchParams } = new URL(request.url)
    const uid = searchParams.get('uid')
    const dropOffID = searchParams.get('dropOffID')

    if (!uid || !dropOffID) {
      throw new Error("Error Canceling Drop-Off: mising query parameters in url (uid,dropOffID)")
    }

    const userDocRef = firebaseAdmin.firestore().collection('XpressDropOffs').doc(uid)

    const userDoc = await userDocRef.get()

    if (!userDoc.exists) {
      throw new Error("User document not found")
    }

    const dropOffs : SavedDropOffs[] = userDoc.data()?.dropOffs || []

    const dropOffIndex = dropOffs.findIndex((dropOff) => dropOff.dropOffID === dropOffID)

    if (dropOffIndex !== -1) {
      dropOffs.splice(dropOffIndex, 1)

      await userDocRef.update({
        dropOffs: dropOffs,
    })

      return NextResponse.json({ message: "Drop-off cancelled Sucessfully" }, { status: 202 })
    } 
    
    else {
      throw new Error("Drop-off not found in user document")
    }
  } catch (error: any) {
    return NextResponse.json({ error: `Error Canceling Drop-off: ${error.message} `}, { status: 500 })
  }
}
