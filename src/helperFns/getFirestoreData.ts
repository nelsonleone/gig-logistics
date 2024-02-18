import { firebaseAdmin } from "@/lib/firebase/firebase-admin-config";
import { AuthUser } from "../../types";

export async function getAuthUserDataFromFirestore(uid:string) {
    try{
        const firestore = firebaseAdmin.firestore()
        const userDoc = await firestore.collection('AuthUsers').doc(uid).get()
        return userDoc.exists ? userDoc.data() : null;
    }

    catch(err:any|unknown){
        throw new Error(err.message || "Error Fetching User Credentials")
    }
}

export async function updateAuthUserDataInFirestore(uid:string, data:Omit<AuthUser,'walletPinStatus'>) {
    try{
        const firestore = firebaseAdmin.firestore()
        await firestore.collection('AuthUsers').doc(uid).set(data, { merge: true })
    }

    catch(err:any|unknown){
        throw new Error("Error setting user data in database")
    }
}
  