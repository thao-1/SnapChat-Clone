"use client"

import { useState } from "react"
import Image from "next/image"
import { Search, Plus, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import type { ChatContact } from "@/types/chat"

interface ChatContactsProps {
  contacts: ChatContact[]
  onSelectContact: (contact: ChatContact) => void
  onOpenCamera: () => void
}

export function ChatContacts({ contacts, onSelectContact, onOpenCamera }: ChatContactsProps) {
  const [searchQuery, setSearchQuery] = useState("")

  // Filter contacts based on search query
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.displayName.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="p-4 border-b">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold">Chat</h1>
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon" className="rounded-full" onClick={onOpenCamera}>
              <Plus className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-gray-100 border-0 rounded-full"
          />
        </div>
      </div>

      {/* Contact List */}
      <div className="flex-grow overflow-y-auto">
        {filteredContacts.length > 0 ? (
          <ul>
            {filteredContacts.map((contact) => (
              <li key={contact.id}>
                <button
                  className="w-full px-4 py-3 flex items-center hover:bg-gray-100"
                  onClick={() => onSelectContact(contact)}
                >
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-3">
                    <Image
                      src={contact.avatar || "/placeholder.svg"}
                      alt={contact.displayName}
                      fill
                      className="object-cover"
                    />
                    {contact.isOnline && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div className="flex-grow text-left">
                    <div className="flex justify-between">
                      <span className="font-medium">{contact.displayName}</span>
                      <span className="text-xs text-gray-500">{contact.lastMessageTime}</span>
                    </div>
                    <div className="flex items-center">
                      {contact.hasUnreadMessage && <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>}
                      <p className="text-sm text-gray-600 truncate">{contact.lastMessage}</p>
                    </div>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-gray-500 p-4">
            <MessageSquare className="h-12 w-12 mb-2 opacity-50" />
            <p>No contacts found</p>
          </div>
        )}
      </div>
    </div>
  )
}
