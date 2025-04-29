import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { createClient } from "@supabase/supabase-js"

export async function middleware(request: NextRequest) {
  try {
    // Get Supabase URL and anon key from environment variables
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseAnonKey) {
      console.error("Supabase URL or Anon Key is missing in middleware")
      return NextResponse.next()
    }

    // Create a Supabase client
    const supabase = createClient(supabaseUrl, supabaseAnonKey)

    // Get the user's session
    const {
      data: { session },
    } = await supabase.auth.getSession()

    // If there's no session and the user is trying to access a protected route
    if (!session && request.nextUrl.pathname.startsWith("/dashboard")) {
      // Redirect to the login page
      const redirectUrl = new URL("/auth/login", request.url)
      redirectUrl.searchParams.set("next", request.nextUrl.pathname)
      return NextResponse.redirect(redirectUrl)
    }

    // If there's a session and the user is trying to access an auth route
    if (session && request.nextUrl.pathname.startsWith("/auth")) {
      // Redirect to the dashboard
      return NextResponse.redirect(new URL("/dashboard", request.url))
    }

    return NextResponse.next()
  } catch (error) {
    console.error("Middleware error:", error)
    return NextResponse.next()
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/auth/:path*"],
}
