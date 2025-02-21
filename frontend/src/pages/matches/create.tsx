"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/router"
import { useAuth } from "@/contexts/AuthContext"

export default function CreateMatch() {
  const [matchData, setMatchData] = useState({
    sport: "",
    location: "",
    date: "",
    maxPlayers: 0,
  })
  const router = useRouter()
  const { user } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/matches`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${await user?.getIdToken()}`,
      },
      body: JSON.stringify(matchData),
    })
    if (response.ok) {
      router.push("/matches")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create a New Match</h1>
      {/* Add form fields for sport, location, date, maxPlayers */}
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Create Match
      </button>
    </form>
  )
}

