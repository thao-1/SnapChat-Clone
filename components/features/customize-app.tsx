export function CustomizeApp() {
  return (
    <div className="bg-zinc-900 rounded-xl p-4 flex items-center">
      <div className="w-16 h-16 relative mr-4 flex-shrink-0">
        <div className="bg-zinc-800 rounded-full w-full h-full flex items-center justify-center">
          <div className="text-yellow-400 text-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path
                fillRule="evenodd"
                d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.986.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843z"
              />
              <path
                fillRule="evenodd"
                d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 003 3h4.5a3 3 0 003-3v-3A5.25 5.25 0 0012 1.5zm-3 8.25a3 3 0 106 0v-3a3 3 0 10-6 0v3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <div>
        <h3 className="font-bold text-lg mb-1">Customize your App</h3>
        <p className="text-gray-400 text-sm">
          Use Chat wallpapers, Bitmoji backgrounds, custom notification sounds and more
        </p>
      </div>
    </div>
  )
}
