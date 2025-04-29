import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Download, Mail, MessageSquare, Phone, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics & Reporting</h1>
          <p className="text-muted-foreground">
            Comprehensive analytics and insights across all your communication channels.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Date Range
          </Button>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Performance Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Overview</CardTitle>
          <CardDescription>Key metrics across all your communication channels.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex items-center justify-end">
            <Select defaultValue="30days">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select time period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">Last 7 days</SelectItem>
                <SelectItem value="30days">Last 30 days</SelectItem>
                <SelectItem value="90days">Last 90 days</SelectItem>
                <SelectItem value="year">Last year</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full">
            <Image
              src="/placeholder.svg?height=400&width=1000&text=Performance+Overview+Chart"
              width={1000}
              height={400}
              alt="Performance Overview Chart"
              className="mx-auto rounded-md border"
            />
          </div>
        </CardContent>
      </Card>

      {/* Channel Metrics */}
      <Tabs defaultValue="all">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="all">All Channels</TabsTrigger>
          <TabsTrigger value="email">Email</TabsTrigger>
          <TabsTrigger value="sms">SMS</TabsTrigger>
          <TabsTrigger value="whatsapp">WhatsApp</TabsTrigger>
        </TabsList>

        {/* All Channels Tab */}
        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Email Performance</CardTitle>
                <Mail className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Open Rate</span>
                      <span className="font-medium">28.4%</span>
                    </div>
                    <Progress value={28.4} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Click Rate</span>
                      <span className="font-medium">4.3%</span>
                    </div>
                    <Progress value={4.3} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Conversion Rate</span>
                      <span className="font-medium">2.1%</span>
                    </div>
                    <Progress value={2.1} className="h-2" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/dashboard/analytics/email">
                    View Email Analytics
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">SMS Performance</CardTitle>
                <Phone className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Delivery Rate</span>
                      <span className="font-medium">98.7%</span>
                    </div>
                    <Progress value={98.7} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Click Rate</span>
                      <span className="font-medium">9.2%</span>
                    </div>
                    <Progress value={9.2} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Conversion Rate</span>
                      <span className="font-medium">3.5%</span>
                    </div>
                    <Progress value={3.5} className="h-2" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/dashboard/analytics/sms">
                    View SMS Analytics
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">WhatsApp Performance</CardTitle>
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Read Rate</span>
                      <span className="font-medium">83.2%</span>
                    </div>
                    <Progress value={83.2} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Response Rate</span>
                      <span className="font-medium">24.8%</span>
                    </div>
                    <Progress value={24.8} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Conversion Rate</span>
                      <span className="font-medium">8.7%</span>
                    </div>
                    <Progress value={8.7} className="h-2" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/dashboard/analytics/whatsapp">
                    View WhatsApp Analytics
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Channel Comparison</CardTitle>
              <CardDescription>Compare performance across different communication channels.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full">
                <Image
                  src="/placeholder.svg?height=400&width=1000&text=Channel+Comparison+Chart"
                  width={1000}
                  height={400}
                  alt="Channel Comparison Chart"
                  className="mx-auto rounded-md border"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Email Tab */}
        <TabsContent value="email" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Sent</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">245,892</div>
                <p className="text-xs text-muted-foreground">+12,450 this month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Open Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">28.4%</div>
                <p className="text-xs text-muted-foreground">+3.2% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Click Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.3%</div>
                <p className="text-xs text-muted-foreground">-0.5% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2.1%</div>
                <p className="text-xs text-muted-foreground">+0.3% from last month</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Email Campaign Performance</CardTitle>
              <CardDescription>Performance metrics for your recent email campaigns.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full">
                <Image
                  src="/placeholder.svg?height=400&width=1000&text=Email+Performance+Chart"
                  width={1000}
                  height={400}
                  alt="Email Performance Chart"
                  className="mx-auto rounded-md border"
                />
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Device Breakdown</CardTitle>
                <CardDescription>How your subscribers are viewing your emails.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full">
                  <Image
                    src="/placeholder.svg?height=300&width=500&text=Device+Breakdown+Chart"
                    width={500}
                    height={300}
                    alt="Device Breakdown Chart"
                    className="mx-auto"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Email Client Usage</CardTitle>
                <CardDescription>Which email clients your subscribers are using.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full">
                  <Image
                    src="/placeholder.svg?height=300&width=500&text=Email+Client+Chart"
                    width={500}
                    height={300}
                    alt="Email Client Chart"
                    className="mx-auto"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* SMS Tab */}
        <TabsContent value="sms" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Sent</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">124,580</div>
                <p className="text-xs text-muted-foreground">+8,320 this month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Delivery Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">98.7%</div>
                <p className="text-xs text-muted-foreground">+0.3% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Click Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">9.2%</div>
                <p className="text-xs text-muted-foreground">+1.5% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3.5%</div>
                <p className="text-xs text-muted-foreground">+0.7% from last month</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>SMS Campaign Performance</CardTitle>
              <CardDescription>Performance metrics for your recent SMS campaigns.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full">
                <Image
                  src="/placeholder.svg?height=400&width=1000&text=SMS+Performance+Chart"
                  width={1000}
                  height={400}
                  alt="SMS Performance Chart"
                  className="mx-auto rounded-md border"
                />
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Response Time Analysis</CardTitle>
                <CardDescription>How quickly customers respond to your SMS messages.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full">
                  <Image
                    src="/placeholder.svg?height=300&width=500&text=Response+Time+Chart"
                    width={500}
                    height={300}
                    alt="Response Time Chart"
                    className="mx-auto"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Geographic Distribution</CardTitle>
                <CardDescription>Where your SMS subscribers are located.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full">
                  <Image
                    src="/placeholder.svg?height=300&width=500&text=Geographic+Distribution+Chart"
                    width={500}
                    height={300}
                    alt="Geographic Distribution Chart"
                    className="mx-auto"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* WhatsApp Tab */}
        <TabsContent value="whatsapp" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Sent</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">78,450</div>
                <p className="text-xs text-muted-foreground">+4,120 this month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Read Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">83.2%</div>
                <p className="text-xs text-muted-foreground">+5.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Response Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24.8%</div>
                <p className="text-xs text-muted-foreground">+2.3% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8.7%</div>
                <p className="text-xs text-muted-foreground">+1.2% from last month</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>WhatsApp Campaign Performance</CardTitle>
              <CardDescription>Performance metrics for your recent WhatsApp campaigns.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full">
                <Image
                  src="/placeholder.svg?height=400&width=1000&text=WhatsApp+Performance+Chart"
                  width={1000}
                  height={400}
                  alt="WhatsApp Performance Chart"
                  className="mx-auto rounded-md border"
                />
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Message Types Performance</CardTitle>
                <CardDescription>How different message types perform with your audience.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full">
                  <Image
                    src="/placeholder.svg?height=300&width=500&text=Message+Types+Chart"
                    width={500}
                    height={300}
                    alt="Message Types Chart"
                    className="mx-auto"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Response Time Analysis</CardTitle>
                <CardDescription>How quickly customers respond to your messages.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full">
                  <Image
                    src="/placeholder.svg?height=300&width=500&text=Response+Time+Chart"
                    width={500}
                    height={300}
                    alt="Response Time Chart"
                    className="mx-auto"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Audience Insights */}
      <Card>
        <CardHeader>
          <CardTitle>Audience Insights</CardTitle>
          <CardDescription>Understand your audience demographics and behavior.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-lg font-medium">Demographics</h3>
              <Image
                src="/placeholder.svg?height=300&width=500&text=Demographics+Chart"
                width={500}
                height={300}
                alt="Demographics Chart"
                className="mx-auto rounded-md border"
              />
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium">Engagement by Time</h3>
              <Image
                src="/placeholder.svg?height=300&width=500&text=Engagement+Time+Chart"
                width={500}
                height={300}
                alt="Engagement Time Chart"
                className="mx-auto rounded-md border"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" asChild className="w-full">
            <Link href="/dashboard/analytics/audience">
              View Detailed Audience Insights
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>

      {/* ROI Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>ROI Analysis</CardTitle>
          <CardDescription>Measure the return on investment for your communication campaigns.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full">
            <Image
              src="/placeholder.svg?height=400&width=1000&text=ROI+Analysis+Chart"
              width={1000}
              height={400}
              alt="ROI Analysis Chart"
              className="mx-auto rounded-md border"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" asChild className="w-full">
            <Link href="/dashboard/analytics/roi">
              View Detailed ROI Analysis
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>

      {/* Custom Reports */}
      <Card>
        <CardHeader>
          <CardTitle>Custom Reports</CardTitle>
          <CardDescription>Create and schedule custom reports for your team.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="rounded-md border p-4">
              <h3 className="font-medium">Weekly Performance Summary</h3>
              <p className="text-sm text-muted-foreground">Sent every Monday at 9:00 AM to 3 recipients</p>
              <div className="mt-2 flex items-center gap-2">
                <Button variant="outline" size="sm">
                  Edit
                </Button>
                <Button variant="outline" size="sm">
                  Download
                </Button>
              </div>
            </div>
            <div className="rounded-md border p-4">
              <h3 className="font-medium">Monthly ROI Report</h3>
              <p className="text-sm text-muted-foreground">Sent on the 1st of each month to 5 recipients</p>
              <div className="mt-2 flex items-center gap-2">
                <Button variant="outline" size="sm">
                  Edit
                </Button>
                <Button variant="outline" size="sm">
                  Download
                </Button>
              </div>
            </div>
            <div className="rounded-md border p-4">
              <h3 className="font-medium">Campaign Performance</h3>
              <p className="text-sm text-muted-foreground">Sent after each campaign to 2 recipients</p>
              <div className="mt-2 flex items-center gap-2">
                <Button variant="outline" size="sm">
                  Edit
                </Button>
                <Button variant="outline" size="sm">
                  Download
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full">
            <Link href="/dashboard/analytics/reports/new">
              Create New Custom Report
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
