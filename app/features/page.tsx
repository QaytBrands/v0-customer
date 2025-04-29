import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Mail, MessageSquare, Phone, Zap, Users, BarChart2, Layers, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"

export default function FeaturesPage() {
  const features = [
    {
      icon: <Mail className="h-10 w-10 text-primary" />,
      title: "Email Marketing",
      description:
        "Create beautiful, responsive emails with our drag-and-drop builder. A/B test campaigns, personalize content, and track performance.",
      link: "/features/email",
    },
    {
      icon: <Phone className="h-10 w-10 text-primary" />,
      title: "SMS Marketing",
      description:
        "Reach customers instantly with SMS campaigns. Schedule messages, create two-way conversations, and track engagement.",
      link: "/features/sms",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-primary" />,
      title: "WhatsApp Business",
      description:
        "Connect with customers on WhatsApp with rich media messages, interactive buttons, and automated responses.",
      link: "/features/whatsapp",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Automation",
      description:
        "Create sophisticated customer journeys with our visual workflow builder. Trigger campaigns based on behavior and engagement.",
      link: "/features/automation",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Segmentation",
      description:
        "Target the right audience with precision using behavioral, demographic, and engagement-based segmentation.",
      link: "/features/segmentation",
    },
    {
      icon: <BarChart2 className="h-10 w-10 text-primary" />,
      title: "Analytics & Reporting",
      description:
        "Track campaign performance with comprehensive analytics. Measure open rates, clicks, conversions, and ROI.",
      link: "/features/analytics",
    },
    {
      icon: <Layers className="h-10 w-10 text-primary" />,
      title: "Integrations",
      description: "Connect with your existing tech stack including CRM, e-commerce, and customer support tools.",
      link: "/features/integrations",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Compliance & Deliverability",
      description:
        "Stay compliant with global regulations like GDPR and CCPA. Optimize deliverability with our built-in tools.",
      link: "/features/compliance",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Image src="/placeholder.svg?height=32&width=32" width={32} height={32} alt="ConnectPulse Logo" />
            ConnectPulse
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="font-medium">
              Home
            </Link>
            <Link href="/features" className="font-medium text-primary">
              Features
            </Link>
            <Link href="/pricing" className="font-medium">
              Pricing
            </Link>
            <Link href="/about" className="font-medium">
              About
            </Link>
            <Link href="/contact" className="font-medium">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="font-medium text-sm">
              Login
            </Link>
            <Button asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Powerful features to grow your business
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover all the tools you need to create meaningful connections with your customers across multiple
                  channels.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href="/signup">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/demo">Request Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    {feature.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                  <div className="pt-4 mt-auto">
                    <Link href={feature.link} className="inline-flex items-center text-sm font-medium text-primary">
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to transform your customer communication?
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of businesses that use ConnectPulse to create meaningful connections with their
                  customers.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href="/signup">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/demo">Request Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
