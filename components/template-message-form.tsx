"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, Loader2, AlertCircle } from "lucide-react"
import {
  type WhatsCalludConfig,
  type WhatsCalludTemplate,
  type WhatsCalludMessage,
  sendTemplateMessage,
} from "@/lib/services/whatscallud-api"

interface TemplateMessageFormProps {
  templates: WhatsCalludTemplate[]
  config: WhatsCalludConfig
}

export function TemplateMessageForm({ templates, config }: TemplateMessageFormProps) {
  const [selectedTemplate, setSelectedTemplate] = useState<WhatsCalludTemplate | null>(null)
  const [recipientNumber, setRecipientNumber] = useState("")
  const [parameters, setParameters] = useState<Record<string, string>>({})
  const [sending, setSending] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)

  const handleTemplateChange = (templateName: string) => {
    const template = templates.find((t) => t.name === templateName) || null
    setSelectedTemplate(template)
    setParameters({})
  }

  const extractParameters = (text: string | undefined) => {
    if (!text) return []

    const regex = /{{(\d+)}}/g
    const params: string[] = []
    let match

    while ((match = regex.exec(text)) !== null) {
      if (!params.includes(match[1])) {
        params.push(match[1])
      }
    }

    return params.sort((a, b) => Number.parseInt(a) - Number.parseInt(b))
  }

  const getTemplateParameters = () => {
    if (!selectedTemplate) return []

    const allParams: string[] = []

    selectedTemplate.components.forEach((component) => {
      if (component.text) {
        extractParameters(component.text).forEach((param) => {
          if (!allParams.includes(param)) {
            allParams.push(param)
          }
        })
      }
    })

    return allParams
  }

  const handleSendMessage = async () => {
    if (!selectedTemplate || !recipientNumber) return

    setSending(true)
    setResult(null)

    try {
      // Prepare parameters for the API
      const templateParams = getTemplateParameters()
      const components = []

      // Add header component if it exists and has parameters
      const headerComponent = selectedTemplate.components.find((c) => c.type === "HEADER")
      if (headerComponent && extractParameters(headerComponent.text).length > 0) {
        components.push({
          type: "header",
          parameters: extractParameters(headerComponent.text).map((param) => ({
            type: "text",
            text: parameters[param] || `Parameter ${param}`,
          })),
        })
      }

      // Add body component if it exists and has parameters
      const bodyComponent = selectedTemplate.components.find((c) => c.type === "BODY")
      if (bodyComponent && extractParameters(bodyComponent.text).length > 0) {
        components.push({
          type: "body",
          parameters: extractParameters(bodyComponent.text).map((param) => ({
            type: "text",
            text: parameters[param] || `Parameter ${param}`,
          })),
        })
      }

      const message: WhatsCalludMessage = {
        to: recipientNumber,
        templateName: selectedTemplate.name,
        languageCode: selectedTemplate.language,
        components: components.length > 0 ? components : undefined,
      }

      const response = await sendTemplateMessage(config, message)

      setResult({
        success: response.success,
        message: response.message,
      })
    } catch (error) {
      setResult({
        success: false,
        message: error instanceof Error ? error.message : "An unknown error occurred",
      })
    } finally {
      setSending(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Send Template Message</CardTitle>
        <CardDescription>Send a WhatsApp message using an approved template</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {templates.length === 0 ? (
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>No Templates Available</AlertTitle>
            <AlertDescription>
              You don't have any approved templates. Create and get approval for templates in your WhatsApp Business
              account.
            </AlertDescription>
          </Alert>
        ) : (
          <>
            <div className="space-y-2">
              <Label htmlFor="template">Template</Label>
              <Select onValueChange={handleTemplateChange}>
                <SelectTrigger id="template">
                  <SelectValue placeholder="Select a template" />
                </SelectTrigger>
                <SelectContent>
                  {templates
                    .filter((t) => t.status === "APPROVED")
                    .map((template) => (
                      <SelectItem key={template.id} value={template.name}>
                        {template.name}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>

            {selectedTemplate && (
              <div className="space-y-2">
                <Label>Template Preview</Label>
                <div className="rounded-md border p-4 space-y-2">
                  {selectedTemplate.components.map((component, index) => (
                    <div key={index}>
                      {component.type === "HEADER" && <div className="font-bold">{component.text}</div>}
                      {component.type === "BODY" && <div className="whitespace-pre-line">{component.text}</div>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="recipient">Recipient Phone Number</Label>
              <Input
                id="recipient"
                placeholder="Include country code (e.g., +1234567890)"
                value={recipientNumber}
                onChange={(e) => setRecipientNumber(e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                The phone number must be in international format with country code
              </p>
            </div>

            {selectedTemplate && getTemplateParameters().length > 0 && (
              <div className="space-y-4">
                <Label>Template Parameters</Label>
                {getTemplateParameters().map((param) => (
                  <div key={param} className="space-y-2">
                    <Label htmlFor={`param-${param}`}>Parameter {param}</Label>
                    <Input
                      id={`param-${param}`}
                      placeholder={`Enter value for parameter ${param}`}
                      value={parameters[param] || ""}
                      onChange={(e) => setParameters({ ...parameters, [param]: e.target.value })}
                    />
                  </div>
                ))}
              </div>
            )}

            {result && (
              <Alert variant={result.success ? "default" : "destructive"}>
                {result.success ? <CheckCircle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
                <AlertTitle>{result.success ? "Success" : "Error"}</AlertTitle>
                <AlertDescription>{result.message}</AlertDescription>
              </Alert>
            )}
          </>
        )}
      </CardContent>
      <CardFooter>
        <Button
          onClick={handleSendMessage}
          disabled={!selectedTemplate || !recipientNumber || sending}
          className="ml-auto"
        >
          {sending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Send Message
        </Button>
      </CardFooter>
    </Card>
  )
}
