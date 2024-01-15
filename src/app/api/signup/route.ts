import { getUserFromDB } from "@/helperFns/getUserFromDB";
import { firebaseAdmin } from "@/lib/firebase/firebase-admin-config";
import { auth } from "firebase-admin";
import { cookies, headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest, response: NextResponse) {
    try {
      const authorization = headers().get("Authorization")
      const res = await request.json()
      const { firstName, lastName, picture, email, phoneNumber } = res;

      console.log(firstName,lastName,phoneNumber)

  
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

          const userDoc = await firebaseAdmin.firestore().collection('AuthUsers').doc(decodedToken.uid).get()

          if (userDoc.exists) {
            const userData = userDoc.data()
            return NextResponse.json(userData)
          } else {
            await firebaseAdmin.firestore().collection('AuthUsers').doc(decodedToken.uid).set({ email, firstName, lastName, picture, phoneNumber, uid: decodedToken.uid},{ merge: true} )
            return NextResponse.json(await getUserFromDB(decodedToken.uid))
          }
        }
      }
    } catch (error:any|unknown) {
      console.error("Error processing authentication:", error.message)
      return NextResponse.json({ error: "Authentication failed" }, { status: 500 })
    }
}
  