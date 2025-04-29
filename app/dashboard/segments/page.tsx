import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Users,
  UserCheck,
  ShoppingCart,
  Clock,
  Star,
  UserX,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

export default function SegmentsPage() {
  // Sample data for segments
  const segments = [
    {
      id: 1,
      name: "High-Value Customers",
      description: "Customers who have spent over $500 in the last 6 months",
      contacts: "2,450",
      engagement: "High",
      lastModified: "2 days ago",
      icon: <Star className="h-10 w-10 text-primary" />,
    },
    {
      id: 2,
      name: "Recent Purchasers",
      description: "Customers who made a purchase in the last 30 days",
      contacts: "3,120",
      engagement: "Medium",
      lastModified: "1 week ago",
      icon: <ShoppingCart className="h-10 w-10 text-primary" />,
    },
    {
      id: 3,
      name: "Inactive Users",
      description: "Subscribers who haven't engaged in the last 90 days",
      contacts: "5,840",
      engagement: "Low",
      lastModified: "3 days ago",
      icon: <UserX className="h-10 w-10 text-primary" />,
    },
    {
      id: 4,
      name: "Newsletter Subscribers",
      description: "Contacts who are subscribed to the weekly newsletter",
      contacts: "12,350",
      engagement: "Medium",
      lastModified: "5 days ago",
      icon: <UserCheck className="h-10 w-10 text-primary" />,
    },
    {
      id: 5,
      name: "Cart Abandoners",
      description: "Customers who added items to cart but didn't purchase",
      contacts: "1,840",
      engagement: "Medium",
      lastModified: "1 day ago",
      icon: <ShoppingCart className="h-10 w-10 text-primary" />,
    },
    {
      id: 6,
      name: "New Subscribers",
      description: "Contacts who subscribed in the last 14 days",
      contacts: "845",
      engagement: "High",
      lastModified: "2 days ago",
      icon: <Clock className="h-10 w-10 text-primary" />,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Segments</h1>
          <p className="text-muted-foreground">Create targeted audience segments based on behavior and attributes.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild>
            <Link href="/dashboard/segments/new">
              <Plus className="mr-2 h-4 w-4" />
              Create Segment
            </Link>
          </Button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <Tabs defaultValue="all" className="w-full">
          <TabsList>
            <TabsTrigger value="all">All Segments</TabsTrigger>
            <TabsTrigger value="behavioral">Behavioral</TabsTrigger>
            <TabsTrigger value="demographic">Demographic</TabsTrigger>
            <TabsTrigger value="custom">Custom</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="flex w-full items-center gap-2 sm:w-auto">
          <div className="relative w-full sm:w-[300px]">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search segments..." className="w-full pl-8" />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
            <span className="sr-only">Filter</span>
          </Button>
        </div>
      </div>

      {/* Segments Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {segments.map((segment) => (
          <Card key={segment.id}>
            <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
              <div className="space-y-1">
                <CardTitle>{segment.name}</CardTitle>
                <CardDescription>{segment.description}</CardDescription>
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
                  <DropdownMenuItem>Create Campaign</DropdownMenuItem>
                  <DropdownMenuItem>Export Contacts</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>{segment.contacts} contacts</span>
                </div>
                <Badge
                  variant="outline"
                  className={`${
                    segment.engagement === "High"
                      ? "border-green-200 bg-green-100 text-green-800"
                      : segment.engagement === "Medium"
                        ? "border-yellow-200 bg-yellow-100 text-yellow-800"
                        : "border-red-200 bg-red-100 text-red-800"
                  }`}
                >
                  {segment.engagement} Engagement
                </Badge>
              </div>
              <div className="mt-4 text-sm text-muted-foreground">Last modified: {segment.lastModified}</div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" asChild>
                <Link href={`/dashboard/segments/${segment.id}/preview`}>Preview</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href={`/dashboard/segments/${segment.id}`}>
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Segment Builder Preview */}
      <Card>
        <CardHeader>
          <CardTitle>Segment Builder</CardTitle>
          <CardDescription>
            Create highly targeted segments based on customer data, behavior, and engagement history.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full rounded-md border p-1">
            <Image
              src="/placeholder.svg?height=400&width=1000&text=Segment+Builder+Interface"
              width={1000}
              height={400}
              alt="Segment Builder Interface"
              className="w-full rounded-md"
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">View Tutorial</Button>
          <Button asChild>
            <Link href="/dashboard/segments/new">
              <Plus className="mr-2 h-4 w-4" />
              Create New Segment
            </Link>
          </Button>
        </CardFooter>
      </Card>

      {/* Segmentation Features */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="mt-2">Dynamic Segments</CardTitle>
            <CardDescription>Segments that update in real-time based on customer behavior.</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button variant="link" asChild className="px-0">
              <Link href="/dashboard/segments/dynamic">
                Learn more
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <ShoppingCart className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="mt-2">Behavioral Targeting</CardTitle>
            <CardDescription>Target based on website and app activity patterns.</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button variant="link" asChild className="px-0">
              <Link href="/dashboard/segments/behavioral">
                Learn more
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Star className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="mt-2">RFM Analysis</CardTitle>
            <CardDescription>Segment by Recency, Frequency, and Monetary value.</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button variant="link" asChild className="px-0">
              <Link href="/dashboard/segments/rfm">
                Learn more
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <UserCheck className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="mt-2">Predictive Segments</CardTitle>
            <CardDescription>Use AI to identify high-value customers and predict behavior.</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button variant="link" asChild className="px-0">
              <Link href="/dashboard/segments/predictive">
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
