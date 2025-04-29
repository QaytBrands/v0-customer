import Link from "next/link"
import { forgotPassword } from "@/app/actions/auth-actions"
import { AuthForm } from "@/components/auth/auth-form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ForgotPasswordPage() {
  return (
    <>
      <div>
        <h2 className="text-2xl font-bold leading-9 tracking-tight">Forgot your password?</h2>
        <p className="mt-2 text-sm text-gray-500">
          Enter your email address and we'll send you a link to reset your password.
        </p>
      </div>

      <div className="mt-10">
        <AuthForm action={forgotPassword} submitText="Send reset link">
          <div>
            <Label htmlFor="email">Email address</Label>
            <div className="mt-2">
              <Input id="email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" />
            </div>
          </div>
        </AuthForm>

        <div className="mt-6 text-center text-sm">
          <Link href="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Back to login
          </Link>
        </div>
      </div>
    </>
  )
}
