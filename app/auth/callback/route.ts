import { createClientComponentClient } from "@/lib/supabase"
import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get("code")
  const next = searchParams.get("next") || "/dashboard"

  if (code) {
    const cookieStore = cookies()
    const supabase = createClientComponentClient()

    await supabase.auth.exchangeCodeForSession(code)
  }

  return NextResponse.redirect(new URL(next, request.url))
}
