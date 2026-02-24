import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WritingsFilter } from "@/components/writings-filter"
import { getAllWritings } from "@/lib/writings-data"

export const metadata: Metadata = {
  title: "Writings | Michele Riva",
  description: "Selected writings on software engineering, computer science, culture, and technology.",
  openGraph: {
    title: "Selected Writings | Michele Riva",
    description: "Essays and commentaries, mostly on philosophy, phenomenology, metaethics, and cognitive science.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Selected Writings | Michele Riva",
    description: "Essays and commentaries, mostly on philosophy, phenomenology, metaethics, and cognitive science.",
  },
}

export default function WritingsPage() {
  const writings = getAllWritings()

  const categories = Array.from(
    new Set(writings.flatMap((w) => w.categories))
  ).sort()

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10">
        <header className="mb-8 sm:mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-primary text-balance sm:text-3xl">
            Selected Writings
          </h2>
          <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">
            Essays and commentaries on software engineering, computer science,
            culture, and the technology industry. Entries are formatted in APA
            style.
          </p>
        </header>

        <WritingsFilter writings={writings} categories={categories} />
      </main>
      <SiteFooter />
    </div>
  )
}
