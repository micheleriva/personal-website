import { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { EmailReveal } from "@/components/email-reveal";

import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
	title: "Contacts | Michele Riva",
	description: "Get in touch with Michele Riva or connect on social networks.",
};

const socialLinks = [
	{
		name: "GitHub",
		href: "https://github.com/MicheleRiva",
		icon: FaGithub,
		description: "Open source projects and contributions",
	},
	{
		name: "LinkedIn",
		href: "https://www.linkedin.com/in/micheleriva95/",
		icon: FaLinkedin,
		description: "Professional network and career updates",
	},
	{
		name: "Twitter",
		href: "https://twitter.com/MicheleRivaCode",
		icon: FaXTwitter,
		description: "Thoughts on tech and philosophy",
	},
	{
		name: "Instagram",
		href: "https://www.instagram.com/micheleriva.js",
		icon: FaInstagram,
		description: "Behind the scenes and personal moments",
	},
];

export default function ContactPage() {
	return (
		<div className="min-h-screen">
			<SiteHeader />
			<main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
				<header className="mb-8 sm:mb-10">
					<h2 className="text-2xl font-bold tracking-tight text-primary text-balance sm:text-3xl">
						Contacts
					</h2>
					<p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">
						Feel free to reach out through social media or chat with my AI assistant.
					</p>
				</header>

				<div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
					{/* Left side - Social Links */}
					<div className="lg:w-1/3">
						<div className="mb-4 flex items-center gap-2">
							<Mail className="h-4 w-4 text-accent" />
							<h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-muted-foreground">
								Connect
							</h3>
						</div>

						<div className="space-y-4">
							<EmailReveal />
							{socialLinks.map((link) => {
								const Icon = link.icon;
								return (
									<a
										key={link.name}
										href={link.href}
										target="_blank"
										rel="noopener noreferrer"
										className="group flex items-start gap-4 rounded-sm border border-border bg-card p-4 transition-colors hover:border-accent/50"
									>
										<Icon className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-accent" />
										<div>
											<p className="font-sans text-sm font-medium text-primary transition-colors group-hover:text-accent">
												{link.name}
											</p>
											<p className="mt-0.5 font-sans text-xs text-muted-foreground">
												{link.description}
											</p>
										</div>
									</a>
								);
							})}
						</div>
					</div>

					{/* Right side - Delphi Chat Widget */}
					<div className="lg:w-2/3">
						<div className="mb-4 flex items-center gap-2">
							<svg
								className="h-4 w-4 text-accent"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
								/>
							</svg>
							<h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-muted-foreground">
								Talk to Michele's Digital Mind
							</h3>
						</div>

						<div className="overflow-hidden rounded-sm border border-border bg-card h-[700px]">
							<iframe
								src="https://delphi.ai/embeddable/config/1eee4bf4-ec08-4666-b631-0fdd28b8f983"
								allow="camera *; microphone *"
								style={{ border: "none", height: "100%", width: "100%" }}
								title="Talk to Michele's Digital Mind"
							/>
						</div>
					</div>
				</div>
			</main>
			<SiteFooter />
		</div>
	);
}
