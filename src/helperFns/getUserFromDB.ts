import { firebaseAdmin } from "@/lib/firebase/firebase-admin-config"

export async function getUserFromDB(uid:string){
    const userDoc = await firebaseAdmin.firestore().collection('AuthUsers').doc(uid).get()

    if (userDoc.exists) {
      const userData = userDoc.data()
      return userData;
    } else {
      throw new Error('User not found')
    }
}