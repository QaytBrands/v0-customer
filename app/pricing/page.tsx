import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Footer from "@/components/footer"

export default function PricingPage() {
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
            <Link href="/pricing" className="font-medium text-primary">
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
                  Simple, transparent pricing
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that's right for your business. All plans include a 14-day free trial.
                </p>
              </div>
            </div>

            <div className="mx-auto mt-12 max-w-5xl">
              <Tabs defaultValue="monthly" className="w-full">
                <div className="flex justify-center mb-8">
                  <TabsList>
                    <TabsTrigger value="monthly">Monthly</TabsTrigger>
                    <TabsTrigger value="annual">Annual (Save 20%)</TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent value="monthly">
                  <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
                    {/* Starter Plan */}
                    <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">Starter</h3>
                        <p className="text-sm text-muted-foreground">
                          Perfect for small businesses just getting started.
                        </p>
                      </div>
                      <div className="mt-4 flex items-baseline">
                        <span className="text-3xl font-bold">$49</span>
                        <span className="ml-1 text-sm font-medium text-muted-foreground">/month</span>
                      </div>
                      <ul className="mt-6 space-y-3 text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5" />
                          <span>Up to 5,000 contacts</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5" />
                          <span>Email marketing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5" />
                          <span>Basic SMS marketing (pay-as-you-go)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5" />
                          <span>Basic automation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5" />
                          <span>Standard support</span>
                        </li>
                      </ul>
                      <Button className="mt-8" asChild>
                        <Link href="/signup?plan=starter">Get Started</Link>
                      </Button>
                    </div>

                    {/* Growth Plan */}
                    <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm relative">
                      <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                        Most Popular
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">Growth</h3>
                        <p className="text-sm text-muted-foreground">For growing businesses with advanced needs.</p>
                      </div>
                      <div className="mt-4 flex items-baseline">
                        <span className="text-3xl font-bold">$149</span>
                        <span className="ml-1 text-sm font-medium text-muted-foreground">/month</span>
                      </div>
                      <ul className="mt-6 space-y-3 text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5" />
                          <span>Up to 25,000 contacts</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5" />
                          <span>Email marketing with advanced features</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5" />
                          <span>SMS marketing (1,000 messages included)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5" />
                          <span>WhatsApp Business API access</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5" />
                          <span>Advanced automation workflows</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5" />
                          <span>Priority support</span>
                        </li>
                      </ul>
                      <Button className="mt-8" asChild>
                        <Link href="/signup?plan=growth">Get Started</Link>
                      </Button>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">Enterprise</h3>
                        <p className="text-sm text-muted-foreground">
                          For large organizations with complex requirements.
                        </p>
                      </div>
                      <div className="mt-4 flex items-baseline">
                        <span className="text-3xl font-bold">Custom</span>
                      </div>
                      <ul className="mt-6 space-y-3 text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5" />
                          <span>Unlimited contacts</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5" />
                          <span>All channels with premium features</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5" />
                          <span>Custom SMS and WhatsApp volume</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5" />
                          <span>Advanced segmentation with AI</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5" />
                          <span>Custom integrations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5" />
                          <span>Dedicated account manager</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5" />
                          <span>24/7 premium support</span>
                        </li>
                      </ul>
                      <Button className="mt-8" variant="outline" asChild>
                        <Link href="/contact-sales">Contact Sales</Link>
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="annual">
                  <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
                    {/* Starter Plan Annual */}
                    <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">Starter</h3>
                        <p className="text-sm text-muted-foreground">
                          Perfect for small businesses just getting started.
                        </p>
                      </div>
                      <div className="mt-4 flex items-baseline">
                        <span className="text-3xl font-bold">$39</span>
                        <span className="ml-1 text-sm font-medium text-muted-foreground">/month</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Billed annually ($468)</p>
                      <ul className="mt-6 space-y-3 text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5" />
                          <span>Up to 5,000 contacts</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5" />
                          <span>Email marketing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5" />
                          <span>Basic SMS marketing (pay-as-you-go)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5" />
                          <span>Basic automation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5" />
                          <span>Standard support</span>
                        </li>
                      </ul>
                      <Button className="mt-8" asChild>
                        <Link href="/signup?plan=starter-annual">Get Started</Link>
                      </Button>
                    </div>

                    {/* Growth Plan Annual */}
                    <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm relative">
                      <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                        Most Popular
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">Growth</h3>
                        <p className="text-sm text-muted-foreground">For growing businesses with advanced needs.</p>
                      </div>
                      <div className="mt-4 flex items-baseline">
                        <span className="text-3xl font-bold">$119</span>
                        <span className="ml-1 text-sm font-medium text-muted-foreground">/month</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Billed annually ($1,428)</p>
                      <ul className="mt-6 space-y-3 text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5" />
                          <span>Up to 25,000 contacts</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5" />
                          <span>Email marketing with advanced features</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5" />
                          <span>SMS marketing (1,000 messages included)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5" />
                          <span>WhatsApp Business API access</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5" />
                          <span>Advanced automation workflows</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5" />
                          <span>Priority support</span>
                        </li>
                      </ul>
                      <Button className="mt-8" asChild>
                        <Link href="/signup?plan=growth-annual">Get Started</Link>
                      </Button>
                    </div>

                    {/* Enterprise Plan Annual */}
                    <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">Enterprise</h3>
                        <p className="text-sm text-muted-foreground">
                          For large organizations with complex requirements.
                        </p>
                      </div>
                      <div className="mt-4 flex items-baseline">
                        <span className="text-3xl font-bold">Custom</span>
                      </div>
                      <ul className="mt-6 space-y-3 text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5" />
                          <span>Unlimited contacts</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5" />
                          <span>All channels with premium features</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5" />
                          <span>Custom SMS and WhatsApp volume</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5" />
                          <span>Advanced segmentation with AI</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5" />
                          <span>Custom integrations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5" />
                          <span>Dedicated account manager</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5" />
                          <span>24/7 premium support</span>
                        </li>
                      </ul>
                      <Button className="mt-8" variant="outline" asChild>
                        <Link href="/contact-sales">Contact Sales</Link>
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="mx-auto mt-16 max-w-3xl rounded-lg border bg-background p-8 shadow-sm">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Frequently Asked Questions</h3>
                </div>
                <div className="w-full max-w-2xl space-y-4 text-left">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <HelpCircle className="h-5 w-5 text-primary mt-0.5" />
                      <h4 className="font-medium">What happens after my free trial?</h4>
                    </div>
                    <p className="text-sm text-muted-foreground pl-7">
                      After your 14-day free trial, you'll be automatically subscribed to the plan you selected. You can
                      cancel or change your plan at any time.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <HelpCircle className="h-5 w-5 text-primary mt-0.5" />
                      <h4 className="font-medium">Can I change plans later?</h4>
                    </div>
                    <p className="text-sm text-muted-foreground pl-7">
                      Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be prorated for
                      the remainder of your billing cycle.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <HelpCircle className="h-5 w-5 text-primary mt-0.5" />
                      <h4 className="font-medium">How are contacts counted?</h4>
                    </div>
                    <p className="text-sm text-muted-foreground pl-7">
                      Contacts are counted as unique email addresses or phone numbers in your database. Duplicate
                      contacts are only counted once.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <HelpCircle className="h-5 w-5 text-primary mt-0.5" />
                      <h4 className="font-medium">What payment methods do you accept?</h4>
                    </div>
                    <p className="text-sm text-muted-foreground pl-7">
                      We accept all major credit cards, including Visa, Mastercard, American Express, and Discover.
                      Enterprise plans can also pay by invoice.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Still have questions?</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our team is here to help you find the perfect plan for your business.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Contact Sales
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/support">Visit Support Center</Link>
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
