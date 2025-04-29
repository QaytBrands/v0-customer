import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Zap, Clock, Workflow, GitBranch } from "lucide-react"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"

export default function AutomationPage() {
  const useCases = [
    {
      title: "Welcome Series",
      description:
        "Automatically send a series of onboarding emails when a new user signs up, introducing your product features gradually.",
      icon: <Zap className="h-10 w-10 text-primary" />,
    },
    {
      title: "Abandoned Cart Recovery",
      description:
        "Trigger a sequence of reminders via email, followed by SMS if no action is taken, to recover abandoned shopping carts.",
      icon: <Clock className="h-10 w-10 text-primary" />,
    },
    {
      title: "Post-Purchase Follow-up",
      description:
        "Send thank you messages, delivery updates, and request reviews through a combination of email and WhatsApp.",
      icon: <Workflow className="h-10 w-10 text-primary" />,
    },
    {
      title: "Re-engagement Campaign",
      description:
        "Target inactive customers with personalized offers based on their past behavior to bring them back to your platform.",
      icon: <GitBranch className="h-10 w-10 text-primary" />,
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
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_700px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Automation</div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Automate your customer journeys
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Create sophisticated customer journeys that respond to behavior in real-time. Set up once and let
                    our platform handle the rest.
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

        {/* Visual Journey Builder Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[600px_1fr] lg:gap-12 xl:grid-cols-[700px_1fr]">
              <div className="relative flex items-center justify-center order-last lg:order-first">
                <div className="relative w-full overflow-hidden rounded-lg border bg-background shadow-xl">
                  <Image
                    src="/placeholder.svg?height=600&width=800&text=Visual+Journey+Builder"
                    width={800}
                    height={600}
                    alt="Visual Journey Builder Interface"
                    className="w-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                    Visual Journey Builder
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Design customer journeys with intuitive drag-and-drop
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our visual workflow builder makes it easy to create complex customer journeys without any coding
                    knowledge.
                  </p>
                </div>
                <ul className="grid gap-3">
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span>Intuitive drag-and-drop interface for building workflows</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span>Pre-built templates for common automation scenarios</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span>Real-time visualization of customer journey paths</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span>Easy duplication and modification of existing workflows</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Trigger-based Workflows Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_700px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                    Trigger-based Workflows
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Respond to customer actions in real-time
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Set up automated workflows that trigger based on specific customer actions or events, ensuring
                    timely and relevant communication.
                  </p>
                </div>
                <ul className="grid gap-3">
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span>Behavioral triggers (page visits, product views, clicks)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span>Transactional triggers (purchases, cart abandonment, refunds)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span>Time-based triggers (anniversaries, birthdays, renewals)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span>Custom event triggers via API for unique business needs</span>
                  </li>
                </ul>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="relative w-full overflow-hidden rounded-lg border bg-background shadow-xl">
                  <Image
                    src="/placeholder.svg?height=600&width=800&text=Trigger+Configuration"
                    width={800}
                    height={600}
                    alt="Trigger Configuration Interface"
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Multi-channel Sequences Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[600px_1fr] lg:gap-12 xl:grid-cols-[700px_1fr]">
              <div className="relative flex items-center justify-center order-last lg:order-first">
                <div className="relative w-full overflow-hidden rounded-lg border bg-background shadow-xl">
                  <Image
                    src="/placeholder.svg?height=600&width=800&text=Multi-channel+Sequences"
                    width={800}
                    height={600}
                    alt="Multi-channel Sequence Builder"
                    className="w-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                    Multi-channel Sequences
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Seamlessly communicate across channels
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Create cohesive customer journeys that span across email, SMS, and WhatsApp to reach customers on
                    their preferred channels.
                  </p>
                </div>
                <ul className="grid gap-3">
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span>Unified workflow builder for all communication channels</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span>Channel-specific content optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span>Fallback options if preferred channel is unavailable</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span>Consistent messaging and branding across all channels</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Conditional Logic Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_700px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                    Conditional Logic
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Create personalized paths based on customer behavior
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Build dynamic workflows that adapt to how customers interact with your messages, creating truly
                    personalized experiences.
                  </p>
                </div>
                <ul className="grid gap-3">
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span>IF/THEN/ELSE branching logic for sophisticated journeys</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span>Split testing with automatic winner selection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span>Wait steps with conditional time delays</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span>Dynamic content insertion based on user properties</span>
                  </li>
                </ul>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="relative w-full overflow-hidden rounded-lg border bg-background shadow-xl">
                  <Image
                    src="/placeholder.svg?height=600&width=800&text=Conditional+Logic+Builder"
                    width={800}
                    height={600}
                    alt="Conditional Logic Builder"
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Optimization Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[600px_1fr] lg:gap-12 xl:grid-cols-[700px_1fr]">
              <div className="relative flex items-center justify-center order-last lg:order-first">
                <div className="relative w-full overflow-hidden rounded-lg border bg-background shadow-xl">
                  <Image
                    src="/placeholder.svg?height=600&width=800&text=AI+Send+Time+Optimization"
                    width={800}
                    height={600}
                    alt="AI Send Time Optimization"
                    className="w-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                    AI-Powered Optimization
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Let AI maximize your message impact
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our AI algorithms analyze customer behavior to determine the optimal time to send messages for
                    maximum engagement.
                  </p>
                </div>
                <ul className="grid gap-3">
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span>Individual send time optimization based on past engagement</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span>Content recommendations for higher conversion rates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span>Channel preference prediction for optimal delivery</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span>Continuous learning and improvement from campaign results</span>
                  </li>
                </ul>
                <div>
                  <Button className="mt-4" asChild>
                    <Link href="/features/ai-optimization">
                      Learn more about AI features
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Use Cases</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Popular automation workflows</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover how businesses like yours are using our automation platform to drive results.
                </p>
              </div>
            </div>

            <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="flex flex-col space-y-3 rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-bold">{useCase.title}</h3>
                  <p className="text-muted-foreground">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to automate your customer communication?
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Start building powerful automation workflows that drive engagement and conversions.
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
