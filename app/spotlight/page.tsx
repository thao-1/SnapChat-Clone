import { LoginForm } from "@/components/login-form"
import { NavBar } from "@/components/nav-bar"
import { SpotlightPlayer } from "@/components/spotlight-player"
import { SpotlightInfo } from "@/components/spotlight-info"
import { SpotlightRecommendations } from "@/components/spotlight-recommendations"
import { SiteFooter } from "@/components/site-footer"
import { fetchSpotlightVideos } from "@/lib/api"

export default async function SpotlightPage() {
  // Fetch spotlight videos data
  const spotlightData = await fetchSpotlightVideos()
  const featuredVideo = spotlightData.featured
  const recommendedVideos = spotlightData.recommendations

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <NavBar activeTab="Spotlight" />

      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Login Section */}
          <div className="lg:col-span-3">
            <LoginForm />
          </div>

          {/* Middle Column - Featured Video */}
          <div className="lg:col-span-5">
            <SpotlightPlayer video={featuredVideo} />
          </div>

          {/* Right Column - Video Info & Recommendations */}
          <div className="lg:col-span-4">
            <SpotlightInfo video={featuredVideo} />
            <SpotlightRecommendations videos={recommendedVideos} />
          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
  )
}
