import { NextRequest, NextResponse } from "next/server";
import { ServerReadyXpressDropOffInfo } from "../../../../types";
import { checkDropOffCreationInfo } from "@/helperFns/checkDropOffCreationInfos";
import { auth } from "firebase-admin";
import { cookies } from "next/headers";
import { firebaseAdmin } from "@/lib/firebase/firebase-admin-config";
import { Timestamp } from "firebase/firestore";
import { nanoid } from "@reduxjs/toolkit";

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const authSessionToken = cookies().get('authSessionToken')?.value;
    const res = await request.json();
    const { deliveryItems, receiver, sender }: ServerReadyXpressDropOffInfo = res;

    if (!deliveryItems || !deliveryItems.length || !receiver || !sender) {
      throw new Error("Error Creating DropOff: Incomplete Parameters. (DeliveryItems | Receiver | Sender was not provided appropriately)");
    }

    await checkDropOffCreationInfo({ receiver, sender })

    if (!authSessionToken) {
      throw new Error("Error Creating DropOff: Unauthorized action (unauthenticated user)")
    }

    const decodedClaims = await auth().verifySessionCookie(authSessionToken, true)

    const userDocRef = firebaseAdmin.firestore().collection('XpressDropOffs').doc(decodedClaims.uid)
    const userDoc = await userDocRef.get()

    if (!userDoc.exists) {
      await userDocRef.set({ dropOffs: [] })
    }

    const date = new Date()

    await userDocRef.update({
      dropOffs: firebaseAdmin.firestore.FieldValue.arrayUnion({ trackingID: `TRK_${nanoid(12)}`, deliveryItems, receiver, sender, isPending: true, createdAt: firebaseAdmin.firestore.Timestamp.fromDate(new Date()) })
    })

    return NextResponse.json({ message: "DropOff created", status: 201 })
  } catch (err:any|unknown) {
    return NextResponse.json({ message: err.message || "Error Creating DropOff" })
  }
}
