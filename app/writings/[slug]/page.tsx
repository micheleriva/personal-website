import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BadgeCheck } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Separator } from "@/components/ui/separator";
import { CitationBox } from "@/components/citation-box";
import { getWritingBySlug, getAllWritings } from "@/lib/writings-data";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
	return getAllWritings().map((writing) => ({ slug: writing.slug }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const { slug } = await params;
	const writing = getWritingBySlug(slug);
	if (!writing) return { title: "Not Found" };

	const ogImageUrl = new URL('/api/og', 'https://micheleriva.dev');
	ogImageUrl.searchParams.set('title', writing.title);
	ogImageUrl.searchParams.set('date', writing.date);
	ogImageUrl.searchParams.set('abstract', writing.abstract);
	ogImageUrl.searchParams.set('keywords', writing.keywords.join(', '));
	if (writing.authorshipReportUrl) {
		ogImageUrl.searchParams.set('authorship', 'true');
	}

	return {
		title: `${writing.title} | Michele Riva`,
		description: writing.abstract,
		openGraph: {
			title: writing.title,
			description: writing.abstract,
			type: 'article',
			publishedTime: new Date(writing.year, 0, 1).toISOString(),
			authors: ['Michele Riva'],
			images: [
				{
					url: ogImageUrl.toString(),
					width: 1200,
					height: 630,
					alt: writing.title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title: writing.title,
			description: writing.abstract,
			images: [ogImageUrl.toString()],
		},
	};
}

export default async function WritingPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const writing = getWritingBySlug(slug);

	if (!writing) {
		notFound();
	}

	return (
		<div className="min-h-screen">
			<SiteHeader />
			<main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10">
				{/* Back link */}
				<Link
					href="/writings"
					className="mb-6 inline-flex items-center gap-1.5 font-sans text-sm text-muted-foreground transition-colors hover:text-accent sm:mb-8"
				>
					<ArrowLeft className="h-3.5 w-3.5" />
					Back to Selected Writings
				</Link>

				<article>
					{/* APA-style header */}
					<header className="mb-6 sm:mb-8">
						<h1 className="text-2xl font-bold leading-tight tracking-tight text-primary text-balance sm:text-3xl">
							{writing.title}
						</h1>
						<p className="mt-3 font-sans text-sm text-muted-foreground">
							Riva, M. ({writing.date}).
						</p>
					</header>

					{/* Abstract block */}
					<section className="mb-6 rounded-sm border border-border bg-card p-4 sm:mb-8 sm:p-6">
						<h2 className="mb-2 font-sans text-xs font-semibold uppercase tracking-widest text-muted-foreground">
							Abstract
						</h2>
						<p className="text-sm leading-relaxed">{writing.abstract}</p>
						<div className="mt-3">
							<p className="font-sans text-xs text-muted-foreground">
								<span className="italic">Keywords:</span>{" "}
								{writing.keywords.join(", ")}
							</p>
						</div>
					</section>

					{/* Authorship Verification */}
					{writing.authorshipReportUrl && (
						<section className="mb-6 rounded-sm border border-green-700/30 bg-green-700/5 p-4 sm:mb-8 sm:p-6">
							<div className="flex items-center gap-2 mb-2">
								<BadgeCheck className="h-4 w-4 text-green-700" />
								<h2 className="font-sans text-xs font-semibold uppercase tracking-widest text-green-700">
									Authentically Human Written
								</h2>
							</div>
							<p className="text-sm leading-relaxed text-foreground/90">
								This article was written entirely by a human author without the
								use of AI.
							</p>
							<div className="mt-3">
								<a
									href={writing.authorshipReportUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-1.5 font-sans text-xs text-green-900 hover:underline"
								>
									View Grammarly Authorship Report →
								</a>
							</div>
						</section>
					)}

					<Separator className="mb-8" />

					{/* Body */}
					<div className="prose prose-sm sm:prose-base max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-p:indent-12 prose-a:text-accent prose-a:underline prose-a:decoration-accent/30 prose-a:underline-offset-4 hover:prose-a:decoration-accent prose-blockquote:border-l-accent prose-blockquote:font-normal prose-blockquote:not-italic">
						<MDXRemote source={writing.content} />
					</div>

					<Separator className="my-10" />

					{/* Citation block */}
					<CitationBox
						author="Riva, M."
						date={writing.date}
						title={writing.title}
						url={`https://micheleriva.dev/writings/${writing.slug}`}
					/>
				</article>
			</main>
			<SiteFooter />
		</div>
	);
}
