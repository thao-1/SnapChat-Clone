import Link from "next/link"

export function ParentFooter() {
  return (
    <footer className="bg-black text-white py-3 mt-auto">
      <div className="container mx-auto px-4 flex items-center justify-center md:justify-between text-sm">
        <div className="flex items-center">
          <span role="img" aria-label="Safety" className="mr-2">
            🔒
          </span>
          <p>Are you a parent? Learn what we're doing to help keep your teen safe.</p>
        </div>
        <Link href="/safety" className="hidden md:block text-yellow-400 font-bold hover:underline">
          Snapchatters safe.
        </Link>
      </div>
    </footer>
  )
}
