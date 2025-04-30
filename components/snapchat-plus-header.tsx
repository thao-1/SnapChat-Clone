export function SnapchatPlusHeader() {
  return (
    <div className="flex flex-col items-center justify-center py-8 mb-8">
      {/* Placeholder for Snapchat+ logo */}
      <div className="w-24 h-24 relative mb-6 bg-yellow-400 rounded-full flex items-center justify-center">
        <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center">
          <span className="text-yellow-400 text-3xl font-bold">+</span>
        </div>
      </div>
      <h1 className="text-4xl font-bold mb-2">Snapchat+</h1>
      <p className="text-gray-400 text-center">Exclusive, experimental and pre-release features</p>
    </div>
  )
}
