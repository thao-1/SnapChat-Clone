"use client"

import { Button } from "@/components/ui/button"

export function LensCategories() {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <Button variant="default" className="rounded-full bg-black text-white">
        For You
      </Button>
    </div>
  )
}
