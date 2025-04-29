import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This is a simplified middleware for demonstration purposes
// In a real application, you would verify the JWT token

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get("auth-token")?.value
  const { pathname } = request.nextUrl

  // Define protected routes
  const isProtectedRoute = pathname.startsWith("/dashboard")

  // Define auth routes
  const isAuthRoute = ["/login", "/signup", "/forgot-password", "/reset-password"].some((route) =>
    pathname.startsWith(route),
  )

  // Redirect to login if accessing protected route without auth
  if (isProtectedRoute && !authToken) {
    const url = new URL("/login", request.url)
    url.searchParams.set("callbackUrl", pathname)
    return NextResponse.redirect(url)
  }

  // Redirect to dashboard if accessing auth routes while already authenticated
  if (isAuthRoute && authToken) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/dashboard/:path*", "/login", "/signup", "/forgot-password", "/reset-password"],
}
