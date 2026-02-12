"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
	{ label: "Home", href: "/" },
	{ label: "Writings", href: "/writings" },
	{ label: "Publications & Talks", href: "/publications" },
	{ label: "Resume", href: "/resume.pdf" },
];

export function SiteHeader() {
	const pathname = usePathname();
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="border-b border-border">
			<div className="mx-auto max-w-3xl px-4 py-5 sm:px-6 sm:py-6">
				<div className="flex items-center justify-between">
					<div className="min-w-0 flex-1">
						<Link href="/" className="group">
							<h1 className="text-xl font-bold tracking-tight text-primary sm:text-2xl">
								Michele Riva
							</h1>
							<p className="mt-0.5 font-sans text-xs tracking-wide text-muted-foreground sm:mt-1 sm:text-sm">
								Philosophy &middot; Research &middot; Graph Algorithms
							</p>
						</Link>
					</div>

					{/* Desktop nav */}
					<nav aria-label="Main navigation" className="hidden sm:block">
						<ul className="flex gap-6 font-sans text-sm">
							{navItems.map((item) => (
								<li key={item.href}>
									<Link
										href={item.href}
										className={cn(
											"transition-colors hover:text-accent",
											pathname === item.href
												? "font-semibold text-accent border-b border-accent pb-0.5"
												: "text-muted-foreground",
										)}
									>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</nav>

					{/* Mobile menu button */}
					<button
						type="button"
						className="flex items-center justify-center p-1 text-muted-foreground transition-colors hover:text-primary sm:hidden"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						aria-expanded={mobileMenuOpen}
						aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
					>
						{mobileMenuOpen ? (
							<X className="h-5 w-5" />
						) : (
							<Menu className="h-5 w-5" />
						)}
					</button>
				</div>

				{/* Mobile nav */}
				{mobileMenuOpen && (
					<nav
						aria-label="Mobile navigation"
						className="mt-4 border-t border-border pt-4 sm:hidden"
					>
						<ul className="flex flex-col gap-3 font-sans text-sm">
							{navItems.map((item) => (
								<li key={item.href}>
									<Link
										href={item.href}
										onClick={() => setMobileMenuOpen(false)}
										className={cn(
											"block py-1 transition-colors hover:text-accent",
											pathname === item.href
												? "font-semibold text-accent"
												: "text-muted-foreground",
										)}
									>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				)}
			</div>
		</header>
	);
}
