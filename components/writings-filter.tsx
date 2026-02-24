"use client"

import { useState } from "react"
import Link from "next/link"
import { Writing } from "@/lib/writings-data"
import { cn } from "@/lib/utils"

function formatCategory(category: string): string {
  return category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

interface WritingsFilterProps {
  writings: Writing[]
  categories: string[]
}

export function WritingsFilter({ writings, categories }: WritingsFilterProps) {
  const [selected, setSelected] = useState<string[]>([])

  const toggle = (category: string) => {
    setSelected((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    )
  }

  const filtered =
    selected.length === 0
      ? writings
      : writings.filter((w) => w.categories.some((c) => selected.includes(c)))

  return (
    <div>
      {categories.length > 0 && (
        <div className="mb-8 flex flex-wrap items-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => toggle(category)}
              className={cn(
                "rounded-sm border px-2.5 py-1 font-sans text-xs transition-colors",
                selected.includes(category)
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border bg-card text-muted-foreground hover:bg-secondary hover:text-primary"
              )}
            >
              {formatCategory(category)}
            </button>
          ))}
          {selected.length > 0 && (
            <button
              onClick={() => setSelected([])}
              className="font-sans text-xs text-muted-foreground underline-offset-2 hover:text-primary hover:underline transition-colors"
            >
              Clear
            </button>
          )}
        </div>
      )}

      <section aria-label="Writing references">
        {filtered.length === 0 ? (
          <p className="font-sans text-sm text-muted-foreground">
            No writings found for the selected{" "}
            {selected.length === 1 ? "category" : "categories"}.
          </p>
        ) : (
          <ol className="space-y-8 list-none">
            {filtered.map((writing) => (
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
                      <span className="font-semibold text-primary">
                        Abstract:
                      </span>{" "}
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
                  {/* Categories */}
                  {writing.categories.length > 0 && (
                    <div className="mt-2 pl-4 flex flex-wrap gap-1.5">
                      {writing.categories.map((category) => (
                        <span
                          key={category}
                          className="rounded-sm border border-border bg-secondary px-2 py-0.5 font-sans text-xs text-muted-foreground"
                        >
                          {formatCategory(category)}
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              </li>
            ))}
          </ol>
        )}
      </section>
    </div>
  )
}
