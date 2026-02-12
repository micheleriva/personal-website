import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BiographySection } from "@/components/home/biography-section"
import { PatentsSection } from "@/components/home/patents-section"
import { HonorsSection } from "@/components/home/honors-section"
import { MediaSection } from "@/components/home/media-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10">
        <BiographySection />
        <PatentsSection />
        <HonorsSection />
        <MediaSection />
      </main>
      <SiteFooter />
    </div>
  )
}
