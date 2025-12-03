"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export default function ProductGallery({ selectedColor, colors }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  // Generate thumbnails for the selected color
  const thumbnails = [
    selectedColor.image,
    `/placeholder.svg?height=600&width=500&query=${selectedColor.name} sweater back view`,
    `/placeholder.svg?height=600&width=500&query=${selectedColor.name} sweater detail closeup`,
    `/placeholder.svg?height=600&width=500&query=${selectedColor.name} sweater side view`,
  ]

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible">
        {thumbnails.map((thumb, index) => (
          <button
            key={index}
            onClick={() => setActiveImageIndex(index)}
            className={cn(
              "relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all",
              activeImageIndex === index
                ? "border-primary ring-2 ring-primary/20"
                : "border-border hover:border-muted-foreground",
            )}
          >
            <Image src={thumb || "/placeholder.svg"} alt={`Product view ${index + 1}`} fill className="object-cover" />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="relative flex-1 aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
        <Image
          src={thumbnails[activeImageIndex] || "/placeholder.svg"}
          alt={`${selectedColor.name} sweater`}
          fill
          className="object-cover transition-all duration-300"
          priority
        />
        <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
          25% OFF
        </div>
      </div>
    </div>
  )
}
