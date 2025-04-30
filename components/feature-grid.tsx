import { AppIcon } from "@/components/features/app-icon"
import { SnapchatBadge } from "@/components/features/snapchat-badge"
import { BestFriend } from "@/components/features/best-friend"
import { CustomizeApp } from "@/components/features/customize-app"
import { EarlyAccess } from "@/components/features/early-access"
import { EnhanceStories } from "@/components/features/enhance-stories"

export function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
      <AppIcon />
      <SnapchatBadge />
      <BestFriend />
      <CustomizeApp />
      <EarlyAccess />
      <EnhanceStories />
    </div>
  )
}
