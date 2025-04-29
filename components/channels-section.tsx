import Image from "next/image"
import { Mail, MessageSquare, Phone, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ChannelsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Communication Channels
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Reach customers on their preferred channels
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Meet your customers where they are with our multi-channel communication platform.
            </p>
          </div>
        </div>

        <Tabs defaultValue="email" className="mt-12">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
            <TabsTrigger value="email" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Email
            </TabsTrigger>
            <TabsTrigger value="sms" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              SMS
            </TabsTrigger>
            <TabsTrigger value="whatsapp" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              WhatsApp
            </TabsTrigger>
          </TabsList>
          <TabsContent value="email" className="mt-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Powerful Email Marketing</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Drag-and-drop email builder with responsive templates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>A/B testing to optimize open and click rates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Advanced personalization and dynamic content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Deliverability optimization and spam testing</span>
                  </li>
                </ul>
                <Button className="mt-4">Learn more about Email</Button>
              </div>
              <div className="relative rounded-lg border bg-background p-2 shadow-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Email+Builder+Interface"
                  width={600}
                  height={400}
                  alt="Email Builder Interface"
                  className="rounded-md w-full"
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="sms" className="mt-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Direct SMS Marketing</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Two-way SMS conversations with customers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Short links and UTM tracking for campaigns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Scheduled and triggered SMS campaigns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Global coverage with local numbers</span>
                  </li>
                </ul>
                <Button className="mt-4">Learn more about SMS</Button>
              </div>
              <div className="relative rounded-lg border bg-background p-2 shadow-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=SMS+Campaign+Dashboard"
                  width={600}
                  height={400}
                  alt="SMS Campaign Dashboard"
                  className="rounded-md w-full"
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="whatsapp" className="mt-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">WhatsApp Business Messaging</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Rich media messages with images, videos, and files</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Interactive buttons and list messages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>WhatsApp chatbots with AI-powered responses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Official WhatsApp Business API integration</span>
                  </li>
                </ul>
                <Button className="mt-4">Learn more about WhatsApp</Button>
              </div>
              <div className="relative rounded-lg border bg-background p-2 shadow-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=WhatsApp+Business+Interface"
                  width={600}
                  height={400}
                  alt="WhatsApp Business Interface"
                  className="rounded-md w-full"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
