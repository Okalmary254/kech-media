"use client"

import type React from "react"

import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Skip auth check for login and signup pages
    if (pathname === "/auth/login" || pathname === "/auth/signup" || pathname === "/auth/forgot-password") return

    // Check authentication for all other admin pages
    const token = localStorage.getItem("kech_admin_token")
    if (!token) {
      router.push("/auth/login")
    }
  }, [router, pathname])

  return <>{children}</>
}
