import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { articles, getArticleBySlug } from "@/data/articles";
import { getConditionBySlug } from "@/data/conditions";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema, faqSchema, toJsonLdScript } from "@/lib/schema";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { MedicalReviewNotice } from "@/components/shared/MedicalReviewNotice";
import { FinalCta } from "@/components/shared/FinalCta";
import { ArrowRightIcon } from "@/components/ui/icons";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.metaDescription,
    alternates: { canonical: `/health-library/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.metaDescription,
      url: `${siteConfig.url}/health-library/${article.slug}`,
      publishedTime: article.publishedDate,
      modifiedTime: article.updatedDate,
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Health Library", href: "/health-library" },
    { name: article.title, href: `/health-library/${article.slug}` },
  ];

  const relatedConditions = article.relatedConditionSlugs
    .map((s) => getConditionBySlug(s))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  const relatedArticles = article.relatedArticleSlugs
    .map((s) => getArticleBySlug(s))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  const faqLd = faqSchema(article.faqs);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.publishedDate,
    dateModified: article.updatedDate,
    author: { "@type": "Organization", name: siteConfig.brand },
    publisher: { "@id": `${siteConfig.url}/#clinic` },
    mainEntityOfPage: `${siteConfig.url}/health-library/${article.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLdScript([
            articleLd,
            breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: `${siteConfig.url}${c.href}` }))),
            ...(faqLd ? [faqLd] : []),
          ]),
        }}
      />
      <Breadcrumbs items={crumbs} />

      <Container className="py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_18rem] lg:gap-16">
          <article>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-600">{article.cluster}</p>
            <h1 className="mt-3 text-balance text-4xl leading-tight sm:text-[2.5rem]">{article.title}</h1>
            <p className="mt-4 text-sm text-charcoal-faint">{article.readingTimeMinutes} min read</p>

            <MedicalReviewNotice lastUpdated={article.updatedDate} className="mt-8" />

            <div className="prose-medical mt-10">
              <p className="text-lg leading-relaxed text-charcoal">{article.excerpt}</p>
              {article.body.map((block) => (
                <section key={block.heading}>
                  <h2>{block.heading}</h2>
                  {block.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </section>
              ))}
            </div>

            {article.faqs.length > 0 && (
              <section aria-labelledby="article-faqs" className="mt-14">
                <h2 id="article-faqs" className="text-2xl">
                  Common questions
                </h2>
                <div className="mt-6">
                  <FaqAccordion items={article.faqs} />
                </div>
              </section>
            )}

            <aside className="mt-12 rounded-lg border-l-2 border-charcoal-faint/40 bg-ivory-muted px-6 py-5">
              <h2 className="text-sm font-semibold text-charcoal">Medical disclaimer</h2>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">
                This article is general health information, not medical advice for your specific situation. Consult a
                qualified healthcare professional about your own symptoms. In an emergency, seek immediate medical care.
              </p>
            </aside>
          </article>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            {relatedConditions.length > 0 && (
              <nav aria-label="Related conditions" className="rounded-lg border border-border bg-surface p-6">
                <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-600">
                  Related conditions
                </h2>
                <ul className="mt-4 space-y-3">
                  {relatedConditions.map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={`/conditions/${c.slug}`}
                        className="group flex items-center justify-between gap-3 text-sm font-medium text-charcoal-soft hover:text-forest-700"
                      >
                        {c.name}
                        <ArrowRightIcon className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            {relatedArticles.length > 0 && (
              <nav aria-label="Related articles" className="rounded-lg border border-border bg-surface p-6">
                <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-600">
                  More in {article.cluster}
                </h2>
                <ul className="mt-4 space-y-3.5">
                  {relatedArticles.map((a) => (
                    <li key={a.slug}>
                      <Link
                        href={`/health-library/${a.slug}`}
                        className="text-sm font-medium leading-snug text-charcoal-soft hover:text-forest-700"
                      >
                        {a.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </aside>
        </div>
      </Container>

      <FinalCta location={`article_${article.slug}_final`} />
    </>
  );
}
