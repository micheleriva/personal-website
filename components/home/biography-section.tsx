import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export function BiographySection() {
	return (
		<section aria-labelledby="biography-heading">
			<h2
				id="biography-heading"
				className="mb-6 font-sans text-xs font-semibold uppercase tracking-widest text-muted-foreground"
			>
				Biography
			</h2>

			<div className="mb-8 flex flex-col items-center gap-5 sm:flex-row sm:items-start sm:gap-6">
				<Image
					src="/michele_riva.JPG"
					alt="Portrait of Michele Riva"
					width={160}
					height={160}
					className="h-32 w-32 shrink-0 rounded-sm border border-border object-cover grayscale transition-all hover:grayscale-0 sm:h-40 sm:w-40"
					priority
				/>
				<div className="flex-1 text-center font-sans text-sm leading-relaxed text-muted-foreground sm:text-left">
					<p className="mb-1 font-serif text-lg font-bold tracking-tight text-primary">
						Michele Riva
					</p>
					<p>Philosophy, Research, and Graph Algorithms</p>
					<p>San Francisco, California</p>
				</div>
			</div>

			<div className="space-y-4 text-base leading-relaxed">
				<p>
					I am a software engineer and entrepreneur based in San Francisco,
					California. I currently lead the engineering team at{" "}
					<a
						href="https://orama.com"
						target="_blank"
						rel="noopener noreferrer"
						className="font-medium text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
					>
						Orama
					</a>
					, which I co-founded in 2023.

				<p>
					For over a decade, I have worked with startups and large companies in
					both product development and consultancy roles, deriving insights from
					both domains.
				</p>

				<p>
					In 2022, I authored <cite className="italic">Real-World Next.js</cite>
					, published by Packt Publishing. The book draws on my work on{" "}
					{"Paramount's"} platform team, where I designed and implemented a
					high-performance, multitenant Node.js application server. This server
					powered over 250 streaming websites from a single, medium EC2
					instance, handling up to 14,000 requests per second, with Next.js
					serving the front-end.
				</p>

				<p>
					As a Staff Software Engineer at NearForm, I designed and built Orama
					&mdash; an incredibly fast and portable full-text and vector search
					engine written entirely in TypeScript without any external
					dependencies. In 2023, I founded a company based on Orama. Today, it
					powers millions of monthly search requests on major websites including{" "}
					<a
						href="https://nodejs.org"
						target="_blank"
						rel="noopener noreferrer"
						className="font-medium text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
					>
						nodejs.org
					</a>{" "}
					and{" "}
					<a
						href="https://docs.deno.com"
						target="_blank"
						rel="noopener noreferrer"
						className="font-medium text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
					>
						docs.deno.com
					</a>
					, among others.
				</p>

				<p>
					Over the past few years, I have spoken at approximately one hundred
					international conferences and meetups, covering topics such as
					software architecture, computer science, and related fields.
				</p>
			</div>

			<Separator className="mt-10" />
		</section>
	);
}
