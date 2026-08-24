import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description: "Guías de carta, mesas compartidas y visitas a Del Barrio en Valparaíso.",
  alternates: { canonical: "/blog" },
  openGraph: { title: "Blog | Del Barrio", description: "Ideas para comer, compartir y llegar a Del Barrio en Valparaíso.", url: "/blog" }
};

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function BlogPage() {
  return (
    <main>
      <section className="page-hero page-hero-blog"><p className="eyebrow"><span></span> DESDE EL BARRIO</p><h1>Una guía para<br /><em>llegar con hambre.</em></h1><p>Ideas concretas para mirar la carta, organizar una mesa y ubicar Del Barrio en Valparaíso.</p></section>
      <section className="blog-index"><div className="content-intro"><p className="eyebrow"><span></span> NOTAS DEL RESTAURANTE</p><p>Textos escritos para ayudarte a decidir antes de venir, sin rodeos y con la carta a mano.</p></div><div className="blog-grid">{blogPosts.map((post, index) => <article className={`blog-card blog-card-${index + 1}`} key={post.slug}><p>{post.category} · {post.readTime}</p><h2>{post.title}</h2><p className="blog-excerpt">{post.excerpt}</p><Link href={`/blog/${post.slug}`}>Leer artículo <Arrow /></Link></article>)}</div></section>
    </main>
  );
}
