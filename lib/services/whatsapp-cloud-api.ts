"use server"

// Types for WhatsApp Cloud API
export interface WhatsAppCloudConfig {
  accessToken: string
  phoneNumberId: string
  businessAccountId: string
}

export interface WhatsAppTemplate {
  name: string
  language: string
  components: {
    type: string
    parameters?: Array<{
      type: string
      text?: string
      image?: { link: string }
    }>
  }[]
}

export interface WhatsAppMessage {
  to: string
  type: "template" | "text"
  template?: WhatsAppTemplate
  text?: { body: string }
}

// Function to send a test message using WhatsApp Cloud API
export async function sendTestMessage(config: WhatsAppCloudConfig, recipient: string): Promise<any> {
  try {
    const url = `https://graph.facebook.com/v18.0/${config.phoneNumberId}/messages`

    // This is a test message using the hello_world template that's available in all test accounts
    const payload = {
      messaging_product: "whatsapp",
      to: recipient,
      type: "template",
      template: {
        name: "hello_world",
        language: {
          code: "en_US",
        },
      },
    }

    console.log("Sending test message to WhatsApp API:", url)
    console.log("Payload:", JSON.stringify(payload, null, 2))

    // Make the actual API call
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.accessToken}`,
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error("WhatsApp API error:", errorData)
      throw new Error(`WhatsApp API error: ${errorData.error?.message || response.statusText}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error sending WhatsApp test message:", error)
    throw error
  }
}

// Function to get test templates available in the sandbox
export async function getTestTemplates(config: WhatsAppCloudConfig): Promise<any> {
  try {
    const url = `https://graph.facebook.com/v18.0/${config.businessAccountId}/message_templates`

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${config.accessToken}`,
      },
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(`Failed to fetch templates: ${errorData.error?.message || response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error getting WhatsApp templates:", error)

    // Fallback to default templates if API call fails
    return {
      data: [
        {
          name: "hello_world",
          components: [
            {
              type: "BODY",
              text: "Hello! This is a test message from the WhatsApp Cloud API.",
            },
          ],
          language: "en_US",
          status: "APPROVED",
          category: "UTILITY",
        },
      ],
    }
  }
}
