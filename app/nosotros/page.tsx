import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Conoce la forma de recibir, los sabores y la mesa compartida de Del Barrio en Valparaíso.",
  alternates: { canonical: "/nosotros" },
  openGraph: { title: "Nosotros | Del Barrio", description: "Cocina cercana, mesa compartida y sabor del puerto.", url: "/nosotros" }
};

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function NosotrosPage() {
  return (
    <main>
      <section className="page-hero page-hero-nosotros"><p className="eyebrow"><span></span> LA CASA</p><h1>Comida honesta.<br /><em>Mesa larga.</em></h1><p>Una casa para encontrarse alrededor de sabores chilenos, guiños peruanos y precios reales.</p></section>
      <section className="manifesto-section"><p className="eyebrow"><span></span> LO QUE NOS MUEVE</p><blockquote>“Que la gastronomía sea auténtica, que la mesa sea cercana y que siempre haya una razón para quedarse un rato más.”</blockquote><p>En Del Barrio, la experiencia parte por recibir sin vueltas: una carta amplia, una ubicación clara y una mesa pensada para la familia, los amigos o el equipo.</p></section>
      <section className="values-grid" aria-label="Principios de Del Barrio">
        <article><span>01</span><h2>Autenticidad</h2><p>Cocina chilena y acentos peruanos que conversan con la mesa, sin disfrazarse de algo que no son.</p></article>
        <article><span>02</span><h2>Accesibilidad</h2><p>Precios reales, información directa y una experiencia fácil de organizar desde el teléfono.</p></article>
        <article><span>03</span><h2>Comunidad</h2><p>Un lugar donde la visita puede ser rápida o larga, pero siempre deja espacio para compartir.</p></article>
      </section>
      <section className="split-section"><div><p className="eyebrow"><span></span> DEL BARRIO AL PLATO</p><h2>Una carta que<br /><em>no obliga a elegir sólo una cosa.</em></h2></div><div><p>Entradas de mar, fondos, ensaladas, sandwiches, pizzas y tablas hacen que una mesa pueda reunir antojos distintos. Revisa los platos antes de salir y llega con una primera idea.</p><Link className="button button-outline" href="/carta">Explorar la carta <Arrow /></Link></div></section>
      <section className="quiet-cta"><p>¿Quieres coordinar una visita?</p><Link href="/contacto">Ver ubicación, horarios y contacto <Arrow /></Link></section>
    </main>
  );
}
