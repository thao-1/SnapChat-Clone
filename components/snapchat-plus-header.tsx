import Image from "next/image"

export function SnapchatPlusHeader() {
  return (
    <div className="flex flex-col items-center justify-center py-8 mb-8">
      {/* Snapchat+ logo */}
      <div className="relative mb-6">
        <Image 
          src="/images/plus/plus-logo.png" 
          alt="Snapchat+ Logo" 
          width={100} 
          height={100} 
          className="object-contain"
        />
      </div>
      <h1 className="text-4xl font-bold mb-2">Snapchat+</h1>
      <p className="text-gray-400 text-center">Exclusive, experimental and pre-release features</p>
    </div>
  )
}
