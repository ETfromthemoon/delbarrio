import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Del Barrio — Valparaíso",
  description:
    "Gastronomía auténtica, sabores para compartir y precios reales en el corazón de Valparaíso.",
  metadataBase: new URL("https://delbarrio-valpo.vercel.app"),
  openGraph: {
    title: "Del Barrio — Valparaíso",
    description: "Donde la gastronomía es auténtica y los precios son reales.",
    locale: "es_CL",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-CL">
      <body>{children}</body>
    </html>
  );
}
