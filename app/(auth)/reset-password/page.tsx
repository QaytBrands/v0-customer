import Link from "next/link"
import { resetPassword } from "@/app/actions/auth-actions"
import { AuthForm } from "@/components/auth/auth-form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ResetPasswordPage({
  searchParams,
}: {
  searchParams: { token?: string }
}) {
  const token = searchParams.token || ""

  return (
    <>
      <div>
        <h2 className="text-2xl font-bold leading-9 tracking-tight">Reset your password</h2>
        <p className="mt-2 text-sm text-gray-500">Enter your new password below.</p>
      </div>

      <div className="mt-10">
        <AuthForm action={resetPassword} submitText="Reset password">
          <input type="hidden" name="token" value={token} />

          <div>
            <Label htmlFor="password">New password</Label>
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
            <Label htmlFor="confirmPassword">Confirm new password</Label>
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

        <div className="mt-6 text-center text-sm">
          <Link href="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Back to login
          </Link>
        </div>
      </div>
    </>
  )
}
