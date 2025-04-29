"use client"

import { useCampaign } from "@/contexts/campaign-context"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function CampaignAudience() {
  const { campaignData, updateCampaignData, segments } = useCampaign()

  const toggleSegment = (segmentId: string) => {
    const currentSegments = [...campaignData.segmentIds]
    const index = currentSegments.indexOf(segmentId)

    if (index === -1) {
      // Add segment
      updateCampaignData({
        segmentIds: [...currentSegments, segmentId],
        estimatedReach: calculateEstimatedReach([...currentSegments, segmentId]),
      })
    } else {
      // Remove segment
      currentSegments.splice(index, 1)
      updateCampaignData({
        segmentIds: currentSegments,
        estimatedReach: calculateEstimatedReach(currentSegments),
      })
    }
  }

  const calculateEstimatedReach = (selectedSegmentIds: string[]) => {
    // This is a simplified calculation - in a real app, you'd need to account for overlaps
    return selectedSegmentIds.reduce((total, segmentId) => {
      const segment = segments.find((s) => s.id === segmentId)
      return total + (segment?.count || 0)
    }, 0)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Target Audience</h2>
        <p className="text-muted-foreground">Select the audience segments for your campaign</p>
      </div>

      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search segments..." className="pl-8" />
      </div>

      <div className="space-y-4">
        {segments.map((segment) => (
          <Card key={segment.id} className="overflow-hidden">
            <div className="flex items-center border-b p-4">
              <Checkbox
                id={`segment-${segment.id}`}
                checked={campaignData.segmentIds.includes(segment.id)}
                onCheckedChange={() => toggleSegment(segment.id)}
              />
              <div className="ml-4 flex-1">
                <Label htmlFor={`segment-${segment.id}`} className="text-base font-medium cursor-pointer">
                  {segment.name}
                </Label>
                <p className="text-sm text-muted-foreground">{segment.description}</p>
              </div>
              <div className="text-right">
                <span className="font-medium">{segment.count.toLocaleString()}</span>
                <p className="text-xs text-muted-foreground">recipients</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Audience Summary</CardTitle>
          <CardDescription>Estimated reach based on your selected segments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Estimated Reach</p>
              <p className="text-sm text-muted-foreground">Total recipients who will receive this campaign</p>
            </div>
            <div className="text-2xl font-bold">{campaignData.estimatedReach.toLocaleString()}</div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
