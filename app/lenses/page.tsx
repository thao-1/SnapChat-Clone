import { NavBar } from "@/components/nav-bar"
import { LensesHeader } from "@/components/lenses-header"
import { LensCategories } from "@/components/lens-categories"
import { LensGrid } from "@/components/lens-grid"
import { SiteFooter } from "@/components/site-footer"
import { fetchPopularLenses, fetchTrendingLenses } from "@/lib/api"
import { Button } from "@/components/ui/button"

export default async function LensesPage() {
  // Fetch lenses data
  const popularLenses = await fetchPopularLenses()
  const trendingLenses = await fetchTrendingLenses()

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <NavBar activeTab="Lenses" />

      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <LensesHeader />

        {/* Categories */}
        <LensCategories />

        {/* Popular Lenses Section */}
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-4">Top Lenses and Filters on Snapchat</h2>
          <LensGrid lenses={popularLenses} />
        </div>

        {/* Trending Lenses Section */}
        <div className="mb-8">
          <LensGrid lenses={trendingLenses} />
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mb-12">
          <Button variant="outline" className="rounded-full px-8">
            See more Lenses
          </Button>
        </div>
      </div>

      <SiteFooter />
    </main>
  )
}
