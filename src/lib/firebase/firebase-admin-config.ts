import { initializeApp, getApps, cert } from 'firebase-admin/app';

const firebaseAdminConfig = {
  credential: cert('../../../serviceKey.json')
}

export function initializeFirebaseAdmin() {
  if (getApps().length <= 0) {
    initializeApp(firebaseAdminConfig)
  }
}
