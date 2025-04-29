import Image from "next/image"
import { Star } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "ConnectPulse has transformed how we communicate with our customers. The ability to seamlessly switch between channels has increased our engagement rates by 45%.",
      author: "Sarah Johnson",
      title: "Marketing Director",
      company: "Retail Innovations",
      avatar: "/placeholder.svg?height=64&width=64&text=SJ",
    },
    {
      quote:
        "The automation capabilities are game-changing. We've set up customer journeys that feel personal but require minimal maintenance from our team.",
      author: "Michael Chen",
      title: "Growth Lead",
      company: "TechStart",
      avatar: "/placeholder.svg?height=64&width=64&text=MC",
    },
    {
      quote:
        "The segmentation tools allow us to target customers with surgical precision. Our conversion rates have doubled since implementing ConnectPulse.",
      author: "Jessica Williams",
      title: "E-commerce Manager",
      company: "Fashion Forward",
      avatar: "/placeholder.svg?height=64&width=64&text=JW",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Trusted by innovative companies</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See what our customers are saying about how ConnectPulse has transformed their communication strategy.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
              <div className="space-y-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground">"{testimonial.quote}"</p>
              </div>
              <div className="mt-6 flex items-center space-x-3">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  width={48}
                  height={48}
                  alt={testimonial.author}
                  className="rounded-full"
                />
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.title}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
