"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/contexts/AuthContext"
import MatchList from "@/components/Matches/MatchList"
import MapComponent from "@/components/Map/MapComponent"

export default function MatchesPage() {
  const [matches, setMatches] = useState([])
  const { user } = useAuth()

  useEffect(() => {
    const fetchMatches = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/matches`)
      const data = await response.json()
      setMatches(data)
    }
    fetchMatches()
  }, [])

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Nearby Matches</h2>
        <MatchList matches={matches} />
      </div>
      <div className="md:w-1/2">
        <MapComponent matches={matches} />
      </div>
    </div>
  )
}

