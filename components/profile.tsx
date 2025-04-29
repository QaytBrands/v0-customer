"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { createClient } from "@supabase/supabase-js"

type Profile = {
  id: string
  username: string | null
  full_name: string | null
  avatar_url: string | null
  updated_at: string | null
}

export function Profile() {
  const { user, signOut } = useAuth()
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)

  // Initialize Supabase client
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error("Supabase URL or Anon Key is missing in Profile component")
  }

  const supabase = createClient(supabaseUrl!, supabaseAnonKey!)

  useEffect(() => {
    async function loadProfile() {
      try {
        setLoading(true)
        if (!user) return

        const { data, error } = await supabase.from("profiles").select("*").eq("id", user.id).single()

        if (error) {
          console.error("Error loading profile:", error)
        } else {
          setProfile(data)
        }
      } catch (error) {
        console.error("Error:", error)
      } finally {
        setLoading(false)
      }
    }

    loadProfile()
  }, [user, supabase])

  if (!user) {
    return null
  }

  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Profile</CardTitle>
        <CardDescription>Your account information</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-4">
        <Avatar className="h-24 w-24">
          <AvatarImage src={profile?.avatar_url || ""} alt={profile?.full_name || user.email || ""} />
          <AvatarFallback>{user.email?.charAt(0).toUpperCase() || "U"}</AvatarFallback>
        </Avatar>
        <div className="space-y-1 text-center">
          <h3 className="text-xl font-medium">{profile?.full_name || "User"}</h3>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full" onClick={signOut}>
          Sign out
        </Button>
      </CardFooter>
    </Card>
  )
}
