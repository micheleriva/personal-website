import { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { getAllWritings } from "@/lib/writings-data"

export const metadata: Metadata = {
  title: "Writings | Michele Riva",
  description: "Selected writings on software engineering, computer science, culture, and technology.",
  openGraph: {
    title: "Selected Writings | Michele Riva",
    description: "Essays and commentaries on software engineering, computer science, culture, and the technology industry.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Selected Writings | Michele Riva",
    description: "Essays and commentaries on software engineering, computer science, culture, and the technology industry.",
  },
}

export default function WritingsPage() {
  const writings = getAllWritings()

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

        <section aria-label="Writing references">
          <ol className="space-y-8 list-none">
            {writings.map((writing) => (
              <li key={writing.slug}>
                <article className="group">
                  {/* APA-style reference */}
                  <p className="text-base leading-relaxed">
                    <span className="text-primary">Riva, M.</span>{" "}
                    <span className="text-muted-foreground">
                      ({writing.date}).
                    </span>{" "}
                    <Link
                      href={`/writings/${writing.slug}`}
                      className="font-medium text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
                    >
                      {writing.title}
                    </Link>
                    .
                  </p>
                  {/* Abstract */}
                  <div className="mt-3 border-l-2 border-border pl-4">
                    <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                      <span className="font-semibold text-primary">Abstract:</span>{" "}
                      {writing.abstract}
                    </p>
                  </div>
                  {/* Keywords */}
                  <div className="mt-2 pl-4">
                    <p className="font-sans text-xs text-muted-foreground">
                      <span className="italic">Keywords:</span>{" "}
                      {writing.keywords.join(", ")}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
