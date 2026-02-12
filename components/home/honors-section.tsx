import { Separator } from "@/components/ui/separator"
import honorsData from "@/data/honors.json"

export function HonorsSection() {
  return (
    <section aria-labelledby="honors-heading" className="mt-10">
      <h2
        id="honors-heading"
        className="mb-6 font-sans text-xs font-semibold uppercase tracking-widest text-muted-foreground"
      >
        Honors & Awards
      </h2>

      <div className="space-y-6">
        {honorsData.map((honor) => (
          <article key={honor.name}>
            <div className="flex items-baseline gap-2">
              <h3 className="text-base font-semibold text-primary">
                <a
                  href={honor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {honor.name}
                </a>
              </h3>
              <span className="font-sans text-xs font-medium text-accent">
                ({honor.multiple})
              </span>
            </div>
            <p className="mt-2 font-sans text-sm leading-relaxed text-muted-foreground">
              {honor.description}
            </p>
          </article>
        ))}
      </div>

      <Separator className="mt-10" />
    </section>
  )
}
