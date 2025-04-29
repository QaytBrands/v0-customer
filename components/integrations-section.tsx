import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function IntegrationsSection() {
  const integrations = [
    { name: "Shopify", logo: "/placeholder.svg?height=60&width=60&text=Shopify" },
    { name: "Salesforce", logo: "/placeholder.svg?height=60&width=60&text=Salesforce" },
    { name: "HubSpot", logo: "/placeholder.svg?height=60&width=60&text=HubSpot" },
    { name: "Stripe", logo: "/placeholder.svg?height=60&width=60&text=Stripe" },
    { name: "Zapier", logo: "/placeholder.svg?height=60&width=60&text=Zapier" },
    { name: "Zendesk", logo: "/placeholder.svg?height=60&width=60&text=Zendesk" },
    { name: "WooCommerce", logo: "/placeholder.svg?height=60&width=60&text=WooCommerce" },
    { name: "Magento", logo: "/placeholder.svg?height=60&width=60&text=Magento" },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Integrations</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Connect with your favorite tools</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform seamlessly integrates with your existing tech stack to create a unified customer data
              platform.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:gap-8">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center rounded-lg border bg-background p-4 shadow-sm transition-all hover:shadow-md"
            >
              <Image
                src={integration.logo || "/placeholder.svg"}
                width={60}
                height={60}
                alt={`${integration.name} logo`}
                className="mb-3"
              />
              <span className="text-sm font-medium">{integration.name}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button size="lg" variant="outline" asChild>
            <a href="/integrations">
              View All Integrations
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
