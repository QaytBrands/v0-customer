"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

// Define the types for our campaign data
export type CampaignType = "email" | "sms" | "whatsapp"

export type Segment = {
  id: string
  name: string
  count: number
  description: string
}

export type EmailTemplate = {
  id: string
  name: string
  subject: string
  preheader?: string
  content: string
  thumbnail: string
}

export type SMSTemplate = {
  id: string
  name: string
  content: string
}

export type WhatsAppTemplate = {
  id: string
  name: string
  category: string
  components: Array<{
    type: string
    text?: string
    format?: string
    parameters?: Array<{
      type: string
      text?: string
    }>
  }>
  status: string
}

export type ABTestVariant = {
  id: string
  name: string
  subject?: string
  content: string
  weight: number
}

export type ScheduleType = "immediate" | "scheduled" | "optimal"

export type CampaignData = {
  // Basic info
  name: string
  description?: string
  type: CampaignType

  // Content
  subject?: string
  preheader?: string
  content: string
  templateId?: string

  // SMS specific
  smsContent?: string

  // WhatsApp specific
  whatsappTemplateId?: string
  whatsappTemplateParams?: Record<string, string>

  // Audience
  segmentIds: string[]
  estimatedReach: number

  // A/B Testing
  enableABTesting: boolean
  abTestVariants?: ABTestVariant[]
  testingMetric?: "opens" | "clicks" | "conversions"
  testDuration?: number

  // Scheduling
  scheduleType: ScheduleType
  scheduledTime?: Date
  timeZoneOptimization?: boolean

  // Tracking
  enableTracking: boolean
  enableLinkTracking: boolean
  enableOpenTracking?: boolean
  utmParameters?: {
    source?: string
    medium?: string
    campaign?: string
    term?: string
    content?: string
  }
}

type CampaignContextType = {
  campaignData: CampaignData
  updateCampaignData: (data: Partial<CampaignData>) => void
  currentStep: number
  setCurrentStep: (step: number) => void
  isValid: (step: number) => boolean
  segments: Segment[]
  emailTemplates: EmailTemplate[]
  smsTemplates: SMSTemplate[]
  whatsappTemplates: WhatsAppTemplate[]
}

const defaultCampaignData: CampaignData = {
  name: "",
  type: "email",
  content: "",
  segmentIds: [],
  estimatedReach: 0,
  enableABTesting: false,
  scheduleType: "immediate",
  enableTracking: true,
  enableLinkTracking: true,
}

const CampaignContext = createContext<CampaignContextType | undefined>(undefined)

export function CampaignProvider({ children }: { children: ReactNode }) {
  const [campaignData, setCampaignData] = useState<CampaignData>(defaultCampaignData)
  const [currentStep, setCurrentStep] = useState(0)

  // Sample data for segments and templates
  const segments: Segment[] = [
    { id: "all", name: "All Subscribers", count: 24892, description: "All active subscribers in your database" },
    { id: "active", name: "Active Users", count: 18547, description: "Users who have been active in the last 30 days" },
    {
      id: "inactive",
      name: "Inactive Users",
      count: 6345,
      description: "Users who haven't been active in the last 30 days",
    },
    { id: "new", name: "New Subscribers", count: 1234, description: "Users who subscribed in the last 7 days" },
    { id: "high-value", name: "High Value Customers", count: 3456, description: "Customers with high lifetime value" },
  ]

  const emailTemplates: EmailTemplate[] = [
    {
      id: "newsletter",
      name: "Monthly Newsletter",
      subject: "Your Monthly Update from {{company_name}}",
      preheader: "The latest news, updates, and offers just for you",
      content: "<h1>Monthly Newsletter</h1><p>Hello {{first_name}},</p><p>Here are the latest updates...</p>",
      thumbnail: "/placeholder.svg?height=150&width=250&text=Newsletter",
    },
    {
      id: "welcome",
      name: "Welcome Email",
      subject: "Welcome to {{company_name}}!",
      preheader: "We're excited to have you join us",
      content: "<h1>Welcome!</h1><p>Hello {{first_name}},</p><p>Thank you for joining us...</p>",
      thumbnail: "/placeholder.svg?height=150&width=250&text=Welcome",
    },
    {
      id: "promotion",
      name: "Promotional Offer",
      subject: "Special Offer Just for You: {{offer_details}}",
      preheader: "Limited time offer - Don't miss out!",
      content: "<h1>Special Offer</h1><p>Hello {{first_name}},</p><p>We have a special offer just for you...</p>",
      thumbnail: "/placeholder.svg?height=150&width=250&text=Promotion",
    },
  ]

  const smsTemplates: SMSTemplate[] = [
    {
      id: "welcome-sms",
      name: "Welcome Message",
      content:
        "Welcome to {{company_name}}! We're excited to have you on board. Reply HELP for assistance or STOP to unsubscribe.",
    },
    {
      id: "promo-sms",
      name: "Promotional Offer",
      content:
        "{{offer_details}} - Use code {{promo_code}} at checkout to save! Valid until {{expiry_date}}. Reply STOP to opt out.",
    },
    {
      id: "reminder-sms",
      name: "Appointment Reminder",
      content:
        "Reminder: You have an appointment scheduled for {{date}} at {{time}}. Reply C to confirm or R to reschedule.",
    },
  ]

  const whatsappTemplates: WhatsAppTemplate[] = [
    {
      id: "welcome_message",
      name: "Welcome Message",
      category: "MARKETING",
      components: [
        {
          type: "HEADER",
          text: "Welcome to Our Platform!",
        },
        {
          type: "BODY",
          text: "Hello {{1}}, welcome to our platform! We're excited to have you join us. You can explore our services by visiting our website or replying to this message.",
        },
      ],
      status: "APPROVED",
    },
    {
      id: "order_update",
      name: "Order Update",
      category: "UTILITY",
      components: [
        {
          type: "HEADER",
          text: "Order Status Update",
        },
        {
          type: "BODY",
          text: "Hello {{1}}, your order #{{2}} has been {{3}}. You can track your order at any time by clicking the link below.",
        },
      ],
      status: "APPROVED",
    },
    {
      id: "appointment_reminder",
      name: "Appointment Reminder",
      category: "UTILITY",
      components: [
        {
          type: "HEADER",
          text: "Appointment Reminder",
        },
        {
          type: "BODY",
          text: "Hello {{1}}, this is a reminder that you have an appointment scheduled for {{2}} at {{3}}. Please reply CONFIRM to confirm your appointment or RESCHEDULE if you need to change it.",
        },
      ],
      status: "APPROVED",
    },
  ]

  const updateCampaignData = (data: Partial<CampaignData>) => {
    setCampaignData((prev) => ({ ...prev, ...data }))
  }

  const isValid = (step: number): boolean => {
    switch (step) {
      case 0: // Basic info
        return !!campaignData.name && campaignData.name.length > 0
      case 1: // Content
        if (campaignData.type === "email") {
          return !!campaignData.subject && !!campaignData.content
        } else if (campaignData.type === "sms") {
          return !!campaignData.smsContent && campaignData.smsContent.length > 0
        } else if (campaignData.type === "whatsapp") {
          return !!campaignData.whatsappTemplateId
        }
        return false
      case 2: // Audience
        return campaignData.segmentIds.length > 0
      case 3: // A/B Testing
        if (campaignData.enableABTesting) {
          return !!campaignData.abTestVariants && campaignData.abTestVariants.length >= 2
        }
        return true
      case 4: // Scheduling
        if (campaignData.scheduleType === "scheduled") {
          return !!campaignData.scheduledTime
        }
        return true
      default:
        return true
    }
  }

  return (
    <CampaignContext.Provider
      value={{
        campaignData,
        updateCampaignData,
        currentStep,
        setCurrentStep,
        isValid,
        segments,
        emailTemplates,
        smsTemplates,
        whatsappTemplates,
      }}
    >
      {children}
    </CampaignContext.Provider>
  )
}

export function useCampaign() {
  const context = useContext(CampaignContext)
  if (context === undefined) {
    throw new Error("useCampaign must be used within a CampaignProvider")
  }
  return context
}
