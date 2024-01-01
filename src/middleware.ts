import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest, response: NextResponse) {
  const session = request.cookies.get("authSessionToken")

  if (!session) {
    return NextResponse.redirect(new URL(`/auth/sign_in?returnTo=${request.url}`, request.url))
  }

  const responseAPI = await fetch("/api/login", {
    headers: {
      Cookie: `session=${session?.value}`,
    },
  })

  if (responseAPI.status !== 200) {
    return NextResponse.redirect(new URL(`/auth/sign_in?returnTo=${request.nextUrl.pathname}`, request.url))
  }

  return NextResponse.next()
}

//Add your protected routes
export const config = {
  matcher: ["/app-panel/:path*"],
}