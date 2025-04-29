import type { Metadata } from "next"
import Link from "next/link"
import { Mail, MessageSquare, Phone } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Create Campaign",
  description: "Choose a channel to create your marketing campaign",
}

export default function CampaignsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Create Campaign</h1>
        <p className="text-muted-foreground">Choose a channel to create your marketing campaign</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <Mail className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Email Campaign</CardTitle>
            <CardDescription>
              Create an email campaign to reach your audience with rich content and detailed analytics.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Rich HTML content with images and formatting</li>
              <li>Subject line and preheader optimization</li>
              <li>A/B testing capabilities</li>
              <li>Detailed open and click tracking</li>
              <li>Scheduled sending and time zone optimization</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/dashboard/campaigns/email/create">Create Email Campaign</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <Phone className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>SMS Campaign</CardTitle>
            <CardDescription>
              Create an SMS campaign for direct, immediate communication with your customers.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Direct and immediate customer reach</li>
              <li>High open and response rates</li>
              <li>Personalization with customer data</li>
              <li>URL shortening and tracking</li>
              <li>Scheduled delivery and optimal timing</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/dashboard/campaigns/sms/create">Create SMS Campaign</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <MessageSquare className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>WhatsApp Campaign</CardTitle>
            <CardDescription>
              Create a WhatsApp campaign using approved templates with rich media capabilities.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Rich media support (images, videos, documents)</li>
              <li>Interactive buttons and quick replies</li>
              <li>Template-based messaging for compliance</li>
              <li>Two-way conversation capabilities</li>
              <li>Detailed delivery and read receipts</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/dashboard/campaigns/whatsapp/create">Create WhatsApp Campaign</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
