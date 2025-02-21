import MatchCard from "./MatchCard"

async function getMatches() {
  // In a real app, this would fetch from your API
  const res = await fetch("http://localhost:3000/api/matches")
  if (!res.ok) {
    throw new Error("Failed to fetch matches")
  }
  return res.json()
}

export default async function MatchList() {
  const matches = await getMatches()

  return (
    <div className="space-y-4">
      {matches.map((match) => (
        <MatchCard key={match.id} match={match} />
      ))}
    </div>
  )
}

