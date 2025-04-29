import { createClient } from "@supabase/supabase-js"

// This is for client-side usage
export const createClientComponentClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error("Supabase URL or Anon Key is missing")
    throw new Error("Supabase URL and Anon Key are required")
  }

  return createClient(supabaseUrl, supabaseAnonKey)
}

// This is for server-side usage
export const createServerComponentClient = () => {
  const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseServiceKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseServiceKey) {
    console.error("Supabase URL or Service Key is missing")
    throw new Error("Supabase URL and Service Key are required")
  }

  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      persistSession: false,
    },
  })
}
