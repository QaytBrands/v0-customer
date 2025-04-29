import { ProfileForm } from "@/components/profile-form"

export default function ProfilePage() {
  return (
    <div className="container mx-auto py-6">
      <h1 className="mb-6 text-2xl font-bold">Profile Settings</h1>
      <div className="grid gap-6">
        <ProfileForm />
      </div>
    </div>
  )
}
