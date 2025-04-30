"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Play, Pause, Heart, Share2, MoreHorizontal } from "lucide-react"
import type { SpotlightVideo } from "@/types/spotlight"

interface SpotlightPlayerProps {
  video: SpotlightVideo
}

export function SpotlightPlayer({ video }: SpotlightPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current

      const handleTimeUpdate = () => {
        setCurrentTime(video.currentTime)
      }

      const handleLoadedMetadata = () => {
        setDuration(video.duration)
      }

      video.addEventListener("timeupdate", handleTimeUpdate)
      video.addEventListener("loadedmetadata", handleLoadedMetadata)

      return () => {
        video.removeEventListener("timeupdate", handleTimeUpdate)
        video.removeEventListener("loadedmetadata", handleLoadedMetadata)
      }
    }
  }, [])

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  return (
    <div className="relative rounded-lg overflow-hidden bg-black">
      {/* Video Player */}
      <div className="aspect-[9/16] relative">
        <video
          ref={videoRef}
          src={video.videoUrl}
          poster={video.thumbnail}
          className="w-full h-full object-cover"
          playsInline
          onClick={togglePlayPause}
        />

        {/* Video Caption */}
        <div className="absolute bottom-16 left-0 right-0 p-4 text-center">
          <div className="bg-black/50 text-white py-2 px-4 rounded-lg inline-block">
            <p className="text-lg">{video.caption}</p>
          </div>
        </div>

        {/* Play/Pause Button Overlay */}
        <button
          className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity"
          onClick={togglePlayPause}
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? <Pause className="w-16 h-16 text-white" /> : <Play className="w-16 h-16 text-white" />}
        </button>

        {/* Video Controls */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          {/* Progress Bar */}
          <div className="w-full bg-gray-600 h-1 rounded-full mb-4">
            <div className="bg-white h-1 rounded-full" style={{ width: `${(currentTime / duration) * 100}%` }} />
          </div>

          <div className="flex items-center justify-between">
            {/* Time */}
            <div className="text-white text-sm">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>

            {/* Creator Info */}
            <div className="flex items-center">
              <div className="w-8 h-8 relative rounded-full overflow-hidden mr-2">
                <Image
                  src={video.creator.avatar || "/placeholder.svg"}
                  alt={video.creator.username}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-white font-medium">{video.creator.username}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <button className="text-white" aria-label="Like">
                <Heart className="w-5 h-5" />
              </button>
              <button className="text-white" aria-label="Share">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="text-white" aria-label="More options">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="absolute right-4 bottom-20 flex flex-col items-center space-y-4">
          <div className="bg-black/50 text-white rounded-full px-2 py-1 text-sm">{video.likes}</div>
          <div className="bg-black/50 text-white rounded-full px-2 py-1 text-sm">{video.shares}</div>
        </div>

        {/* Duration */}
        <div className="absolute left-4 bottom-20 bg-black/50 text-white rounded-full px-2 py-1 text-sm">
          {video.duration}
        </div>
      </div>
    </div>
  )
}
