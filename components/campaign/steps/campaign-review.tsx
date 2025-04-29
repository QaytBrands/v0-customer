"use client"

import { useCampaign } from "@/contexts/campaign-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Clock, Users } from "lucide-react"

export function CampaignReview() {
  const { campaignData, segments } = useCampaign()

  const getSegmentNames = () => {
    return campaignData.segmentIds
      .map((id) => {
        const segment = segments.find((s) => s.id === id)
        return segment?.name || id
      })
      .join(", ")
  }

  const getScheduleText = () => {
    if (campaignData.scheduleType === "immediate") {
      return "Send immediately after launch"
    } else if (campaignData.scheduleType === "scheduled" && campaignData.scheduledTime) {
      return `Scheduled for ${campaignData.scheduledTime.toLocaleString()}`
    } else if (campaignData.scheduleType === "optimal") {
      return "Send at optimal time for each recipient"
    }
    return "Not specified"
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Review Campaign</h2>
        <p className="text-muted-foreground">Review your campaign details before launching</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Campaign Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1">
              <p className="text-sm font-medium">Campaign Name</p>
              <p>{campaignData.name}</p>
            </div>

            <div className="space-y-1">
              <p className="text-sm font-medium">Campaign Type</p>
              <Badge>{campaignData.type.charAt(0).toUpperCase() + campaignData.type.slice(1)}</Badge>
            </div>

            {campaignData.description && (
              <div className="space-y-1">
                <p className="text-sm font-medium">Description</p>
                <p className="text-sm">{campaignData.description}</p>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Content</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {campaignData.type === "email" && (
              <>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Subject Line</p>
                  <p>{campaignData.subject}</p>
                </div>

                {campaignData.preheader && (
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Preheader</p>
                    <p className="text-sm">{campaignData.preheader}</p>
                  </div>
                )}
              </>
            )}

            {campaignData.type === "sms" && campaignData.smsContent && (
              <div className="space-y-1">
                <p className="text-sm font-medium">SMS Content</p>
                <div className="rounded-md border p-3 text-sm">{campaignData.smsContent}</div>
              </div>
            )}

            {campaignData.type === "whatsapp" && campaignData.whatsappTemplateId && (
              <div className="space-y-1">
                <p className="text-sm font-medium">WhatsApp Template</p>
                <p>{campaignData.whatsappTemplateId}</p>
              </div>
            )}

            {campaignData.enableABTesting && (
              <div className="space-y-1">
                <p className="text-sm font-medium">A/B Testing</p>
                <p className="text-sm">
                  Testing {campaignData.abTestVariants?.length || 0} variants with {campaignData.testingMetric} as the
                  success metric
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="mr-2 h-4 w-4" />
              Audience
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1">
              <p className="text-sm font-medium">Selected Segments</p>
              <p>{getSegmentNames()}</p>
            </div>

            <div className="space-y-1">
              <p className="text-sm font-medium">Estimated Reach</p>
              <p className="text-2xl font-bold">{campaignData.estimatedReach.toLocaleString()}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              Scheduling
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1">
              <p className="text-sm font-medium">Delivery</p>
              <p>{getScheduleText()}</p>
            </div>

            {campaignData.timeZoneOptimization && (
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-500" />
                <p className="text-sm">Adjust for recipient time zones</p>
              </div>
            )}

            <div className="space-y-1">
              <p className="text-sm font-medium">Tracking</p>
              <div className="space-y-1">
                {campaignData.enableTracking ? (
                  <>
                    <div className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <p className="text-sm">Campaign tracking enabled</p>
                    </div>

                    {campaignData.enableLinkTracking && (
                      <div className="flex items-center space-x-2 ml-6">
                        <Check className="h-4 w-4 text-green-500" />
                        <p className="text-sm">Link click tracking enabled</p>
                      </div>
                    )}

                    {campaignData.type === "email" && campaignData.enableOpenTracking && (
                      <div className="flex items-center space-x-2 ml-6">
                        <Check className="h-4 w-4 text-green-500" />
                        <p className="text-sm">Email open tracking enabled</p>
                      </div>
                    )}
                  </>
                ) : (
                  <p className="text-sm">Campaign tracking disabled</p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Launch Checklist</CardTitle>
          <CardDescription>Ensure your campaign is ready to launch</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>Campaign details are complete</span>
            </li>
            <li className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>Content has been created and reviewed</span>
            </li>
            <li className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>Target audience has been selected</span>
            </li>
            <li className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>Scheduling preferences have been set</span>
            </li>
            {campaignData.enableABTesting && (
              <li className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>A/B testing has been configured</span>
              </li>
            )}
            <li className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>Tracking options have been configured</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
