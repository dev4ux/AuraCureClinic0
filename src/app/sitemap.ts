import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { conditions } from "@/data/conditions";
import { allServices } from "@/data/services";
import { articles } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "", priority: 1, changeFrequency: "monthly" },
    { path: "/about-doctor", priority: 0.9, changeFrequency: "yearly" },
    { path: "/treatments", priority: 0.8, changeFrequency: "yearly" },
    { path: "/conditions", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services", priority: 0.7, changeFrequency: "monthly" },
    { path: "/clinic", priority: 0.8, changeFrequency: "yearly" },
    { path: "/appointment", priority: 0.9, changeFrequency: "yearly" },
    { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
    { path: "/reviews", priority: 0.6, changeFrequency: "monthly" },
    { path: "/health-library", priority: 0.7, changeFrequency: "weekly" },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
    { path: "/medical-disclaimer", priority: 0.4, changeFrequency: "yearly" },
    { path: "/editorial-policy", priority: 0.4, changeFrequency: "yearly" },
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route.path}`,
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...conditions.map((c) => ({
      url: `${siteConfig.url}/conditions/${c.slug}`,
      lastModified: new Date(c.lastUpdated),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...allServices.map((s) => ({
      url: `${siteConfig.url}/services/${s.slug}`,
      lastModified: new Date(s.lastUpdated),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...articles.map((a) => ({
      url: `${siteConfig.url}/health-library/${a.slug}`,
      lastModified: new Date(a.updatedDate),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
