import Image from "next/image"

export function AppIcon() {
  return (
    <div className="bg-zinc-900 rounded-xl p-4 flex items-center">
      <div className="w-16 h-16 relative mr-4 flex-shrink-0">
        <div className="bg-white rounded-xl w-full h-full flex items-center justify-center">
          <Image
            src="/images/plus/app-icon.png"
            alt="App Icon"
            width={40}
            height={40}
            className="object-contain"
          />
        </div>
      </div>
      <div>
        <h3 className="font-bold text-lg mb-1">App Icon</h3>
        <p className="text-gray-400 text-sm">Pick your own custom app icon from our ever growing library</p>
      </div>
    </div>
  )
}
