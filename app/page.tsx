import { LoginForm } from "@/components/login-form"
import { NavBar } from "@/components/nav-bar"
import { FeatureCard } from "@/components/feature-card"
import { ParentFooter } from "@/components/parent-footer"

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
            <FeatureCard
              title="Have fun with your friends and family."
              imageSrc="/images/friends-feature.png"
              buttonText="Find Your Friends"
              buttonHref="/find-friends"
            />
            <FeatureCard
              title="Express yourself with millions of Lenses."
              imageSrc="/images/lenses-feature.png"
              buttonText="Try Now"
              buttonHref="/lenses"
              isLensCard
            />
            <FeatureCard
              title="Watch exclusive content."
              imageSrc="/images/content-feature.png"
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
