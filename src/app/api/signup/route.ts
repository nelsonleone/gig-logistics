import { initializeFirebaseAdmin } from "@/lib/firebase/firebase-admin-config";
import { auth } from "firebase-admin";
import { cookies, headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// Initializing Firebase Admin 
initializeFirebaseAdmin()

export async function POST(request: NextRequest, response: NextResponse) {
    try {
      const authorization = headers().get("Authorization")
      const body = request.body;

      console.log(body)
      return;

  
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
        }
      }

  
      return NextResponse.json({}, { status: 200 })
    } catch (error:any|unknown) {
      console.error("Error processing authentication:", error.message)
      return NextResponse.json({ error: "Authentication failed" }, { status: 500 })
    }
}
  