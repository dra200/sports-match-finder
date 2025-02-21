import Link from "next/link"

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Sports Match Finder</h1>
      <p className="mb-8">Find and join sports matches in your area</p>
      <div className="space-x-4">
        <Link href="/matches" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Find Matches
        </Link>
        <Link href="/matches/create" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Create Match
        </Link>
      </div>
    </div>
  )
}

