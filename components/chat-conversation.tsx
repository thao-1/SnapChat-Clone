"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ArrowLeft, Phone, Video, Camera, Smile, Paperclip, Mic, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import type { ChatContact, ChatMessage } from "@/types/chat"

interface ChatConversationProps {
  contact: ChatContact
  messages: ChatMessage[]
  onBack: () => void
  onOpenCamera: () => void
}

export function ChatConversation({ contact, messages, onBack, onOpenCamera }: ChatConversationProps) {
  const [newMessage, setNewMessage] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom of messages when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // In a real app, you would send the message to your backend
      console.log("Sending message:", newMessage)
      setNewMessage("")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="p-4 border-b flex items-center">
        <Button variant="ghost" size="icon" className="mr-2" onClick={onBack}>
          <ArrowLeft className="h-5 w-5" />
        </Button>

        <div className="flex items-center flex-grow">
          <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
            <Image src={contact.avatar || "/placeholder.svg"} alt={contact.displayName} fill className="object-cover" />
          </div>
          <div>
            <div className="font-bold">{contact.displayName}</div>
            <div className="text-xs text-gray-500">{contact.isOnline ? "Online now" : "Last seen recently"}</div>
          </div>
        </div>

        <div className="flex space-x-2">
          <Button variant="ghost" size="icon">
            <Phone className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Video className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-grow overflow-y-auto p-4 bg-gray-50">
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.isSentByMe ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[70%] rounded-2xl p-3 ${
                  message.isSentByMe
                    ? "bg-blue-500 text-white rounded-br-none"
                    : "bg-gray-200 text-black rounded-bl-none"
                }`}
              >
                {message.type === "text" ? (
                  <p>{message.content}</p>
                ) : message.type === "image" ? (
                  <div className="relative w-48 h-48 rounded-lg overflow-hidden">
                    <Image
                      src={message.content || "/placeholder.svg"}
                      alt="Image message"
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : null}
                <div className={`text-xs mt-1 ${message.isSentByMe ? "text-blue-100" : "text-gray-500"}`}>
                  {message.time}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Message Input */}
      <div className="p-4 border-t flex items-center">
        <Button variant="ghost" size="icon" className="text-gray-500" onClick={onOpenCamera}>
          <Camera className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-gray-500">
          <Smile className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-gray-500">
          <Paperclip className="h-5 w-5" />
        </Button>

        <Input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Send a chat"
          className="mx-2 rounded-full bg-gray-100 border-0"
        />

        <Button
          variant="ghost"
          size="icon"
          className="text-gray-500"
          onClick={handleSendMessage}
          disabled={!newMessage.trim()}
        >
          {newMessage.trim() ? <Send className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
        </Button>
      </div>
    </div>
  )
}
