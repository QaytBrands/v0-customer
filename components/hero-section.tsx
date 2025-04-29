import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_700px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Unified Customer Communication Platform
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Connect with your customers across Email, SMS, and WhatsApp with a single powerful platform. Automate,
                segment, and scale your communications.
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
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="inline-block h-8 w-8 rounded-full border-2 border-background bg-muted overflow-hidden"
                    >
                      <Image
                        src={`/placeholder.svg?height=32&width=32&text=${i}`}
                        width={32}
                        height={32}
                        alt={`User ${i}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <span className="ml-2 text-muted-foreground">Trusted by 1000+ companies</span>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="relative w-full overflow-hidden rounded-lg border bg-background shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=800&text=Platform+Dashboard"
                width={800}
                height={600}
                alt="Platform Dashboard"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
