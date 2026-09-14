"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles, Check } from "lucide-react";
import { useState } from "react";
import { WHATSAPP_NUMBER } from "@/lib/products";

const DEMANDS = [
  "Robe de mariée / Cérémonie",
  "Création sur-mesure",
  "Pièce de la Collection",
  "Autre demande",
];

export default function Hero() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [demand, setDemand] = useState(DEMANDS[2]);
  const [sent, setSent] = useState(false);

  const handleSurMesure = () => {
    const msg = encodeURIComponent(
      "Bonjour Astride ! Je souhaite commander un modèle sur-mesure. Pouvez-vous me conseiller ?"
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  const handlePrivateRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const msg = `Bonjour Astride !

Je souhaite être recontactée pour une demande privée :
• Nom : ${name}
• WhatsApp : ${phone}
• Type de demande : ${demand}

Merci ✨`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section className="relative overflow-hidden bg-sand">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 lg:py-24">
        {/* Colonne gauche — Texte + Formulaire */}
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

          {/* Double CTA */}
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

          {/* ✨ FORMULAIRE DEMANDE PRIVÉE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-12 border border-gold/30 bg-white/40 backdrop-blur-sm p-6 sm:p-7"
          >
            <div className="flex items-center gap-2 mb-5">
              <Sparkles size={14} className="text-gold" strokeWidth={1.5} />
              <span className="text-[10px] uppercase tracking-[0.3em] text-ink/70">
                Demande Privée — Réponse sous 24h
              </span>
            </div>

            <form onSubmit={handlePrivateRequest} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Prénom & Nom"
                  required
                  className="w-full bg-transparent border border-ink/15 px-4 py-3 text-sm placeholder:text-ink/40 focus:outline-none focus:border-gold transition"
                />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="WhatsApp (+225...)"
                  required
                  className="w-full bg-transparent border border-ink/15 px-4 py-3 text-sm placeholder:text-ink/40 focus:outline-none focus:border-gold transition"
                />
              </div>

              <select
                value={demand}
                onChange={(e) => setDemand(e.target.value)}
                className="w-full bg-transparent border border-ink/15 px-4 py-3 text-sm text-ink/80 focus:outline-none focus:border-gold transition cursor-pointer"
              >
                {DEMANDS.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>

              <button
                type="submit"
                className="w-full bg-ink text-sand py-3.5 px-6 flex items-center justify-center gap-2 text-[11px] uppercase tracking-[0.25em] hover:bg-gold hover:text-ink transition-all duration-300 group"
              >
                {sent ? (
                  <>
                    <Check size={14} /> Demande envoyée
                  </>
                ) : (
                  <>
                    <MessageCircle
                      size={14}
                      className="group-hover:scale-110 transition-transform"
                    />
                    Être recontactée sous 24h
                  </>
                )}
              </button>
            </form>

            <p className="text-[10px] text-ink/40 mt-3 text-center tracking-wider">
              ✦ Vos informations restent confidentielles
            </p>
          </motion.div>

          {/* Preuves sociales */}
          <div className="mt-10 flex items-center gap-8 text-[10px] uppercase tracking-[0.25em] text-ink/50">
            <span>✦ 33K sur TikTok</span>
            <span className="w-px h-3 bg-ink/20" />
            <span>✦ Expédition Mondiale</span>
          </div>
        </motion.div>

        {/* Colonne droite — Image */}
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