import { getAuthUserDataFromFirestore } from "@/helperFns/getFirestoreData";
import { auth } from "firebase-admin";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const session = cookies().get("authSessionToken")?.value || "";

  if (!session) {
    return NextResponse.json({ isLogged: false }, { status: 401 })
  }

  const decodedClaims = await auth().verifySessionCookie(session, true)

  if (!decodedClaims) {
    return NextResponse.json({ isLogged: false }, { status: 401 })
  }

  const authUserData = await getAuthUserDataFromFirestore(decodedClaims.uid)
  return NextResponse.json(authUserData)
}