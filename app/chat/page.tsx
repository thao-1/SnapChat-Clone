"use client"

import { useState, useEffect } from "react"
import { NavBar } from "@/components/nav-bar"
import { CameraInterface } from "@/components/camera-interface"
import { ChatContacts } from "@/components/chat-contacts"
import { ChatConversation } from "@/components/chat-conversation"
import { fetchChatContacts, fetchChatMessages } from "@/lib/api"
import type { ChatContact, ChatMessage } from "@/types/chat"

export default function ChatPage() {
  const [showCamera, setShowCamera] = useState(true)
  const [contacts, setContacts] = useState<ChatContact[]>([])
  const [selectedContact, setSelectedContact] = useState<ChatContact | null>(null)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [userProfileImage, setUserProfileImage] = useState<string | null>(null)

  // Fetch contacts on component mount
  useEffect(() => {
    const loadContacts = async () => {
      const fetchedContacts = await fetchChatContacts()
      setContacts(fetchedContacts)
    }

    loadContacts()
  }, [])

  // Handle photo capture
  const handlePhotoCapture = (photo: string) => {
    setUserProfileImage(photo)
    setShowCamera(false)
  }

  // Handle contact selection
  const handleSelectContact = async (contact: ChatContact) => {
    setSelectedContact(contact)
    const fetchedMessages = await fetchChatMessages(contact.id)
    setMessages(fetchedMessages)
  }

  // Handle back from conversation
  const handleBackFromConversation = () => {
    setSelectedContact(null)
  }

  // Handle opening camera
  const handleOpenCamera = () => {
    setShowCamera(true)
  }

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <NavBar activeTab="Chat" />

      <div className="flex-grow relative">
        {showCamera ? (
          <CameraInterface onPhotoCapture={handlePhotoCapture} onClose={() => setShowCamera(false)} />
        ) : selectedContact ? (
          <ChatConversation
            contact={selectedContact}
            messages={messages}
            onBack={handleBackFromConversation}
            onOpenCamera={handleOpenCamera}
          />
        ) : (
          <ChatContacts contacts={contacts} onSelectContact={handleSelectContact} onOpenCamera={handleOpenCamera} />
        )}
      </div>
    </main>
  )
}
