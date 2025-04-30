export function QRCodeSection() {
  return (
    <div className="flex flex-col items-center justify-center py-8 mb-12">
      {/* Placeholder for QR code */}
      <div className="w-48 h-48 relative mb-4 bg-white p-4 rounded-lg">
        <div className="w-full h-full grid grid-cols-5 grid-rows-5 gap-1">
          {/* Generate a simple QR-like pattern */}
          {Array.from({ length: 25 }).map((_, i) => (
            <div
              key={i}
              className={`${Math.random() > 0.7 ? "bg-black" : "bg-transparent"} ${
                // Always fill corners to look like a QR code
                i === 0 || i === 4 || i === 20 || i === 24 ? "bg-black" : ""
              }`}
            ></div>
          ))}
        </div>
      </div>
      <p className="text-gray-400 text-center">Scan to learn more & subscribe</p>
    </div>
  )
}
