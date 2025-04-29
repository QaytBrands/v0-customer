import Link from "next/link"
import { login } from "@/app/actions/auth-actions"
import { AuthForm } from "@/components/auth/auth-form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  return (
    <>
      <div>
        <h2 className="text-2xl font-bold leading-9 tracking-tight">Sign in to your account</h2>
        <p className="mt-2 text-sm text-gray-500">
          Don't have an account?{" "}
          <Link href="/signup" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Sign up
          </Link>
        </p>
      </div>

      <div className="mt-10">
        <AuthForm action={login} submitText="Sign in">
          <div>
            <Label htmlFor="email">Email address</Label>
            <div className="mt-2">
              <Input id="email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <div className="text-sm">
                <Link href="/forgot-password" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </Link>
              </div>
            </div>
            <div className="mt-2">
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
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
