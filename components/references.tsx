import React from "react";
import { cn } from "@/lib/utils";

interface ReferencesProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  items?: React.ReactNode[];
}

interface ReferenceProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Reference({ children, className, ...props }: ReferenceProps) {
  return (
    <div
      className={cn(
        "pl-8 -indent-8 text-sm leading-relaxed text-foreground/90 sm:text-base",
        "[&_a]:text-accent [&_a]:underline [&_a]:decoration-accent/30 [&_a]:underline-offset-4 hover:[&_a]:decoration-accent",
        "[&_em]:italic",
        className
      )}
      role="listitem"
      {...props}
    >
      {children}
    </div>
  );
}

export function ReferenceItem(props: ReferenceProps) {
  return <Reference {...props} />;
}

export function References({
  title = "References",
  items,
  children,
  className,
  ...props
}: ReferencesProps) {
  const hasItems = Boolean(items?.length);

  if (!hasItems && !children) {
    return null;
  }

  return (
    <section
      className={cn("not-prose my-12 border-t border-border pt-8", className)}
      aria-label={title}
      {...props}
    >
      <h2 className="mb-5 font-sans text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {title}
      </h2>
      <div
        className={cn(
          "space-y-4",
          "[&>p]:m-0 [&>p]:pl-8 [&>p]:-indent-8 [&>p]:text-sm [&>p]:leading-relaxed [&>p]:text-foreground/90 sm:[&>p]:text-base",
          "[&>p_a]:text-accent [&>p_a]:underline [&>p_a]:decoration-accent/30 [&>p_a]:underline-offset-4 hover:[&>p_a]:decoration-accent",
          "[&>p_em]:italic"
        )}
        role="list"
      >
        {hasItems
          ? items?.map((item, index) => (
              <Reference key={index}>{item}</Reference>
            ))
          : children}
      </div>
    </section>
  );
}
