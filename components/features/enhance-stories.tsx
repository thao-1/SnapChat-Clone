export function EnhanceStories() {
  return (
    <div className="bg-zinc-900 rounded-xl p-4 flex items-center">
      <div className="w-16 h-16 relative mr-4 flex-shrink-0">
        <div className="bg-zinc-800 rounded-full w-full h-full flex items-center justify-center">
          <div className="text-yellow-400 text-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
            </svg>
          </div>
        </div>
      </div>
      <div>
        <h3 className="font-bold text-lg mb-1">Enhance your stories</h3>
        <p className="text-gray-400 text-sm">
          See how often friends watch your Stories and Boost them to get more views
        </p>
      </div>
    </div>
  )
}
