"use client";

import { useEffect } from "react";

export function DelphiWidget() {
	useEffect(() => {
		// Set config before loading the script
		(window as any).delphi = { ...((window as any).delphi ?? {}) };
		(window as any).delphi.page = {
			config: "1eee4bf4-ec08-4666-b631-0fdd28b8f983",
			overrides: {
				landingPage: "CHAT",
			},
			containerId: "delphi-page-container",
			container: {
				width: "100%",
				height: "100%",
			},
		};

		// Check if script is already loaded
		const existingScript = document.getElementById("delphi-page-bootstrap");
		if (existingScript) {
			// Script already loaded, re-initialize
			(window as any).delphi?.init?.();
			return;
		}

		const script = document.createElement("script");
		script.id = "delphi-page-bootstrap";
		script.src = "https://embed.delphi.ai/loader.js";
		script.async = true;
		document.body.appendChild(script);

		return () => {
			// Clean up the container contents on unmount so it doesn't bleed
			const container = document.getElementById("delphi-page-container");
			if (container) container.innerHTML = "";
		};
	}, []);

	return (
		<div
			id="delphi-page-container"
			className="h-[600px] w-full lg:h-[700px]"
		/>
	);
}
