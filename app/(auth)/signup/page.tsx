import Link from "next/link"
import { signup } from "@/app/actions/auth-actions"
import { AuthForm } from "@/components/auth/auth-form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignupPage() {
  return (
    <>
      <div>
        <h2 className="text-2xl font-bold leading-9 tracking-tight">Create your account</h2>
        <p className="mt-2 text-sm text-gray-500">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Sign in
          </Link>
        </p>
      </div>

      <div className="mt-10">
        <AuthForm action={signup} submitText="Create account">
          <div>
            <Label htmlFor="username">Username</Label>
            <div className="mt-2">
              <Input id="username" name="username" type="text" autoComplete="username" required placeholder="johndoe" />
            </div>
          </div>

          <div>
            <Label htmlFor="email">Email address</Label>
            <div className="mt-2">
              <Input id="email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" />
            </div>
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <div className="mt-2">
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                placeholder="••••••••"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="confirmPassword">Confirm password</Label>
            <div className="mt-2">
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                placeholder="••••••••"
              />
            </div>
          </div>
        </AuthForm>
      </div>
    </>
  )
}
