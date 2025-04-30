export interface Creator {
  id: string
  username: string
  avatar: string
  isOfficial?: boolean
}

export interface Story {
  id: string
  creator: Creator
  mediaType: "image" | "video"
  mediaUrl: string
  thumbnail: string
  caption?: string
  timeAgo: string
  hasAudio?: boolean
}
