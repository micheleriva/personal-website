import React from "react";

interface QuotationProps {
  author: string;
  text: string;
}

export function Quotation({ author, text }: QuotationProps) {
  return (
    <figure className="not-prose my-10 border-l-2 border-accent/50 pl-6">
      <blockquote className="whitespace-pre-wrap font-serif italic leading-relaxed text-foreground/85">
        {text}
      </blockquote>
      <figcaption className="mt-5 font-sans text-[0.7rem] uppercase tracking-[0.12em] text-muted-foreground">
        — {author}
      </figcaption>
    </figure>
  );
}
