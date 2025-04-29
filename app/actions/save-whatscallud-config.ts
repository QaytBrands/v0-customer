"use server"

import { cookies } from "next/headers"
import type { WhatsCalludConfig } from "@/lib/services/whatscallud-api"

// In a real application, you would store this in a database
// For this demo, we'll use cookies (not recommended for production)
export async function saveWhatsCalludConfig(config: WhatsCalludConfig): Promise<{ success: boolean; message: string }> {
  try {
    // Encrypt or securely store the API key in a real application
    cookies().set("whatscallud_config", JSON.stringify(config), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: "/",
    })

    return {
      success: true,
      message: "WhatsCallud configuration saved successfully",
    }
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to save WhatsCallud configuration",
    }
  }
}

export async function getWhatsCalludConfig(): Promise<WhatsCalludConfig | null> {
  try {
    const configCookie = cookies().get("whatscallud_config")
    if (!configCookie) return null

    return JSON.parse(configCookie.value) as WhatsCalludConfig
  } catch (error) {
    console.error("Error getting WhatsCallud config:", error)
    return null
  }
}
