import { Separator } from "@/components/ui/separator"
import patentsData from "@/data/patents.json"
import { FileText } from "lucide-react"

export function PatentsSection() {
  return (
    <section aria-labelledby="patents-heading" className="mt-10">
      <div className="mb-4 flex items-center gap-2">
        <FileText className="h-4 w-4 text-accent" />
        <h2
          id="patents-heading"
          className="font-sans text-xs font-semibold uppercase tracking-widest text-muted-foreground"
        >
          Patents
        </h2>
      </div>

      <div className="space-y-6">
        {patentsData.map((patent) => (
          <article key={patent.id} className="group">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <a
                href={patent.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs font-medium text-accent break-all hover:underline sm:break-normal"
              >
                {patent.id}
              </a>
              <span className="font-sans text-xs text-muted-foreground">
                {patent.issued ? "Issued" : "Pending"}
              </span>
            </div>
            <h3 className="mt-1 text-base font-semibold leading-snug text-primary">
              <a
                href={patent.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {patent.name}
              </a>
            </h3>
            <p className="mt-2 font-sans text-sm leading-relaxed text-muted-foreground">
              {patent.description}
            </p>
          </article>
        ))}
      </div>

      <Separator className="mt-10" />
    </section>
  )
}
