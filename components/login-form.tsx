"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function LoginForm() {
  const [loginMethod, setLoginMethod] = useState<"email" | "phone">("email")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const toggleLoginMethod = () => {
    setLoginMethod(loginMethod === "email" ? "phone" : "email")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login attempt with:", { username, password, method: loginMethod })
    // Here you would typically handle authentication
  }

  return (
    <div className="max-w-md w-full mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Log in to Snapchat</h1>
        <p className="text-gray-600">
          Chat, Snap, and video call your friends. Watch Stories and Spotlight, all from your computer.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type={loginMethod === "email" ? "email" : "tel"}
            placeholder={loginMethod === "email" ? "Username or email address" : "Phone number"}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-gray-100 border-0 focus:ring-0 focus:bg-white focus:border-gray-300 rounded-md"
          />
        </div>

        <div className="text-center">
          <button type="button" onClick={toggleLoginMethod} className="text-[#00c2ff] text-sm hover:underline">
            Use {loginMethod === "email" ? "phone number" : "email address"} instead
          </button>
        </div>

        <Button type="submit" className="w-full bg-[#00c2ff] hover:bg-[#00b3eb] text-white rounded-full">
          Log in
        </Button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Looking for the app?{" "}
          <Link href="/download" className="text-[#00c2ff] hover:underline">
            Get it here
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
