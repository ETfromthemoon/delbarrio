import { getDatabase } from "@/lib/database";

export type CatalogProduct = {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  priceClp: number;
  imageUrl: string | null;
  category: string;
  prepMinutes: number;
};

const fallbackCatalog: CatalogProduct[] = [
  { id: "demo-ceviche", slug: "ceviche-lucho-barrios", name: "Ceviche Lucho Barrios", description: "Pez blanco de nuestro litoral, aderezado a lo peruano.", priceClp: 11900, imageUrl: null, category: "Entradas", prepMinutes: 15 },
  { id: "demo-pastel", slug: "pastel-de-choclo", name: "Pastel de Choclo", description: "Tradición chilena servida con orgullo porteño.", priceClp: 11900, imageUrl: null, category: "Fondos", prepMinutes: 20 },
  { id: "demo-burger", slug: "burger-del-barrio", name: "Burger Del Barrio", description: "Una favorita de la casa, hecha para agarrar con las dos manos.", priceClp: 10900, imageUrl: null, category: "Sandwichs", prepMinutes: 15 },
  { id: "demo-margarita", slug: "margarita", name: "Margarita", description: "Pizza de 32 cm para poner al centro de la mesa.", priceClp: 15900, imageUrl: null, category: "Pizzas", prepMinutes: 18 },
  { id: "demo-matriz", slug: "la-matriz", name: "La Matriz", description: "La tabla grande: para 2 a 6 personas.", priceClp: 35500, imageUrl: null, category: "Tablas", prepMinutes: 22 },
  { id: "demo-cesar", slug: "ensalada-cesar", name: "Ensalada César", description: "Fresca y contundente.", priceClp: 9800, imageUrl: null, category: "Ensaladas", prepMinutes: 10 }
];

export async function getCatalog(): Promise<CatalogProduct[]> {
  const sql = getDatabase();
  if (!sql) return fallbackCatalog;

  try {
    const rows = await sql`
      SELECT p.id, p.slug, p.name, p.description, p.price_clp,
             p.image_url, c.name AS category, p.prep_minutes
      FROM products p
      JOIN categories c ON c.id = p.category_id
      WHERE p.is_available = true AND c.is_active = true
      ORDER BY c.sort_order, p.featured DESC, p.name
    `;

    return rows.map((row) => ({
      id: String(row.id),
      slug: String(row.slug),
      name: String(row.name),
      description: row.description ? String(row.description) : null,
      priceClp: Number(row.price_clp),
      imageUrl: row.image_url ? String(row.image_url) : null,
      category: String(row.category),
      prepMinutes: Number(row.prep_minutes)
    }));
  } catch {
    return fallbackCatalog;
  }
}
