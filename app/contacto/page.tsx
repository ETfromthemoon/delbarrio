import type { Metadata } from "next";
import { mapsUrl, phoneDisplay, phoneHref, reservationUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto y ubicación",
  description: "Ubicación, horarios, teléfono, reservas y mapa de Del Barrio en Pedro Montt 2302, Valparaíso.",
  alternates: { canonical: "/contacto" },
  openGraph: { title: "Contacto y ubicación | Del Barrio", description: "Pedro Montt 2302, Valparaíso.", url: "/contacto" }
};

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function ContactoPage() {
  return (
    <main>
      <section className="page-hero page-hero-contacto"><p className="eyebrow"><span></span> CONTACTO</p><h1>Una dirección.<br /><em>Varias formas de llegar.</em></h1><p>Guarda la dirección, abre el mapa o coordina tu mesa. Todo lo necesario para venir está aquí.</p></section>
      <section className="contact-grid">
        <div className="contact-details"><p className="eyebrow"><span></span> DEL BARRIO VALPARAÍSO</p><h2>Pedro Montt<br /><em>2302.</em></h2><p>Valparaíso, Chile</p><div className="contact-actions"><a className="button button-primary" href={mapsUrl} target="_blank" rel="noreferrer">Abrir Google Maps <Arrow /></a><a className="button button-outline" href={phoneHref}>Llamar <Arrow /></a></div><dl><div><dt>Teléfono</dt><dd><a href={phoneHref}>{phoneDisplay}</a></dd></div><div><dt>Reservas</dt><dd><a href={reservationUrl} target="_blank" rel="noreferrer">Canal de reserva directa <Arrow /></a></dd></div><div><dt>Instagram</dt><dd><a href="https://www.instagram.com/delbarriovalpo/" target="_blank" rel="noreferrer">@delbarriovalpo <Arrow /></a></dd></div></dl></div>
        <div className="contact-map"><iframe title="Mapa para llegar a Del Barrio en Valparaíso" src="https://www.google.com/maps?q=Del%20Barrio%2C%20Pedro%20Montt%202302%2C%20Valpara%C3%ADso&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><div className="contact-map-caption"><span>COORDENADAS</span><b>33°02&apos;51&quot;S<br />71°36&apos;45&quot;O</b></div></div>
      </section>
      <section className="hours-section"><div><p className="eyebrow"><span></span> HORARIOS</p><h2>La cocina<br /><em>está encendida.</em></h2></div><div className="hours-list"><p><span>Lunes — Jueves</span><b>10:00 — 23:59</b></p><p><span>Viernes — Sábado</span><b>10:00 — 01:59</b></p><p><span>Domingo</span><b>10:00 — 23:59</b></p></div></section>
    </main>
  );
}
