import type { Metadata } from "next";
import Link from "next/link";
import { phoneDisplay, phoneHref, reservationUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Experiencias y grupos",
  description: "Organiza una mesa para familia, amistades o equipo en Del Barrio, Valparaíso.",
  alternates: { canonical: "/experiencias" },
  openGraph: { title: "Experiencias y grupos | Del Barrio", description: "Mesas para compartir en Valparaíso.", url: "/experiencias" }
};

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function ExperienciasPage() {
  return (
    <main>
      <section className="page-hero page-hero-experiencias"><p className="eyebrow"><span></span> VENIR ES COMPARTIR</p><h1>La mesa cambia<br /><em>cuando llega tu gente.</em></h1><p>Una salida familiar, una conversa con amistades o una juntada de equipo: la carta deja espacio para que cada persona elija.</p></section>
      <section className="experience-grid">
        <article><span>01</span><h2>Familia y amistades</h2><p>Entradas, pizzas de 32 cm y tablas ayudan a que la mesa parta por el centro y siga a su propio ritmo.</p><Link href="/carta">Mirar la carta <Arrow /></Link></article>
        <article><span>02</span><h2>Grupos de trabajo</h2><p>Si quieren reunirse fuera de la oficina, coordinen su visita con tiempo para llegar con la mesa resuelta.</p><a href={phoneHref}>Llamar al {phoneDisplay} <Arrow /></a></article>
        <article><span>03</span><h2>Una fecha para celebrar</h2><p>Cuéntanos la hora y el tamaño aproximado del grupo por el canal de reserva directa. El equipo puede orientarte antes de venir.</p><a href={reservationUrl} target="_blank" rel="noreferrer">Coordinar reserva <Arrow /></a></article>
      </section>
      <section className="split-section split-section-wine"><div><p className="eyebrow light"><span></span> UNA RUTA SIMPLE</p><h2>Llega con el<br /><em>plan hecho.</em></h2></div><ol className="visit-steps"><li><b>01</b><span>Revisa la carta y comparte opciones con tu grupo.</span></li><li><b>02</b><span>Coordina por reserva directa o llama al restaurante.</span></li><li><b>03</b><span>Abre el mapa, llega a Pedro Montt 2302 y ocupa la mesa.</span></li></ol></section>
      <section className="quiet-cta"><p>La dirección y los horarios están listos antes de salir.</p><Link href="/contacto">Ver cómo llegar <Arrow /></Link></section>
    </main>
  );
}
