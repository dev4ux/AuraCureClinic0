import Link from "next/link";

export interface BreadcrumbItem {
  name: string;
  href: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-border bg-ivory-muted/60">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center gap-1.5 px-5 py-3 text-xs text-charcoal-faint sm:px-8 lg:px-10">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <span key={item.href} className="flex items-center gap-1.5">
              {index > 0 && <span aria-hidden="true">/</span>}
              {isLast ? (
                <span aria-current="page" className="font-medium text-charcoal-soft">
                  {item.name}
                </span>
              ) : (
                <Link href={item.href} className="transition-colors hover:text-forest-700">
                  {item.name}
                </Link>
              )}
            </span>
          );
        })}
      </div>
    </nav>
  );
}
