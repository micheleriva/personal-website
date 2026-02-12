import { Separator } from "@/components/ui/separator"

export function SiteFooter() {
  return (
    <footer className="mt-12 border-t border-border sm:mt-16">
      <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8">
        <Separator className="mb-5 sm:mb-6" />
        <div className="flex flex-col gap-3 font-sans text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Michele Riva. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/MicheleRi662"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/micheleriva95/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              LinkedIn
            </a>
            <a
              href="https://bsky.app/profile/riva.wtf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              Bluesky
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
