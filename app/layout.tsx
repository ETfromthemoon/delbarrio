import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: {
    default: "Del Barrio — Valparaíso",
    template: "%s | Del Barrio Valparaíso"
  },
  description:
    "Gastronomía auténtica, sabores para compartir y precios reales en el corazón de Valparaíso.",
  metadataBase: new URL("https://delbarrio.vercel.app"),
  openGraph: {
    title: "Del Barrio — Valparaíso",
    description: "Donde la gastronomía es auténtica y los precios son reales.",
    locale: "es_CL",
    type: "website",
    url: "/"
  },
  alternates: { canonical: "/" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-CL">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <a className="mobile-reserve" href="https://delbarriovalpo.cl/about/" target="_blank" rel="noreferrer">Reserva ahora <span aria-hidden="true">↗</span></a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Del Barrio Valparaíso",
              url: "https://delbarrio.vercel.app",
              telephone: "+56 32 222 13345",
              priceRange: "$4.900–$35.500",
              servesCuisine: ["Chilena", "Peruana", "Contemporánea"],
              address: { "@type": "PostalAddress", streetAddress: "Pedro Montt 2302", addressLocality: "Valparaíso", addressCountry: "CL" },
              openingHoursSpecification: [
                { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"], opens: "10:00", closes: "23:59" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday", "Saturday"], opens: "10:00", closes: "01:59" }
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
