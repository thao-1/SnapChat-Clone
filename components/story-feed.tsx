"use client"

import { useState } from "react"
import Image from "next/image"
import type { Story } from "@/types/story"
import { StoryViewer } from "./story-viewer"

interface StoryFeedProps {
  stories: Story[]
}

export function StoryFeed({ stories }: StoryFeedProps) {
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
          className="relative rounded-xl overflow-hidden cursor-pointer"
          onClick={() => openStory(story)}
        >
          <div className="aspect-[9/16] relative">
            <Image
              src={story.thumbnail || "/placeholder.svg"}
              alt={story.caption || "Story thumbnail"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 600px"
            />

            {/* Creator info */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <div className="w-8 h-8 relative rounded-full overflow-hidden border-2 border-white">
                <Image
                  src={story.creator.avatar || "/placeholder.svg"}
                  alt={story.creator.username}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-black/50 px-2 py-1 rounded-full">
                <span className="text-white text-sm">{story.creator.username}</span>
                <span className="text-gray-300 text-xs ml-2">{story.timeAgo}</span>
              </div>
            </div>

            {/* Caption */}
            {story.caption && (
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white text-center text-xl font-medium">{story.caption}</p>
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Story Viewer Modal */}
      {activeStory && <StoryViewer story={activeStory} onClose={closeStory} />}
    </div>
  )
}
