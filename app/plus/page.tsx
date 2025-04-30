import { NavBar } from "@/components/nav-bar"
import { SnapchatPlusHeader } from "@/components/snapchat-plus-header"
import { FeatureGrid } from "@/components/feature-grid"
import { QRCodeSection } from "@/components/qr-code-section"
import { SiteFooter } from "@/components/site-footer"

export default function SnapchatPlusPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      <NavBar activeTab="Snapchat+" />

      <div className="container mx-auto px-4 py-8 flex-grow">
        {/* Header Section */}
        <SnapchatPlusHeader />

        {/* Features Grid */}
        <FeatureGrid />

        {/* QR Code Section */}
        <QRCodeSection />
      </div>

      <SiteFooter darkMode />
    </main>
  )
}
