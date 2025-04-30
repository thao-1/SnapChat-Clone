export function SnapchatBadge() {
  return (
    <div className="bg-zinc-900 rounded-xl p-4 flex items-center">
      <div className="w-16 h-16 relative mr-4 flex-shrink-0">
        <div className="bg-zinc-800 rounded-full w-full h-full flex items-center justify-center">
          <div className="text-yellow-400 text-2xl">★</div>
        </div>
      </div>
      <div>
        <h3 className="font-bold text-lg mb-1">Snapchat+ Badge</h3>
        <p className="text-gray-400 text-sm">Get a Snapchat+ badge that appears next to your name on your profile</p>
      </div>
    </div>
  )
}
