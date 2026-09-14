"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/products";

export default function Hero() {
  const handleSurMesure = () => {
    const msg = encodeURIComponent(
      "Bonjour Astride ! Je souhaite commander un modèle sur-mesure. Pouvez-vous me conseiller ?"
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <section className="relative overflow-hidden bg-sand">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 lg:order-1"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6 block">
            Maison de Couture — Dubaï
          </span>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
            L'Élégance de Dubaï,
            <br />
            <em className="font-light italic">Livrée Directement</em>
            <br />
            Chez Vous.
          </h1>
          <p className="mt-8 text-base lg:text-lg text-ink/70 leading-relaxed max-w-lg font-light">
            Découvrez nos collections exclusives de robes, ensembles et créations
            sur-mesure confectionnées dans nos ateliers.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#collection"
              className="group inline-flex items-center justify-center gap-2 bg-ink text-sand px-8 py-4 text-xs uppercase tracking-[0.25em] hover:bg-ink/90 transition-all"
            >
              Explorer la Collection
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <button
              onClick={handleSurMesure}
              className="inline-flex items-center justify-center gap-2 border border-gold text-gold px-8 py-4 text-xs uppercase tracking-[0.25em] hover:bg-gold hover:text-ink transition-all"
            >
              Commander un Modèle Sur-Mesure
            </button>
          </div>

          <div className="mt-14 flex items-center gap-8 text-[10px] uppercase tracking-[0.25em] text-ink/50">
            <span>✦ 33K sur TikTok</span>
            <span className="w-px h-3 bg-ink/20" />
            <span>✦ Expédition Mondiale</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 lg:order-2 relative"
        >
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1200&q=90&auto=format&fit=crop"
              alt="Création Astride Dubaï"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-sand border border-gold/30 px-6 py-4 hidden sm:block">
            <p className="font-display text-2xl">Collection 2025</p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-ink/50 mt-1">
              Atelier Dubaï
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}