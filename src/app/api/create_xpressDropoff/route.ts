import { NextRequest, NextResponse } from "next/server";
import { ServerReadyXpressDropOffInfo } from "../../../../types";
import { checkDropOffCreationInfo } from "@/helperFns/checkDropOffCreationInfos";
import { auth } from "firebase-admin";
import { cookies } from "next/headers";
import { firebaseAdmin, initializeFirebaseAdmin } from "@/lib/firebase/firebase-admin-config";

initializeFirebaseAdmin()

export async function POST(request: NextRequest, response: NextResponse) {
    
    try{
        const authSessionToken = cookies().get('authSessionToken')?.value;
        const res = request.json()
        const { deliveryItems, receiver, sender } : ServerReadyXpressDropOffInfo = await res;

        if(!deliveryItems || !deliveryItems.length || !receiver || !sender){
            throw new Error("Error Creating DropOff: InComplete Parameters. (DeliveryItems | Receiver | Sender was not provided appropriately)")
        }
    
        await checkDropOffCreationInfo({receiver,sender})
    
        if(!authSessionToken){
            throw new Error("Error Creating DropOff: Unauthourized action (unauthenticated user)")
            return;
        }
    
        const decodedClaims = await auth().verifySessionCookie(authSessionToken, true)

        const userDocRef = firebaseAdmin.firestore().collection('XpressDropOffs').doc(decodedClaims.uid)
        const userDropOffs = await userDocRef.update({
            dropOffs: firebaseAdmin.firestore.FieldValue.arrayUnion({ deliveryItems, receiver, sender, isPending: true })
        })

        return NextResponse.json(userDropOffs)
    }
    
    catch(err:any|unknown){
        return NextResponse.json({ message: err.message || "Error Creating DropOff"})
    }
}