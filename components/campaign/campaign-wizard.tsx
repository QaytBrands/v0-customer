"use client"

import { useState } from "react"
import { Check, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CampaignProvider, useCampaign, type CampaignType } from "@/contexts/campaign-context"
import { CampaignBasicInfo } from "@/components/campaign/steps/campaign-basic-info"
import { CampaignContent } from "@/components/campaign/steps/campaign-content"
import { CampaignAudience } from "@/components/campaign/steps/campaign-audience"
import { CampaignABTesting } from "@/components/campaign/steps/campaign-ab-testing"
import { CampaignScheduling } from "@/components/campaign/steps/campaign-scheduling"
import { CampaignReview } from "@/components/campaign/steps/campaign-review"

type CampaignWizardProps = {
  campaignType: CampaignType
}

function CampaignWizardContent({ campaignType }: CampaignWizardProps) {
  const { currentStep, setCurrentStep, updateCampaignData, isValid } = useCampaign()

  // Initialize campaign type
  useState(() => {
    updateCampaignData({ type: campaignType })
  })

  const steps = [
    { id: 0, name: "Basic Info" },
    { id: 1, name: "Content" },
    { id: 2, name: "Audience" },
    { id: 3, name: "A/B Testing" },
    { id: 4, name: "Scheduling" },
    { id: 5, name: "Review" },
  ]

  const goToNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const goToStep = (step: number) => {
    // Only allow going to steps that are valid or previous steps
    if (step < currentStep || isValid(currentStep)) {
      setCurrentStep(step)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">
          Create {campaignType.charAt(0).toUpperCase() + campaignType.slice(1)} Campaign
        </h1>
      </div>

      <div className="flex space-x-2 overflow-auto pb-2">
        {steps.map((step) => (
          <Button
            key={step.id}
            variant={currentStep === step.id ? "default" : "outline"}
            className="flex items-center"
            onClick={() => goToStep(step.id)}
            disabled={step.id > currentStep && !isValid(currentStep)}
          >
            {step.id < currentStep ? (
              <Check className="mr-2 h-4 w-4" />
            ) : (
              <span className="mr-2 flex h-4 w-4 items-center justify-center rounded-full border">{step.id + 1}</span>
            )}
            {step.name}
          </Button>
        ))}
      </div>

      <Card className="p-6">
        {currentStep === 0 && <CampaignBasicInfo />}
        {currentStep === 1 && <CampaignContent />}
        {currentStep === 2 && <CampaignAudience />}
        {currentStep === 3 && <CampaignABTesting />}
        {currentStep === 4 && <CampaignScheduling />}
        {currentStep === 5 && <CampaignReview />}

        <div className="mt-6 flex justify-between">
          <Button variant="outline" onClick={goToPreviousStep} disabled={currentStep === 0}>
            Previous
          </Button>

          {currentStep < steps.length - 1 ? (
            <Button onClick={goToNextStep} disabled={!isValid(currentStep)}>
              Next
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button>Launch Campaign</Button>
          )}
        </div>
      </Card>
    </div>
  )
}

export function CampaignWizard(props: CampaignWizardProps) {
  return (
    <CampaignProvider>
      <CampaignWizardContent {...props} />
    </CampaignProvider>
  )
}
