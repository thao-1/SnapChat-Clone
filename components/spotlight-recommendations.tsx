"use client"
import Image from "next/image"
import Link from "next/link"
import { useRef, useEffect } from "react"
import type { SpotlightVideo } from "@/types/spotlight"

interface SpotlightRecommendationsProps {
  videos: SpotlightVideo[]
}

export function SpotlightRecommendations({ videos }: SpotlightRecommendationsProps) {
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  useEffect(() => {
    // Initialize all videos with muted autoplay
    Object.values(videoRefs.current).forEach(videoEl => {
      if (videoEl) {
        videoEl.muted = true;
        videoEl.play().catch(e => console.log("Autoplay prevented:", e));
      }
    });
  }, []);

  return (
    <div>
      <div className="mb-4">
        <h2 className="font-bold">Up next</h2>
        <p className="text-gray-600 text-sm">Best of Spotlight</p>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {videos.map((video) => (
          <Link key={video.id} href={`/spotlight/${video.id}`} className="block">
            <div className="relative rounded-lg overflow-hidden">
              <div className="aspect-[3/4] relative">
                {video.videoUrl ? (
                  <video
                    ref={(el) => {
                      videoRefs.current[video.id] = el;
                      return undefined;
                    }}
                    src={video.videoUrl}
                    poster={video.thumbnail || "/placeholder.svg"}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <Image
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.caption || "Video thumbnail"}
                    fill
                    className="object-cover"
                  />
                )}

                {/* Caption overlay */}
                {video.caption && (
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-white text-xs line-clamp-2">{video.caption}</p>
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
