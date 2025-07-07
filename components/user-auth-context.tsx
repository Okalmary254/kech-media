"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface User {
  id: number
  firstName: string
  lastName: string
  email: string
  avatar?: string
  newsletter?: boolean
}

interface UserAuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  signup: (userData: {
    firstName: string
    lastName: string
    email: string
    password: string
    newsletter?: boolean
  }) => Promise<boolean>
  logout: () => void
  isLoading: boolean
  error: string | null
}

const UserAuthContext = createContext<UserAuthContextType | undefined>(undefined)

export function UserAuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Check for existing user session on mount
    const savedUser = localStorage.getItem("kech_user")
    const savedToken = localStorage.getItem("kech_user_token")

    if (savedUser && savedToken) {
      try {
        setUser(JSON.parse(savedUser))
      } catch (err) {
        localStorage.removeItem("kech_user")
        localStorage.removeItem("kech_user_token")
      }
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true)
    setError(null)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Demo user credentials
      if (email === "user@example.com" && password === "user123") {
        const userData: User = {
          id: 1,
          firstName: "John",
          lastName: "Doe",
          email: "user@example.com",
          avatar: "/placeholder.svg?height=40&width=40",
        }

        setUser(userData)
        localStorage.setItem("kech_user", JSON.stringify(userData))
        localStorage.setItem("kech_user_token", "demo_user_token_12345")
        return true
      } else {
        setError("Invalid email or password")
        return false
      }
    } catch (err) {
      setError("Login failed. Please try again.")
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const signup = async (userData: {
    firstName: string
    lastName: string
    email: string
    password: string
    newsletter?: boolean
  }): Promise<boolean> => {
    setIsLoading(true)
    setError(null)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Check if email already exists (demo check)
      if (userData.email === "user@example.com") {
        setError("An account with this email already exists")
        return false
      }

      // Create new user
      const newUser: User = {
        id: Date.now(),
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        newsletter: userData.newsletter,
      }

      setUser(newUser)
      localStorage.setItem("kech_user", JSON.stringify(newUser))
      localStorage.setItem("kech_user_token", `demo_token_${Date.now()}`)
      return true
    } catch (err) {
      setError("Signup failed. Please try again.")
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("kech_user")
    localStorage.removeItem("kech_user_token")
    localStorage.removeItem("kech_user_interactions")
  }

  return (
    <UserAuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        isLoading,
        error,
      }}
    >
      {children}
    </UserAuthContext.Provider>
  )
}

export function useUserAuth() {
  const context = useContext(UserAuthContext)
  if (context === undefined) {
    throw new Error("useUserAuth must be used within a UserAuthProvider")
  }
  return context
}
