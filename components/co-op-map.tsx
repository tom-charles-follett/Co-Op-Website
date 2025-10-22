"use client"

import { useState } from "react"
import { MapPin } from "lucide-react"

interface CoOpLocation {
  name: string
  description: string
  lat: number
  lng: number
  link?: string
}

const coOpLocations: CoOpLocation[] = [
  {
    name: "Anishinaabe Agriculture Institute",
    description: "Leading indigenous agricultural education and traditional farming practices",
    lat: 46.1394,
    lng: -95.8231, // Osage, MN
  },
  {
    name: "Lower Sioux Housing & Hempcrete",
    description: "Pioneering sustainable housing with hemp-based construction materials",
    lat: 44.5833,
    lng: -95.1667, // Lower Sioux Indian Reservation, MN
    link: "https://www.greenbuffalo.org",
  },
  {
    name: "Diné Weavers",
    description: "Traditional textile arts using hemp and native fibers",
    lat: 36.9167,
    lng: -109.0833, // Teec Nos Pos, AZ
  },
  {
    name: "Prairie Band Potawatomi",
    description: "Hemp cultivation and sustainable agriculture initiatives",
    lat: 39.3528,
    lng: -95.7194, // Mayetta, KS
  },
  {
    name: "Cheyenne River Sioux Tribe",
    description: "Community-led hemp farming and economic development",
    lat: 45.0167,
    lng: -101.1333, // Eagle Butte, SD
  },
  {
    name: "Macoche Pine Ridge",
    description: "Regenerative agriculture and hemp production on tribal lands",
    lat: 43.2,
    lng: -102.5, // Pine Ridge Reservation, SD
  },
  {
    name: "Mi'kmaq Bioremediation Project",
    description: "Using hemp for environmental restoration and soil healing",
    lat: 46.9167,
    lng: -67.8833, // Loring Air Force Base, ME
  },
  {
    name: "Indigenous Habitat Institute",
    description: "Ecosystem restoration through indigenous agricultural practices",
    lat: 41.0586,
    lng: -124.1428, // Trinidad, CA
  },
  {
    name: "Turtle Mountain Chippewa Hemp",
    description: "Tribal hemp cultivation and processing operations",
    lat: 48.8394,
    lng: -99.7481, // Belcourt, ND
  },
]

// Convert lat/lng to pixel position on the map
// Map bounds: roughly 25°N to 50°N latitude, -125°W to -65°W longitude
function latLngToPosition(lat: number, lng: number) {
  const minLat = 25
  const maxLat = 50
  const minLng = -125
  const maxLng = -65

  const x = ((lng - minLng) / (maxLng - minLng)) * 100
  const y = ((maxLat - lat) / (maxLat - minLat)) * 100

  return { x, y }
}

export function CoOpMap() {
  const [selectedLocation, setSelectedLocation] = useState<CoOpLocation | null>(null)

  return (
    <div className="relative w-full h-full min-h-[500px] bg-muted rounded-lg overflow-hidden">
      {/* Map Image */}
      <img
        src="/north-america-map-showing-united-states-and-canada.jpg"
        alt="Map of North America showing co-op locations"
        className="w-full h-full object-cover"
      />

      {/* Interactive Markers */}
      <div className="absolute inset-0">
        {coOpLocations.map((location, index) => {
          const position = latLngToPosition(location.lat, location.lng)
          return (
            <button
              key={index}
              onClick={() => setSelectedLocation(location)}
              className="absolute transform -translate-x-1/2 -translate-y-full transition-all hover:scale-125 focus:scale-125 focus:outline-none group"
              style={{
                left: `${position.x}%`,
                top: `${position.y}%`,
              }}
              aria-label={`View details for ${location.name}`}
            >
              <MapPin className="w-8 h-8 text-primary fill-primary drop-shadow-lg group-hover:text-accent group-hover:fill-accent" />
              <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 px-2 py-1 bg-background/90 text-foreground text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
                {location.name}
              </span>
            </button>
          )
        })}
      </div>

      {/* Info Panel */}
      {selectedLocation && (
        <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 bg-background/95 backdrop-blur-sm p-4 rounded-lg shadow-xl border border-border">
          <button
            onClick={() => setSelectedLocation(null)}
            className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
            aria-label="Close"
          >
            ✕
          </button>
          <h3 className="font-bold text-lg mb-2 pr-6">{selectedLocation.name}</h3>
          <p className="text-sm text-muted-foreground mb-3">{selectedLocation.description}</p>
          {selectedLocation.link && (
            <a
              href={selectedLocation.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              Learn More →
            </a>
          )}
        </div>
      )}
    </div>
  )
}
