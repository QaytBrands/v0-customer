"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { createClient } from "@supabase/supabase-js"

type Profile = {
  id: string
  username: string | null
  full_name: string | null
  avatar_url: string | null
  updated_at: string | null
}

export function ProfileForm() {
  const { user } = useAuth()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [profile, setProfile] = useState<Profile>({
    id: "",
    username: "",
    full_name: "",
    avatar_url: "",
    updated_at: null,
  })

  // Initialize Supabase client
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error("Supabase URL or Anon Key is missing in ProfileForm component")
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
          setProfile(
            data || {
              id: user.id,
              username: "",
              full_name: "",
              avatar_url: "",
              updated_at: null,
            },
          )
        }
      } catch (error) {
        console.error("Error:", error)
      } finally {
        setLoading(false)
      }
    }

    loadProfile()
  }, [user, supabase])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    if (!user) return

    try {
      setSaving(true)

      const { error } = await supabase.from("profiles").upsert({
        id: user.id,
        username: profile.username,
        full_name: profile.full_name,
        avatar_url: profile.avatar_url,
        updated_at: new Date().toISOString(),
      })

      if (error) {
        setError(error.message)
      } else {
        setSuccess("Profile updated successfully!")
      }
    } catch (error: any) {
      setError(error.message)
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return <div className="p-4 text-center">Loading profile...</div>
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Edit Profile</CardTitle>
        <CardDescription>Update your profile information</CardDescription>
      </CardHeader>
      <CardContent>
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {success && (
          <Alert className="mb-4 bg-green-50 text-green-700 border-green-200">
            <AlertDescription>{success}</AlertDescription>
          </Alert>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              value={profile.username || ""}
              onChange={(e) => setProfile({ ...profile, username: e.target.value })}
              placeholder="username"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              value={profile.full_name || ""}
              onChange={(e) => setProfile({ ...profile, full_name: e.target.value })}
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="avatarUrl">Avatar URL</Label>
            <Input
              id="avatarUrl"
              value={profile.avatar_url || ""}
              onChange={(e) => setProfile({ ...profile, avatar_url: e.target.value })}
              placeholder="https://example.com/avatar.jpg"
            />
          </div>
          <Button type="submit" disabled={saving}>
            {saving ? "Saving..." : "Save Changes"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
