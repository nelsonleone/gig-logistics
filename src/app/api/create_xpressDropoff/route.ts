import { NextRequest, NextResponse } from "next/server";
import { ServerReadyXpressDropOffInfo } from "../../../../types";
import { checkDropOffCreationInfo } from "@/helperFns/checkDropOffCreationInfos";
import { firebaseAdmin, initializeFirebaseAdmin } from "@/lib/firebase/firebase-admin-config";
import { nanoid } from "@reduxjs/toolkit";

initializeFirebaseAdmin()

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const res = await request.json()
    const { searchParams } = new URL(request.url)
    const uid = searchParams.get('uid') || "";
    const { deliveryItems, receiver, sender }: ServerReadyXpressDropOffInfo = res;

    if(!uid){
      throw new Error("Error Creating DropOff: Invalid UID query parameter")
    }

    if (!deliveryItems || !deliveryItems.length || !receiver || !sender) {
      return NextResponse.json({ message: "Error Creating DropOff: Incomplete Parameters. (DeliveryItems | Receiver | Sender was not provided appropriately)" }, { status: 400 })
    }

    await checkDropOffCreationInfo({ receiver, sender })

    const userDocRef = firebaseAdmin.firestore().collection('XpressDropOffs').doc(uid)
    const userDoc = await userDocRef.get()
    const id = nanoid(6).toUpperCase()
    const timestamp = new Date()

    const newDropOff = {
      dropOffID: `PRE_${id}`,
      trackingID: `TRK_${id}`,
      deliveryItems,
      receiver,
      sender,
      isPending: true,
      createdAt: timestamp.toISOString(),
      hasBeenPickedUp: false
    }
    
    if (!userDoc.exists) {
      await userDocRef.set({ dropOffs: [newDropOff] })
      return NextResponse.json({ message: "DropOff created", status: 201 })
    }
    
    await userDocRef.update({
      dropOffs: firebaseAdmin.firestore.FieldValue.arrayUnion(newDropOff),
    })
    
    return NextResponse.json({ message: "DropOff created", status: 201 })
  } catch (err:any|unknown) {
    return NextResponse.json({ error: err.message || "Error Creating DropOff" },{ status: 500 })
  }
}
