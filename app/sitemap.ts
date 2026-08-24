import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://delbarrio.vercel.app";
  const pages = ["", "/carta", "/nosotros", "/experiencias", "/contacto", "/blog"];
  return [
    ...pages.map((path) => ({ url: `${baseUrl}${path}`, lastModified: new Date("2026-08-23"), changeFrequency: "weekly" as const, priority: path === "" ? 1 : 0.8 })),
    ...blogPosts.map((post) => ({ url: `${baseUrl}/blog/${post.slug}`, lastModified: new Date(post.date), changeFrequency: "monthly" as const, priority: 0.7 }))
  ];
}
