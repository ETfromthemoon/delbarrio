import type { Metadata } from "next";
import { OrderDemo } from "@/components/OrderDemo";
import { getCatalog } from "@/lib/catalog";

export const metadata: Metadata = { title: "Pedir online", description: "Prueba el flujo de pedido online de Del Barrio con un checkout de demostración.", alternates: { canonical: "/pedir" } };

export default async function PedirPage() {
  const products = await getCatalog();
  return <main><section className="page-hero page-hero-pedir"><p className="eyebrow"><span></span> PEDIDO ONLINE</p><h1>La carta llega<br /><em>al carrito.</em></h1><p>Este es un checkout de demostración: puedes agregar platos y crear pedidos de prueba que se registran en la base de datos.</p></section><section className="order-section"><OrderDemo products={products} connected={Boolean(process.env.DATABASE_URL)} /></section></main>;
}
