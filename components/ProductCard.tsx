"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Product } from "@/lib/products";
import { useStore } from "@/lib/store";

export default function ProductCard({ product }: { product: Product }) {
  const [size, setSize] = useState(product.sizes[0]);
  const [color, setColor] = useState(product.colors[0].name);
  const [hovered, setHovered] = useState(false);
  const addItem = useStore((s) => s.addItem);

  const handleAdd = () => {
    addItem({ product, size, color });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-sand">
        <img
          src={hovered ? product.hoverImage : product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-4 left-4 bg-sand/95 backdrop-blur text-ink text-[9px] uppercase tracking-[0.25em] px-3 py-1.5">
            {product.badge}
          </span>
        )}
      </div>

      <div className="pt-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg leading-snug">{product.name}</h3>
          <div className="text-right shrink-0">
            <p className="text-sm font-medium">{product.priceEUR} €</p>
            <p className="text-[10px] text-ink/40 mt-0.5">
              {product.priceXOF.toLocaleString("fr-FR")} FCFA
            </p>
          </div>
        </div>

        {/* Tailles */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {product.sizes.map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className={`text-[10px] uppercase tracking-wider px-2.5 py-1 border transition-all ${
                size === s
                  ? "border-ink bg-ink text-sand"
                  : "border-ink/15 text-ink/70 hover:border-ink/40"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Couleurs */}
        <div className="mt-3 flex items-center gap-2">
          {product.colors.map((c) => (
            <button
              key={c.name}
              onClick={() => setColor(c.name)}
              title={c.name}
              className={`w-5 h-5 rounded-full border transition-all ${
                color === c.name
                  ? "ring-2 ring-offset-2 ring-ink"
                  : "ring-0 hover:scale-110"
              }`}
              style={{
                backgroundColor: c.hex,
                borderColor: "rgba(0,0,0,0.1)",
              }}
            />
          ))}
          <span className="text-[10px] text-ink/50 ml-1 uppercase tracking-wider">
            {color}
          </span>
        </div>

        <button
          onClick={handleAdd}
          className="mt-5 w-full bg-ink text-sand text-[11px] uppercase tracking-[0.25em] py-3.5 hover:bg-gold hover:text-ink transition-all duration-300"
        >
          Ajouter à mon Sac
        </button>
      </div>
    </motion.article>
  );
}