import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function SegmentationSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[600px_1fr] lg:gap-12 xl:grid-cols-[700px_1fr]">
          <div className="relative flex items-center justify-center order-last lg:order-first">
            <div className="relative w-full overflow-hidden rounded-lg border bg-background shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=800&text=Customer+Segmentation+Interface"
                width={800}
                height={600}
                alt="Customer Segmentation Interface"
                className="w-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Segmentation</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Target the right audience with precision
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Create highly targeted segments based on customer data, behavior, and engagement history to deliver
                personalized communications that convert.
              </p>
            </div>
            <ul className="grid gap-3">
              <li className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle className="h-4 w-4 text-primary" />
                </div>
                <span>Dynamic segments that update in real-time</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle className="h-4 w-4 text-primary" />
                </div>
                <span>Behavioral targeting based on website and app activity</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle className="h-4 w-4 text-primary" />
                </div>
                <span>RFM analysis (Recency, Frequency, Monetary value)</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle className="h-4 w-4 text-primary" />
                </div>
                <span>Predictive segments using AI to identify high-value customers</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle className="h-4 w-4 text-primary" />
                </div>
                <span>Custom fields and tags for advanced segmentation</span>
              </li>
            </ul>
            <div>
              <Button className="mt-4" asChild>
                <a href="/features/segmentation">
                  Explore Segmentation Features
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
