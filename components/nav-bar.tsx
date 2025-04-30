"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useIsMobile } from "@/components/ui/use-mobile"

interface NavBarProps {
  activeTab?: string
}

export function NavBar({ activeTab }: NavBarProps) {
  const isMobile = useIsMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="w-8 h-8 relative">
              <Image src="/images/logo/snapchat-logo.png" alt="Snapchat" fill className="object-contain" priority />
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center max-w-md flex-1 mx-4">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search"
                className="block w-full pl-10 pr-3 py-2 rounded-full bg-gray-100 border-transparent focus:border-gray-300 focus:bg-white focus:ring-0 text-sm"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavItem
              href="/stories"
              icon="/images/logo/stories-icon.png"
              label="Stories"
              isActive={activeTab === "Stories"}
            />
            <NavItem
              href="/spotlight"
              icon="/images/logo/spotlight-icon.png"
              label="Spotlight"
              isActive={activeTab === "Spotlight"}
            />
            <NavItem href="/chat" icon="/images/logo/chat-icon.png" label="Chat" badge={3} isActive={activeTab === "Chat"} />
            <NavItem href="/lenses" icon="/images/logo/lenses-icon.png" label="Lenses" isActive={activeTab === "Lenses"} />
            <NavItem href="/plus" icon="/images/logo/plus-icon.png" label="Snapchat+" isActive={activeTab === "Snapchat+"} />
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <Button className="rounded-full bg-black text-white hover:bg-gray-800">Download</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 py-4">
            {/* Mobile Search */}
            <div className="relative mb-4">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search"
                className="block w-full pl-10 pr-3 py-2 rounded-full bg-gray-100 border-transparent focus:border-gray-300 focus:bg-white focus:ring-0 text-sm"
              />
            </div>

            {/* Mobile Navigation */}
            <div className="grid grid-cols-4 gap-4 mb-4">
              <MobileNavItem
                href="/stories"
                icon="/images/logo/stories-icon.png"
                label="Stories"
                isActive={activeTab === "Stories"}
              />
              <MobileNavItem
                href="/spotlight"
                icon="/images/logo/spotlight-icon.png"
                label="Spotlight"
                isActive={activeTab === "Spotlight"}
              />
              <MobileNavItem
                href="/chat"
                icon="/images/logo/chat-icon.png"
                label="Chat"
                badge={3}
                isActive={activeTab === "Chat"}
              />
              <MobileNavItem
                href="/lenses"
                icon="/images/logo/lenses-icon.png"
                label="Lenses"
                isActive={activeTab === "Lenses"}
              />
              <MobileNavItem
                href="/plus"
                icon="/images/logo/plus-icon.png"
                label="Snapchat+"
                isActive={activeTab === "Snapchat+"}
              />
              <MobileNavItem href="/profile" icon="/images/logo/profile-icon.png" label="Profile" />
              <MobileNavItem href="/settings" icon="/images/logo/settings-icon.png" label="Settings" />
              <MobileNavItem href="/map" icon="/images/logo/map-icon.png" label="Map" />
            </div>

            {/* Mobile CTA Buttons */}
            <div className="flex flex-col space-y-2">
              <Button className="rounded-full bg-black text-white hover:bg-gray-800">Download</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

function NavItem({
  href,
  icon,
  label,
  badge,
  isActive,
}: {
  href: string
  icon: string
  label: string
  badge?: number
  isActive?: boolean
}) {
  return (
    <Link href={href} className={`flex flex-col items-center group ${isActive ? "border-b-2 border-black pb-1" : ""}`}>
      <div className="relative">
        <div className="w-6 h-6 relative">
          <Image src={icon || "/placeholder.svg"} alt={label} fill className="object-contain" />
        </div>
        {badge && (
          <span className="absolute -top-1 -right-1 bg-[#00c2ff] text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
            {badge}
          </span>
        )}
      </div>
      <span className={`text-xs mt-1 ${isActive ? "font-bold" : "text-gray-700 group-hover:text-black"}`}>{label}</span>
    </Link>
  )
}

function MobileNavItem({
  href,
  icon,
  label,
  badge,
  isActive,
}: {
  href: string
  icon: string
  label: string
  badge?: number
  isActive?: boolean
}) {
  return (
    <Link href={href} className="flex flex-col items-center">
      <div className="relative">
        <div className="w-6 h-6 relative">
          <Image src={icon || "/placeholder.svg"} alt={label} fill className="object-contain" />
        </div>
        {badge && (
          <span className="absolute -top-1 -right-1 bg-[#00c2ff] text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
            {badge}
          </span>
        )}
      </div>
      <span className={`text-xs mt-1 text-center ${isActive ? "font-bold" : ""}`}>{label}</span>
    </Link>
  )
}
