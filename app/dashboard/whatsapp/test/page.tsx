import { WhatsAppTestSender } from "@/components/whatsapp-test-sender"

export default function WhatsAppTestPage() {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-6">WhatsApp Cloud API Test</h1>
      <div className="max-w-2xl mx-auto">
        <WhatsAppTestSender />
      </div>
    </div>
  )
}
