import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AutomationSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_700px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Automation</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Automate your customer journeys</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Create sophisticated customer journeys that respond to behavior in real-time. Set up once and let our
                platform handle the rest.
              </p>
            </div>
            <ul className="grid gap-3">
              <li className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle className="h-4 w-4 text-primary" />
                </div>
                <span>Visual journey builder with drag-and-drop interface</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle className="h-4 w-4 text-primary" />
                </div>
                <span>Trigger-based workflows (signup, purchase, abandonment)</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle className="h-4 w-4 text-primary" />
                </div>
                <span>Multi-channel sequences across email, SMS, and WhatsApp</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle className="h-4 w-4 text-primary" />
                </div>
                <span>Conditional logic based on customer actions</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle className="h-4 w-4 text-primary" />
                </div>
                <span>AI-powered optimization for best send times</span>
              </li>
            </ul>
            <div>
              <Button className="mt-4" asChild>
                <a href="/features/automation">
                  Explore Automation Features
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="relative w-full overflow-hidden rounded-lg border bg-background shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=800&text=Automation+Workflow+Builder"
                width={800}
                height={600}
                alt="Automation Workflow Builder"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
