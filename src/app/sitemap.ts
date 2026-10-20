import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { work } from "@/content/work";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.meta.url;
  const staticRoutes = ["", "/work", "/about", "/ai"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const caseRoutes = work
    .filter((c) => !c.comingSoon)
    .map((c) => ({
      url: `${base}/work/${c.slug}`,
      lastModified: new Date(),
    }));

  return [...staticRoutes, ...caseRoutes];
}
