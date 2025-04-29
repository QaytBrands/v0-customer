import type React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div className="mb-8">
              <Link href="/" className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to home
              </Link>
            </div>
            {children}
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-purple-600 to-indigo-600">
            <div className="flex h-full items-center justify-center p-12">
              <div className="max-w-2xl text-white">
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  Streamline your customer communications
                </h2>
                <p className="mt-6 text-xl">
                  Connect with your customers across multiple channels and deliver personalized experiences at scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
