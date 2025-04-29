"use client"

import { useState } from "react"
import { LogOut, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { logout } from "@/app/actions/auth-actions"

interface LogoutButtonProps {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
}

export function LogoutButton({ variant = "ghost" }: LogoutButtonProps) {
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  async function handleLogout() {
    setIsLoggingOut(true)
    await logout()
  }

  return (
    <form action={handleLogout}>
      <Button variant={variant} size="sm" disabled={isLoggingOut} type="submit">
        {isLoggingOut ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Logging out...
          </>
        ) : (
          <>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </>
        )}
      </Button>
    </form>
  )
}
