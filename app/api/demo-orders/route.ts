import { NextResponse } from "next/server";
import { getDatabase } from "@/lib/database";

type IncomingItem = { productId?: unknown; quantity?: unknown };

export const runtime = "nodejs";

export async function POST(request: Request) {
  const sql = getDatabase();
  if (!sql) return NextResponse.json({ error: "La base de demostración no está configurada." }, { status: 503 });

  let body: { items?: IncomingItem[] };
  try { body = await request.json(); } catch { return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 }); }

  const requestedItems = (body.items ?? []).map((item) => ({
    productId: typeof item.productId === "string" ? item.productId : "",
    quantity: typeof item.quantity === "number" ? Math.floor(item.quantity) : 0
  })).filter((item) => item.productId && item.quantity > 0 && item.quantity <= 10);

  if (!requestedItems.length || requestedItems.length > 12) return NextResponse.json({ error: "Agrega al menos un plato válido al pedido." }, { status: 400 });

  const quantities = new Map<string, number>();
  requestedItems.forEach((item) => quantities.set(item.productId, (quantities.get(item.productId) ?? 0) + item.quantity));
  const productIds = Array.from(quantities.keys());
  const products = await sql`SELECT id, name, price_clp FROM products WHERE id = ANY(${productIds}::uuid[]) AND is_available = true`;

  if (products.length !== productIds.length) return NextResponse.json({ error: "Uno de los platos ya no está disponible." }, { status: 409 });

  const subtotal = products.reduce((total, product) => total + Number(product.price_clp) * (quantities.get(String(product.id)) ?? 0), 0);
  const orderNumber = `DB-DEMO-${Date.now().toString().slice(-8)}`;
  const [customer] = await sql`INSERT INTO customers (full_name, email) VALUES ('Cliente demo web', ${`checkout-${orderNumber.toLowerCase()}@example.com`}) RETURNING id`;
  const [order] = await sql`
    INSERT INTO orders (order_number, customer_id, fulfillment, status, payment_status, customer_note, subtotal_clp, delivery_fee_clp, total_clp, placed_at)
    VALUES (${orderNumber}, ${customer.id}, 'pickup', 'paid', 'paid', 'Compra generada en el demo; no hubo cobro real.', ${subtotal}, 0, ${subtotal}, now())
    RETURNING id
  `;

  for (const product of products) {
    const quantity = quantities.get(String(product.id)) ?? 0;
    await sql`
      INSERT INTO order_items (order_id, product_id, product_name_snapshot, unit_price_clp, quantity, line_total_clp)
      VALUES (${order.id}, ${product.id}, ${product.name}, ${product.price_clp}, ${quantity}, ${Number(product.price_clp) * quantity})
    `;
  }

  await sql`INSERT INTO payments (order_id, provider, provider_reference, amount_clp, status, is_test) VALUES (${order.id}, 'demo_checkout', ${`payment_${orderNumber.toLowerCase()}`}, ${subtotal}, 'paid', true)`;
  await sql`INSERT INTO order_events (order_id, status, note) VALUES (${order.id}, 'paid', 'Pedido creado desde el checkout de demostración.')`;

  return NextResponse.json({ orderNumber, totalClp: subtotal, message: "Pedido de prueba creado. No se realizó ningún cobro." }, { status: 201 });
}
