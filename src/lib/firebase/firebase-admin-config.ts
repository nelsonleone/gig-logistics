import * as admin from 'firebase-admin';

export function initializeFirebaseAdmin() {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert({
        clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
        privateKey: `${process.env.FIREBASE_ADMIN_PRIVATE_KEY || ""}`.replace(/\\n/g, '\n')
      })
    })
  }
}

initializeFirebaseAdmin()
