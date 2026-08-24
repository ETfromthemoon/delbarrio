import Link from "next/link";
import { phoneDisplay, phoneHref, reservationUrl } from "@/lib/site";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/pedir", label: "Pedir" },
  { href: "/carta", label: "Carta" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/experiencias", label: "Experiencias" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" }
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Del Barrio, inicio">
        <span className="brand-mark">DB</span>
        <span>DEL BARRIO<small>VALPARAÍSO</small></span>
      </Link>

      <nav className="desktop-nav" aria-label="Navegación principal">
        {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
      </nav>

      <a className="header-call" href={phoneHref}>Llamar <span>{phoneDisplay}</span></a>

      <details className="mobile-menu">
        <summary aria-label="Abrir menú"><i></i><i></i></summary>
        <nav aria-label="Navegación móvil">
          {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          <a href={reservationUrl} target="_blank" rel="noreferrer">Reservar <Arrow /></a>
        </nav>
      </details>
    </header>
  );
}
