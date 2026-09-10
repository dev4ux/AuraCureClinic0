import { ReactNode } from "react";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

export function Section({
  children,
  className = "",
  tone = "default",
  id,
  as: Tag = "section",
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "muted" | "forest";
  id?: string;
  as?: "section" | "div";
}) {
  const toneClass =
    tone === "muted"
      ? "bg-ivory-muted"
      : tone === "forest"
        ? "bg-forest-900 text-ivory"
        : "bg-ivory";

  return (
    <Tag id={id} className={`py-16 sm:py-20 lg:py-28 ${toneClass} ${className}`}>
      <Container>{children}</Container>
    </Tag>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <Reveal className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.16em] ${
            light ? "text-accent-100" : "text-accent-600"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2 className={`text-balance text-3xl sm:text-4xl ${light ? "text-ivory" : ""}`}>{title}</h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? "text-ivory/80" : "text-charcoal-soft"}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
