import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BlogOS — Construye un blog que genera ingresos",
  description: "El agente de IA que convierte tu conocimiento en un negocio digital. Ideas, artículos SEO, calendario editorial y monetización — todo en español.",
  openGraph: {
    title: "BlogOS — Construye un blog que genera ingresos",
    description: "El agente de IA que convierte tu conocimiento en un negocio digital.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
