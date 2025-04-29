"use client"

import { useState } from "react"
import Image from "next/image"
import { useCampaign } from "@/contexts/campaign-context"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function CampaignContent() {
  const { campaignData, updateCampaignData, emailTemplates, smsTemplates, whatsappTemplates } = useCampaign()
  const [contentType, setContentType] = useState<"template" | "custom">("template")

  // Render different content based on campaign type
  if (campaignData.type === "email") {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold">Email Content</h2>
          <p className="text-muted-foreground">Create the content for your email campaign</p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="subject">Email Subject Line</Label>
            <Input
              id="subject"
              placeholder="Summer Sale: Up to 50% Off!"
              value={campaignData.subject || ""}
              onChange={(e) => updateCampaignData({ subject: e.target.value })}
            />
            <p className="text-sm text-muted-foreground">A compelling subject line increases open rates</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="preheader">Preheader Text (Optional)</Label>
            <Input
              id="preheader"
              placeholder="Shop our biggest sale of the season with discounts on all products"
              value={campaignData.preheader || ""}
              onChange={(e) => updateCampaignData({ preheader: e.target.value })}
            />
            <p className="text-sm text-muted-foreground">
              Preview text that appears after the subject line in most email clients
            </p>
          </div>

          <div className="space-y-2">
            <Label>Content Creation Method</Label>
            <RadioGroup
              value={contentType}
              onValueChange={(value) => setContentType(value as "template" | "custom")}
              className="flex flex-col space-y-1"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="template" id="template" />
                <Label htmlFor="template">Use a template</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="custom" id="custom" />
                <Label htmlFor="custom">Create custom content</Label>
              </div>
            </RadioGroup>
          </div>

          {contentType === "template" ? (
            <div className="space-y-4">
              <Label>Select a Template</Label>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {emailTemplates.map((template) => (
                  <Card
                    key={template.id}
                    className={`cursor-pointer transition-all ${
                      campaignData.templateId === template.id ? "ring-2 ring-primary" : ""
                    }`}
                    onClick={() =>
                      updateCampaignData({
                        templateId: template.id,
                        subject: template.subject,
                        preheader: template.preheader,
                        content: template.content,
                      })
                    }
                  >
                    <CardHeader className="pb-2">
                      <Image
                        src={template.thumbnail || "/placeholder.svg"}
                        width={250}
                        height={150}
                        alt={template.name}
                        className="rounded-md border object-cover"
                      />
                    </CardHeader>
                    <CardContent>
                      <h3 className="font-medium">{template.name}</h3>
                      <p className="text-sm text-muted-foreground">{template.subject}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <Label htmlFor="content">Email Content</Label>
              <Textarea
                id="content"
                placeholder="<h1>Your Email Content</h1><p>Write your email content here...</p>"
                value={campaignData.content}
                onChange={(e) => updateCampaignData({ content: e.target.value })}
                rows={10}
              />
              <p className="text-sm text-muted-foreground">You can use HTML to format your email content</p>
            </div>
          )}

          <div className="mt-6">
            <Button variant="outline">Preview Email</Button>
          </div>
        </div>
      </div>
    )
  } else if (campaignData.type === "sms") {
    const first_name = "User" // Define first_name or get it from campaignData or props

    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold">SMS Content</h2>
          <p className="text-muted-foreground">Create the content for your SMS campaign</p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Content Creation Method</Label>
            <RadioGroup
              value={contentType}
              onValueChange={(value) => setContentType(value as "template" | "custom")}
              className="flex flex-col space-y-1"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="template" id="template" />
                <Label htmlFor="template">Use a template</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="custom" id="custom" />
                <Label htmlFor="custom">Create custom content</Label>
              </div>
            </RadioGroup>
          </div>

          {contentType === "template" ? (
            <div className="space-y-4">
              <Label>Select a Template</Label>
              <div className="grid gap-4 md:grid-cols-2">
                {smsTemplates.map((template) => (
                  <Card
                    key={template.id}
                    className={`cursor-pointer transition-all ${
                      campaignData.templateId === template.id ? "ring-2 ring-primary" : ""
                    }`}
                    onClick={() =>
                      updateCampaignData({
                        templateId: template.id,
                        smsContent: template.content,
                      })
                    }
                  >
                    <CardHeader>
                      <CardTitle>{template.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">{template.content}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <Label htmlFor="smsContent">SMS Message</Label>
              <Textarea
                id="smsContent"
                placeholder="Your SMS message here..."
                value={campaignData.smsContent || ""}
                onChange={(e) => updateCampaignData({ smsContent: e.target.value })}
                rows={4}
                maxLength={160}
              />
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Use {`{{first_name}}`} for personalization</span>
                <span className={`${(campaignData.smsContent?.length || 0) > 140 ? "text-amber-500" : ""}`}>
                  {campaignData.smsContent?.length || 0}/160 characters
                </span>
              </div>
            </div>
          )}

          <div className="rounded-md border p-4">
            <h3 className="font-medium mb-2">Message Preview</h3>
            <div className="bg-muted p-3 rounded-md">
              <p className="text-sm">{campaignData.smsContent || "Your message will appear here..."}</p>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              This is how your message will appear on recipients' devices
            </p>
          </div>
        </div>
      </div>
    )
  } else if (campaignData.type === "whatsapp") {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold">WhatsApp Content</h2>
          <p className="text-muted-foreground">Select an approved template for your WhatsApp campaign</p>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-md">
            <p className="text-sm text-amber-800">
              WhatsApp Business API requires using pre-approved message templates for broadcast messages. You can only
              use templates that have been approved by WhatsApp.
            </p>
          </div>

          <div className="space-y-4">
            <Label>Select an Approved Template</Label>
            <div className="grid gap-4 md:grid-cols-2">
              {whatsappTemplates.map((template) => (
                <Card
                  key={template.id}
                  className={`cursor-pointer transition-all ${
                    campaignData.whatsappTemplateId === template.id ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() =>
                    updateCampaignData({
                      whatsappTemplateId: template.id,
                      whatsappTemplateParams: {},
                    })
                  }
                >
                  <CardHeader>
                    <CardTitle>{template.name}</CardTitle>
                    <CardDescription>{template.category}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {template.components.map((component, index) => (
                        <div key={index}>
                          {component.type === "HEADER" && <div className="font-bold">{component.text}</div>}
                          {component.type === "BODY" && <div className="text-sm">{component.text}</div>}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">{template.status}</div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          {campaignData.whatsappTemplateId && (
            <div className="space-y-4 mt-6">
              <h3 className="font-medium">Template Parameters</h3>
              <p className="text-sm text-muted-foreground">Fill in the parameters for your selected template</p>

              {whatsappTemplates
                .find((t) => t.id === campaignData.whatsappTemplateId)
                ?.components.flatMap((component) => {
                  const matches = component.text?.match(/\{\{(\d+)\}\}/g) || []
                  return matches.map((match) => {
                    const paramIndex = match.replace(/\{\{|\}\}/g, "")
                    return (
                      <div key={paramIndex} className="space-y-2">
                        <Label htmlFor={`param-${paramIndex}`}>Parameter {paramIndex}</Label>
                        <Input
                          id={`param-${paramIndex}`}
                          placeholder={`Value for parameter ${paramIndex}`}
                          value={campaignData.whatsappTemplateParams?.[paramIndex] || ""}
                          onChange={(e) => {
                            const newParams = {
                              ...(campaignData.whatsappTemplateParams || {}),
                              [paramIndex]: e.target.value,
                            }
                            updateCampaignData({ whatsappTemplateParams: newParams })
                          }}
                        />
                      </div>
                    )
                  })
                })}
            </div>
          )}

          <div className="mt-6">
            <Button variant="outline">Preview Message</Button>
          </div>
        </div>
      </div>
    )
  }

  return null
}
