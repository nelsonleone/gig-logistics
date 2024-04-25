import { cookies } from "next/headers";
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest, response: NextResponse) {
  const session = cookies().get("authSessionToken")?.value || "";
  const url = new URL(request.url)
  const pathname = url.pathname;

  if (!session) {
    return NextResponse.redirect(new URL(`/auth/sign_in?returnTo=${pathname}`, request.url))
  }

  if (session && pathname.match("/auth/sign_in") || session && pathname.match("/auth/create_account")) {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_APP_URL}/` || new URL("/", request.url))
  }

  const responseAPI = await fetch(`${process.env.NEXT_PUBLIC_BASE_APP_URL}/api/auth/persist`, {
    method: 'GET',
    headers: {
      Cookie: `authSessionToken=${session}`,
    },
  })

  if (responseAPI.status !== 200) {
    return NextResponse.redirect(new URL(`/auth/sign_in?returnTo=${pathname}`, request.url))
  }

  return NextResponse.next()
}

//Add your protected routes
export const config = {
  matcher: ["/app-panel/:path*", "/user/:path*"],
}


//MF6H7EQ7MY6WS6THC6YNFB35