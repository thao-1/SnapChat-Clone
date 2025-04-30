export function LensesHeader() {
  return (
    <div className="flex items-start gap-4 mb-8">
      <div className="bg-yellow-400 rounded-full p-4 flex-shrink-0">
        <div className="w-10 h-10 relative flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="4" />
            <line x1="21.17" y1="8" x2="12" y2="8" />
            <line x1="3.95" y1="6.06" x2="8.54" y2="14" />
            <line x1="10.88" y1="21.94" x2="15.46" y2="14" />
          </svg>
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-1">Check Out Popular Snapchat Lenses</h1>
        <p className="text-gray-600">Try Popular Filters And Meet The Creators Behind Them.</p>
      </div>
    </div>
  )
}
