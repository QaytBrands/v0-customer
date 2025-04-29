"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, CheckCircle, Loader2 } from "lucide-react"
import { validateApiKey, type WhatsCalludConfig } from "@/lib/services/whatscallud-api"

interface WhatsCalludIntegrationProps {
  initialConfig?: WhatsCalludConfig
  onSave: (config: WhatsCalludConfig) => Promise<void>
}

export function WhatsCalludIntegration({ initialConfig, onSave }: WhatsCalludIntegrationProps) {
  const [apiKey, setApiKey] = useState(initialConfig?.apiKey || "")
  const [businessPhoneNumber, setBusinessPhoneNumber] = useState(initialConfig?.businessPhoneNumber || "")
  const [isValidating, setIsValidating] = useState(false)
  const [validationStatus, setValidationStatus] = useState<"idle" | "success" | "error">("idle")
  const [validationMessage, setValidationMessage] = useState("")
  const [isSaving, setIsSaving] = useState(false)

  const handleValidate = async () => {
    if (!apiKey || !businessPhoneNumber) {
      setValidationStatus("error")
      setValidationMessage("API key and business phone number are required")
      return
    }

    setIsValidating(true)
    setValidationStatus("idle")
    setValidationMessage("")

    try {
      const config: WhatsCalludConfig = { apiKey, businessPhoneNumber }
      const result = await validateApiKey(config)

      if (result.success) {
        setValidationStatus("success")
        setValidationMessage("API key validated successfully")
      } else {
        setValidationStatus("error")
        setValidationMessage(result.error || "Failed to validate API key")
      }
    } catch (error) {
      setValidationStatus("error")
      setValidationMessage(error instanceof Error ? error.message : "An unknown error occurred")
    } finally {
      setIsValidating(false)
    }
  }

  const handleSave = async () => {
    if (!apiKey || !businessPhoneNumber) {
      setValidationStatus("error")
      setValidationMessage("API key and business phone number are required")
      return
    }

    setIsSaving(true)
    try {
      await onSave({ apiKey, businessPhoneNumber })
      setValidationStatus("success")
      setValidationMessage("WhatsCallud integration saved successfully")
    } catch (error) {
      setValidationStatus("error")
      setValidationMessage(error instanceof Error ? error.message : "Failed to save integration")
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>WhatsCallud API Integration</CardTitle>
        <CardDescription>
          Connect your WhatsApp Business account via WhatsCallud API to send messages and access templates
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="api-key">API Key</Label>
          <Input
            id="api-key"
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="Enter your WhatsCallud API key"
          />
          <p className="text-xs text-muted-foreground">
            You can find your API key in your WhatsCallud dashboard under API settings
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="business-phone">Business Phone Number</Label>
          <Input
            id="business-phone"
            value={businessPhoneNumber}
            onChange={(e) => setBusinessPhoneNumber(e.target.value)}
            placeholder="Enter your WhatsApp Business phone number"
          />
          <p className="text-xs text-muted-foreground">Include country code (e.g., +1234567890)</p>
        </div>

        {validationStatus !== "idle" && (
          <Alert variant={validationStatus === "success" ? "default" : "destructive"}>
            {validationStatus === "success" ? <CheckCircle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
            <AlertTitle>{validationStatus === "success" ? "Success" : "Error"}</AlertTitle>
            <AlertDescription>{validationMessage}</AlertDescription>
          </Alert>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={handleValidate} disabled={isValidating || isSaving}>
          {isValidating && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Test Connection
        </Button>
        <Button onClick={handleSave} disabled={isValidating || isSaving}>
          {isSaving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Save Integration
        </Button>
      </CardFooter>
    </Card>
  )
}
