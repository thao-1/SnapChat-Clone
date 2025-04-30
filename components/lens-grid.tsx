"use client"

import { useState } from "react"
import Image from "next/image"
import type { Lens } from "@/types/lens"

interface LensGridProps {
  lenses: Lens[]
}

export function LensGrid({ lenses }: LensGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {lenses.map((lens) => (
        <div
          key={lens.id}
          className="relative rounded-lg overflow-hidden cursor-pointer"
        >
          <div className="aspect-[3/4] relative bg-gray-100">
            {/* Show lens image */}
            <Image
              src={lens.imageUrl}
              alt={lens.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 20vw"
            />

            {/* Lens icon at bottom */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden relative bg-white">
                <Image
                  src={lens.iconUrl}
                  alt={`${lens.name} icon`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Lens info */}
          <div className="text-center py-2">
            <h3 className="font-medium">{lens.name}</h3>
            <p className="text-sm text-gray-600">{lens.creator}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
