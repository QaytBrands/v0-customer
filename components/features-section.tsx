import { CheckCircle, BarChart2, Users, Zap, Layers, Globe } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      title: "Omnichannel Communication",
      description:
        "Reach your customers through their preferred channels - Email, SMS, or WhatsApp - all from a single platform.",
    },
    {
      icon: <BarChart2 className="h-10 w-10 text-primary" />,
      title: "Advanced Analytics",
      description:
        "Track engagement, conversion rates, and ROI across all channels with comprehensive reporting tools.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Customer Segmentation",
      description: "Create targeted audiences based on behavior, demographics, and engagement history.",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Powerful Automation",
      description: "Set up triggered campaigns, drip sequences, and personalized journeys that convert.",
    },
    {
      icon: <Layers className="h-10 w-10 text-primary" />,
      title: "Seamless Integrations",
      description: "Connect with your existing tech stack including CRM, e-commerce, and customer support tools.",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Global Compliance",
      description: "Stay compliant with GDPR, CCPA, and other regulations with built-in consent management.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Core Features</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Everything you need for effective customer communication
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform combines powerful features to help you connect with your customers at scale while maintaining
              a personal touch.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-start space-y-3 rounded-lg border p-6 shadow-sm">
              {feature.icon}
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
