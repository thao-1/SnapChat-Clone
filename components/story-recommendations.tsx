"use client"

import { useState } from "react"
import Image from "next/image"
import type { Story } from "@/types/story"
import { StoryViewer } from "./story-viewer"

interface StoryRecommendationsProps {
  stories: Story[]
}

export function StoryRecommendations({ stories }: StoryRecommendationsProps) {
  const [activeStory, setActiveStory] = useState<Story | null>(null)

  const openStory = (story: Story) => {
    setActiveStory(story)
  }

  const closeStory = () => {
    setActiveStory(null)
  }

  return (
    <div className="space-y-4">
      {stories.map((story) => (
        <div
          key={story.id}
          className="relative rounded-xl overflow-hidden cursor-pointer bg-gray-900"
          onClick={() => openStory(story)}
        >
          <div className="aspect-[4/5] relative">
            <Image
              src={story.thumbnail || "/placeholder.svg"}
              alt={story.caption || "Story thumbnail"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 300px"
            />

            {/* Creator info */}
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
              <div className="flex items-center gap-2">
                <span className="text-white font-medium">{story.creator.username}</span>
                {story.creator.isOfficial && <span className="text-yellow-400">●</span>}
              </div>
              <span className="text-gray-300 text-sm">{story.timeAgo}</span>
            </div>
          </div>
        </div>
      ))}

      <button className="w-full py-2 text-center text-[#00c2ff] font-medium">See more</button>

      {/* Story Viewer Modal */}
      {activeStory && <StoryViewer story={activeStory} onClose={closeStory} />}
    </div>
  )
}
