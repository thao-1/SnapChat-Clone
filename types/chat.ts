export interface ChatContact {
  id: string
  username: string
  displayName: string
  avatar: string
  isOnline: boolean
  lastMessage: string
  lastMessageTime: string
  hasUnreadMessage: boolean
}

export interface ChatMessage {
  id: string
  senderId: string
  receiverId: string
  type: "text" | "image" | "video"
  content: string
  time: string
  isSentByMe: boolean
  isRead: boolean
}
