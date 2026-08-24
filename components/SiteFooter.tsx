import Link from "next/link";
import { phoneDisplay, phoneHref } from "@/lib/site";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export function SiteFooter() {
  return (
    <footer>
      <div className="footer-brand">DEL<br /><em>BARRIO</em></div>
      <p>Comida honesta, mesa larga<br />y sabor del puerto.</p>
      <div className="footer-links">
        <Link href="/contacto">Pedro Montt 2302, Valparaíso <Arrow /></Link>
        <a href="https://www.instagram.com/delbarriovalpo/" target="_blank" rel="noreferrer">Instagram <Arrow /></a>
        <a href="https://www.facebook.com/DelBarrioValpo" target="_blank" rel="noreferrer">Facebook <Arrow /></a>
        <a href={phoneHref}>{phoneDisplay}</a>
      </div>
      <small>© {new Date().getFullYear()} Del Barrio Valparaíso</small>
    </footer>
  );
}
