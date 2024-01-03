import { firebaseAdmin } from "@/lib/firebase/firebase-admin-config";
import { auth } from "firebase-admin";
import { cookies, headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest, response: NextResponse) {
    try {
      const authorization = headers().get("Authorization")
      const res = await request.json()
      const { firstName, lastName, picture, returnTo, phoneNumber } = res;

  
      if (authorization?.startsWith("Bearer ")) {
        const idToken = authorization.split("Bearer ")[1]
        const decodedToken = await auth().verifyIdToken(idToken)
  
        if (decodedToken) {
          const expiresIn = 60 * 60 * 24 * 5 * 1000
          const sessionCookie = await auth().createSessionCookie(idToken, {
            expiresIn,
          })
  
          const options = {
            name: "authSessionToken",
            value: sessionCookie,
            maxAge: expiresIn,
            httpOnly: true,
            secure: true,
          }
  
          cookies().set(options)

          await firebaseAdmin.firestore().collection('AuthUsers').doc(decodedToken.uid).set({ firstName, lastName, picture, phoneNumber, uid: decodedToken.uid},{ merge: true} )
        }
      }

  
      return NextResponse.redirect(returnTo || new URL('/',request.url))

    } catch (error:any|unknown) {
      console.error("Error processing authentication:", error.message)
      return NextResponse.json({ error: "Authentication failed" }, { status: 500 })
    }
}
  