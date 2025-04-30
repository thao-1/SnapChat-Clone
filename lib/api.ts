import type { Story } from "@/types/story"
import type { SpotlightVideo } from "@/types/spotlight"
import type { ChatContact, ChatMessage } from "@/types/chat"
import type { Lens } from "@/types/lens"

// Mock data for stories
const mockStories: { featured: Story[]; recommendations: Story[] } = {
  featured: [
    {
      id: "story1",
      creator: {
        id: "creator1",
        username: "john_doe",
        avatar: "/images/avatars/john_doe.jpg",
      },
      mediaType: "image",
      mediaUrl: "/images/stories/story1.jpg",
      thumbnail: "/images/stories/story1-thumb.jpg",
      caption: "Exploring the city!",
      timeAgo: "2h",
    },
    {
      id: "story2",
      creator: {
        id: "creator2",
        username: "jane_smith",
        avatar: "/images/avatars/jane_smith.jpg",
      },
      mediaType: "video",
      mediaUrl: "/videos/slime-packing.mp4",
      thumbnail: "/images/stories/story2-thumb.jpg",
      caption: "Delicious food!",
      timeAgo: "1h",
      hasAudio: true,
    },
  ],
  recommendations: [
    {
      id: "story3",
      creator: {
        id: "creator3",
        username: "alice_wonderland",
        avatar: "/images/avatars/alice_wonderland.jpg",
        isOfficial: true,
      },
      mediaType: "image",
      mediaUrl: "/images/stories/story3.jpg",
      thumbnail: "/images/stories/story3-thumb.jpg",
      caption: "New collection!",
      timeAgo: "30m",
    },
    {
      id: "story4",
      creator: {
        id: "creator4",
        username: "bob_the_builder",
        avatar: "/images/avatars/bob_the_builder.jpg",
      },
      mediaType: "video",
      mediaUrl: "/videos/slime-packing.mp4",
      thumbnail: "/images/stories/story4-thumb.jpg",
      caption: "DIY project",
      timeAgo: "45m",
      hasAudio: true,
    },
  ],
}

// Mock data for spotlight videos
const mockSpotlightVideos: { featured: SpotlightVideo; recommendations: SpotlightVideo[] } = {
  featured: {
    id: "spotlight1",
    creator: {
      id: "creator5",
      username: "emma_watson",
      displayName: "Emma Watson",
      avatar: "/images/avatars/emma_watson.jpg",
      snapcode: "/images/snapcodes/emma_watson.png",
    },
    videoUrl: "/videos/slime-packing.mp4",
    thumbnail: "/images/spotlight/spotlight1-thumb.jpg",
    caption: "Behind the scenes!",
    likes: 12345,
    shares: 678,
    comments: 90,
    duration: "0:30",
    music: {
      id: "music1",
      title: "Awesome Song",
      artist: "Cool Artist",
      coverArt: "/images/music/music1.jpg",
    },
  },
  recommendations: [
    {
      id: "spotlight2",
      creator: {
        id: "creator6",
        username: "tom_hanks",
        displayName: "Tom Hanks",
        avatar: "/images/avatars/tom_hanks.jpg",
        snapcode: "/images/snapcodes/tom_hanks.png",
      },
      videoUrl: "/videos/slime-packing.mp4",
      thumbnail: "/images/spotlight/spotlight2-thumb.jpg",
      caption: "Fun times!",
      likes: 54321,
      shares: 321,
      comments: 12,
      duration: "0:15",
      music: {
        id: "music2",
        title: "Another Great Song",
        artist: "Amazing Artist",
        coverArt: "/images/music/music2.jpg",
      },
    },
    {
      id: "spotlight3",
      creator: {
        id: "creator7",
        username: "scarlett_johansson",
        displayName: "Scarlett Johansson",
        avatar: "/images/avatars/scarlett_johansson.jpg",
        snapcode: "/images/snapcodes/scarlett_johansson.png",
      },
      videoUrl: "/videos/slime-packing.mp4",
      thumbnail: "/images/spotlight/spotlight3-thumb.jpg",
      caption: "Making memories!",
      likes: 9876,
      shares: 765,
      comments: 54,
      duration: "0:20",
      music: {
        id: "music3",
        title: "Catchy Tune",
        artist: "Popular Artist",
        coverArt: "/images/music/music3.jpg",
      },
    },
  ],
}

// Mock data for chat contacts
const mockChatContacts: ChatContact[] = [
  {
    id: "contact1",
    username: "alice123",
    displayName: "Alice",
    avatar: "/images/avatars/alice_wonderland.jpg",
    isOnline: true,
    lastMessage: "Hey, how's it going?",
    lastMessageTime: "10:30 AM",
    hasUnreadMessage: true,
  },
  {
    id: "contact2",
    username: "bob456",
    displayName: "Bob",
    avatar: "/images/avatars/bob_the_builder.jpg",
    isOnline: false,
    lastMessage: "See you later!",
    lastMessageTime: "Yesterday",
    hasUnreadMessage: false,
  },
]

// Mock data for chat messages
const mockChatMessages: { [contactId: string]: ChatMessage[] } = {
  contact1: [
    {
      id: "message1",
      senderId: "me",
      receiverId: "contact1",
      type: "text",
      content: "Hey Alice!",
      time: "10:29 AM",
      isSentByMe: true,
      isRead: true,
    },
    {
      id: "message2",
      senderId: "contact1",
      receiverId: "me",
      type: "text",
      content: "Hey, how's it going?",
      time: "10:30 AM",
      isSentByMe: false,
      isRead: true,
    },
  ],
  contact2: [
    {
      id: "message3",
      senderId: "me",
      receiverId: "contact2",
      type: "text",
      content: "Bye Bob!",
      time: "Yesterday",
      isSentByMe: true,
      isRead: true,
    },
    {
      id: "message4",
      senderId: "contact2",
      receiverId: "me",
      type: "text",
      content: "See you later!",
      time: "Yesterday",
      isSentByMe: false,
      isRead: true,
    },
  ],
}

// Mock data for popular lenses
const mockPopularLenses: Lens[] = [
  {
    id: "lens1",
    name: "Soft Vide Lens",
    creator: "فلتر للمشاهير",
    imageUrl: "/images/lenses/soft-vide.jpg",
    gifUrl: "/images/lenses/soft-vide.gif",
    iconUrl: "/images/lenses/icons/soft-vide.jpg",
    category: "face",
  },
  {
    id: "lens2",
    name: "SERUM Lens",
    creator: "Nasser Mohamed",
    imageUrl: "/images/lenses/serum.jpg",
    gifUrl: "/images/lenses/serum.gif",
    iconUrl: "/images/lenses/icons/serum.jpg",
    category: "face",
  },
  {
    id: "lens3",
    name: "Light Lens",
    creator: "Snapchat",
    imageUrl: "/images/lenses/light.jpg",
    gifUrl: "/images/lenses/light.gif",
    iconUrl: "/images/lenses/icons/light.jpg",
    category: "face",
  },
  {
    id: "lens4",
    name: "Snow White Dog Lens",
    creator: "Snapchat",
    imageUrl: "/images/lenses/snow-dog.jpg",
    gifUrl: "/images/lenses/snow-dog.gif",
    iconUrl: "/images/lenses/icons/snow-dog.jpg",
    category: "face",
  },
  {
    id: "lens5",
    name: "Green Screen Video",
    creator: "Snapchat",
    imageUrl: "/images/lenses/green-screen.jpg",
    gifUrl: "/images/lenses/green-screen.gif",
    iconUrl: "/images/lenses/icons/green-screen.jpg",
    category: "world",
  },
]

// Mock data for trending lenses
const mockTrendingLenses: Lens[] = [
  {
    id: "lens6",
    name: "Portrait Blur V3 Lens",
    creator: "DK 🦋",
    imageUrl: "/images/lenses/portrait-blur.jpg",
    gifUrl: "/images/lenses/portrait-blur.gif",
    iconUrl: "/images/lenses/icons/portrait-blur.jpg",
    category: "face",
  },
  {
    id: "lens7",
    name: "Clone Yourself Lens",
    creator: "SirQu3ntin",
    imageUrl: "/images/lenses/clone-yourself.jpg",
    gifUrl: "/images/lenses/clone-yourself.gif",
    iconUrl: "/images/lenses/icons/clone-yourself.jpg",
    category: "world",
  },
  {
    id: "lens8",
    name: "Loop Me Lens",
    creator: "Yisus",
    imageUrl: "/images/lenses/loop-me.jpg",
    gifUrl: "/images/lenses/loop-me.gif",
    iconUrl: "/images/lenses/icons/loop-me.jpg",
    category: "face",
  },
  {
    id: "lens9",
    name: "Glow Effect with Makeup Lens",
    creator: "Snapchat",
    imageUrl: "/images/lenses/glow-effect.jpg",
    gifUrl: "/images/lenses/glow-effect.gif",
    iconUrl: "/images/lenses/icons/glow-effect.jpg",
    category: "face",
  },
  {
    id: "lens10",
    name: "memo Lens",
    creator: "Millat Shaban 🖤",
    imageUrl: "/images/lenses/memo.jpg",
    gifUrl: "/images/lenses/memo.gif",
    iconUrl: "/images/lenses/icons/memo.jpg",
    category: "face",
  },
]

// Function to simulate fetching stories
export async function fetchStories() {
  // In a real app, this would be an API call
  return new Promise<{ featured: Story[]; recommendations: Story[] }>((resolve) => {
    setTimeout(() => {
      resolve(mockStories)
    }, 500)
  })
}

// Function to simulate fetching spotlight videos
export async function fetchSpotlightVideos() {
  // In a real app, this would be an API call
  return new Promise<{ featured: SpotlightVideo; recommendations: SpotlightVideo[] }>((resolve) => {
    setTimeout(() => {
      resolve(mockSpotlightVideos)
    }, 500)
  })
}

// Function to simulate fetching chat contacts
export async function fetchChatContacts() {
  // In a real app, this would be an API call
  return new Promise<ChatContact[]>((resolve) => {
    setTimeout(() => {
      resolve(mockChatContacts)
    }, 500)
  })
}

// Function to simulate fetching chat messages
export async function fetchChatMessages(contactId: string) {
  // In a real app, this would be an API call
  return new Promise<ChatMessage[]>((resolve) => {
    setTimeout(() => {
      resolve(mockChatMessages[contactId] || [])
    }, 500)
  })
}

// Function to simulate fetching popular lenses
export async function fetchPopularLenses() {
  // In a real app, this would be an API call
  return new Promise<Lens[]>((resolve) => {
    setTimeout(() => {
      resolve(mockPopularLenses)
    }, 500)
  })
}

// Function to simulate fetching trending lenses
export async function fetchTrendingLenses() {
  // In a real app, this would be an API call
  return new Promise<Lens[]>((resolve) => {
    setTimeout(() => {
      resolve(mockTrendingLenses)
    }, 500)
  })
}
