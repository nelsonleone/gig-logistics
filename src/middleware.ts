import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest, response: NextResponse) {
  const session = request.cookies.get("authSessionToken")
  const url = new URL(request.url)
  const pathname = url.pathname;

  if (!session) {
    return NextResponse.redirect(new URL(`/auth/sign_in?returnTo=${pathname}`, request.url))
  }

  const responseAPI = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/login`, {
    method: 'GET',
    headers: {
      Cookie: `authSessionToken=${session?.value}`,
    },
  })

  if (responseAPI.status !== 200) {
    return NextResponse.redirect(new URL(`/auth/sign_in?returnTo=${pathname}`, request.url))
  }

  if(responseAPI.status === 200 && pathname.startsWith("/auth/sign_in") || responseAPI.status === 200 && pathname.startsWith("/auth/create_account")){
    return NextResponse.redirect(process.env.NEXT_PUBLIC_BASE_APP_URL || new URL('/',request.url))
  }

  return NextResponse.next()
}

//Add your protected routes
export const config = {
  matcher: ["/app-panel/:path*"],
}