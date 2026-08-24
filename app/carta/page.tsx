import type { Metadata } from "next";
import Link from "next/link";
import { MenuExplorer } from "@/components/MenuExplorer";
import { menuCategories, menuItems, reservationUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Carta",
  description: "Explora la carta de Del Barrio en Valparaíso: entradas, fondos, ensaladas, pizzas, tablas y más.",
  alternates: { canonical: "/carta" },
  openGraph: { title: "Carta de Del Barrio", description: "Sabores para compartir en Valparaíso.", url: "/carta" }
};

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function CartaPage() {
  return (
    <main>
      <section className="page-hero page-hero-carta">
        <p className="eyebrow"><span></span> CARTA DEL BARRIO</p>
        <h1>Una carta para<br /><em>mirarla sin apuro.</em></h1>
        <p>Entradas, fondos, ensaladas, sandwiches, pizzas y tablas para encontrar una mesa a tu manera.</p>
      </section>
      <section className="content-section carta-content">
        <div className="content-intro"><p className="eyebrow"><span></span> SELECCIÓN DISPONIBLE</p><p>Filtra por categoría y arma tu primera idea antes de venir. Los valores están expresados en pesos chilenos.</p></div>
        <MenuExplorer categories={menuCategories.slice(0, 6)} items={menuItems} />
        <aside className="menu-disclaimer"><strong>Desayunos, cafetería y tragos</strong><p>Estas categorías también son parte de la casa. Consulta al equipo por las alternativas disponibles el día de tu visita.</p></aside>
      </section>
      <section className="inline-cta"><div><p className="eyebrow light"><span></span> LA MESA TE ESPERA</p><h2>¿Ya sabes qué<br /><em>quieres probar?</em></h2></div><div><a className="button button-sand" href={reservationUrl} target="_blank" rel="noreferrer">Reservar mesa <Arrow /></a><Link className="text-link text-link-dark" href="/experiencias">Ven con tu grupo <Arrow /></Link></div></section>
    </main>
  );
}
