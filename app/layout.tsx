import type { Metadata } from "next";
import { Lora, Source_Sans_3 } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";

const lora = Lora({
	subsets: ["latin"],
	variable: "--font-lora",
	display: "swap",
});

const sourceSans = Source_Sans_3({
	subsets: ["latin"],
	variable: "--font-source-sans",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Michele Riva",
	description:
		"Software engineer, entrepreneur, author, and patent holder. Co-founder and CTO at Orama.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${lora.variable} ${sourceSans.variable}`}>
			<body className="font-serif antialiased leading-relaxed">{children}</body>
      <Analytics />
		</html>
	);
}
