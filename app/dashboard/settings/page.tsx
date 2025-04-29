import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { WhatsCalludIntegration } from "@/components/whatscallud-integration"
import { saveWhatsCalludConfig, getWhatsCalludConfig } from "@/app/actions/save-whatscallud-config"

export default async function SettingsPage() {
  const whatsCalludConfig = await getWhatsCalludConfig()

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">Manage your account settings and preferences.</p>
        </div>
      </div>

      <Tabs defaultValue="profile">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your personal information and profile settings.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col gap-6 md:flex-row">
                <div className="flex flex-col items-center gap-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/placeholder.svg?height=96&width=96&text=JD" alt="John Doe" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Button variant="outline" size="sm">
                    Change Avatar
                  </Button>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" defaultValue="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" defaultValue="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="john.doe@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="job-title">Job Title</Label>
                    <Input id="job-title" defaultValue="Marketing Director" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  defaultValue="Marketing professional with 10+ years of experience in digital marketing and customer communication strategies."
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Select defaultValue="america-los_angeles">
                  <SelectTrigger id="timezone">
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="america-los_angeles">Pacific Time (US & Canada)</SelectItem>
                    <SelectItem value="america-new_york">Eastern Time (US & Canada)</SelectItem>
                    <SelectItem value="america-chicago">Central Time (US & Canada)</SelectItem>
                    <SelectItem value="america-denver">Mountain Time (US & Canada)</SelectItem>
                    <SelectItem value="europe-london">London</SelectItem>
                    <SelectItem value="europe-paris">Paris</SelectItem>
                    <SelectItem value="asia-tokyo">Tokyo</SelectItem>
                    <SelectItem value="australia-sydney">Sydney</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Configure how and when you receive notifications.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Email Notifications</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="campaign-completion" className="flex-1">
                      Campaign completion
                    </Label>
                    <Switch id="campaign-completion" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="performance-reports" className="flex-1">
                      Weekly performance reports
                    </Label>
                    <Switch id="performance-reports" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="account-updates" className="flex-1">
                      Account updates
                    </Label>
                    <Switch id="account-updates" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="product-updates" className="flex-1">
                      Product updates and announcements
                    </Label>
                    <Switch id="product-updates" defaultChecked />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-medium">In-App Notifications</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="campaign-status" className="flex-1">
                      Campaign status changes
                    </Label>
                    <Switch id="campaign-status" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="new-messages" className="flex-1">
                      New customer messages
                    </Label>
                    <Switch id="new-messages" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="team-activity" className="flex-1">
                      Team member activity
                    </Label>
                    <Switch id="team-activity" defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Account Tab */}
        <TabsContent value="account" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Manage your account settings and security preferences.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="account-email">Email Address</Label>
                <Input id="account-email" type="email" defaultValue="john.doe@example.com" />
                <p className="text-xs text-muted-foreground">This email is used for account notifications and login.</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="account-phone">Phone Number</Label>
                <Input id="account-phone" type="tel" defaultValue="+1 (555) 123-4567" />
                <p className="text-xs text-muted-foreground">Used for account recovery and security notifications.</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger id="language">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                    <SelectItem value="ja">Japanese</SelectItem>
                    <SelectItem value="zh">Chinese (Simplified)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Security</CardTitle>
              <CardDescription>Manage your account security and authentication settings.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Change Password</h3>
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
                <Button className="mt-2">Update Password</Button>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Two-Factor Authentication</h3>
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <div className="font-medium">Two-factor authentication</div>
                    <div className="text-sm text-muted-foreground">Add an extra layer of security to your account.</div>
                  </div>
                  <Button variant="outline">Enable</Button>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Active Sessions</h3>
                <div className="rounded-lg border">
                  <div className="flex items-center justify-between p-4">
                    <div className="space-y-0.5">
                      <div className="font-medium">Current Session</div>
                      <div className="text-sm text-muted-foreground">
                        MacBook Pro • San Francisco, CA • Last active now
                      </div>
                    </div>
                    <div className="flex h-2 w-2 rounded-full bg-green-500"></div>
                  </div>
                  <div className="border-t"></div>
                  <div className="flex items-center justify-between p-4">
                    <div className="space-y-0.5">
                      <div className="font-medium">iPhone 13</div>
                      <div className="text-sm text-muted-foreground">
                        iOS 16 • San Francisco, CA • Last active 2 hours ago
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Log Out
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Danger Zone</CardTitle>
              <CardDescription>Irreversible and destructive actions for your account.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 rounded-lg border border-destructive/20 p-4">
                <h3 className="font-medium text-destructive">Delete Account</h3>
                <p className="text-sm text-muted-foreground">
                  Permanently delete your account and all associated data. This action cannot be undone.
                </p>
                <Button variant="destructive" className="mt-2">
                  Delete Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Team Tab */}
        <TabsContent value="team" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Team Members</CardTitle>
              <CardDescription>Manage your team members and their access permissions.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-4 gap-4 p-4 text-sm font-medium">
                  <div>User</div>
                  <div>Role</div>
                  <div>Status</div>
                  <div className="text-right">Actions</div>
                </div>
                <div className="border-t"></div>
                <div className="grid grid-cols-4 gap-4 p-4 text-sm">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32&text=JD" alt="John Doe" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">John Doe</div>
                      <div className="text-xs text-muted-foreground">john.doe@example.com</div>
                    </div>
                  </div>
                  <div className="flex items-center">Admin</div>
                  <div className="flex items-center">
                    <div className="flex items-center gap-1">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span>Active</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>
                <div className="border-t"></div>
                <div className="grid grid-cols-4 gap-4 p-4 text-sm">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32&text=SJ" alt="Sarah Johnson" />
                      <AvatarFallback>SJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Sarah Johnson</div>
                      <div className="text-xs text-muted-foreground">sarah.johnson@example.com</div>
                    </div>
                  </div>
                  <div className="flex items-center">Editor</div>
                  <div className="flex items-center">
                    <div className="flex items-center gap-1">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span>Active</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>
                <div className="border-t"></div>
                <div className="grid grid-cols-4 gap-4 p-4 text-sm">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32&text=JB" alt="Janet Baker" />
                      <AvatarFallback>JB</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Janet Baker</div>
                      <div className="text-xs text-muted-foreground">janet.baker@example.com</div>
                    </div>
                  </div>
                  <div className="flex items-center">Viewer</div>
                  <div className="flex items-center">
                    <div className="flex items-center gap-1">
                      <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                      <span>Pending</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Add Team Member</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Integrations Tab */}
        <TabsContent value="integrations" className="space-y-4">
          <div className="grid gap-6">
            <WhatsCalludIntegration initialConfig={whatsCalludConfig || undefined} onSave={saveWhatsCalludConfig} />

            <Card>
              <CardHeader>
                <CardTitle>Email Service Provider</CardTitle>
                <CardDescription>Connect your email service provider to send emails</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Label htmlFor="email-provider">Provider</Label>
                  <Select defaultValue="sendgrid">
                    <SelectTrigger id="email-provider">
                      <SelectValue placeholder="Select provider" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sendgrid">SendGrid</SelectItem>
                      <SelectItem value="mailchimp">Mailchimp</SelectItem>
                      <SelectItem value="aws-ses">AWS SES</SelectItem>
                      <SelectItem value="custom">Custom SMTP</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Configure</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>SMS Gateway</CardTitle>
                <CardDescription>Connect your SMS gateway to send text messages</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Label htmlFor="sms-provider">Provider</Label>
                  <Select defaultValue="twilio">
                    <SelectTrigger id="sms-provider">
                      <SelectValue placeholder="Select provider" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="twilio">Twilio</SelectItem>
                      <SelectItem value="nexmo">Nexmo</SelectItem>
                      <SelectItem value="messagebird">MessageBird</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Configure</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        {/* Billing Tab */}
        <TabsContent value="billing" className="space-y-4">
          {/* Billing content remains the same */}
        </TabsContent>

        {/* API Tab */}
        <TabsContent value="api" className="space-y-4">
          {/* API content remains the same */}
        </TabsContent>
      </Tabs>
    </div>
  )
}
