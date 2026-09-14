"use client";

import { ShoppingBag, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useStore } from "@/lib/store";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { items, openCart } = useStore();
  const totalQty = items.reduce((s, i) => s + i.qty, 0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#collection", label: "Collection" },
    { href: "#commander", label: "Comment Commander" },
    { href: "#faq", label: "F.A.Q" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-sand/90 backdrop-blur-md border-b border-ink/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        <a href="#" className="flex flex-col leading-none">
          <span className="font-display text-xl sm:text-2xl tracking-[0.2em]">
            ASTRIDE
          </span>
          <span className="text-[9px] tracking-[0.4em] text-ink/60 mt-0.5">
            DUBAÏ — ATELIER & CRÉATIONS
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs uppercase tracking-[0.2em] text-ink/70 hover:text-ink transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={openCart}
            className="relative p-2 hover:bg-ink/5 rounded-full transition-colors"
            aria-label="Ouvrir le sac"
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            {totalQty > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full bg-gold text-ink text-[10px] font-medium flex items-center justify-center">
                {totalQty}
              </span>
            )}
          </button>
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-sand border-t border-ink/5 px-6 py-6 space-y-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm uppercase tracking-[0.2em] text-ink/80"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}