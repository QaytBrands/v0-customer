"use client"

import { useCampaign } from "@/contexts/campaign-context"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function CampaignBasicInfo() {
  const { campaignData, updateCampaignData } = useCampaign()

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Campaign Details</h2>
        <p className="text-muted-foreground">Provide basic information about your campaign</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Campaign Name</Label>
          <Input
            id="name"
            placeholder="Summer Sale Announcement"
            value={campaignData.name}
            onChange={(e) => updateCampaignData({ name: e.target.value })}
          />
          <p className="text-sm text-muted-foreground">A descriptive name to help you identify this campaign</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Campaign Description (Optional)</Label>
          <Textarea
            id="description"
            placeholder="Describe the purpose and goals of this campaign..."
            value={campaignData.description || ""}
            onChange={(e) => updateCampaignData({ description: e.target.value })}
            rows={4}
          />
          <p className="text-sm text-muted-foreground">Additional details about this campaign for your reference</p>
        </div>
      </div>
    </div>
  )
}
