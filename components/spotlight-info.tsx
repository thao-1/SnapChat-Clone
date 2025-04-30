import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { SpotlightVideo } from "@/types/spotlight"

interface SpotlightInfoProps {
  video: SpotlightVideo
}

export function SpotlightInfo({ video }: SpotlightInfoProps) {
  return (
    <div className="mb-8">
      <div className="bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
        </svg>
      </div>

      <h1 className="text-3xl font-bold mb-2">Get In On Snapchat's Trending Videos</h1>
      <p className="text-gray-600 mb-6">Watch Viral Spotlight Videos From Popular Creators To See What's Trending.</p>

      <div className="mb-6">
        <h2 className="font-bold mb-2">In this Snap</h2>
        <div className="flex items-center gap-3">
          <div className="bg-yellow-400 rounded-md p-1">
            <div className="w-10 h-10 relative">
              <Image
                src={video.creator.snapcode || "/placeholder.svg"}
                alt={`${video.creator.username} snapcode`}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{video.creator.displayName}</div>
            <div className="text-gray-600 text-sm">{video.creator.username}</div>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-3">
          <div className="bg-black rounded-md p-1">
            <div className="w-10 h-10 relative">
              <Image
                src={video.music.coverArt || "/placeholder.svg"}
                alt={video.music.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{video.music.title}</div>
            <div className="text-gray-600 text-sm">{video.music.artist}</div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {["snapchat", "facebook", "twitter", "whatsapp", "reddit", "pinterest", "email", "messenger"].map(
          (platform) => (
            <Link
              key={platform}
              href={`#share-${platform}`}
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
            >
              <Image src={`/images/social/${platform}.png`} alt={platform} width={20} height={20} />
            </Link>
          ),
        )}
        <Button variant="outline" className="ml-auto text-sm h-8">
          Copy Link
        </Button>
      </div>
    </div>
  )
}
