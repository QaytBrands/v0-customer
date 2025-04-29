import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Plus, Search, Filter, MoreHorizontal, Mail, Calendar, BarChart2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

export default function EmailPage() {
  // Sample data for email campaigns
  const campaigns = [
    {
      id: 1,
      name: "Summer Sale Announcement",
      status: "Sent",
      sent: "12,450",
      openRate: "32.5%",
      clickRate: "8.2%",
      date: "Jun 15, 2023",
    },
    {
      id: 2,
      name: "Product Launch Newsletter",
      status: "Sent",
      sent: "10,280",
      openRate: "28.7%",
      clickRate: "6.5%",
      date: "May 22, 2023",
    },
    {
      id: 3,
      name: "Customer Feedback Survey",
      status: "Sent",
      sent: "8,750",
      openRate: "24.3%",
      clickRate: "5.1%",
      date: "Apr 10, 2023",
    },
    {
      id: 4,
      name: "Monthly Newsletter - July",
      status: "Draft",
      sent: "-",
      openRate: "-",
      clickRate: "-",
      date: "Scheduled for Jul 5, 2023",
    },
    {
      id: 5,
      name: "Flash Sale Promotion",
      status: "Draft",
      sent: "-",
      openRate: "-",
      clickRate: "-",
      date: "Not scheduled",
    },
  ]

  const templates = [
    {
      id: 1,
      name: "Product Announcement",
      description: "Announce new products or features",
      category: "Marketing",
      thumbnail: "/placeholder.svg?height=150&width=250&text=Product+Announcement",
    },
    {
      id: 2,
      name: "Newsletter",
      description: "Regular updates and content for subscribers",
      category: "Newsletter",
      thumbnail: "/placeholder.svg?height=150&width=250&text=Newsletter",
    },
    {
      id: 3,
      name: "Welcome Email",
      description: "Greet new subscribers to your list",
      category: "Onboarding",
      thumbnail: "/placeholder.svg?height=150&width=250&text=Welcome+Email",
    },
    {
      id: 4,
      name: "Promotional Offer",
      description: "Highlight special offers and discounts",
      category: "Promotion",
      thumbnail: "/placeholder.svg?height=150&width=250&text=Promotional+Offer",
    },
    {
      id: 5,
      name: "Event Invitation",
      description: "Invite subscribers to events or webinars",
      category: "Events",
      thumbnail: "/placeholder.svg?height=150&width=250&text=Event+Invitation",
    },
    {
      id: 6,
      name: "Abandoned Cart",
      description: "Remind customers about items in their cart",
      category: "E-commerce",
      thumbnail: "/placeholder.svg?height=150&width=250&text=Abandoned+Cart",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Email Marketing</h1>
          <p className="text-muted-foreground">Create, send, and analyze email campaigns to engage your audience.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild>
            <Link href="/dashboard/email/new">
              <Plus className="mr-2 h-4 w-4" />
              Create Campaign
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Subscribers</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24,892</div>
            <p className="text-xs text-muted-foreground">+1,234 this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Open Rate</CardTitle>
            <BarChart2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28.4%</div>
            <p className="text-xs text-muted-foreground">+3.2% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Click Rate</CardTitle>
            <BarChart2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.3%</div>
            <p className="text-xs text-muted-foreground">-0.5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Campaigns Sent</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32</div>
            <p className="text-xs text-muted-foreground">5 sent this month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="campaigns">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <TabsList>
            <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          <div className="flex w-full items-center gap-2 sm:w-auto">
            <div className="relative w-full sm:w-[300px]">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search campaigns..." className="w-full pl-8" />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
              <span className="sr-only">Filter</span>
            </Button>
          </div>
        </div>

        {/* Campaigns Tab */}
        <TabsContent value="campaigns" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Email Campaigns</CardTitle>
              <CardDescription>View and manage your email marketing campaigns.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-6 gap-4 p-4 text-sm font-medium">
                  <div className="col-span-2">Campaign</div>
                  <div className="text-center">Status</div>
                  <div className="text-center">Open Rate</div>
                  <div className="text-center">Click Rate</div>
                  <div className="text-center">Date</div>
                </div>
                {campaigns.map((campaign) => (
                  <div key={campaign.id} className="grid grid-cols-6 gap-4 border-t p-4 text-sm">
                    <div className="col-span-2">
                      <div className="font-medium">{campaign.name}</div>
                      <div className="text-muted-foreground">
                        {campaign.status === "Sent" ? `Sent to ${campaign.sent} subscribers` : "Not sent yet"}
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <Badge
                        variant="outline"
                        className={`${
                          campaign.status === "Sent"
                            ? "border-green-200 bg-green-100 text-green-800"
                            : "border-yellow-200 bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {campaign.status}
                      </Badge>
                    </div>
                    <div className="text-center">{campaign.openRate}</div>
                    <div className="text-center">{campaign.clickRate}</div>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-muted-foreground">{campaign.date}</span>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>View Report</DropdownMenuItem>
                          {campaign.status === "Draft" && (
                            <>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Schedule</DropdownMenuItem>
                              <DropdownMenuItem>Send Test</DropdownMenuItem>
                            </>
                          )}
                          <DropdownMenuItem>Duplicate</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <Link href="/dashboard/email/campaigns">
                  View All Campaigns
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Campaign Performance</CardTitle>
              <CardDescription>Performance metrics for your recent email campaigns.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full">
                <Image
                  src="/placeholder.svg?height=300&width=1000&text=Email+Campaign+Performance+Chart"
                  width={1000}
                  height={300}
                  alt="Email Campaign Performance Chart"
                  className="mx-auto"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Templates Tab */}
        <TabsContent value="templates" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {templates.map((template) => (
              <Card key={template.id}>
                <CardHeader className="pb-2">
                  <Image
                    src={template.thumbnail || "/placeholder.svg"}
                    width={250}
                    height={150}
                    alt={template.name}
                    className="rounded-md border object-cover"
                  />
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">{template.name}</h3>
                      <p className="text-sm text-muted-foreground">{template.description}</p>
                    </div>
                    <Badge variant="outline">{template.category}</Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={`/dashboard/email/new?template=${template.id}`}>Use Template</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Analytics Tab */}
        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Email Performance Metrics</CardTitle>
              <CardDescription>Detailed analytics for your email marketing campaigns.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Open Rate</span>
                    <span className="font-medium">28.4%</span>
                  </div>
                  <Progress value={28.4} className="h-2" />
                  <p className="text-xs text-muted-foreground">Industry average: 21.5%</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Click Rate</span>
                    <span className="font-medium">4.3%</span>
                  </div>
                  <Progress value={4.3} className="h-2" />
                  <p className="text-xs text-muted-foreground">Industry average: 2.8%</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Conversion Rate</span>
                    <span className="font-medium">2.1%</span>
                  </div>
                  <Progress value={2.1} className="h-2" />
                  <p className="text-xs text-muted-foreground">Industry average: 1.5%</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Unsubscribe Rate</span>
                    <span className="font-medium">0.4%</span>
                  </div>
                  <Progress value={0.4} className="h-2" />
                  <p className="text-xs text-muted-foreground">Industry average: 0.5%</p>
                </div>
              </div>

              <div className="mt-8 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=1000&text=Email+Analytics+Dashboard"
                  width={1000}
                  height={400}
                  alt="Email Analytics Dashboard"
                  className="mx-auto rounded-md border"
                />
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Engagement by Time</CardTitle>
                <CardDescription>When your subscribers are most likely to engage.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full">
                  <Image
                    src="/placeholder.svg?height=250&width=500&text=Engagement+by+Time+Chart"
                    width={500}
                    height={250}
                    alt="Engagement by Time Chart"
                    className="mx-auto"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/dashboard/email/analytics/time">View Detailed Analysis</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Device Breakdown</CardTitle>
                <CardDescription>How your subscribers are viewing your emails.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full">
                  <Image
                    src="/placeholder.svg?height=250&width=500&text=Device+Breakdown+Chart"
                    width={500}
                    height={250}
                    alt="Device Breakdown Chart"
                    className="mx-auto"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/dashboard/email/analytics/devices">View Detailed Analysis</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Email Builder Preview */}
      <Card>
        <CardHeader>
          <CardTitle>Email Builder</CardTitle>
          <CardDescription>Create beautiful, responsive emails with our drag-and-drop builder.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full rounded-md border p-1">
            <Image
              src="/placeholder.svg?height=400&width=1000&text=Email+Builder+Interface"
              width={1000}
              height={400}
              alt="Email Builder Interface"
              className="w-full rounded-md"
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">View Tutorial</Button>
          <Button asChild>
            <Link href="/dashboard/email/new">
              <Plus className="mr-2 h-4 w-4" />
              Create New Email
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
