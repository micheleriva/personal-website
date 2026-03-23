"use client";

import { useState } from "react";
import { Mail } from "lucide-react";

export function EmailReveal() {
  const [isRevealed, setIsRevealed] = useState(false);
  const email = "riva.michele.95@gmail.com";

  return (
    <button
      onClick={() => setIsRevealed(!isRevealed)}
      className="group flex items-start gap-4 rounded-sm border border-border bg-card p-4 transition-colors hover:border-accent/50 w-full text-left"
    >
      <Mail className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-accent" />
      <div>
        <p className="font-sans text-sm font-medium text-primary transition-colors group-hover:text-accent">
          Email
        </p>
        <p className="mt-0.5 font-sans text-xs text-muted-foreground">
          {isRevealed ? (
            <a
              href={`mailto:${email}`}
              onClick={(e) => e.stopPropagation()}
              className="text-accent hover:underline"
            >
              {email}
            </a>
          ) : (
            "Click to reveal"
          )}
        </p>
      </div>
    </button>
  );
}
