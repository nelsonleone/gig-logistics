import * as admin from 'firebase-admin'
import serviceAccount from './serviceAccount.json'

export function initializeFirebaseAdmin() {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(JSON.stringify(
        {
          type: "service_account",
          project_id: process.env.FIREBASE_ADMIN_PROJECT_ID,
          private_key_id: process.env.FIREBASE_ADMIN_PRIVATE_KEY_ID,
          private_key: process.env.FIREBASE_ADMIN_PRIVATE_KEY,
          client_email: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
          client_id: process.env.FIREBASE_ADMIN_CLIENT_ID,
          auth_uri: process.env.FIREBASE_ADMIN_AUTH_URI,
          token_uri: process.env.FIREBASE_ADMIN_TOKEN_URI,
          auth_provider_x509_cert_url: process.env.FIREBASE_ADMIN_CLIENT_X509_CERT_URL,
          universe_domain: process.env.FIREBASE_ADMIN_UNIVERSE_DOMAIN
        }
      ) as admin.ServiceAccount)
    })
  }
}

initializeFirebaseAdmin()

export const firebaseAdmin = admin;