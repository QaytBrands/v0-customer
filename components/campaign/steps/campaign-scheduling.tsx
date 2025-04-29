"use client"

import { useCampaign } from "@/contexts/campaign-context"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { CalendarIcon, Clock } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function CampaignScheduling() {
  const { campaignData, updateCampaignData } = useCampaign()

  const hours = Array.from({ length: 24 }, (_, i) => i)
  const minutes = ["00", "15", "30", "45"]

  const handleDateSelect = (date: Date | undefined) => {
    if (!date) return

    // If we already have a scheduled time, preserve the time part
    if (campaignData.scheduledTime) {
      const newDate = new Date(date)
      newDate.setHours(campaignData.scheduledTime.getHours())
      newDate.setMinutes(campaignData.scheduledTime.getMinutes())
      updateCampaignData({ scheduledTime: newDate })
    } else {
      // Default to noon
      const newDate = new Date(date)
      newDate.setHours(12)
      newDate.setMinutes(0)
      updateCampaignData({ scheduledTime: newDate })
    }
  }

  const handleTimeChange = (type: "hour" | "minute", value: string) => {
    if (!campaignData.scheduledTime) {
      // If no date is set, use today
      const newDate = new Date()
      newDate.setHours(type === "hour" ? Number.parseInt(value) : 12)
      newDate.setMinutes(type === "minute" ? Number.parseInt(value) : 0)
      updateCampaignData({ scheduledTime: newDate })
    } else {
      const newDate = new Date(campaignData.scheduledTime)
      if (type === "hour") {
        newDate.setHours(Number.parseInt(value))
      } else {
        newDate.setMinutes(Number.parseInt(value))
      }
      updateCampaignData({ scheduledTime: newDate })
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Campaign Scheduling</h2>
        <p className="text-muted-foreground">Choose when to send your campaign</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Delivery Options</Label>
          <RadioGroup
            value={campaignData.scheduleType}
            onValueChange={(value) =>
              updateCampaignData({ scheduleType: value as "immediate" | "scheduled" | "optimal" })
            }
            className="flex flex-col space-y-1"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="immediate" id="immediate" />
              <Label htmlFor="immediate">Send immediately</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="scheduled" id="scheduled" />
              <Label htmlFor="scheduled">Schedule for later</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="optimal" id="optimal" />
              <Label htmlFor="optimal">Send at optimal time</Label>
            </div>
          </RadioGroup>
        </div>

        {campaignData.scheduleType === "scheduled" && (
          <Card>
            <CardHeader>
              <CardTitle>Schedule Delivery</CardTitle>
              <CardDescription>Choose the date and time to send your campaign</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <div className="space-y-2">
                  <Label>Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !campaignData.scheduledTime && "text-muted-foreground",
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {campaignData.scheduledTime ? (
                          format(campaignData.scheduledTime, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={campaignData.scheduledTime}
                        onSelect={handleDateSelect}
                        initialFocus
                        disabled={(date) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label>Time</Label>
                  <div className="flex space-x-2">
                    <Select
                      value={campaignData.scheduledTime ? campaignData.scheduledTime.getHours().toString() : "12"}
                      onValueChange={(value) => handleTimeChange("hour", value)}
                    >
                      <SelectTrigger className="w-[100px]">
                        <SelectValue placeholder="Hour" />
                      </SelectTrigger>
                      <SelectContent>
                        {hours.map((hour) => (
                          <SelectItem key={hour} value={hour.toString()}>
                            {hour.toString().padStart(2, "0")}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <span className="flex items-center">:</span>

                    <Select
                      value={campaignData.scheduledTime ? campaignData.scheduledTime.getMinutes().toString() : "00"}
                      onValueChange={(value) => handleTimeChange("minute", value)}
                    >
                      <SelectTrigger className="w-[100px]">
                        <SelectValue placeholder="Minute" />
                      </SelectTrigger>
                      <SelectContent>
                        {minutes.map((minute) => (
                          <SelectItem key={minute} value={minute}>
                            {minute}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2 pt-2">
                <Switch
                  id="timezone-optimization"
                  checked={campaignData.timeZoneOptimization || false}
                  onCheckedChange={(checked) => updateCampaignData({ timeZoneOptimization: checked })}
                />
                <Label htmlFor="timezone-optimization">Adjust for recipient time zones</Label>
              </div>
            </CardContent>
          </Card>
        )}

        {campaignData.scheduleType === "optimal" && (
          <Card>
            <CardHeader>
              <CardTitle>Optimal Time Delivery</CardTitle>
              <CardDescription>Send your campaign at the best time for each recipient</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <Clock className="h-8 w-8 text-muted-foreground" />
                <div>
                  <p className="font-medium">Intelligent Delivery</p>
                  <p className="text-sm text-muted-foreground">
                    Our system will analyze past engagement data to determine the optimal time to send your campaign to
                    each recipient.
                  </p>
                </div>
              </div>

              <div className="rounded-md bg-muted p-4">
                <p className="text-sm">
                  Optimal time delivery will send your campaign over a 24-hour period, starting from the time you launch
                  the campaign. This ensures each recipient receives your message when they're most likely to engage
                  with it.
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Advanced Options</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Switch
                id="enable-tracking"
                checked={campaignData.enableTracking}
                onCheckedChange={(checked) => updateCampaignData({ enableTracking: checked })}
              />
              <Label htmlFor="enable-tracking">Enable campaign tracking</Label>
            </div>

            {campaignData.enableTracking && (
              <>
                <div className="flex items-center space-x-2 ml-6">
                  <Switch
                    id="enable-link-tracking"
                    checked={campaignData.enableLinkTracking}
                    onCheckedChange={(checked) => updateCampaignData({ enableLinkTracking: checked })}
                  />
                  <Label htmlFor="enable-link-tracking">Track link clicks</Label>
                </div>

                {campaignData.type === "email" && (
                  <div className="flex items-center space-x-2 ml-6">
                    <Switch
                      id="enable-open-tracking"
                      checked={campaignData.enableOpenTracking}
                      onCheckedChange={(checked) => updateCampaignData({ enableOpenTracking: checked })}
                    />
                    <Label htmlFor="enable-open-tracking">Track email opens</Label>
                  </div>
                )}
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
