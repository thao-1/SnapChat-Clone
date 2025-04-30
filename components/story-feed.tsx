"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import type { Story } from "@/types/story"
import { StoryViewer } from "./story-viewer"

interface StoryFeedProps {
  stories: Story[]
}

export function StoryFeed({ stories }: StoryFeedProps) {
  const [activeStory, setActiveStory] = useState<Story | null>(null)
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({})

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
            {story.mediaType === "video" ? (
              <video
                ref={(el) => {
                  videoRefs.current[story.id] = el
                  return undefined
                }}
                src={story.mediaUrl}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <Image
                src={story.thumbnail || "/placeholder.jpg"}
                alt={story.caption || "Story thumbnail"}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 600px"
              />
            )}

            {/* Video indicator */}
            {story.mediaType === "video" && (
              <div className="absolute top-4 right-4 bg-black/50 p-1 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
            )}

            {/* Creator info */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <div className="w-8 h-8 relative rounded-full overflow-hidden border-2 border-white">
                <Image
                  src={story.creator.avatar || "/placeholder.jpg"}
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
