export interface Creator {
  id: string
  username: string
  displayName: string
  avatar: string
  snapcode: string
  isOfficial?: boolean
}

export interface Music {
  id: string
  title: string
  artist: string
  coverArt: string
}

export interface SpotlightVideo {
  id: string
  creator: Creator
  videoUrl: string
  thumbnail: string
  caption: string
  likes: number
  shares: number
  comments: number
  duration: string
  music: Music
}
