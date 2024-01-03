import * as admin from 'firebase-admin'
import serviceAccount from './serviceAccount.json'

export function initializeFirebaseAdmin() {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as admin.ServiceAccount)
    })
  }
}

initializeFirebaseAdmin()

export const firebaseAdmin = admin;