import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BarChart, Calendar, Edit, Eye, ImageIcon, MoreHorizontal, Plus, Send, Trash2, AlertCircle } from "lucide-react"
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
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { getWhatsCalludConfig } from "@/app/actions/save-whatscallud-config"
import { fetchTemplates, type WhatsCalludTemplate } from "@/lib/services/whatscallud-api"
import { TemplateMessageForm } from "@/components/template-message-form"

// Sample data for the UI
const broadcasts = [
  {
    id: 1,
    name: "Spring Collection Announcement",
    date: "Apr 15, 2023",
    status: "Completed",
    sent: 1250,
    read: 1100,
    responseRate: 12,
  },
  {
    id: 2,
    name: "Summer Sale Preview",
    date: "May 20, 2023",
    status: "Active",
    sent: 980,
    read: 820,
    responseRate: 15,
  },
  {
    id: 3,
    name: "Customer Feedback Request",
    date: "Jun 5, 2023",
    status: "Scheduled",
    sent: 0,
    read: 0,
    responseRate: 0,
  },
  {
    id: 4,
    name: "Product Launch Notification",
    date: "Jun 12, 2023",
    status: "Scheduled",
    sent: 0,
    read: 0,
    responseRate: 0,
  },
  {
    id: 5,
    name: "Holiday Special Offer",
    date: "Jul 1, 2023",
    status: "Draft",
    sent: 0,
    read: 0,
    responseRate: 0,
  },
]

const conversations = [
  {
    id: 1,
    name: "John Smith",
    time: "10:32 AM",
    lastMessage: "Hello! I'm interested in your premium plan.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    time: "Yesterday",
    lastMessage: "Thanks for the information!",
  },
  {
    id: 3,
    name: "Michael Brown",
    time: "Yesterday",
    lastMessage: "When will my order be shipped?",
  },
  {
    id: 4,
    name: "Emily Davis",
    time: "Monday",
    lastMessage: "I'd like to schedule a demo.",
  },
  {
    id: 5,
    name: "David Wilson",
    time: "Sunday",
    lastMessage: "Can you help me with my account?",
  },
]

export default async function WhatsAppPage() {
  const whatsCalludConfig = await getWhatsCalludConfig()
  let templates: WhatsCalludTemplate[] = []
  let apiError = ""

  if (whatsCalludConfig) {
    const result = await fetchTemplates(whatsCalludConfig)
    if (result.success && result.data) {
      templates = result.data
    } else {
      apiError = result.error || "Failed to fetch templates"
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">WhatsApp Business</h1>
          <p className="text-muted-foreground">Create and manage WhatsApp campaigns and conversations</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Message
        </Button>
      </div>

      {!whatsCalludConfig && (
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>WhatsApp API not configured</AlertTitle>
          <AlertDescription>
            You need to configure your WhatsCallud API integration to send WhatsApp messages.{" "}
            <a href="/dashboard/settings?tab=integrations" className="font-medium underline underline-offset-4">
              Configure now
            </a>
          </AlertDescription>
        </Alert>
      )}

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Messages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18,342</div>
            <p className="text-xs text-muted-foreground">+24.5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Read Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92.7%</div>
            <p className="text-xs text-muted-foreground">+3.2% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Response Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15.3%</div>
            <p className="text-xs text-muted-foreground">+2.8% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="broadcasts">
        <TabsList>
          <TabsTrigger value="broadcasts">Broadcasts</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="conversations">Conversations</TabsTrigger>
          <TabsTrigger value="compose">Compose</TabsTrigger>
        </TabsList>
        <TabsContent value="broadcasts" className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Input placeholder="Search broadcasts..." className="w-[250px]" />
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
              <div>Broadcast</div>
              <div>Status</div>
              <div>Sent/Read</div>
              <div>Response</div>
              <div></div>
            </div>
            <Separator />
            {broadcasts.map((broadcast) => (
              <div key={broadcast.id}>
                <div className="grid grid-cols-[1fr_150px_150px_100px_80px] gap-2 items-center p-4">
                  <div>
                    <div className="font-medium">{broadcast.name}</div>
                    <div className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {broadcast.date}
                    </div>
                  </div>
                  <div>
                    <Badge
                      variant={
                        broadcast.status === "Active"
                          ? "default"
                          : broadcast.status === "Scheduled"
                            ? "outline"
                            : broadcast.status === "Completed"
                              ? "secondary"
                              : "destructive"
                      }
                    >
                      {broadcast.status}
                    </Badge>
                  </div>
                  <div>
                    <div className="text-sm font-medium">
                      {broadcast.read}/{broadcast.sent}
                    </div>
                    <Progress value={(broadcast.read / broadcast.sent) * 100} className="h-2" />
                  </div>
                  <div>{broadcast.responseRate}%</div>
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

          {apiError && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{apiError}</AlertDescription>
            </Alert>
          )}

          {!whatsCalludConfig ? (
            <Card>
              <CardHeader>
                <CardTitle>WhatsApp API Not Configured</CardTitle>
                <CardDescription>
                  You need to configure your WhatsCallud API integration to view and use templates.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Go to Settings &gt; Integrations to configure your WhatsCallud API integration.</p>
                <Button variant="outline" className="mt-4" asChild>
                  <a href="/dashboard/settings?tab=integrations">Configure Integration</a>
                </Button>
              </CardContent>
            </Card>
          ) : templates.length === 0 ? (
            <Card>
              <CardHeader>
                <CardTitle>No Templates Found</CardTitle>
                <CardDescription>No approved WhatsApp templates were found for your account.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  You need to create and get approval for templates in your WhatsApp Business account before you can use
                  them here.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4 md:grid-cols-3">
              {templates.map((template) => (
                <Card key={template.id}>
                  <CardHeader>
                    <CardTitle>{template.name}</CardTitle>
                    <CardDescription>{template.category}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-md border p-3 text-sm">
                      {template.components.map((component, index) => (
                        <div key={index} className="mb-2">
                          {component.type === "HEADER" && <div className="font-bold">{component.text}</div>}
                          {component.type === "BODY" && <div className="whitespace-pre-line">{component.text}</div>}
                        </div>
                      ))}
                      {template.components.some((c) => c.format && c.format !== "TEXT") && (
                        <div className="mt-2 flex items-center gap-2 text-muted-foreground">
                          <ImageIcon className="h-4 w-4" />
                          <span>Contains media</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Badge variant={template.status === "APPROVED" ? "default" : "outline"}>{template.status}</Badge>
                    <Button size="sm">
                      <Send className="mr-2 h-4 w-4" />
                      Use
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
        <TabsContent value="conversations" className="space-y-4">
          <div className="flex h-[600px] border rounded-md">
            <div className="w-1/3 border-r">
              <div className="p-3 border-b">
                <Input placeholder="Search conversations..." />
              </div>
              <div className="overflow-auto h-[calc(600px-53px)]">
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    className={`p-3 border-b hover:bg-muted/50 cursor-pointer ${conversation.id === 1 ? "bg-muted" : ""}`}
                  >
                    <div className="flex gap-3">
                      <Avatar>
                        <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${conversation.name.charAt(0)}`} />
                        <AvatarFallback>{conversation.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <div className="font-medium truncate">{conversation.name}</div>
                          <div className="text-xs text-muted-foreground">{conversation.time}</div>
                        </div>
                        <div className="text-sm truncate text-muted-foreground">{conversation.lastMessage}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 flex flex-col">
              <div className="p-3 border-b flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40&text=J" />
                  <AvatarFallback>J</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">John Smith</div>
                  <div className="text-xs text-muted-foreground">Online</div>
                </div>
              </div>
              <div className="flex-1 p-4 overflow-auto space-y-4">
                <div className="flex justify-start">
                  <div className="bg-muted rounded-lg p-3 max-w-[80%]">
                    <p>Hello! I'm interested in your premium plan. Can you tell me more about the features?</p>
                    <div className="text-xs text-muted-foreground mt-1">10:32 AM</div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-primary text-primary-foreground rounded-lg p-3 max-w-[80%]">
                    <p>
                      Hi John! Our premium plan includes unlimited messages, advanced analytics, and priority support.
                      Would you like me to send you our detailed brochure?
                    </p>
                    <div className="text-xs text-primary-foreground/70 mt-1">10:34 AM</div>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-muted rounded-lg p-3 max-w-[80%]">
                    <p>Yes, please. Also, do you offer any discounts for annual subscriptions?</p>
                    <div className="text-xs text-muted-foreground mt-1">10:36 AM</div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-primary text-primary-foreground rounded-lg p-3 max-w-[80%]">
                    <p>
                      We offer a 20% discount for annual subscriptions. I'll include that information in the brochure as
                      well.
                    </p>
                    <div className="text-xs text-primary-foreground/70 mt-1">10:38 AM</div>
                  </div>
                </div>
              </div>
              <div className="p-3 border-t flex gap-2">
                <Input placeholder="Type a message..." className="flex-1" />
                <Button size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="compose" className="space-y-4">
          {!whatsCalludConfig ? (
            <Card>
              <CardHeader>
                <CardTitle>WhatsApp API Not Configured</CardTitle>
                <CardDescription>
                  You need to configure your WhatsCallud API integration to send messages.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Go to Settings &gt; Integrations to configure your WhatsCallud API integration.</p>
                <Button variant="outline" className="mt-4" asChild>
                  <a href="/dashboard/settings?tab=integrations">Configure Integration</a>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <TemplateMessageForm templates={templates} config={whatsCalludConfig} />
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
