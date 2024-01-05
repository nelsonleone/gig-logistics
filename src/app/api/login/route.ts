import { getUserFromDB } from "@/helperFns/getUserFromDB";
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
          secure: process.env.NODE_ENV === "development",
          sameSite: process.env.NODE_ENV === "development" ? "lax" as "lax" : "none" as "none"
        }

        cookies().set(options)

        return NextResponse.json(await getUserFromDB(decodedToken.uid))
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
  