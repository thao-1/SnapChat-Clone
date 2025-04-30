import type { Story } from "@/types/story"
import type { SpotlightVideo } from "@/types/spotlight"
import type { ChatContact, ChatMessage } from "@/types/chat"
import type { Lens } from "@/types/lens"

// Stories data using real videos
const mockStories: { featured: Story[]; recommendations: Story[] } = {
  featured: [
    {
      id: "story1",
      creator: {
        id: "creator1",
        username: "john_doe",
        avatar: "/placeholder-user.jpg",
      },
      mediaType: "video",
      mediaUrl: "/images/stories/173530-849610807_compressed.mp4",
      thumbnail: "/images/stories/173530-849610807.jpg",
      caption: "Nature!",
      timeAgo: "2h",
    },
    {
      id: "story2",
      creator: {
        id: "creator2",
        username: "jane_smith",
        avatar: "/placeholder-user.jpg",
      },
      mediaType: "video",
      mediaUrl: "/images/stories/186714-878826932_compressed.mp4",
      thumbnail: "/images/stories/186714-878826932.jpg",
      caption: "Sunset!",
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
        avatar: "/placeholder-user.jpg",
        isOfficial: true,
      },
      mediaType: "video",
      mediaUrl: "/images/stories/206294_compressed.mp4",
      thumbnail: "/images/stories/206294.jpg",
      caption: "New collection!",
      timeAgo: "30m",
    },
    {
      id: "story4",
      creator: {
        id: "creator4",
        username: "bob_the_builder",
        avatar: "/placeholder-user.jpg",
      },
      mediaType: "video",
      mediaUrl: "/images/stories/173530-849610807_compressed.mp4",
      thumbnail: "/images/stories/173530-849610807.jpg",
      caption: "DIY project",
      timeAgo: "45m",
      hasAudio: true,
    },
  ],
}

// Spotlight videos data using real videos
const mockSpotlightVideos: { featured: SpotlightVideo; recommendations: SpotlightVideo[] } = {
  featured: {
    id: "spotlight1",
    creator: {
      id: "creator5",
      username: "snapbunny",
      displayName: "Snap Bunny",
      avatar: "/placeholder-user.jpg",
      snapcode: "/placeholder.svg",
    },
    videoUrl: "/images/spotlight/249216_tiny.mp4",
    thumbnail: "/placeholder.jpg",
    caption: "Behind the scenes!",
    likes: 12345,
    shares: 678,
    comments: 90,
    duration: "0:30",
    music: {
      id: "music1",
      title: "Awesome Song",
      artist: "Cool Artist",
      coverArt: "/placeholder.jpg",
    },
  },
  recommendations: [
    {
      id: "spotlight2",
      creator: {
        id: "creator6",
        username: "snapcat",
        displayName: "Snap Cat",
        avatar: "/placeholder-user.jpg",
        snapcode: "/placeholder.svg",
      },
      videoUrl: "/images/videos/227567_compressed.mp4",
      thumbnail: "/placeholder.jpg",
      caption: "New movie trailer",
      likes: 9876,
      shares: 543,
      comments: 21,
      duration: "0:45",
      music: {
        id: "music2",
        title: "Default Music",
        artist: "Unknown Artist",
        coverArt: "/placeholder.jpg",
      },
    },
    {
      id: "spotlight3",
      creator: {
        id: "creator7",
        username: "snapdog",
        displayName: "Snap Dog",
        avatar: "/placeholder-user.jpg",
        snapcode: "/placeholder.svg",
        isOfficial: true,
      },
      videoUrl: "/images/videos/253998_compressed.mp4",
      thumbnail: "/placeholder.jpg",
      caption: "New song teaser",
      likes: 54321,
      shares: 1234,
      comments: 567,
      duration: "0:15",
      music: {
        id: "music3",
        title: "New Hit",
        artist: "Taylor Swift",
        coverArt: "/placeholder.jpg",
      },
    },
  ],
}

// Mock chat data
const mockChatContacts: ChatContact[] = [
  {
    id: "contact1",
    username: "alex_johnson",
    displayName: "Alex Johnson",
    avatar: "/placeholder-user.jpg",
    isOnline: true,
    lastMessage: "Hey, how's it going?",
    lastMessageTime: "10:30 AM",
    hasUnreadMessage: true,
  },
  {
    id: "contact2",
    username: "sarah_williams",
    displayName: "Sarah Williams",
    avatar: "/placeholder-user.jpg",
    isOnline: false,
    lastMessage: "Check out this snap!",
    lastMessageTime: "Yesterday",
    hasUnreadMessage: false,
  },
  {
    id: "contact3",
    username: "mike_brown",
    displayName: "Mike Brown",
    avatar: "/placeholder-user.jpg",
    isOnline: true,
    lastMessage: "Are we still meeting today?",
    lastMessageTime: "2:15 PM",
    hasUnreadMessage: true,
  },
]

// Mock chat messages
const mockChatMessages: { [contactId: string]: ChatMessage[] } = {
  contact1: [
    {
      id: "message1",
      senderId: "me",
      receiverId: "contact1",
      type: "text",
      content: "Hey Alex! How are you?",
      time: "10:15 AM",
      isSentByMe: true,
      isRead: true,
    },
    {
      id: "message2",
      senderId: "contact1",
      receiverId: "me",
      type: "text",
      content: "I'm good! Just checking out the new Snapchat features.",
      time: "10:20 AM",
      isSentByMe: false,
      isRead: true,
    },
    {
      id: "message3",
      senderId: "contact1",
      receiverId: "me",
      type: "text",
      content: "Have you tried the new lenses?",
      time: "10:22 AM",
      isSentByMe: false,
      isRead: true,
    },
    {
      id: "message4",
      senderId: "me",
      receiverId: "contact1",
      type: "text",
      content: "Not yet! Are they cool?",
      time: "10:25 AM",
      isSentByMe: true,
      isRead: false,
    },
    {
      id: "message5",
      senderId: "contact1",
      receiverId: "me",
      type: "text",
      content: "Yeah, they're awesome! You should check them out.",
      time: "10:30 AM",
      isSentByMe: false,
      isRead: true,
    },
  ],
}

// Mock lenses data
const mockLenses: { popular: Lens[]; trending: Lens[] } = {
  popular: [
    {
      id: "lens1",
      name: "Clone Yourself",
      creator: "Snapchat",
      imageUrl: "/images/lenses/clone.png",
      iconUrl: "/images/lenses/icon.png",
      category: "Fun",
    },
    {
      id: "lens2",
      name: "Glow Effect",
      creator: "Lens Studio",
      imageUrl: "/images/lenses/glow.png",
      iconUrl: "/images/lenses/icon.png",
      category: "Beauty",
    },
    {
      id: "lens3",
      name: "Green Screen",
      creator: "Snapchat",
      imageUrl: "/images/lenses/green.png",
      iconUrl: "/images/lenses/icon.png",
      category: "Creative",
    },
  ],
  trending: [
    {
      id: "lens4",
      name: "Portrait Blur",
      creator: "Snapchat",
      imageUrl: "/images/lenses/portrait.png",
      iconUrl: "/images/lenses/icon.png",
      category: "Beauty",
    },
    {
      id: "lens5",
      name: "Snow Dog",
      creator: "Lens Creator",
      imageUrl: "/images/lenses/snowdog.png",
      iconUrl: "/images/lenses/icon.png",
      category: "Animals",
    },
    {
      id: "lens6",
      name: "Serum",
      creator: "Beauty Inc",
      imageUrl: "/images/lenses/serum.png",
      iconUrl: "/images/lenses/icon.png",
      category: "Beauty",
    },
    {
      id: "lens7",
      name: "Soft Vide",
      creator: "Film Studio",
      imageUrl: "/images/lenses/soft.png",
      iconUrl: "/images/lenses/icon.png",
      category: "Creative",
    },
    {
      id: "lens8",
      name: "Light",
      creator: "Photo Pro",
      imageUrl: "/images/lenses/light.png",
      iconUrl: "/images/lenses/icon.png",
      category: "Photography",
    },
    {
      id: "lens9",
      name: "Loop Me",
      creator: "Video Creator",
      imageUrl: "/images/lenses/loopme.png",
      iconUrl: "/images/lenses/icon.png",
      category: "Fun",
    },
    {
      id: "lens10",
      name: "Memo",
      creator: "Snapchat",
      imageUrl: "/images/lenses/memo.png",
      iconUrl: "/images/lenses/icon.png",
      category: "Utility",
    },
  ],
}

// Function to simulate fetching stories
export async function fetchStories() {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 500))
  return mockStories
}

// Function to simulate fetching spotlight videos
export async function fetchSpotlightVideos() {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 500))
  return mockSpotlightVideos
}

// Function to simulate fetching chat contacts
export async function fetchChatContacts() {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 500))
  return mockChatContacts
}

// Function to simulate fetching chat messages
export async function fetchChatMessages(contactId: string) {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 500))
  return mockChatMessages[contactId] || []
}

// Function to simulate fetching popular lenses
export async function fetchPopularLenses() {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 500))
  return mockLenses.popular
}

// Function to simulate fetching trending lenses
export async function fetchTrendingLenses() {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 500))
  return mockLenses.trending
}
