import Link from "next/link";
import { blogPosts, menuCategories, menuItems, phoneHref, reservationUrl } from "@/lib/site";

const dishes = [
  { name: "Ceviche Lucho Barrios", price: "$11.900", detail: "Pez blanco de nuestro litoral, aderezado a lo peruano.", image: "https://delbarriovalpo.cl/wp-content/uploads/2023/04/DSC_0809-scaled-e1681135997160.jpg", category: "Entrada · Mar" },
  { name: "Pastel de Choclo", price: "$11.900", detail: "Tradición chilena servida con orgullo porteño.", image: "https://delbarriovalpo.cl/wp-content/uploads/2023/04/PASTEL-DE-CHOCLO.jpg", category: "Fondo · Tradición" },
  { name: "Pizza Del Barrio", price: "$15.900", detail: "Una pizza de 32 cm para poner al centro de la mesa.", image: "https://delbarriovalpo.cl/wp-content/uploads/2023/04/pizzadelbarrio.jpg", category: "Pizza · Para compartir" }
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Home() {
  const highlights = menuItems.slice(0, 10);
  return (
    <main>
      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><span></span> PEDRO MONTT 2302 · VALPARAÍSO</p>
          <h1>Comer rico.<br /><em>Sin caretas.</em></h1>
          <p className="hero-text">Cocina chilena, guiños peruanos y una mesa siempre dispuesta para la conversa.</p>
          <div className="hero-actions">
            <a className="button button-primary" href={reservationUrl} target="_blank" rel="noreferrer">Reserva ahora <Arrow /></a>
            <Link className="text-link" href="/pedir">Pide online <span>↓</span></Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-frame"><video autoPlay muted loop playsInline preload="metadata" aria-hidden="true"><source src="https://cdn.coverr.co/videos/coverr-onion-on-a-hamburger-5878/1080p.mp4" type="video/mp4" /></video></div>
          <div className="hero-stamp"><span>VALPO</span><strong>EN EL</strong><span>PLAN</span></div>
          <p className="photo-caption">Hamburguesa en preparación <span>01</span></p>
        </div>
        <aside className="hours-card" aria-label="Horarios"><span className="pulse"></span><div><b>Hoy abrimos</b><br />10:00 — 23:59 hrs.</div><Link href="/contacto" aria-label="Ver todos los horarios">+</Link></aside>
      </section>

      <section className="intro-strip"><p>De Valparaíso para la mesa.</p><div className="intro-rule"></div><p>Más de <strong>70 platos</strong> para caer con hambre y salir contento.</p></section>

      <section className="corporate-intro" aria-label="Del Barrio, una mesa para todos">
        <p className="eyebrow"><span></span> UNA CASA ABIERTA</p>
        <div><h2>Una mesa que<br /><em>se mueve con la ciudad.</em></h2><p>Del Barrio reúne cocina chilena, guiños peruanos y una forma cercana de recibir. Aquí la carta, la ubicación y las reservas están conectadas para que venir sea simple.</p></div>
        <div className="corporate-links"><Link href="/nosotros">Conoce la casa <Arrow /></Link><Link href="/experiencias">Ven en grupo <Arrow /></Link><Link href="/contacto">Ubicación y horarios <Arrow /></Link></div>
      </section>

      <section className="menu-section" aria-labelledby="carta-inicio">
        <div className="section-heading"><p className="eyebrow"><span></span> NUESTRA CARTA</p><h2 id="carta-inicio">Elige tu<br /><em>propia esquina.</em></h2><p>Recetas que hablan como hablamos acá: directo, con historia y sin dejar a nadie con hambre.</p><Link className="button button-outline" href="/carta">Ver carta completa <Arrow /></Link></div>
        <div className="menu-content">
          <div className="menu-category-rail" aria-label="Categorías de la carta">{menuCategories.map((category, index) => <span key={category}><b>{String(index + 1).padStart(2, "0")}</b>{category}</span>)}</div>
          <div className="menu-preview-grid">{highlights.map((item) => <article className="menu-preview-card" key={item.name}><p>{item.category}</p><div><h3>{item.name}</h3><strong>{item.price}</strong></div>{item.description && <span>{item.description}</span>}</article>)}</div>
          <p className="menu-note">También hay desayunos, cafetería y tragos. Revisa la carta completa o pregunta por las opciones del día cuando llegues.</p>
        </div>
      </section>

      <section className="featured-section" aria-labelledby="favoritos-title">
        <div className="featured-topline"><p className="eyebrow"><span></span> LOS DE LA CASA</p><p>Una vuelta corta por los favoritos.</p></div><h2 id="favoritos-title">Hay platos que<br /><em>ya son vecinos.</em></h2>
        <div className="dish-grid">{dishes.map((dish, index) => <article className={`dish-card dish-${index + 1}`} key={dish.name}><div className="dish-image"><img src={dish.image} alt={dish.name} /></div><p className="dish-meta">{dish.category}</p><div className="dish-title-row"><h3>{dish.name}</h3><strong>{dish.price}</strong></div><p>{dish.detail}</p></article>)}</div>
      </section>

      <section className="map-section" aria-labelledby="mapa-title">
        <div className="map-copy"><p className="eyebrow"><span></span> COORDENADAS DEL BARRIO</p><p className="coordinates">33°02&apos;51&quot;S<br />71°36&apos;45&quot;O</p><h2 id="mapa-title">El punto de<br /><em>encuentro.</em></h2><p>Pedro Montt 2302, Valparaíso. En pleno Plan, donde se cruza la ciudad, el hambre y la conversa.</p><Link className="button button-outline" href="/contacto">Cómo llegar <Arrow /></Link></div>
        <div className="map-stage"><div className="map-label"><span>ESTÁS AQUÍ</span><b>DEL<br />BARRIO</b></div><iframe title="Ubicación de Del Barrio Valparaíso en Google Maps" src="https://www.google.com/maps?q=Del%20Barrio%2C%20Pedro%20Montt%202302%2C%20Valpara%C3%ADso&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><div className="map-pin" aria-hidden="true">⌖</div></div>
      </section>

      <section className="blog-teaser" aria-labelledby="blog-inicio"><div className="section-heading"><p className="eyebrow"><span></span> DESDE EL BARRIO</p><h2 id="blog-inicio">Para llegar con<br /><em>ganas de mesa.</em></h2></div><div className="teaser-posts">{blogPosts.map((post) => <Link className="teaser-post" href={`/blog/${post.slug}`} key={post.slug}><p>{post.category} · {post.readTime}</p><h3>{post.title}</h3><span>Leer artículo <Arrow /></span></Link>)}</div><Link className="button button-outline" href="/blog">Ir al blog <Arrow /></Link></section>

      <section className="reservation-section"><div className="reservation-copy"><p className="eyebrow light"><span></span> RESERVAS DIRECTAS</p><h2>Una mesa, una<br /><em>buena historia.</em></h2><p>Una llamada, una reserva y la mesa queda lista. Ven con amigos, familia o el equipo completo.</p><a className="button button-sand" href={reservationUrl} target="_blank" rel="noreferrer">Quiero reservar <Arrow /></a></div><div className="visit-card"><div className="visit-icon" aria-hidden="true">☎</div><p className="visit-label">MESA DIRECTA</p><h3>+56 32<br />222 13345</h3><a className="visit-map" href={phoneHref}>Llamar ahora <Arrow /></a><div className="visit-hours"><p><span>Lun — Jue</span> 10:00 — 23:59</p><p><span>Vie — Sáb</span> 10:00 — 01:59</p><p><span>Domingo</span> 10:00 — 23:59</p></div></div></section>
    </main>
  );
}
