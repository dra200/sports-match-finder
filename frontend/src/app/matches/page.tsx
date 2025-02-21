import { Suspense } from "react"
import MatchList from "@/components/Matches/MatchList"
import MapComponent from "@/components/Map/MapComponent"

export default function MatchesPage() {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Nearby Matches</h2>
        <Suspense fallback={<div>Loading matches...</div>}>
          <MatchList />
        </Suspense>
      </div>
      <div className="md:w-1/2">
        <MapComponent />
      </div>
    </div>
  )
}

