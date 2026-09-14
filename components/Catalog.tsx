"use client";

import { useState } from "react";
import { PRODUCTS, CATEGORIES } from "@/lib/products";
import ProductCard from "./ProductCard";

export default function Catalog() {
  const [active, setActive] = useState<string>("all");

  const filtered =
    active === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === active);

  return (
    <section id="collection" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold">
            La Collection
          </span>
          <h2 className="font-display text-4xl sm:text-5xl mt-4">
            Pièces d'Exception
          </h2>
          <p className="mt-4 text-ink/60 max-w-xl mx-auto font-light">
            Chaque création est confectionnée à la main dans notre atelier de
            Dubaï. Choisissez votre taille et votre couleur — nous nous occupons
            du reste.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`text-[10px] uppercase tracking-[0.2em] px-5 py-2.5 border transition-all ${
                active === c.id
                  ? "border-ink bg-ink text-sand"
                  : "border-ink/15 text-ink/70 hover:border-ink/50"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}