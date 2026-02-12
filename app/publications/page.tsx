import { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BookOpen, Mic, Video, Users, Wrench } from "lucide-react";
import talksData from "@/data/talks.json";
import { PatentsSection } from "@/components/home/patents-section";

export const metadata: Metadata = {
	title: "Publications & Talks | Michele Riva",
	description: "Books, patents, and conference presentations by Michele Riva.",
};

const book = {
	title: "Real-World Next.js",
	publisher: "Packt Publishing",
	year: 2022,
	description:
		"A comprehensive guide to building production-ready applications with Next.js, drawing on experience from building high-performance, multitenant Node.js application servers at Paramount.",
	url: "https://www.amazon.com/Real-World-Next-js-high-performance-applications-production/dp/1801073496",
};

interface Talk {
	date: string;
	conference: string;
	title: string;
	location: string;
	type:
		| "talk"
		| "interview"
		| "panel"
		| "workshop"
		| "meetup"
		| "Master of ceremonies";
	url?: string | null;
}

// Transform and group talks by year
function groupTalksByYear(): Record<number, Talk[]> {
	const grouped: Record<number, Talk[]> = {};

	talksData.forEach((talk) => {
		const date = new Date(talk.date);
		const year = date.getFullYear();
		const month = date.toLocaleDateString("en-US", { month: "short" });
		const day = date.getDate();

		const transformedTalk: Talk = {
			date: `${day < 10 ? "0" : ""}${day} ${month}`,
			conference: talk.event,
			title: talk.title,
			location: `${talk.city}, ${talk.country}`,
			type: talk.type as Talk["type"],
			url: talk.url,
		};

		if (!grouped[year]) {
			grouped[year] = [];
		}
		grouped[year].push(transformedTalk);
	});

	// Sort talks within each year by date (most recent first)
	Object.keys(grouped).forEach((year) => {
		grouped[Number(year)].reverse();
	});

	return grouped;
}

const talks = groupTalksByYear();

const typeIcon: Record<Talk["type"], React.ReactNode> = {
	talk: <Mic className="h-3.5 w-3.5 shrink-0 text-accent" />,
	interview: <Video className="h-3.5 w-3.5 shrink-0 text-accent" />,
	panel: <Users className="h-3.5 w-3.5 shrink-0 text-accent" />,
	workshop: <Wrench className="h-3.5 w-3.5 shrink-0 text-accent" />,
	meetup: <Users className="h-3.5 w-3.5 shrink-0 text-accent" />,
	"Master of ceremonies": <Mic className="h-3.5 w-3.5 shrink-0 text-accent" />,
};

const typeLabel: Record<Talk["type"], string> = {
	talk: "Conference presentation",
	interview: "Interview",
	panel: "Panel discussion",
	workshop: "Workshop",
	meetup: "Meetup",
	"Master of ceremonies": "Master of ceremonies",
};

export default function PublicationsPage() {
	const years = Object.keys(talks)
		.map(Number)
		.sort((a, b) => b - a);

	return (
		<div className="min-h-screen">
			<SiteHeader />
			<main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10">
				<header className="mb-8 sm:mb-10">
					<h2 className="text-2xl font-bold tracking-tight text-primary text-balance sm:text-3xl">
						Publications & Talks
					</h2>
					<p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">
						A bibliography of books, patent filings, and conference
						presentations. References are formatted in accordance with APA
						guidelines (7th ed.).
					</p>
				</header>

				{/* Book */}
				<section aria-labelledby="book-heading" className="mb-10">
					<div className="mb-4 flex items-center gap-2">
						<BookOpen className="h-4 w-4 text-accent" />
						<h3
							id="book-heading"
							className="font-sans text-xs font-semibold uppercase tracking-widest text-muted-foreground"
						>
							Book
						</h3>
					</div>

					<article className="rounded-sm border border-border bg-card p-4 sm:p-6">
						<p className="text-base leading-relaxed">
							Riva, M. ({book.year}).{" "}
							<a
								href={book.url}
								target="_blank"
								rel="noopener noreferrer"
								className="font-medium italic text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
							>
								{book.title}
							</a>
							. {book.publisher}.
						</p>
						<p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">
							{book.description}
						</p>
					</article>
				</section>

				<PatentsSection />

				{/* Talks */}
				<section aria-labelledby="talks-heading" className="mt-10">
					<div className="mb-4 flex items-center gap-2">
						<Mic className="h-4 w-4 text-accent" />
						<h3
							id="talks-heading"
							className="font-sans text-xs font-semibold uppercase tracking-widest text-muted-foreground"
						>
							Conference Presentations, Workshops & Interviews
						</h3>
					</div>

					<p className="mb-8 font-sans text-sm text-muted-foreground">
						Approximately one hundred appearances across 16 countries. Entries
						are listed in reverse chronological order.
					</p>

					<div className="space-y-10">
						{years.map((year) => {
							const yearTalks = talks[year];
							return (
								<div key={year}>
									<h4 className="mb-4 flex items-baseline gap-3 font-sans text-sm font-semibold uppercase tracking-widest text-primary">
										<span>{year}</span>
										<span className="text-xs font-normal text-muted-foreground">
											({yearTalks.length}{" "}
											{yearTalks.length === 1 ? "event" : "events"})
										</span>
									</h4>

									<ol className="list-none space-y-3">
										{yearTalks.map((talk) => (
											<li
												key={`${talk.date}-${talk.conference}-${talk.title}`}
												className="flex items-start gap-3 border-l-2 border-border py-1.5 pl-4"
											>
												{typeIcon[talk.type]}
												<div className="flex-1">
													<p className="text-sm leading-relaxed">
														Riva, M. ({talk.date} {year}).{" "}
														{talk.url ? (
															<a
																href={talk.url}
																target="_blank"
																rel="noopener noreferrer"
																className="italic text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
															>
																{talk.title}
															</a>
														) : (
															<span className="italic">{talk.title}</span>
														)}{" "}
														<span className="text-muted-foreground">
															[{typeLabel[talk.type]}]
														</span>
														. {talk.conference}, {talk.location}.
													</p>
												</div>
											</li>
										))}
									</ol>
								</div>
							);
						})}
					</div>
				</section>
			</main>
			<SiteFooter />
		</div>
	);
}
