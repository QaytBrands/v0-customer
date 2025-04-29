import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Campaign Creation",
  description: "Create and manage your marketing campaigns",
}

export default function CampaignLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1">
        <div className="container max-w-screen-xl py-6">
          <Button variant="ghost" size="sm" asChild className="mb-6">
            <Link href="/dashboard" className="flex items-center">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Link>
          </Button>
          {children}
        </div>
      </div>
    </div>
  )
}
