import { getAuthUserDataFromFirestore } from "@/helperFns/getFirestoreData";
import { initializeFirebaseAdmin } from "@/lib/firebase/firebase-admin-config";
import { auth } from "firebase-admin";
import { cookies, headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

initializeFirebaseAdmin()

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const authorization = headers().get("Authorization")

    if(!authorization || !authorization.startsWith("Bearer ")){
      return NextResponse.json({ error: "Invalid or missing Authorization header" }, { status: 500 })
    }
    
    const idToken = authorization.split("Bearer ")[1]

    const decodedToken = await auth().verifyIdToken(idToken)

    if (decodedToken) {
      const expiresIn = 60 * 60 * 24 * 3 * 1000
      const sessionCookie = await auth().createSessionCookie(idToken, {
        expiresIn,
      })

      const options = {
        name: "authSessionToken",
        value: sessionCookie,
        maxAge: expiresIn,
        httpOnly: true,
        secure: true,
        sameSite: "none" as "none"
      }

      cookies().set(options)

      const authUserData = await getAuthUserDataFromFirestore(decodedToken.uid)
      
      if(authUserData){
        return NextResponse.json(authUserData)
      }
      else{
        throw new Error("Not user record in database")
      }
    }
  } 
  
  catch (error:any|unknown) {
    console.log(error.message)
    if(error.code === 'auth/id-token-expired'){
      return NextResponse.json({ error: "Authentication Error: Expired ID Token" }, { status: 500 })
    }
    
    return NextResponse.json({ error: "Authentication failed" }, { status: 500 })
  }
}
  