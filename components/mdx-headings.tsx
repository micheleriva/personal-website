import React from "react";
import { Quotation } from "@/components/quotation";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
}

function extractText(children: React.ReactNode): string {
  if (typeof children === "string") return children;
  if (typeof children === "number") return String(children);
  if (Array.isArray(children)) return children.map(extractText).join("");
  if (React.isValidElement(children)) {
    return extractText(
      (children.props as { children?: React.ReactNode }).children
    );
  }
  return "";
}

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>;

function makeHeading(Tag: "h1" | "h2" | "h3" | "h4" | "h5") {
  function Heading({ children, className, ...props }: HeadingProps) {
    const id = slugify(extractText(children));
    return (
      <Tag
        id={id}
        className={`group relative scroll-mt-20 ${className ?? ""}`}
        {...props}
      >
        <a
          href={`#${id}`}
          aria-hidden="true"
          tabIndex={-1}
          className="absolute -left-5 top-0 bottom-0 flex items-center opacity-0 group-hover:opacity-60 transition-opacity text-muted-foreground no-underline font-normal text-base"
        >
          #
        </a>
        {children}
      </Tag>
    );
  }
  Heading.displayName = `Heading${Tag.toUpperCase()}`;
  return Heading;
}

export const mdxHeadings = {
  h1: makeHeading("h1"),
  h2: makeHeading("h2"),
  h3: makeHeading("h3"),
  h4: makeHeading("h4"),
  h5: makeHeading("h5"),
  Quotation,
};
