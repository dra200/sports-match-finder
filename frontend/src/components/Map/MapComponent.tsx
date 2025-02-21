"use client"

import { useEffect, useRef } from "react"
import { Loader } from "@googlemaps/js-api-loader"
import { google } from "google-maps"

export default function MapComponent() {
  const mapRef = useRef(null)

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      version: "weekly",
    })

    loader.load().then(() => {
      const map = new google.maps.Map(mapRef.current, {
        center: { lat: 40.7128, lng: -74.006 },
        zoom: 12,
      })
      // Add markers for match locations here
    })
  }, [])

  return <div ref={mapRef} className="w-full h-[400px]" />
}

