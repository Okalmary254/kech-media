import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { UserAuthProvider } from "@/components/user-auth-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kech Media - Independent Journalism",
  description: "Independent journalism that connects communities, uncovers truth, and drives meaningful conversations.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserAuthProvider>{children}</UserAuthProvider>
      </body>
    </html>
  )
}
