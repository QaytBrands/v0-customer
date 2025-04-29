import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Zap,
  Clock,
  Users,
  GitBranch,
  ShoppingCart,
} from "lucide-react"
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

export default function AutomationPage() {
  // Sample data for automations
  const activeAutomations = [
    {
      id: 1,
      name: "Welcome Series",
      description: "Onboarding sequence for new subscribers",
      status: "Active",
      contacts: "1,245",
      performance: 85,
      lastModified: "2 days ago",
      icon: <Zap className="h-10 w-10 text-primary" />,
    },
    {
      id: 2,
      name: "Abandoned Cart Recovery",
      description: "Recover abandoned shopping carts",
      status: "Active",
      contacts: "532",
      performance: 78,
      lastModified: "1 week ago",
      icon: <ShoppingCart className="h-10 w-10 text-primary" />,
    },
    {
      id: 3,
      name: "Re-engagement Campaign",
      description: "Re-engage inactive subscribers",
      status: "Active",
      contacts: "2,150",
      performance: 62,
      lastModified: "3 days ago",
      icon: <Users className="h-10 w-10 text-primary" />,
    },
    {
      id: 4,
      name: "Post-Purchase Follow-up",
      description: "Thank you and review request sequence",
      status: "Active",
      contacts: "845",
      performance: 91,
      lastModified: "5 days ago",
      icon: <Clock className="h-10 w-10 text-primary" />,
    },
  ]

  const draftAutomations = [
    {
      id: 5,
      name: "Product Recommendation",
      description: "Personalized product recommendations",
      status: "Draft",
      lastModified: "1 day ago",
      icon: <GitBranch className="h-10 w-10 text-muted-foreground" />,
    },
    {
      id: 6,
      name: "Birthday Rewards",
      description: "Special offers for customer birthdays",
      status: "Draft",
      lastModified: "3 days ago",
      icon: <GitBranch className="h-10 w-10 text-muted-foreground" />,
    },
  ]

  const templates = [
    {
      id: 1,
      name: "Welcome Series",
      description: "Introduce new subscribers to your brand",
      steps: 5,
      category: "Onboarding",
    },
    {
      id: 2,
      name: "Abandoned Cart",
      description: "Recover abandoned shopping carts",
      steps: 3,
      category: "E-commerce",
    },
    {
      id: 3,
      name: "Re-engagement",
      description: "Win back inactive subscribers",
      steps: 4,
      category: "Retention",
    },
    {
      id: 4,
      name: "Post-Purchase",
      description: "Follow up after purchase with reviews and recommendations",
      steps: 4,
      category: "E-commerce",
    },
    {
      id: 5,
      name: "Event Promotion",
      description: "Promote upcoming events or webinars",
      steps: 6,
      category: "Marketing",
    },
    {
      id: 6,
      name: "Product Launch",
      description: "Announce and promote new products",
      steps: 5,
      category: "Marketing",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Automation</h1>
          <p className="text-muted-foreground">Create, manage, and optimize your customer journey workflows.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild>
            <Link href="/dashboard/automation/new">
              <Plus className="mr-2 h-4 w-4" />
              Create Automation
            </Link>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="active">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <TabsList>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="drafts">Drafts</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
          </TabsList>
          <div className="flex w-full items-center gap-2 sm:w-auto">
            <div className="relative w-full sm:w-[300px]">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search automations..." className="w-full pl-8" />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
              <span className="sr-only">Filter</span>
            </Button>
          </div>
        </div>

        {/* Active Automations Tab */}
        <TabsContent value="active" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {activeAutomations.map((automation) => (
              <Card key={automation.id}>
                <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                  <div className="space-y-1">
                    <CardTitle>{automation.name}</CardTitle>
                    <CardDescription>{automation.description}</CardDescription>
                  </div>
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
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Duplicate</DropdownMenuItem>
                      <DropdownMenuItem>Pause</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                    <span>{automation.status}</span>
                    <span>•</span>
                    <span>{automation.contacts} contacts</span>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Performance</span>
                      <span className="font-medium">{automation.performance}%</span>
                    </div>
                    <Progress value={automation.performance} className="h-2" />
                  </div>
                  <div className="mt-4 text-sm text-muted-foreground">Last modified: {automation.lastModified}</div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild className="w-full">
                    <Link href={`/dashboard/automation/${automation.id}`}>
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Draft Automations Tab */}
        <TabsContent value="drafts" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {draftAutomations.map((automation) => (
              <Card key={automation.id}>
                <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                  <div className="space-y-1">
                    <CardTitle>{automation.name}</CardTitle>
                    <CardDescription>{automation.description}</CardDescription>
                  </div>
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
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Duplicate</DropdownMenuItem>
                      <DropdownMenuItem>Activate</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="inline-flex h-2 w-2 rounded-full bg-yellow-500"></span>
                    <span>{automation.status}</span>
                  </div>
                  <div className="mt-4 text-sm text-muted-foreground">Last modified: {automation.lastModified}</div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={`/dashboard/automation/${automation.id}/edit`}>Continue Editing</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Templates Tab */}
        <TabsContent value="templates" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {templates.map((template) => (
              <Card key={template.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>{template.name}</CardTitle>
                      <CardDescription>{template.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{template.steps} steps</span>
                    <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                      {template.category}
                    </span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={`/dashboard/automation/new?template=${template.id}`}>Use Template</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Visual Journey Builder Preview */}
      <Card>
        <CardHeader>
          <CardTitle>Visual Journey Builder</CardTitle>
          <CardDescription>
            Create sophisticated customer journeys with our drag-and-drop workflow builder.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full rounded-md border p-1">
            <Image
              src="/placeholder.svg?height=400&width=1000&text=Visual+Journey+Builder"
              width={1000}
              height={400}
              alt="Visual Journey Builder"
              className="w-full rounded-md"
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">View Tutorial</Button>
          <Button asChild>
            <Link href="/dashboard/automation/new">
              <Plus className="mr-2 h-4 w-4" />
              Create New Workflow
            </Link>
          </Button>
        </CardFooter>
      </Card>

      {/* Automation Features */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="mt-2">Trigger-based Workflows</CardTitle>
            <CardDescription>Set up automations triggered by specific customer actions.</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button variant="link" asChild className="px-0">
              <Link href="/dashboard/automation/triggers">
                Learn more
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <GitBranch className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="mt-2">Conditional Logic</CardTitle>
            <CardDescription>Create personalized paths based on customer behavior.</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button variant="link" asChild className="px-0">
              <Link href="/dashboard/automation/conditions">
                Learn more
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="mt-2">Multi-channel Sequences</CardTitle>
            <CardDescription>Communicate across email, SMS, and WhatsApp seamlessly.</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button variant="link" asChild className="px-0">
              <Link href="/dashboard/automation/channels">
                Learn more
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="mt-2">AI-powered Optimization</CardTitle>
            <CardDescription>Let AI determine the best time to send messages.</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button variant="link" asChild className="px-0">
              <Link href="/dashboard/automation/ai-optimization">
                Learn more
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
