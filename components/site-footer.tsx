import Link from "next/link"

interface SiteFooterProps {
  darkMode?: boolean
}

export function SiteFooter({ darkMode = false }: SiteFooterProps) {
  const textColor = darkMode ? "text-gray-400" : "text-gray-600"
  const hoverColor = darkMode ? "hover:text-white" : "hover:text-black"
  const bgColor = darkMode ? "bg-black" : "bg-white"
  const borderColor = darkMode ? "border-zinc-800" : "border-gray-200"

  return (
    <footer className={`${bgColor} py-8 mt-auto`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className={`${textColor} ${hoverColor}`}>
                  Snap Inc.
                </Link>
              </li>
              <li>
                <Link href="#" className={`${textColor} ${hoverColor}`}>
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className={`${textColor} ${hoverColor}`}>
                  News
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className={`${textColor} ${hoverColor}`}>
                  Support
                </Link>
              </li>
              <li>
                <Link href="#" className={`${textColor} ${hoverColor}`}>
                  Community Guidelines
                </Link>
              </li>
              <li>
                <Link href="#" className={`${textColor} ${hoverColor}`}>
                  Safety Center
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Advertising</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className={`${textColor} ${hoverColor}`}>
                  Buy Ads
                </Link>
              </li>
              <li>
                <Link href="#" className={`${textColor} ${hoverColor}`}>
                  Advertising Policies
                </Link>
              </li>
              <li>
                <Link href="#" className={`${textColor} ${hoverColor}`}>
                  Political Ads Library
                </Link>
              </li>
              <li>
                <Link href="#" className={`${textColor} ${hoverColor}`}>
                  Brand Guidelines
                </Link>
              </li>
              <li>
                <Link href="#" className={`${textColor} ${hoverColor}`}>
                  Promotions Rules
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className={`${textColor} ${hoverColor}`}>
                  Privacy Center
                </Link>
              </li>
              <li>
                <Link href="#" className={`${textColor} ${hoverColor}`}>
                  Your Privacy Choices
                </Link>
              </li>
              <li>
                <Link href="#" className={`${textColor} ${hoverColor}`}>
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="#" className={`${textColor} ${hoverColor}`}>
                  Report Infringement
                </Link>
              </li>
              <li>
                <Link href="#" className={`${textColor} ${hoverColor}`}>
                  Custom Creative Tools Terms
                </Link>
              </li>
              <li>
                <Link href="#" className={`${textColor} ${hoverColor}`}>
                  Community Geofilter Terms
                </Link>
              </li>
              <li>
                <Link href="#" className={`${textColor} ${hoverColor}`}>
                  Lens Studio Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="font-bold mb-4">Language</h3>
          <select className={`border ${borderColor} rounded-md p-2 w-full md:w-48 bg-transparent ${textColor}`}>
            <option value="en-US">English (US)</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
            <option value="it">Italiano</option>
            <option value="pt">Português</option>
          </select>
        </div>

        <div className={`mt-8 pt-4 border-t ${borderColor} flex flex-wrap gap-4 text-sm ${textColor}`}>
          <Link href="#" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:underline">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}
