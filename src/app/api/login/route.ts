import { firebaseAdmin, initializeFirebaseAdmin } from "@/lib/firebase/firebase-admin-config";
import { auth } from "firebase-admin";
import { cookies, headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

initializeFirebaseAdmin()

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const authorization = headers().get("Authorization")

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
          sameSite: "lax" as "lax"
        }

        cookies().set(options)

        const userDoc = await firebaseAdmin.firestore().collection('AuthUsers').doc(decodedToken.uid).get()

        if (userDoc.exists) {
          const userData = userDoc.data()
          return NextResponse.json(userData)
        } else {
          throw new Error('User not found')
        }
      }

      else{
        throw new Error("Invalid User Token")
      }
    }
  } 
  catch (error:any|unknown) {
    console.error("Error processing authentication:", error.message)
    return NextResponse.json({ error: "Authentication failed" }, { status: 500 })
  }
}



export async function GET(request: NextRequest) {
  const session = cookies().get("authSessionToken")?.value || "";

  if (!session) {
    return NextResponse.json({ isLogged: false }, { status: 401 })
  }

  const decodedClaims = await auth().verifySessionCookie(session, true)

  if (!decodedClaims) {
    return NextResponse.json({ isLogged: false }, { status: 401 })
  }

  return NextResponse.json({ isLogged: true }, { status: 200 })
}
  