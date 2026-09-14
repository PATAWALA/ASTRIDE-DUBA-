"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, Trash2, MessageCircle, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { useStore } from "@/lib/store";
import { WHATSAPP_NUMBER } from "@/lib/products";

export default function CartDrawer() {
  const {
    items,
    isCartOpen,
    closeCart,
    removeItem,
    updateQty,
    subtotalEUR,
    subtotalUSD,
    subtotalXOF,
  } = useStore();

  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  const buildWhatsAppLink = () => {
    const lines = items.map(
      (i) =>
        `• ${i.name} — Taille : ${i.size} — Couleur : ${i.color} — Qté : ${i.qty}`
    );

    const msg = `Bonjour Astride ! Je souhaite commander :
${lines.join("\n")}

Sous-total : ${subtotalEUR()} € (${subtotalXOF().toLocaleString("fr-FR")} FCFA)
Nom : ${name || "[à préciser]"}
Ville / Pays : ${city || "[à préciser]"}`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  const handleCheckout = () => {
    if (items.length === 0) return;
    window.open(buildWhatsAppLink(), "_blank");
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeCart}
            className="fixed inset-0 bg-ink/40 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "tween",
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-sand z-50 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-ink/10">
              <div className="flex items-center gap-3">
                <ShoppingBag size={18} strokeWidth={1.5} />
                <h2 className="font-display text-xl">Mon Sac</h2>
                {items.length > 0 && (
                  <span className="text-[10px] uppercase tracking-widest text-ink/50">
                    {items.reduce((s, i) => s + i.qty, 0)} article
                    {items.reduce((s, i) => s + i.qty, 0) > 1 ? "s" : ""}
                  </span>
                )}
              </div>
              <button
                onClick={closeCart}
                className="p-2 hover:bg-ink/5 rounded-full transition"
                aria-label="Fermer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Contenu scrollable */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {items.length === 0 ? (
                <div className="text-center py-20">
                  <p className="font-display text-2xl text-ink/40">
                    Votre sac est vide
                  </p>
                  <p className="text-xs text-ink/40 mt-2 uppercase tracking-widest">
                    Découvrez la collection
                  </p>
                  <button
                    onClick={closeCart}
                    className="mt-8 inline-block border border-ink text-ink px-6 py-3 text-[10px] uppercase tracking-[0.25em] hover:bg-ink hover:text-sand transition-all"
                  >
                    Voir la Collection
                  </button>
                </div>
              ) : (
                items.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-24 object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between gap-2">
                        <h3 className="font-display text-base leading-tight">
                          {item.name}
                        </h3>
                        <button
                          onClick={() => removeItem(idx)}
                          className="text-ink/40 hover:text-ink transition shrink-0"
                          aria-label="Supprimer"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                      <p className="text-[11px] text-ink/50 mt-1 uppercase tracking-wider">
                        Taille : {item.size} · {item.color}
                      </p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-ink/15">
                          <button
                            onClick={() => updateQty(idx, item.qty - 1)}
                            className="w-7 h-7 text-sm hover:bg-ink/5 transition"
                            aria-label="Diminuer"
                          >
                            −
                          </button>
                          <span className="w-8 text-center text-xs">
                            {item.qty}
                          </span>
                          <button
                            onClick={() => updateQty(idx, item.qty + 1)}
                            className="w-7 h-7 text-sm hover:bg-ink/5 transition"
                            aria-label="Augmenter"
                          >
                            +
                          </button>
                        </div>
                        <p className="text-sm font-medium">
                          {item.priceEUR * item.qty} €
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}

              {/* Formulaire cliente */}
              {items.length > 0 && (
                <div className="pt-6 border-t border-ink/10 space-y-4">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-ink/50">
                    Informations de livraison
                  </p>
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-ink/60 block mb-2">
                      Nom de la cliente
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex : Aïcha Diallo"
                      className="w-full bg-transparent border border-ink/15 px-4 py-3 text-sm focus:outline-none focus:border-gold transition"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-ink/60 block mb-2">
                      Ville / Pays de livraison
                    </label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Ex : Abidjan, Côte d'Ivoire"
                      className="w-full bg-transparent border border-ink/15 px-4 py-3 text-sm focus:outline-none focus:border-gold transition"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Footer — Sous-total + CTA WhatsApp */}
            {items.length > 0 && (
              <div className="border-t border-ink/10 px-6 py-6 bg-sand/95 backdrop-blur space-y-5">
                <div className="space-y-1.5">
                  <div className="flex justify-between items-baseline">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-ink/50">
                      Sous-total
                    </span>
                    <span className="font-display text-2xl">
                      {subtotalEUR()} €
                    </span>
                  </div>
                  <div className="flex justify-between text-[11px] text-ink/50">
                    <span>{subtotalUSD()} USD</span>
                    <span>
                      {subtotalXOF().toLocaleString("fr-FR")} FCFA
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full bg-ink text-sand py-4 px-6 flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.25em] hover:bg-gold hover:text-ink transition-all duration-300 group"
                >
                  <MessageCircle
                    size={16}
                    className="group-hover:scale-110 transition-transform"
                  />
                  Envoyer ma commande sur WhatsApp
                </button>

                <p className="text-[10px] text-center text-ink/40 leading-relaxed">
                  ✈️ Expédition depuis Dubaï · Paiement sécurisé
                  <br />
                  Conseils personnalisés en direct avec Astride
                </p>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}