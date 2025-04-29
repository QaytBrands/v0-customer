import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      title: "CEO & Co-Founder",
      bio: "Former marketing executive with 15+ years of experience in customer communication strategies.",
      avatar: "/placeholder.svg?height=300&width=300&text=SJ",
    },
    {
      name: "Michael Chen",
      title: "CTO & Co-Founder",
      bio: "Tech innovator with background in AI and messaging platforms at leading tech companies.",
      avatar: "/placeholder.svg?height=300&width=300&text=MC",
    },
    {
      name: "Jessica Williams",
      title: "Chief Product Officer",
      bio: "Product visionary focused on creating intuitive user experiences that drive results.",
      avatar: "/placeholder.svg?height=300&width=300&text=JW",
    },
    {
      name: "David Rodriguez",
      title: "VP of Customer Success",
      bio: "Customer advocate ensuring clients get maximum value from our platform.",
      avatar: "/placeholder.svg?height=300&width=300&text=DR",
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
            <Link href="/features" className="font-medium">
              Features
            </Link>
            <Link href="/pricing" className="font-medium">
              Pricing
            </Link>
            <Link href="/about" className="font-medium text-primary">
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
            <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_700px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Our mission is to transform customer communication
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We're building the future of customer engagement by unifying communication channels and making
                    powerful marketing tools accessible to businesses of all sizes.
                  </p>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="relative w-full overflow-hidden rounded-lg border bg-background shadow-xl">
                  <Image
                    src="/placeholder.svg?height=600&width=800&text=Team+Photo"
                    width={800}
                    height={600}
                    alt="ConnectPulse Team"
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Our Story</h2>
              </div>
            </div>
            <div className="mx-auto mt-8 max-w-3xl space-y-6 text-center">
              <p className="text-muted-foreground md:text-lg/relaxed">
                ConnectPulse was founded in 2018 by Sarah Johnson and Michael Chen, who saw a gap in the market for a
                truly integrated customer communication platform. Having worked at various marketing and technology
                companies, they experienced firsthand the frustration of using disconnected tools for email, SMS, and
                messaging apps.
              </p>
              <p className="text-muted-foreground md:text-lg/relaxed">
                They set out to build a platform that would unify these channels, making it easier for businesses to
                create cohesive customer journeys across multiple touchpoints. What started as a simple email marketing
                tool has evolved into a comprehensive communication platform used by thousands of businesses worldwide.
              </p>
              <p className="text-muted-foreground md:text-lg/relaxed">
                Today, ConnectPulse is a team of over 100 passionate individuals dedicated to helping businesses build
                meaningful connections with their customers. Our platform processes billions of messages monthly across
                email, SMS, and WhatsApp, helping our clients drive engagement, conversions, and loyalty.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Our Values</h2>
              </div>
            </div>
            <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-3 rounded-lg border p-6 text-center shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M18 6 7 17l-5-5" />
                    <path d="m22 10-7.5 7.5L13 16" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Customer First</h3>
                <p className="text-muted-foreground">
                  We build our products with our customers' needs at the center of every decision.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 rounded-lg border p-6 text-center shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Innovation</h3>
                <p className="text-muted-foreground">
                  We constantly push boundaries to create solutions that drive the industry forward.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 rounded-lg border p-6 text-center shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                    <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Transparency</h3>
                <p className="text-muted-foreground">
                  We believe in open communication with our customers, partners, and team members.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 rounded-lg border p-6 text-center shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Inclusivity</h3>
                <p className="text-muted-foreground">
                  We embrace diversity and create products that are accessible to businesses of all sizes.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 rounded-lg border p-6 text-center shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Security</h3>
                <p className="text-muted-foreground">
                  We prioritize the security and privacy of our customers' data in everything we do.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 rounded-lg border p-6 text-center shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
                    <path d="M10 2c1 .5 2 2 2 5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Sustainability</h3>
                <p className="text-muted-foreground">
                  We're committed to building a business that creates long-term value for all stakeholders.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Meet Our Leadership Team</h2>
              </div>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex flex-col items-center space-y-3">
                  <div className="overflow-hidden rounded-full">
                    <Image
                      src={member.avatar || "/placeholder.svg"}
                      width={150}
                      height={150}
                      alt={member.name}
                      className="aspect-square object-cover"
                    />
                  </div>
                  <div className="space-y-1 text-center">
                    <h3 className="font-bold">{member.name}</h3>
                    <p className="text-sm text-primary">{member.title}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
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
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Join Our Team</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We're always looking for talented individuals to join our mission of transforming customer
                  communication.
                </p>
              </div>
              <Button size="lg" asChild>
                <Link href="/careers">
                  View Open Positions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
