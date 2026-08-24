"use client";

import { useMemo, useState } from "react";
import type { CatalogProduct } from "@/lib/catalog";

type CartLine = CatalogProduct & { quantity: number };

const money = new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 });

export function OrderDemo({ products, connected }: { products: CatalogProduct[]; connected: boolean }) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{ orderNumber: string; message: string } | null>(null);
  const [error, setError] = useState("");
  const total = useMemo(() => cart.reduce((sum, item) => sum + item.priceClp * item.quantity, 0), [cart]);

  function addProduct(product: CatalogProduct) {
    setResult(null); setError("");
    setCart((current) => {
      const found = current.find((item) => item.id === product.id);
      return found ? current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item) : [...current, { ...product, quantity: 1 }];
    });
  }

  function updateQuantity(id: string, direction: number) {
    setCart((current) => current.flatMap((item) => item.id === id ? (item.quantity + direction < 1 ? [] : [{ ...item, quantity: item.quantity + direction }]) : [item]));
  }

  async function checkout() {
    if (!cart.length) return;
    setIsSubmitting(true); setError("");
    try {
      const response = await fetch("/api/demo-orders", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ items: cart.map(({ id, quantity }) => ({ productId: id, quantity })) }) });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error ?? "No pudimos crear el pedido demo.");
      setResult(payload); setCart([]);
    } catch (caught) { setError(caught instanceof Error ? caught.message : "No pudimos crear el pedido demo."); }
    finally { setIsSubmitting(false); }
  }

  return (
    <div className="order-demo">
      <div className="demo-banner"><span className="pulse"></span><p><b>Modo demostración</b> · {connected ? "Catálogo conectado a Neon" : "Catálogo local de respaldo"}</p><small>No hay pagos reales ni datos personales.</small></div>
      <div className="order-layout">
        <section className="order-catalog" aria-label="Platos disponibles para pedir">{products.map((product) => <article className="order-product" key={product.id}><p>{product.category} · {product.prepMinutes} min aprox.</p><h2>{product.name}</h2><span>{product.description}</span><div><strong>{money.format(product.priceClp)}</strong><button onClick={() => addProduct(product)} type="button">Agregar <span aria-hidden="true">+</span></button></div></article>)}</section>
        <aside className="cart-panel" aria-live="polite"><p className="eyebrow"><span></span> TU PEDIDO</p>{cart.length ? <><div className="cart-lines">{cart.map((item) => <div className="cart-line" key={item.id}><div><h3>{item.name}</h3><p>{money.format(item.priceClp)}</p></div><div className="quantity-control"><button aria-label={`Quitar una unidad de ${item.name}`} type="button" onClick={() => updateQuantity(item.id, -1)}>−</button><b>{item.quantity}</b><button aria-label={`Agregar una unidad de ${item.name}`} type="button" onClick={() => updateQuantity(item.id, 1)}>+</button></div></div>)}</div><div className="cart-total"><span>Total demo</span><strong>{money.format(total)}</strong></div><p className="cart-note">Retiro en local · pago de prueba · sin cobro.</p><button className="demo-checkout" type="button" onClick={checkout} disabled={isSubmitting}>{isSubmitting ? "Creando pedido…" : "Finalizar pedido demo ↗"}</button></> : <div className="empty-cart"><span aria-hidden="true">◎</span><p>Tu carrito está vacío. Agrega platos desde la carta para probar el flujo.</p></div>}{error && <p className="checkout-error">{error}</p>}{result && <div className="checkout-success"><b>Pedido {result.orderNumber}</b><p>{result.message}</p></div>}</aside>
      </div>
    </div>
  );
}
