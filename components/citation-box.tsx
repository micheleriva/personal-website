"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CitationBoxProps {
	author: string;
	date: string;
	title: string;
	url: string;
}

export function CitationBox({ author, date, title, url }: CitationBoxProps) {
	const [copied, setCopied] = useState(false);

	const citationText = `${author} (${date}). ${title}. ${url}`;

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(citationText);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			console.error("Failed to copy citation:", err);
		}
	};

	return (
		<section className="rounded-sm border border-border bg-card p-4 sm:p-6">
			<div className="mb-2 flex items-center justify-between">
				<h2 className="font-sans text-xs font-semibold uppercase tracking-widest text-muted-foreground">
					How to Cite
				</h2>
				<button
					onClick={handleCopy}
					className="inline-flex items-center gap-1.5 rounded px-2 py-1 font-sans text-xs text-muted-foreground transition-colors hover:bg-accent/10 hover:text-accent"
					aria-label="Copy citation"
				>
					{copied ? (
						<>
							<Check className="h-3.5 w-3.5" />
							Copied
						</>
					) : (
						<>
							<Copy className="h-3.5 w-3.5" />
							Copy
						</>
					)}
				</button>
			</div>
			<p className="break-words font-sans text-sm leading-relaxed text-muted-foreground">
				{author} ({date}).{" "}
				<span className="italic">{title}</span>.{" "}
				{url}
			</p>
		</section>
	);
}
