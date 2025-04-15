"use client"

/// <reference types="google.maps" />
import { useEffect, useRef, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

declare global {
  interface Window {
    google: typeof google
    initMap: () => void
  }
}

export default function ContactPage() {
  const mapRef = useRef<HTMLDivElement | null>(null)
  const [mapError, setMapError] = useState(false)

  useEffect(() => {
    const initMap = () => {
      try {
        if (!mapRef.current || !window.google?.maps) {
          setMapError(true)
          return
        }

        const location = { lat: 28.6139, lng: 77.2090 } // Delhi
        const map = new window.google.maps.Map(mapRef.current, {
          zoom: 12,
          center: location,
          disableDefaultUI: true,
          zoomControl: true,
        })
        new window.google.maps.Marker({ position: location, map })
      } catch (error) {
        console.error("Error initializing map:", error)
        setMapError(true)
      }
    }

    const loadScript = () => {
      const existingScript = document.querySelector<HTMLScriptElement>(
        'script[src^="https://maps.googleapis.com/maps/api/js"]'
      )
      
      if (existingScript) {
        // If script already exists, just initialize the map
        initMap()
        return
      }

      // Create new script
      const script = document.createElement("script")
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
      script.async = true
      script.defer = true
      script.onload = initMap
      script.onerror = () => {
        console.error("Failed to load Google Maps script")
        setMapError(true)
      }
      document.head.appendChild(script)
    }

    loadScript()

    // Cleanup function
    return () => {
      const script = document.querySelector<HTMLScriptElement>(
        'script[src^="https://maps.googleapis.com/maps/api/js"]'
      )
      if (script) {
        document.head.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl font-bold text-center mb-4">Get in Touch</h1>
          <p className="text-center text-gray-600 mb-10">We're here to help. Reach out to us via any method below.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-md border p-3 focus:outline-teal-500"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-md border p-3 focus:outline-teal-500"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-md border p-3 focus:outline-teal-500"
                />
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full rounded-md border p-3 focus:outline-teal-500"
                />
                <Button className="w-full bg-teal-600 hover:bg-teal-700">Send</Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info + Map */}
          <div className="space-y-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-xl border bg-white p-6 shadow-md"
            >
              <h3 className="text-xl font-bold mb-2">Contact Details</h3>
              <p><strong>Phone:</strong> +91 7654406307</p>
              <p><strong>Email:</strong> tiwarivivek8765@gmail.com</p>
              <p><strong>Office:</strong> Delhi, India</p>
            </motion.div>

            {/* Map */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <div 
                ref={mapRef} 
                className="h-64 w-full bg-gray-100 flex items-center justify-center"
              >
                {mapError ? (
                  <p className="text-center p-4 text-gray-600">
                    Could not load map. Please check your internet connection or try again later.
                  </p>
                ) : (
                  <p className="text-center p-4 text-gray-600">Loading map...</p>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}