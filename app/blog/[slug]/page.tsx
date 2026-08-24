import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost, reservationUrl } from "@/lib/site";

type BlogPostPageProps = { params: { slug: string } };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getBlogPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { title: post.title, description: post.description, type: "article", url: `/blog/${post.slug}`, publishedTime: post.date, locale: "es_CL" }
  };
}

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();
  const relatedPosts = blogPosts.filter((entry) => entry.slug !== post.slug).slice(0, 2);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "es-CL",
    author: { "@type": "Organization", name: "Del Barrio Valparaíso" },
    publisher: { "@type": "Organization", name: "Del Barrio Valparaíso" },
    mainEntityOfPage: `https://delbarrio.vercel.app/blog/${post.slug}`
  };

  return (
    <main>
      <article className="article-shell">
        <header className="article-header"><p className="eyebrow"><span></span> {post.category.toUpperCase()} · DEL BARRIO</p><p className="article-meta">23 AGO 2026 · {post.readTime.toUpperCase()}</p><h1>{post.title}</h1><p className="article-lede">{post.excerpt}</p></header>
        <div className="article-body">{post.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}</div>
        <aside className="article-cta"><p>¿Listo para llevar la idea a la mesa?</p><a className="button button-primary" href={reservationUrl} target="_blank" rel="noreferrer">Reserva directa <Arrow /></a><Link href="/carta">Ver la carta <Arrow /></Link></aside>
        <section className="related-posts" aria-labelledby="seguir-leyendo"><p className="eyebrow"><span></span> SIGUE LEYENDO</p><h2 id="seguir-leyendo">Más desde<br /><em>el barrio.</em></h2><div>{relatedPosts.map((related) => <Link key={related.slug} href={`/blog/${related.slug}`}><p>{related.category}</p><h3>{related.title}</h3><span>Leer <Arrow /></span></Link>)}</div></section>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  );
}
