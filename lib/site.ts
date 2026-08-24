export type MenuItem = {
  category: string;
  name: string;
  price: string;
  description?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  sections: Array<{ heading: string; paragraphs: string[] }>;
};

export const reservationUrl = "https://delbarriovalpo.cl/about/";
export const mapsUrl = "https://www.google.com/maps/place/DEL+BARRIO/@-33.0476865,-71.6125689";
export const phoneHref = "tel:+563222213345";
export const phoneDisplay = "+56 32 222 13345";

export const menuCategories = [
  "Entradas",
  "Fondos",
  "Ensaladas",
  "Sandwichs",
  "Pizzas",
  "Tablas",
  "Desayunos",
  "Cafetería",
  "Tragos"
];

export const menuItems: MenuItem[] = [
  { category: "Entradas", name: "Ceviche Lucho Barrios", price: "$11.900", description: "Pez blanco de nuestro litoral, aderezado a lo peruano." },
  { category: "Entradas", name: "Ceviche del Barrio", price: "$15.300" },
  { category: "Entradas", name: "Ostiones a la parmesana", price: "$15.900" },
  { category: "Entradas", name: "Machas a la parmesana", price: "$15.300" },
  { category: "Entradas", name: "Tártaro Ross", price: "$10.800" },
  { category: "Entradas", name: "Camarones Montt", price: "$10.800" },
  { category: "Entradas", name: "Camarones al ajillo", price: "$12.900" },
  { category: "Entradas", name: "Del Barrio Serrano", price: "$11.900" },
  { category: "Fondos", name: "Lomo Del Barrio", price: "$15.900" },
  { category: "Fondos", name: "Filete Alquinta", price: "$20.700" },
  { category: "Fondos", name: "Salmón Drake", price: "$15.300" },
  { category: "Fondos", name: "Atún Membrillo", price: "$15.900" },
  { category: "Fondos", name: "Risotto Quinta Costa", price: "$14.900" },
  { category: "Fondos", name: "Pastel de choclo", price: "$11.900", description: "Tradición chilena servida con orgullo porteño." },
  { category: "Fondos", name: "La Pompeya", price: "$11.900" },
  { category: "Fondos", name: "Costillar Echaurren", price: "$16.900" },
  { category: "Fondos", name: "La Joya Farías", price: "$15.300" },
  { category: "Fondos", name: "Asado El Poeta", price: "$16.900" },
  { category: "Ensaladas", name: "Ensalada César", price: "$9.800" },
  { category: "Ensaladas", name: "Ensalada César con salmón, camarón o roast beef", price: "$10.500" },
  { category: "Sandwichs", name: "Burger Del Barrio", price: "$10.900", description: "Una favorita de la casa, hecha para agarrar con las dos manos." },
  { category: "Pizzas", name: "Napolitana", price: "$15.900" },
  { category: "Pizzas", name: "Margarita", price: "$15.900", description: "32 cm para poner al centro de la mesa." },
  { category: "Pizzas", name: "Cuatro quesos", price: "$15.900" },
  { category: "Pizzas", name: "La Desmechada", price: "$15.900" },
  { category: "Pizzas", name: "Despechado", price: "$15.900" },
  { category: "Pizzas", name: "Membrillo", price: "$15.900" },
  { category: "Pizzas", name: "Veggie Concepción", price: "$15.900" },
  { category: "Tablas", name: "Bravas", price: "$10.500", description: "Para empezar a compartir." },
  { category: "Tablas", name: "La Matriz", price: "$35.500", description: "La tabla grande: para 2 a 6 personas." }
];

export const blogPosts: BlogPost[] = [
  {
    slug: "que-pedir-para-compartir-en-valparaiso",
    title: "Qué pedir para compartir en Valparaíso: una mesa en Del Barrio",
    description: "Ideas concretas de la carta de Del Barrio para armar una mesa compartida en Valparaíso.",
    excerpt: "Ceviches, pizzas y tablas: una manera simple de pedir cuando la mesa llega con ganas de probar más de una cosa.",
    category: "Carta",
    readTime: "4 min de lectura",
    date: "2026-08-23",
    sections: [
      {
        heading: "Partir por el centro de la mesa",
        paragraphs: [
          "Cuando la conversa es larga, una mesa compartida ayuda a que todos encuentren su plato. En Del Barrio, las entradas abren el camino con opciones como el Ceviche Lucho Barrios, el Ceviche del Barrio, ostiones a la parmesana y machas a la parmesana.",
          "La idea no es seguir una fórmula rígida: es elegir una o dos preparaciones para empezar y dejar espacio para que después aparezcan los fondos, sandwiches o pizzas."
        ]
      },
      {
        heading: "Pizzas y tablas para bajar el ritmo",
        paragraphs: [
          "Las pizzas de 32 cm están hechas para poner al medio. Margarita, Napolitana, Cuatro quesos, La Desmechada, Despechado, Membrillo y Veggie Concepción comparten el mismo formato para que la decisión sea más fácil.",
          "Si la mesa es más grande, La Matriz está pensada para 2 a 6 personas. Para una partida más acotada, Bravas es otra alternativa de la sección de tablas."
        ]
      },
      {
        heading: "Una carta que deja espacio a cada gusto",
        paragraphs: [
          "Entre mar, carne, ensaladas y opciones para compartir, la carta permite que la mesa no tenga que ponerse de acuerdo en una sola cosa. Ese es el punto: pedir con calma, probar y seguir la conversa.",
          "Revisa la carta antes de venir y, si quieres asegurar tu mesa, usa el canal de reservas directo del restaurante."
        ]
      }
    ]
  },
  {
    slug: "donde-comer-en-el-plan-de-valparaiso",
    title: "Una mesa en el Plan de Valparaíso: cómo llegar a Del Barrio",
    description: "Ubicación, horarios y formas de coordinar una visita a Del Barrio, en Pedro Montt 2302, Valparaíso.",
    excerpt: "Una guía breve para ubicar Del Barrio, revisar sus horarios y llegar con la mesa resuelta.",
    category: "Visita",
    readTime: "3 min de lectura",
    date: "2026-08-23",
    sections: [
      {
        heading: "La dirección para guardar",
        paragraphs: [
          "Del Barrio está en Pedro Montt 2302, Valparaíso. La ubicación está en pleno Plan y se puede abrir directamente en Google Maps desde el sitio para resolver el trayecto antes de salir.",
          "Guardar la dirección y abrir el mapa desde el teléfono es una forma simple de llegar sin depender de una búsqueda de último minuto."
        ]
      },
      {
        heading: "Horarios para organizar la salida",
        paragraphs: [
          "De lunes a jueves y los domingos, Del Barrio abre de 10:00 a 23:59. Los viernes y sábados, abre de 10:00 a 01:59.",
          "Si vienes en grupo o tienes una hora específica en mente, vale la pena coordinar la mesa directamente antes de salir."
        ]
      },
      {
        heading: "Reserva o llama directo",
        paragraphs: [
          "El sitio conecta con el canal de reservas de Del Barrio y también ofrece llamada directa al +56 32 222 13345. Ambas opciones están disponibles desde la navegación y la página de contacto.",
          "Con la dirección, los horarios y la carta a mano, sólo queda decidir con quién compartir la mesa."
        ]
      }
    ]
  },
  {
    slug: "del-ceviche-a-la-pizza-carta-para-grupos",
    title: "Del ceviche a la pizza: una carta para decidir en grupo",
    description: "Cómo recorrer las categorías de la carta de Del Barrio cuando cada persona llega con un antojo distinto.",
    excerpt: "Entradas, fondos, ensaladas, sandwiches, pizzas y tablas: una ruta corta para mirar la carta en grupo.",
    category: "Sabores",
    readTime: "5 min de lectura",
    date: "2026-08-23",
    sections: [
      {
        heading: "Empezar por lo que une a la mesa",
        paragraphs: [
          "La carta de Del Barrio reúne entradas, fondos, ensaladas, sandwiches, pizzas, tablas, desayunos, cafetería y tragos. Esa variedad permite que una salida no dependa de una sola elección.",
          "Para partir, los ceviches, los ostiones a la parmesana, las machas a la parmesana y los camarones ofrecen varias rutas dentro de las entradas."
        ]
      },
      {
        heading: "Cuando cada persona quiere algo distinto",
        paragraphs: [
          "En fondos aparecen preparaciones como Lomo Del Barrio, Filete Alquinta, Salmón Drake, Atún Membrillo, Risotto Quinta Costa y Pastel de choclo. También hay ensalada César y una versión con salmón, camarón o roast beef.",
          "La Burger Del Barrio suma una opción de sandwiches, mientras las pizzas ofrecen un formato que naturalmente se mueve hacia el centro de la mesa."
        ]
      },
      {
        heading: "Mirar la carta antes de llegar",
        paragraphs: [
          "La página de carta del sitio permite filtrar la selección disponible por categoría. Es una forma práctica de llegar con una primera idea y dejar que el resto de la decisión ocurra frente a la mesa.",
          "Para desayunos, cafetería y tragos, consulta las opciones disponibles directamente con el equipo al momento de tu visita."
        ]
      }
    ]
  }
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
