"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { X, Heart, Send, MessageCircle } from "lucide-react"
import type { Story } from "@/types/story"

interface StoryViewerProps {
  story: Story
  onClose: () => void
}

export function StoryViewer({ story, onClose }: StoryViewerProps) {
  const [progress, setProgress] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Handle progress bar
  useEffect(() => {
    if (isPaused) return

    const duration = story.mediaType === "video" ? (videoRef.current?.duration || 10) * 1000 : 5000 // 5 seconds for images

    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + (100 / duration) * 100
        if (newProgress >= 100) {
          clearInterval(interval)
          setTimeout(onClose, 500)
          return 100
        }
        return newProgress
      })
    }, 100)

    return () => clearInterval(interval)
  }, [isPaused, onClose, story.mediaType])

  // Handle video playback
  useEffect(() => {
    if (story.mediaType === "video" && videoRef.current) {
      if (isPaused) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
    }
  }, [isPaused, story.mediaType])

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      {/* Close button */}
      <button onClick={onClose} className="absolute top-4 right-4 z-10 text-white p-2">
        <X className="w-6 h-6" />
      </button>

      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gray-800">
        <div className="h-full bg-white" style={{ width: `${progress}%` }} />
      </div>

      {/* Story content */}
      <div
        className="relative w-full max-w-md aspect-[9/16]"
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        onMouseDown={() => setIsPaused(true)}
        onMouseUp={() => setIsPaused(false)}
      >
        {story.mediaType === "video" ? (
          <video
            ref={videoRef}
            src={story.mediaUrl}
            className="w-full h-full object-cover"
            autoPlay
            controls={false}
            loop={false}
            muted={!story.hasAudio}
            playsInline
          />
        ) : (
          <Image
            src={story.mediaUrl || "/placeholder.jpg"}
            alt={story.caption || "Story"}
            fill
            className="object-cover"
          />
        )}

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
          <div>
            <span className="text-white font-medium">{story.creator.username}</span>
            <span className="text-gray-300 text-xs ml-2">{story.timeAgo}</span>
          </div>
        </div>

        {/* Caption */}
        {story.caption && (
          <div className="absolute bottom-20 left-0 right-0 p-4">
            <p className="text-white text-center text-xl font-medium">{story.caption}</p>
          </div>
        )}

        {/* Interaction buttons */}
        <div className="absolute bottom-4 left-0 right-0 flex items-center justify-around px-4">
          <button className="text-white p-2">
            <Heart className="w-6 h-6" />
          </button>
          <button className="text-white p-2">
            <MessageCircle className="w-6 h-6" />
          </button>
          <button className="text-white p-2">
            <Send className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  )
}
