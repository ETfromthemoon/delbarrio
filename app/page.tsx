const menuCategories = [
  ["01", "Entradas", "Para abrir el apetito"],
  ["02", "Fondos", "El plato se toma la mesa"],
  ["03", "Ensaladas", "Frescas, sin vuelta"],
  ["04", "Sandwichs", "Hechos para una buena conversa"],
  ["05", "Pizzas", "32 cm de barrio"],
  ["06", "Tablas", "Para compartir de verdad"],
  ["07", "Desayunos", "El día parte aquí"],
  ["08", "Cafetería", "Una pausa con oficio"],
  ["09", "Tragos", "La noche también se sirve"]
];

const dishes = [
  {
    name: "Ceviche Lucho Barrios",
    price: "$11.900",
    detail: "Pez blanco de nuestro litoral, aderezado a lo peruano.",
    image: "https://delbarriovalpo.cl/wp-content/uploads/2023/04/DSC_0809-scaled-e1681135997160.jpg",
    category: "Entrada · Mar"
  },
  {
    name: "Pastel de Choclo",
    price: "$11.900",
    detail: "Receta de casa, dorada por arriba y generosa por dentro.",
    image: "https://delbarriovalpo.cl/wp-content/uploads/2023/04/PASTEL-DE-CHOCLO.jpg",
    category: "Fondo · Tradición"
  },
  {
    name: "Pizza Del Barrio",
    price: "$15.900",
    detail: "Una de las trece pizzas de la casa, siempre de 32 cm.",
    image: "https://delbarriovalpo.cl/wp-content/uploads/2023/04/pizzadelbarrio.jpg",
    category: "Pizza · Para compartir"
  }
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Del Barrio, inicio">
          <span className="brand-mark">DB</span>
          <span>DEL BARRIO<small>VALPARAÍSO</small></span>
        </a>

        <nav className="desktop-nav" aria-label="Navegación principal">
          <a href="#carta">Carta</a>
          <a href="#esencia">La casa</a>
          <a href="#visitanos">Visítanos</a>
        </nav>

        <a className="header-call" href="tel:+563222213345">Llamar <span>+56 32 222 13345</span></a>

        <details className="mobile-menu">
          <summary aria-label="Abrir menú"><i></i><i></i></summary>
          <nav aria-label="Navegación móvil">
            <a href="#carta">Carta</a>
            <a href="#esencia">La casa</a>
            <a href="#visitanos">Visítanos</a>
            <a href="https://delbarriovalpo.cl/about/" target="_blank" rel="noreferrer">Reservar <Arrow /></a>
          </nav>
        </details>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><span></span> PEDRO MONTT 2302 · VALPARAÍSO</p>
          <h1>Comer rico.<br /><em>Sin caretas.</em></h1>
          <p className="hero-text">Cocina chilena, guiños peruanos y una mesa siempre dispuesta para la conversa.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="https://delbarriovalpo.cl/about/" target="_blank" rel="noreferrer">Reserva ahora <Arrow /></a>
            <a className="text-link" href="#carta">Mira la carta <span>↓</span></a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-frame">
            <video autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
              <source src="https://cdn.coverr.co/videos/coverr-onion-on-a-hamburger-5878/1080p.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="hero-stamp"><span>DESDE</span><strong>1997</strong><span>EN EL PLAN</span></div>
          <p className="photo-caption">Hamburguesa en preparación <span>01</span></p>
        </div>
        <aside className="hours-card" aria-label="Horarios">
          <span className="pulse"></span>
          <div><b>Hoy abrimos</b><br />10:00 — 23:59 hrs.</div>
          <a href="#visitanos" aria-label="Ver todos los horarios">+</a>
        </aside>
      </section>

      <section className="intro-strip" id="esencia">
        <p>De Valparaíso para la mesa.</p>
        <div className="intro-rule"></div>
        <p>Más de <strong>70 platos</strong> para caer con hambre y salir contento.</p>
      </section>

      <section className="menu-section" id="carta">
        <div className="section-heading">
          <p className="eyebrow"><span></span> NUESTRA CARTA</p>
          <h2>Elige tu<br /><em>propia esquina.</em></h2>
          <p>Recetas que hablan como hablamos acá: directo, con historia y sin dejar a nadie con hambre.</p>
        </div>
        <div className="menu-list">
          {menuCategories.map(([number, title, subtitle]) => (
            <a className="category-link" href="https://delbarriovalpo.cl/nuestracarta/" target="_blank" rel="noreferrer" key={number}>
              <span className="category-number">{number}</span>
              <span className="category-title">{title}<small>{subtitle}</small></span>
              <Arrow />
            </a>
          ))}
        </div>
        <a className="button button-outline" href="https://delbarriovalpo.cl/nuestracarta/" target="_blank" rel="noreferrer">Ver carta completa <Arrow /></a>
      </section>

      <section className="featured-section" aria-labelledby="favoritos-title">
        <div className="featured-topline">
          <p className="eyebrow"><span></span> LOS DE LA CASA</p>
          <p>Una vuelta corta por los favoritos.</p>
        </div>
        <h2 id="favoritos-title">Hay platos que<br /><em>ya son vecinos.</em></h2>
        <div className="dish-grid">
          {dishes.map((dish, index) => (
            <article className={`dish-card dish-${index + 1}`} key={dish.name}>
              <div className="dish-image"><img src={dish.image} alt={dish.name} /></div>
              <p className="dish-meta">{dish.category}</p>
              <div className="dish-title-row"><h3>{dish.name}</h3><strong>{dish.price}</strong></div>
              <p>{dish.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="reservation-section" id="visitanos">
        <div className="reservation-copy">
          <p className="eyebrow light"><span></span> EN EL CORAZÓN DEL PLAN</p>
          <h2>Una mesa, una<br /><em>buena historia.</em></h2>
          <p>Estamos en Pedro Montt 2302. A pasos de la vida porteña y con la cocina prendida todos los días.</p>
          <a className="button button-sand" href="https://delbarriovalpo.cl/about/" target="_blank" rel="noreferrer">Quiero reservar <Arrow /></a>
        </div>
        <div className="visit-card">
          <div className="visit-icon" aria-hidden="true">⌖</div>
          <p className="visit-label">DEL BARRIO · VALPARAÍSO</p>
          <h3>Pedro Montt<br />2302, Valparaíso</h3>
          <a className="visit-map" href="https://www.google.com/maps/place/DEL+BARRIO/@-33.0476865,-71.6125689" target="_blank" rel="noreferrer">Cómo llegar <Arrow /></a>
          <div className="visit-hours">
            <p><span>Lun — Jue</span> 10:00 — 23:59</p>
            <p><span>Vie — Sáb</span> 10:00 — 01:59</p>
            <p><span>Domingo</span> 10:00 — 23:59</p>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-brand">DEL<br /><em>BARRIO</em></div>
        <p>Comida honesta, mesa larga<br />y sabor del puerto.</p>
        <div className="footer-links">
          <a href="https://www.instagram.com/delbarriovalpo/" target="_blank" rel="noreferrer">Instagram <Arrow /></a>
          <a href="https://www.facebook.com/DelBarrioValpo" target="_blank" rel="noreferrer">Facebook <Arrow /></a>
          <a href="tel:+563222213345">+56 32 222 13345</a>
        </div>
        <small>© {new Date().getFullYear()} Del Barrio Valparaíso</small>
      </footer>

      <a className="mobile-reserve" href="https://delbarriovalpo.cl/about/" target="_blank" rel="noreferrer">Reserva ahora <Arrow /></a>
    </main>
  );
}
