import Link from "next/link"

export default function MatchCard({ match }) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h3 className="text-xl font-semibold mb-2">{match.sport}</h3>
      <p className="text-gray-600 mb-2">{match.location}</p>
      <p className="text-gray-600 mb-4">{new Date(match.date).toLocaleString()}</p>
      <Link
        href={`/matches/${match.id}`}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        View Details
      </Link>
    </div>
  )
}

