export type Product = {
  id: string;
  name: string;
  priceEUR: number;
  priceUSD: number;
  priceXOF: number;
  image: string;
  hoverImage: string;
  badge?: string;
  category: "robes" | "ensembles" | "atelier" | "nouveautes";
  colors: { name: string; hex: string }[];
  sizes: string[];
};

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Robe Abaya Silk Dubaï",
    priceEUR: 320,
    priceUSD: 350,
    priceXOF: 210000,
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=900&q=85&auto=format&fit=crop",
    hoverImage:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900&q=85&auto=format&fit=crop",
    badge: "Bestseller Dubaï",
    category: "robes",
    colors: [
      { name: "Noir Obsidienne", hex: "#0B0B0B" },
      { name: "Beige Sable", hex: "#D9C5A8" },
      { name: "Or Champagne", hex: "#D4AF37" },
    ],
    sizes: ["S", "M", "L", "XL", "Sur-mesure"],
  },
  {
    id: "p2",
    name: "Ensemble Satin Rose",
    priceEUR: 260,
    priceUSD: 285,
    priceXOF: 170000,
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=900&q=85&auto=format&fit=crop",
    hoverImage:
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=900&q=85&auto=format&fit=crop",
    badge: "Édition Limitée",
    category: "ensembles",
    colors: [
      { name: "Rose Poudré", hex: "#E8C4C4" },
      { name: "Ivoire", hex: "#F5EFE6" },
      { name: "Noir", hex: "#0B0B0B" },
    ],
    sizes: ["S", "M", "L", "XL", "Sur-mesure"],
  },
  {
    id: "p3",
    name: "Robe de Soirée Perle du Golfe",
    priceEUR: 480,
    priceUSD: 520,
    priceXOF: 315000,
    image:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=900&q=85&auto=format&fit=crop",
    hoverImage:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=900&q=85&auto=format&fit=crop",
    badge: "Pièce Signature",
    category: "robes",
    colors: [
      { name: "Perle", hex: "#F1EAE0" },
      { name: "Champagne", hex: "#D4AF37" },
    ],
    sizes: ["S", "M", "L", "Sur-mesure"],
  },
  {
    id: "p4",
    name: "Tenue d'Atelier Lin Noble",
    priceEUR: 210,
    priceUSD: 230,
    priceXOF: 138000,
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=900&q=85&auto=format&fit=crop",
    hoverImage:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&q=85&auto=format&fit=crop",
    category: "atelier",
    colors: [
      { name: "Lin Naturel", hex: "#E6DBC7" },
      { name: "Terracotta", hex: "#B86B4B" },
    ],
    sizes: ["S", "M", "L", "XL", "Sur-mesure"],
  },
  {
    id: "p5",
    name: "Caftan Moderne Or Rose",
    priceEUR: 390,
    priceUSD: 420,
    priceXOF: 255000,
    image:
      "https://images.unsplash.com/photo-1583846717393-4c8a0b1e1b0b?w=900&q=85&auto=format&fit=crop",
    hoverImage:
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=900&q=85&auto=format&fit=crop",
    badge: "Nouveauté",
    category: "nouveautes",
    colors: [
      { name: "Or Rose", hex: "#E0A96D" },
      { name: "Noir", hex: "#0B0B0B" },
    ],
    sizes: ["S", "M", "L", "XL", "Sur-mesure"],
  },
  {
    id: "p6",
    name: "Robe Cocktail Velours Nuit",
    priceEUR: 295,
    priceUSD: 320,
    priceXOF: 192000,
    image:
      "https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?w=900&q=85&auto=format&fit=crop",
    hoverImage:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900&q=85&auto=format&fit=crop",
    category: "robes",
    colors: [
      { name: "Bleu Nuit", hex: "#1B1F3B" },
      { name: "Noir", hex: "#0B0B0B" },
      { name: "Bordeaux", hex: "#5B1A1A" },
    ],
    sizes: ["S", "M", "L", "XL"],
  },
];

export const CATEGORIES = [
  { id: "all", label: "Toutes les pièces" },
  { id: "robes", label: "Robes d'Exception" },
  { id: "ensembles", label: "Ensembles Chic" },
  { id: "atelier", label: "Tenues d'Atelier" },
  { id: "nouveautes", label: "Nouveautés" },
] as const;

export const WHATSAPP_NUMBER = "971500000000"; // Numéro Dubaï fictif — à remplacer