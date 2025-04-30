import { LoginForm } from "@/components/login-form"
import { NavBar } from "@/components/nav-bar"
import { ParentFooter } from "@/components/parent-footer"
import { FeatureMediaCard } from "@/components/feature-media-card"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <NavBar />

      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Login Section */}
          <div className="flex flex-col justify-center lg:pr-8">
            <LoginForm />
          </div>

          {/* Right Column - Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FeatureMediaCard
              title="Have fun with your friends and family."
              mediaType="video"
              mediaSrc="/images/videos/226795_small.mp4"
              buttonText="Find Your Friends"
              buttonHref="/find-friends"
            />
            <FeatureMediaCard
              title="Express yourself with millions of Lenses."
              mediaType="video"
              mediaSrc="/images/videos/253998_small.mp4"
              buttonText="Try Now"
              buttonHref="/lenses"
              isLensCard
            />
            <FeatureMediaCard
              title="Watch exclusive content."
              mediaType="video"
              mediaSrc="/images/videos/227567_small.mp4"
              buttonText="Watch Now"
              buttonHref="/spotlight"
              className="md:col-span-2"
            />
          </div>
        </div>
      </div>

      <ParentFooter />
    </main>
  )
}
