import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ASTRIDE DUBAÏ — Atelier & Créations de Luxe",
  description:
    "L'élégance de Dubaï livrée chez vous. Robes, ensembles et créations sur-mesure confectionnés dans nos ateliers.",
  openGraph: {
    title: "ASTRIDE DUBAÏ — Atelier & Créations",
    description: "Créations & Vêtements de Luxe depuis Dubaï.",
    url: "https://patawala.com",
    siteName: "ASTRIDE DUBAÏ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans bg-sand text-ink">{children}</body>
    </html>
  );
}