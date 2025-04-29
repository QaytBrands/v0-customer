"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, Loader2, AlertCircle, Info } from "lucide-react"
import { type WhatsAppCloudConfig, sendTestMessage } from "@/lib/services/whatsapp-cloud-api"

export function WhatsAppTestSender() {
  const [accessToken, setAccessToken] = useState("")
  const [phoneNumberId, setPhoneNumberId] = useState("")
  const [recipientNumber, setRecipientNumber] = useState("+918087025273") // Pre-filled with the provided number
  const [sending, setSending] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message: string; data?: any } | null>(null)

  const handleSendTestMessage = async () => {
    if (!accessToken || !phoneNumberId || !recipientNumber) {
      setResult({
        success: false,
        message: "Please fill in all required fields",
      })
      return
    }

    setSending(true)
    setResult(null)

    try {
      const config: WhatsAppCloudConfig = {
        accessToken,
        phoneNumberId,
        businessAccountId: phoneNumberId.split("/")[0], // Extract business ID from phone number ID if needed
      }

      const response = await sendTestMessage(config, recipientNumber)

      setResult({
        success: true,
        message: "Test message sent successfully! Check your WhatsApp for the message.",
        data: response,
      })
    } catch (error) {
      setResult({
        success: false,
        message: error instanceof Error ? error.message : "Failed to send test message",
      })
    } finally {
      setSending(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>WhatsApp Cloud API Test</CardTitle>
        <CardDescription>Send a test message using the WhatsApp Cloud API sandbox environment</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>Important</AlertTitle>
          <AlertDescription>
            The recipient must have sent a message to your test WhatsApp number in the last 24 hours to receive
            messages.
          </AlertDescription>
        </Alert>

        <div className="space-y-2">
          <Label htmlFor="access-token">Access Token</Label>
          <Input
            id="access-token"
            type="password"
            value={accessToken}
            onChange={(e) => setAccessToken(e.target.value)}
            placeholder="Enter your temporary access token"
          />
          <p className="text-xs text-muted-foreground">
            Get this from the Meta Developer Portal under WhatsApp &gt; API Setup
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone-number-id">Phone Number ID</Label>
          <Input
            id="phone-number-id"
            value={phoneNumberId}
            onChange={(e) => setPhoneNumberId(e.target.value)}
            placeholder="Enter your WhatsApp phone number ID"
          />
          <p className="text-xs text-muted-foreground">
            Find this in the Meta Developer Portal under WhatsApp &gt; API Setup
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="recipient">Recipient Phone Number</Label>
          <Input
            id="recipient"
            value={recipientNumber}
            onChange={(e) => setRecipientNumber(e.target.value)}
            placeholder="Include country code (e.g., +918087025273)"
          />
          <p className="text-xs text-muted-foreground">
            The phone number must be in international format with country code
          </p>
        </div>

        {result && (
          <Alert variant={result.success ? "default" : "destructive"}>
            {result.success ? <CheckCircle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
            <AlertTitle>{result.success ? "Success" : "Error"}</AlertTitle>
            <AlertDescription>
              {result.message}
              {result.success && result.data && (
                <pre className="mt-2 rounded bg-slate-100 p-2 text-xs overflow-auto">
                  {JSON.stringify(result.data, null, 2)}
                </pre>
              )}
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
      <CardFooter>
        <Button
          onClick={handleSendTestMessage}
          disabled={!accessToken || !phoneNumberId || !recipientNumber || sending}
          className="ml-auto"
        >
          {sending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Send Test Message
        </Button>
      </CardFooter>
    </Card>
  )
}
