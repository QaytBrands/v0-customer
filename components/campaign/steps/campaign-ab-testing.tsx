"use client"

import { useState } from "react"
import { useCampaign } from "@/contexts/campaign-context"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Plus, Trash2 } from "lucide-react"

export function CampaignABTesting() {
  const { campaignData, updateCampaignData } = useCampaign()
  const [activeVariant, setActiveVariant] = useState("A")

  const toggleABTesting = (enabled: boolean) => {
    if (enabled && !campaignData.abTestVariants) {
      // Initialize with two variants if enabling
      const variants = [
        {
          id: "A",
          name: "Variant A",
          subject: campaignData.subject,
          content: campaignData.content,
          weight: 50,
        },
        {
          id: "B",
          name: "Variant B",
          subject: campaignData.subject,
          content: campaignData.content,
          weight: 50,
        },
      ]
      updateCampaignData({
        enableABTesting: true,
        abTestVariants: variants,
        testingMetric: "opens",
      })
    } else {
      updateCampaignData({ enableABTesting: enabled })
    }
  }

  const updateVariant = (variantId: string, data: Partial<any>) => {
    if (!campaignData.abTestVariants) return

    const updatedVariants = campaignData.abTestVariants.map((variant) =>
      variant.id === variantId ? { ...variant, ...data } : variant,
    )

    updateCampaignData({ abTestVariants: updatedVariants })
  }

  const addVariant = () => {
    if (!campaignData.abTestVariants) return

    const newVariantId = String.fromCharCode(65 + campaignData.abTestVariants.length) // A, B, C, etc.
    const newVariant = {
      id: newVariantId,
      name: `Variant ${newVariantId}`,
      subject: campaignData.subject,
      content: campaignData.content,
      weight: Math.floor(100 / (campaignData.abTestVariants.length + 1)),
    }

    // Adjust weights of all variants
    const adjustedVariants = campaignData.abTestVariants.map((variant) => ({
      ...variant,
      weight: Math.floor(
        variant.weight * (campaignData.abTestVariants!.length / (campaignData.abTestVariants!.length + 1)),
      ),
    }))

    updateCampaignData({
      abTestVariants: [...adjustedVariants, newVariant],
    })

    setActiveVariant(newVariantId)
  }

  const removeVariant = (variantId: string) => {
    if (!campaignData.abTestVariants || campaignData.abTestVariants.length <= 2) return

    const remainingVariants = campaignData.abTestVariants.filter((v) => v.id !== variantId)

    // Redistribute weights
    const totalWeight = remainingVariants.reduce((sum, v) => sum + v.weight, 0)
    const adjustedVariants = remainingVariants.map((variant) => ({
      ...variant,
      weight: Math.floor(variant.weight * (100 / totalWeight)),
    }))

    updateCampaignData({ abTestVariants: adjustedVariants })

    if (activeVariant === variantId) {
      setActiveVariant(adjustedVariants[0].id)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">A/B Testing</h2>
        <p className="text-muted-foreground">Test different versions of your campaign to optimize performance</p>
      </div>

      <div className="flex items-center space-x-2">
        <Switch id="enable-ab-testing" checked={campaignData.enableABTesting} onCheckedChange={toggleABTesting} />
        <Label htmlFor="enable-ab-testing">Enable A/B Testing</Label>
      </div>

      {campaignData.enableABTesting && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Test Configuration</CardTitle>
              <CardDescription>Define what you want to test and how to measure success</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>What do you want to test?</Label>
                <RadioGroup
                  value={campaignData.type === "email" ? "subject-content" : "content"}
                  onValueChange={(value) => {}}
                  className="flex flex-col space-y-1"
                >
                  {campaignData.type === "email" && (
                    <>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="subject" id="subject" />
                        <Label htmlFor="subject">Subject Line Only</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="content" id="content" />
                        <Label htmlFor="content">Content Only</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="subject-content" id="subject-content" />
                        <Label htmlFor="subject-content">Subject Line and Content</Label>
                      </div>
                    </>
                  )}
                  {campaignData.type !== "email" && (
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="content" id="content" />
                      <Label htmlFor="content">Message Content</Label>
                    </div>
                  )}
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label>Testing Metric</Label>
                <RadioGroup
                  value={campaignData.testingMetric || "opens"}
                  onValueChange={(value) => updateCampaignData({ testingMetric: value })}
                  className="flex flex-col space-y-1"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="opens" id="opens" />
                    <Label htmlFor="opens">Open Rate</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="clicks" id="clicks" />
                    <Label htmlFor="clicks">Click Rate</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="conversions" id="conversions" />
                    <Label htmlFor="conversions">Conversion Rate</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label>Test Duration</Label>
                <RadioGroup
                  value={String(campaignData.testDuration || "4")}
                  onValueChange={(value) => updateCampaignData({ testDuration: Number.parseInt(value) })}
                  className="flex flex-col space-y-1"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="4" id="hours-4" />
                    <Label htmlFor="hours-4">4 hours</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="12" id="hours-12" />
                    <Label htmlFor="hours-12">12 hours</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="24" id="hours-24" />
                    <Label htmlFor="hours-24">24 hours</Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Test Variants</h3>
              <Button
                variant="outline"
                size="sm"
                onClick={addVariant}
                disabled={campaignData.abTestVariants && campaignData.abTestVariants.length >= 5}
              >
                <Plus className="mr-2 h-4 w-4" />
                Add Variant
              </Button>
            </div>

            <Tabs value={activeVariant} onValueChange={setActiveVariant}>
              <TabsList className="w-full">
                {campaignData.abTestVariants?.map((variant) => (
                  <TabsTrigger key={variant.id} value={variant.id} className="flex-1">
                    {variant.name}
                    {campaignData.abTestVariants!.length > 2 && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="ml-2 h-4 w-4"
                        onClick={(e) => {
                          e.stopPropagation()
                          removeVariant(variant.id)
                        }}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    )}
                  </TabsTrigger>
                ))}
              </TabsList>

              {campaignData.abTestVariants?.map((variant) => (
                <TabsContent key={variant.id} value={variant.id} className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor={`variant-${variant.id}-name`}>Variant Name</Label>
                    <Input
                      id={`variant-${variant.id}-name`}
                      value={variant.name}
                      onChange={(e) => updateVariant(variant.id, { name: e.target.value })}
                    />
                  </div>

                  {campaignData.type === "email" && (
                    <div className="space-y-2">
                      <Label htmlFor={`variant-${variant.id}-subject`}>Subject Line</Label>
                      <Input
                        id={`variant-${variant.id}-subject`}
                        value={variant.subject || ""}
                        onChange={(e) => updateVariant(variant.id, { subject: e.target.value })}
                      />
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor={`variant-${variant.id}-content`}>
                      {campaignData.type === "email" ? "Email Content" : "Message Content"}
                    </Label>
                    <Textarea
                      id={`variant-${variant.id}-content`}
                      value={variant.content || ""}
                      onChange={(e) => updateVariant(variant.id, { content: e.target.value })}
                      rows={6}
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor={`variant-${variant.id}-weight`}>Traffic Allocation</Label>
                      <span className="text-sm">{variant.weight}%</span>
                    </div>
                    <Slider
                      id={`variant-${variant.id}-weight`}
                      min={5}
                      max={95}
                      step={5}
                      value={[variant.weight]}
                      onValueChange={(value) => {
                        // Adjust other variants proportionally
                        if (!campaignData.abTestVariants) return

                        const newWeight = value[0]
                        const weightDiff = newWeight - variant.weight
                        const otherVariants = campaignData.abTestVariants.filter((v) => v.id !== variant.id)
                        const totalOtherWeight = otherVariants.reduce((sum, v) => sum + v.weight, 0)

                        const adjustedVariants = campaignData.abTestVariants.map((v) => {
                          if (v.id === variant.id) {
                            return { ...v, weight: newWeight }
                          } else {
                            const adjustmentFactor = (totalOtherWeight - weightDiff) / totalOtherWeight
                            return { ...v, weight: Math.max(5, Math.floor(v.weight * adjustmentFactor)) }
                          }
                        })

                        // Ensure total is 100%
                        const total = adjustedVariants.reduce((sum, v) => sum + v.weight, 0)
                        if (total !== 100) {
                          const diff = 100 - total
                          const lastVariant = adjustedVariants.find((v) => v.id !== variant.id)
                          if (lastVariant) {
                            lastVariant.weight += diff
                          }
                        }

                        updateCampaignData({ abTestVariants: adjustedVariants })
                      }}
                    />
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      )}

      {!campaignData.enableABTesting && (
        <Card>
          <CardContent className="p-8 text-center">
            <p className="text-muted-foreground">
              A/B testing is disabled. Enable it to test different versions of your campaign.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
