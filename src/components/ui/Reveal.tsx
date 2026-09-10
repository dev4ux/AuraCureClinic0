"use client";

import { Children, isValidElement, useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

/**
 * Scroll-reveal primitives.
 *
 * One shared IntersectionObserver serves every Reveal on the page rather than
 * one observer per element — on a page with forty revealing blocks that is the
 * difference between forty observers and one. Each element unregisters the
 * moment it has been seen, so the observer's watch list shrinks as the visitor
 * scrolls and is empty by the end of the page.
 *
 * Everything degrades to "already visible" when the visitor prefers reduced
 * motion, or when IntersectionObserver is unavailable. Content is always in
 * the DOM — only opacity and transform change — so crawlers and assistive
 * technology are unaffected either way.
 */

type Variant = "up" | "fade" | "left" | "right" | "scale";

/*
 * The horizontal variants are neutralised below `sm`. On a narrow viewport a
 * 24px sideways offset pushes the block past the edge and gives the whole
 * page a horizontal scrollbar before it has animated in — the element is
 * off-screen, but the document still grows to contain it. Narrow screens get
 * the fade alone, which reads the same at that width.
 */
const hiddenByVariant: Record<Variant, string> = {
  up: "translate-y-7 opacity-0",
  fade: "opacity-0",
  left: "opacity-0 max-sm:translate-x-0 sm:-translate-x-6",
  right: "opacity-0 max-sm:translate-x-0 sm:translate-x-6",
  scale: "scale-[0.97] opacity-0",
};

const shownByVariant: Record<Variant, string> = {
  up: "translate-y-0 opacity-100",
  fade: "opacity-100",
  left: "translate-x-0 opacity-100",
  right: "translate-x-0 opacity-100",
  scale: "scale-100 opacity-100",
};

type Callback = () => void;

let observer: IntersectionObserver | null = null;
const callbacks = new WeakMap<Element, Callback>();

function getObserver() {
  if (observer) return observer;
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        callbacks.get(entry.target)?.();
        callbacks.delete(entry.target);
        observer?.unobserve(entry.target);
      }
    },
    // Fires a little before the element is fully in view, so the motion has
    // finished by the time the visitor's eye reaches it.
    { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
  );
  return observer;
}

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

type Tag = "div" | "li" | "span" | "section" | "figure";

export function Reveal({
  children,
  delay = 0,
  variant = "up",
  className = "",
  style,
  as: Tag = "div",
}: {
  children: ReactNode;
  /** Milliseconds to hold before this block starts moving. */
  delay?: number;
  variant?: Variant;
  className?: string;
  /** Merged with the transition-delay Reveal sets itself. */
  style?: CSSProperties;
  /** Rendered element. Use "li" inside a list — a div there is invalid markup. */
  as?: Tag;
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined" || prefersReducedMotion()) {
      requestAnimationFrame(() => setShown(true));
      return;
    }

    // Already past it on load (deep link, restored scroll) — show immediately
    // rather than waiting for a scroll that may never come.
    if (el.getBoundingClientRect().top < window.innerHeight) {
      requestAnimationFrame(() => setShown(true));
      return;
    }

    const io = getObserver();
    callbacks.set(el, () => setShown(true));
    io.observe(el);

    return () => {
      callbacks.delete(el);
      io.unobserve(el);
    };
  }, []);

  return (
    <Tag
      ref={ref as never}
      style={{ ...style, transitionDelay: shown ? `${delay}ms` : "0ms" }}
      className={`transition-[opacity,transform] duration-[var(--dur-base)] ease-[var(--ease-soft)] will-change-[opacity,transform] motion-reduce:transition-none ${
        shown ? shownByVariant[variant] : hiddenByVariant[variant]
      } ${className}`}
    >
      {children}
    </Tag>
  );
}

/**
 * Reveals its children one after another. Prefer this to hand-written delays:
 * the cadence stays consistent across the site, and adding or removing an item
 * re-times the rest automatically.
 */
export function RevealGroup({
  children,
  step = 70,
  variant = "up",
  className = "",
  itemClassName = "",
  as: Wrapper = "div",
  itemAs = "div",
}: {
  children: ReactNode;
  /** Milliseconds between one child starting and the next. */
  step?: number;
  variant?: Variant;
  className?: string;
  itemClassName?: string;
  /** Wrapper element — "ul"/"ol" with itemAs="li" for a list. */
  as?: "div" | "ul" | "ol";
  itemAs?: Tag;
}) {
  const items = Children.toArray(children).filter(isValidElement);

  return (
    <Wrapper className={className}>
      {items.map((child, i) => (
        <Reveal key={child.key ?? i} delay={i * step} variant={variant} className={itemClassName} as={itemAs}>
          {child}
        </Reveal>
      ))}
    </Wrapper>
  );
}
