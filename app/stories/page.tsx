import { LoginForm } from "@/components/login-form"
import { NavBar } from "@/components/nav-bar"
import { StoryFeed } from "@/components/story-feed"
import { StoryRecommendations } from "@/components/story-recommendations"
import { fetchStories } from "@/lib/api"

export default async function StoriesPage() {
  // Fetch stories data
  const stories = await fetchStories()

  return (
    <main className="min-h-screen bg-white">
      <NavBar activeTab="Stories" />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Login Section */}
          <div className="lg:col-span-3">
            <LoginForm />
          </div>

          {/* Middle Column - Featured Stories */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-snapchat-yellow p-4 rounded-full">
                <div className="w-8 h-8 flex items-center justify-center">
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
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold">Explore Stories On Snapchat</h1>
                <p className="text-gray-600">Discover The Latest Stories From Top Snap Creators.</p>
              </div>
            </div>

            <StoryFeed stories={stories.featured} />
          </div>

          {/* Right Column - Recommendations */}
          <div className="lg:col-span-3">
            <h2 className="text-xl font-bold mb-4">More for you</h2>
            <StoryRecommendations stories={stories.recommendations} />
          </div>
        </div>
      </div>

      <footer className="border-t border-gray-200 py-4 mt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
