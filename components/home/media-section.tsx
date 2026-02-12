import mediaData from "@/data/media.json"

export function MediaSection() {
  return (
    <section aria-labelledby="media-heading" className="mt-10">
      <h2
        id="media-heading"
        className="mb-6 font-sans text-xs font-semibold uppercase tracking-widest text-muted-foreground"
      >
        In the Media
      </h2>

      <ul className="space-y-4 sm:space-y-3">
        {mediaData.map((item, index) => (
          <li key={index} className="font-sans text-sm leading-relaxed">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <span className="block font-semibold text-primary sm:inline">
                {item.publisher}
              </span>
              <span className="mx-2 hidden text-muted-foreground sm:inline">
                &mdash;
              </span>
              <span className="mt-0.5 block italic text-muted-foreground sm:mt-0 sm:inline">
                {item.title}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
