import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowUp, ArrowDown, Mail, MessageSquare, Phone, Zap, Users, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { ProtectedRoute } from "@/components/protected-route"

export default function DashboardPage() {
  // Sample data for the dashboard
  const stats = [
    {
      title: "Total Subscribers",
      value: "24,892",
      change: "+12%",
      trend: "up",
    },
    {
      title: "Active Campaigns",
      value: "12",
      change: "+2",
      trend: "up",
    },
    {
      title: "Avg. Open Rate",
      value: "28.4%",
      change: "+3.2%",
      trend: "up",
    },
    {
      title: "Avg. Click Rate",
      value: "4.3%",
      change: "-0.5%",
      trend: "down",
    },
  ]

  const recentCampaigns = [
    {
      name: "Summer Sale Announcement",
      type: "Email",
      icon: <Mail className="h-4 w-4" />,
      sent: "12,450",
      openRate: "32.5%",
      clickRate: "8.2%",
      date: "2 days ago",
    },
    {
      name: "Product Launch Reminder",
      type: "SMS",
      icon: <Phone className="h-4 w-4" />,
      sent: "8,320",
      openRate: "N/A",
      clickRate: "12.1%",
      date: "5 days ago",
    },
    {
      name: "Customer Feedback Request",
      type: "WhatsApp",
      icon: <MessageSquare className="h-4 w-4" />,
      sent: "4,120",
      openRate: "76.3%",
      clickRate: "24.5%",
      date: "1 week ago",
    },
    {
      name: "Abandoned Cart Recovery",
      type: "Email",
      icon: <Mail className="h-4 w-4" />,
      sent: "1,840",
      openRate: "45.2%",
      clickRate: "18.7%",
      date: "1 week ago",
    },
  ]

  const activeAutomations = [
    {
      name: "Welcome Series",
      status: "Active",
      contacts: "1,245",
      performance: 85,
    },
    {
      name: "Abandoned Cart Recovery",
      status: "Active",
      contacts: "532",
      performance: 78,
    },
    {
      name: "Re-engagement Campaign",
      status: "Active",
      contacts: "2,150",
      performance: 62,
    },
  ]

  const topSegments = [
    {
      name: "High-Value Customers",
      contacts: "2,450",
      engagement: "High",
    },
    {
      name: "Recent Purchasers",
      contacts: "3,120",
      engagement: "Medium",
    },
    {
      name: "Inactive Users",
      contacts: "5,840",
      engagement: "Low",
    },
  ]

  return (
    <ProtectedRoute>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back! Here's an overview of your communication activities.</p>
          </div>
          <div className="flex items-center gap-2">
            <Button asChild>
              <Link href="/dashboard/campaigns/new">
                <Plus className="mr-2 h-4 w-4" />
                New Campaign
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Card key={i}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  {stat.trend === "up" ? (
                    <ArrowUp className="mr-1 h-4 w-4 text-green-500" />
                  ) : (
                    <ArrowDown className="mr-1 h-4 w-4 text-red-500" />
                  )}
                  <span className={stat.trend === "up" ? "text-green-500" : "text-red-500"}>{stat.change}</span>
                  <span className="ml-1">from last month</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="campaigns">
          <TabsList className="grid w-full grid-cols-4 md:w-auto">
            <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
            <TabsTrigger value="automations">Automations</TabsTrigger>
            <TabsTrigger value="segments">Segments</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Campaigns Tab */}
          <TabsContent value="campaigns" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="col-span-full">
                <CardHeader>
                  <CardTitle>Recent Campaigns</CardTitle>
                  <CardDescription>Overview of your recent email, SMS, and WhatsApp campaigns.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-md border">
                      <div className="grid grid-cols-6 gap-4 p-4 text-sm font-medium">
                        <div className="col-span-2">Campaign</div>
                        <div className="text-center">Sent</div>
                        <div className="text-center">Open Rate</div>
                        <div className="text-center">Click Rate</div>
                        <div className="text-center">Date</div>
                      </div>
                      {recentCampaigns.map((campaign, i) => (
                        <div key={i} className="grid grid-cols-6 gap-4 border-t p-4 text-sm">
                          <div className="col-span-2">
                            <div className="font-medium">{campaign.name}</div>
                            <div className="flex items-center text-muted-foreground">
                              {campaign.icon}
                              <span className="ml-1">{campaign.type}</span>
                            </div>
                          </div>
                          <div className="text-center">{campaign.sent}</div>
                          <div className="text-center">{campaign.openRate}</div>
                          <div className="text-center">{campaign.clickRate}</div>
                          <div className="text-center text-muted-foreground">{campaign.date}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/dashboard/campaigns">
                      View All Campaigns
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="col-span-full md:col-span-1">
                <CardHeader>
                  <CardTitle>Channel Breakdown</CardTitle>
                  <CardDescription>Distribution of your communication across channels.</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <div className="w-full max-w-md">
                    <Image
                      src="/placeholder.svg?height=300&width=400&text=Channel+Distribution+Chart"
                      width={400}
                      height={300}
                      alt="Channel Distribution Chart"
                      className="mx-auto"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="col-span-full md:col-span-2">
                <CardHeader>
                  <CardTitle>Campaign Performance</CardTitle>
                  <CardDescription>Performance metrics for your recent campaigns.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="w-full">
                    <Image
                      src="/placeholder.svg?height=300&width=700&text=Campaign+Performance+Chart"
                      width={700}
                      height={300}
                      alt="Campaign Performance Chart"
                      className="mx-auto"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Automations Tab */}
          <TabsContent value="automations" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="col-span-full">
                <CardHeader>
                  <CardTitle>Active Automations</CardTitle>
                  <CardDescription>Overview of your currently active automation workflows.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {activeAutomations.map((automation, i) => (
                      <div key={i} className="flex items-center justify-between space-y-1">
                        <div>
                          <p className="font-medium">{automation.name}</p>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <span className="inline-flex h-2 w-2 rounded-full bg-green-500 mr-1"></span>
                            {automation.status} • {automation.contacts} contacts
                          </div>
                        </div>
                        <div className="flex items-center gap-2 min-w-[140px]">
                          <div className="w-full">
                            <Progress value={automation.performance} className="h-2 w-full" />
                          </div>
                          <span className="text-sm font-medium">{automation.performance}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/dashboard/automation">
                      Manage Automations
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="col-span-full md:col-span-2">
                <CardHeader>
                  <CardTitle>Automation Builder</CardTitle>
                  <CardDescription>Create and manage your customer journey workflows.</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <div className="w-full">
                    <Image
                      src="/placeholder.svg?height=300&width=600&text=Automation+Builder+Preview"
                      width={600}
                      height={300}
                      alt="Automation Builder Preview"
                      className="mx-auto rounded-md border"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/dashboard/automation/new">
                      <Zap className="mr-2 h-4 w-4" />
                      Create New Automation
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="col-span-full md:col-span-1">
                <CardHeader>
                  <CardTitle>Automation Templates</CardTitle>
                  <CardDescription>Pre-built templates to get started quickly.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-between rounded-md border p-3">
                      <span className="font-medium">Welcome Series</span>
                      <Button variant="ghost" size="sm">
                        Use
                      </Button>
                    </li>
                    <li className="flex items-center justify-between rounded-md border p-3">
                      <span className="font-medium">Abandoned Cart</span>
                      <Button variant="ghost" size="sm">
                        Use
                      </Button>
                    </li>
                    <li className="flex items-center justify-between rounded-md border p-3">
                      <span className="font-medium">Re-engagement</span>
                      <Button variant="ghost" size="sm">
                        Use
                      </Button>
                    </li>
                    <li className="flex items-center justify-between rounded-md border p-3">
                      <span className="font-medium">Post-Purchase</span>
                      <Button variant="ghost" size="sm">
                        Use
                      </Button>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Segments Tab */}
          <TabsContent value="segments" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="col-span-full">
                <CardHeader>
                  <CardTitle>Top Segments</CardTitle>
                  <CardDescription>Your most important customer segments.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-md border">
                      <div className="grid grid-cols-3 gap-4 p-4 text-sm font-medium">
                        <div>Segment Name</div>
                        <div className="text-center">Contacts</div>
                        <div className="text-center">Engagement</div>
                      </div>
                      {topSegments.map((segment, i) => (
                        <div key={i} className="grid grid-cols-3 gap-4 border-t p-4 text-sm">
                          <div className="font-medium">{segment.name}</div>
                          <div className="text-center">{segment.contacts}</div>
                          <div className="text-center">
                            <span
                              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                segment.engagement === "High"
                                  ? "bg-green-100 text-green-800"
                                  : segment.engagement === "Medium"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-red-100 text-red-800"
                              }`}
                            >
                              {segment.engagement}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/dashboard/segments">
                      View All Segments
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="col-span-full md:col-span-2">
                <CardHeader>
                  <CardTitle>Segment Builder</CardTitle>
                  <CardDescription>Create targeted audience segments based on behavior and attributes.</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <div className="w-full">
                    <Image
                      src="/placeholder.svg?height=300&width=600&text=Segment+Builder+Preview"
                      width={600}
                      height={300}
                      alt="Segment Builder Preview"
                      className="mx-auto rounded-md border"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/dashboard/segments/new">
                      <Users className="mr-2 h-4 w-4" />
                      Create New Segment
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="col-span-full md:col-span-1">
                <CardHeader>
                  <CardTitle>Audience Overview</CardTitle>
                  <CardDescription>Distribution of your customer base.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="w-full">
                    <Image
                      src="/placeholder.svg?height=300&width=300&text=Audience+Distribution+Chart"
                      width={300}
                      height={300}
                      alt="Audience Distribution Chart"
                      className="mx-auto"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="col-span-full">
                <CardHeader>
                  <CardTitle>Performance Overview</CardTitle>
                  <CardDescription>Key metrics across all your communication channels.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="w-full">
                    <Image
                      src="/placeholder.svg?height=300&width=900&text=Performance+Analytics+Chart"
                      width={900}
                      height={300}
                      alt="Performance Analytics Chart"
                      className="mx-auto"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Email Metrics</CardTitle>
                  <CardDescription>Performance of your email campaigns.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Open Rate</span>
                      <span className="text-sm font-medium">28.4%</span>
                    </div>
                    <Progress value={28.4} className="h-2" />
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Click Rate</span>
                      <span className="text-sm font-medium">4.3%</span>
                    </div>
                    <Progress value={4.3} className="h-2" />
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Conversion Rate</span>
                      <span className="text-sm font-medium">2.1%</span>
                    </div>
                    <Progress value={2.1} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>SMS Metrics</CardTitle>
                  <CardDescription>Performance of your SMS campaigns.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Delivery Rate</span>
                      <span className="text-sm font-medium">98.2%</span>
                    </div>
                    <Progress value={98.2} className="h-2" />
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Click Rate</span>
                      <span className="text-sm font-medium">12.7%</span>
                    </div>
                    <Progress value={12.7} className="h-2" />
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Conversion Rate</span>
                      <span className="text-sm font-medium">3.5%</span>
                    </div>
                    <Progress value={3.5} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>WhatsApp Metrics</CardTitle>
                  <CardDescription>Performance of your WhatsApp campaigns.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Read Rate</span>
                      <span className="text-sm font-medium">76.3%</span>
                    </div>
                    <Progress value={76.3} className="h-2" />
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Response Rate</span>
                      <span className="text-sm font-medium">32.1%</span>
                    </div>
                    <Progress value={32.1} className="h-2" />
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Conversion Rate</span>
                      <span className="text-sm font-medium">8.7%</span>
                    </div>
                    <Progress value={8.7} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Quick Actions */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Create Email Campaign</CardTitle>
              <CardDescription>Design and send email campaigns to your audience.</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="/placeholder.svg?height=100&width=300&text=Email+Campaign"
                width={300}
                height={100}
                alt="Email Campaign"
                className="rounded-md"
              />
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/dashboard/email/new">
                  <Mail className="mr-2 h-4 w-4" />
                  Create Email
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Create SMS Campaign</CardTitle>
              <CardDescription>Send SMS messages to reach customers on mobile.</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="/placeholder.svg?height=100&width=300&text=SMS+Campaign"
                width={300}
                height={100}
                alt="SMS Campaign"
                className="rounded-md"
              />
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/dashboard/sms/new">
                  <Phone className="mr-2 h-4 w-4" />
                  Create SMS
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Create WhatsApp Campaign</CardTitle>
              <CardDescription>Engage customers through WhatsApp messaging.</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="/placeholder.svg?height=100&width=300&text=WhatsApp+Campaign"
                width={300}
                height={100}
                alt="WhatsApp Campaign"
                className="rounded-md"
              />
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/dashboard/whatsapp/new">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Create WhatsApp
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </ProtectedRoute>
  )
}
