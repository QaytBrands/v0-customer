import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { BarChart, Calendar, Clock, Edit, Eye, MoreHorizontal, Plus, Send, Trash2 } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"

export default function SMSPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">SMS Campaigns</h1>
          <p className="text-muted-foreground">Create, manage and analyze your SMS marketing campaigns</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Campaign
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Sent</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24,685</div>
            <p className="text-xs text-muted-foreground">+12.5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Delivery Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98.3%</div>
            <p className="text-xs text-muted-foreground">+0.7% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Response Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.7%</div>
            <p className="text-xs text-muted-foreground">+1.2% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="campaigns">
        <TabsList>
          <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="compose">Compose</TabsTrigger>
        </TabsList>
        <TabsContent value="campaigns" className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Input placeholder="Search campaigns..." className="w-[250px]" />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Filter</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Status</DropdownMenuItem>
                  <DropdownMenuItem>Date</DropdownMenuItem>
                  <DropdownMenuItem>Performance</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="rounded-md border">
            <div className="grid grid-cols-[1fr_150px_150px_100px_80px] gap-2 p-4 font-medium">
              <div>Campaign</div>
              <div>Status</div>
              <div>Sent/Delivered</div>
              <div>Response</div>
              <div></div>
            </div>
            <Separator />
            {campaigns.map((campaign) => (
              <div key={campaign.id}>
                <div className="grid grid-cols-[1fr_150px_150px_100px_80px] gap-2 items-center p-4">
                  <div>
                    <div className="font-medium">{campaign.name}</div>
                    <div className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {campaign.date}
                    </div>
                  </div>
                  <div>
                    <Badge
                      variant={
                        campaign.status === "Active"
                          ? "default"
                          : campaign.status === "Scheduled"
                            ? "outline"
                            : campaign.status === "Completed"
                              ? "secondary"
                              : "destructive"
                      }
                    >
                      {campaign.status}
                    </Badge>
                  </div>
                  <div>
                    <div className="text-sm font-medium">
                      {campaign.sent}/{campaign.delivered}
                    </div>
                    <Progress value={(campaign.delivered / campaign.sent) * 100} className="h-2" />
                  </div>
                  <div>{campaign.responseRate}%</div>
                  <div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          View
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <BarChart className="mr-2 h-4 w-4" />
                          Analytics
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
                <Separator />
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="templates" className="space-y-4">
          <div className="flex items-center justify-between">
            <Input placeholder="Search templates..." className="w-[250px]" />
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Template
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {templates.map((template) => (
              <Card key={template.id}>
                <CardHeader>
                  <CardTitle>{template.name}</CardTitle>
                  <CardDescription>{template.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border p-3 text-sm">{template.content}</div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    <Edit className="mr-2 h-4 w-4" />
                    Edit
                  </Button>
                  <Button size="sm">
                    <Send className="mr-2 h-4 w-4" />
                    Use
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="compose" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Compose New SMS</CardTitle>
              <CardDescription>Create a new SMS message to send to your customers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Campaign Name</label>
                <Input placeholder="Summer Sale Announcement" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Recipient Segment</label>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-full justify-between">
                      <span>Select segment</span>
                      <span>▼</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[200px]">
                    <DropdownMenuItem>All Customers</DropdownMenuItem>
                    <DropdownMenuItem>Active Users</DropdownMenuItem>
                    <DropdownMenuItem>New Customers</DropdownMenuItem>
                    <DropdownMenuItem>Inactive Users</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Message</label>
                  <span className="text-xs text-muted-foreground">0/160 characters</span>
                </div>
                <Textarea placeholder="Type your message here..." className="min-h-[120px]" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Scheduling</label>
                <div className="flex items-center gap-2">
                  <Button variant="outline" className="flex-1">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Clock className="mr-2 h-4 w-4" />
                    Send Now
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Save as Draft</Button>
              <Button>Send Test</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

const campaigns = [
  {
    id: 1,
    name: "Flash Sale Announcement",
    date: "Apr 15, 2023",
    status: "Active",
    sent: 5000,
    delivered: 4950,
    responseRate: 12.3,
  },
  {
    id: 2,
    name: "Product Launch Notification",
    date: "Apr 10, 2023",
    status: "Completed",
    sent: 7500,
    delivered: 7350,
    responseRate: 8.7,
  },
  {
    id: 3,
    name: "Customer Feedback Request",
    date: "Apr 5, 2023",
    status: "Completed",
    sent: 3200,
    delivered: 3150,
    responseRate: 5.2,
  },
  {
    id: 4,
    name: "Appointment Reminder",
    date: "Apr 25, 2023",
    status: "Scheduled",
    sent: 1200,
    delivered: 0,
    responseRate: 0,
  },
  {
    id: 5,
    name: "Service Outage Alert",
    date: "Apr 2, 2023",
    status: "Completed",
    sent: 8500,
    delivered: 8450,
    responseRate: 2.1,
  },
]

const templates = [
  {
    id: 1,
    name: "Welcome Message",
    description: "Sent to new customers",
    content:
      "Welcome to [Company]! We're excited to have you on board. Reply HELP for assistance or STOP to unsubscribe.",
  },
  {
    id: 2,
    name: "Order Confirmation",
    description: "Sent after purchase",
    content: "Your order #[OrderID] has been confirmed and is being processed. Track your order at [TrackingURL]",
  },
  {
    id: 3,
    name: "Appointment Reminder",
    description: "Sent before appointments",
    content: "Reminder: You have an appointment scheduled for [Date] at [Time]. Reply C to confirm or R to reschedule.",
  },
]
