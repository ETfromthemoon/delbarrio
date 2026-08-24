const menuHighlights = [
  ["Entradas", "Ceviche Lucho Barrios", "Pez blanco de nuestro litoral, aderezado a lo peruano.", "$11.900"],
  ["Entradas", "Ostiones a la parmesana", "El clásico gratinado que abre cualquier conversa.", "$15.900"],
  ["Fondos", "Filete Alquinta", "Un fondo de la casa para venir con hambre.", "$20.700"],
  ["Fondos", "Pastel de choclo", "Tradición chilena servida con orgullo porteño.", "$11.900"],
  ["Ensaladas", "Ensalada César", "Fresca, contundente y sin vueltas.", "$9.800"],
  ["Sandwichs", "Burger Del Barrio", "Una favorita de la casa, hecha para agarrar con las dos manos.", "$10.900"],
  ["Pizzas", "Margarita", "32 cm para poner al centro de la mesa.", "$15.900"],
  ["Pizzas", "Del Barrio", "Sabor de la casa, directo al horno.", "$15.900"],
  ["Tablas", "Bravas", "Para empezar a compartir.", "$10.500"],
  ["Tablas", "La Matriz", "La tabla grande: para 2 a 6 personas.", "$35.500"]
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
        <div className="menu-content">
          <div className="menu-category-rail" aria-label="Categorías de la carta">
            {['Entradas', 'Fondos', 'Ensaladas', 'Sandwichs', 'Pizzas', 'Tablas', 'Desayunos', 'Cafetería', 'Tragos'].map((category, index) => (
              <span key={category}><b>{String(index + 1).padStart(2, '0')}</b>{category}</span>
            ))}
          </div>
          <div className="menu-preview-grid">
            {menuHighlights.map(([category, name, description, price]) => (
              <article className="menu-preview-card" key={name}>
                <p>{category}</p>
                <div><h3>{name}</h3><strong>{price}</strong></div>
                <span>{description}</span>
              </article>
            ))}
          </div>
          <p className="menu-note">También hay desayunos, cafetería y tragos. Pregunta por las opciones del día cuando llegues.</p>
        </div>
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

      <section className="map-section" id="visitanos" aria-labelledby="mapa-title">
        <div className="map-copy">
          <p className="eyebrow"><span></span> COORDENADAS DEL BARRIO</p>
          <p className="coordinates">33°02'51&quot;S<br />71°36'45&quot;O</p>
          <h2 id="mapa-title">El punto de<br /><em>encuentro.</em></h2>
          <p>Pedro Montt 2302, Valparaíso. En pleno Plan, donde se cruza la ciudad, el hambre y la conversa.</p>
          <a className="button button-outline" href="https://www.google.com/maps/place/DEL+BARRIO/@-33.0476865,-71.6125689" target="_blank" rel="noreferrer">Abrir en Maps <Arrow /></a>
        </div>
        <div className="map-stage">
          <div className="map-label"><span>ESTÁS AQUÍ</span><b>DEL<br />BARRIO</b></div>
          <iframe
            title="Ubicación de Del Barrio Valparaíso en Google Maps"
            src="https://www.google.com/maps?q=Del%20Barrio%2C%20Pedro%20Montt%202302%2C%20Valpara%C3%ADso&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="map-pin" aria-hidden="true">⌖</div>
        </div>
      </section>

      <section className="reservation-section">
        <div className="reservation-copy">
          <p className="eyebrow light"><span></span> RESERVAS DIRECTAS</p>
          <h2>Una mesa, una<br /><em>buena historia.</em></h2>
          <p>Una llamada, una reserva y la mesa queda lista. Ven con amigos, familia o el equipo completo.</p>
          <a className="button button-sand" href="https://delbarriovalpo.cl/about/" target="_blank" rel="noreferrer">Quiero reservar <Arrow /></a>
        </div>
        <div className="visit-card">
          <div className="visit-icon" aria-hidden="true">☎</div>
          <p className="visit-label">MESA DIRECTA</p>
          <h3>+56 32<br />222 13345</h3>
          <a className="visit-map" href="tel:+563222213345">Llamar ahora <Arrow /></a>
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
