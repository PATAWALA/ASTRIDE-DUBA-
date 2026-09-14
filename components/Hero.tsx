"use client";

import { motion } from "framer-motion";
import { Sparkles, Check, ArrowUpRight, Clock } from "lucide-react";
import { useState } from "react";
import { WHATSAPP_NUMBER } from "@/lib/products";

const PROJECT_TYPES = [
  "Lancement de marque de mode / vêtements",
  "Lancement de marque de parfums",
  "Lancement de marque d'accessoires",
  "Développement de production Dubaï / Inde",
  "Autre projet",
];

const BUDGETS = [
  "Moins de 5 000 €",
  "5 000 € – 15 000 €",
  "15 000 € – 50 000 €",
  "Plus de 50 000 €",
];

const ADVANTAGES = [
  "Étude personnalisée de votre positionnement",
  "Accès direct aux fournisseurs Dubaï & Inde",
  "Devis clair, sans engagement",
];

export default function Hero() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [projectType, setProjectType] = useState(PROJECT_TYPES[0]);
  const [budget, setBudget] = useState(BUDGETS[1]);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const msg = `Bonjour Astride !

Je souhaite lancer mon projet et recevoir une analyse gratuite :
• Nom : ${name}
• WhatsApp : ${phone}
• Type de projet : ${projectType}
• Budget estimé : ${budget}

Merci de me recontacter sous 24h ✨`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );

    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section className="relative overflow-hidden bg-sand">
      <div className="max-w-4xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6 inline-flex items-center gap-2">
            <Sparkles size={12} strokeWidth={1.5} />
            Atelier & Accompagnement — Dubaï
          </span>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
            Lancez votre
            <br />
            <em className="font-light italic">Marque de Mode</em>
            <br />
            Dubaï & Inde.
          </h1>

          <p className="mt-8 text-base lg:text-lg text-ink/70 leading-relaxed max-w-2xl mx-auto font-light">
            Envoyez-nous votre projet. Nous analysons votre dossier
            <span className="text-ink font-normal"> gratuitement sous 24h </span>
            et vous proposons un plan d'accompagnement sur-mesure.
          </p>

          {/* 3 arguments clés */}
          <ul className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-left">
            {ADVANTAGES.map((adv, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-sm text-ink/70 font-light"
              >
                <Check
                  size={16}
                  strokeWidth={2}
                  className="text-gold mt-0.5 shrink-0"
                />
                <span>{adv}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Formulaire d'analyse */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-14 border border-gold/30 bg-sand p-6 sm:p-8 lg:p-10"
        >
          <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-gold" strokeWidth={1.5} />
              <span className="text-[10px] uppercase tracking-[0.3em] text-ink/70">
                Analyse gratuite — Réponse sous 24h
              </span>
            </div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold">
              ✦ 100 % confidentiel
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] uppercase tracking-[0.25em] text-ink/50 block mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex : Aïcha Diallo"
                  required
                  className="w-full bg-transparent border border-ink/15 px-4 py-3 text-sm placeholder:text-ink/40 focus:outline-none focus:border-gold transition"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-[0.25em] text-ink/50 block mb-2">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+225 07 12 34 56 78"
                  required
                  className="w-full bg-transparent border border-ink/15 px-4 py-3 text-sm placeholder:text-ink/40 focus:outline-none focus:border-gold transition"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] uppercase tracking-[0.25em] text-ink/50 block mb-2">
                  Type de projet
                </label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full bg-transparent border border-ink/15 px-4 py-3 text-sm text-ink/80 focus:outline-none focus:border-gold transition cursor-pointer"
                >
                  {PROJECT_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-[0.25em] text-ink/50 block mb-2">
                  Budget estimé
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-transparent border border-ink/15 px-4 py-3 text-sm text-ink/80 focus:outline-none focus:border-gold transition cursor-pointer"
                >
                  {BUDGETS.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-ink text-sand py-4 px-6 flex items-center justify-center gap-2 text-[11px] uppercase tracking-[0.25em] hover:bg-gold hover:text-ink transition-all duration-300 group"
            >
              {sent ? (
                <>
                  <Check size={14} /> Demande envoyée
                </>
              ) : (
                <>
                  Envoyer mon projet pour analyse
                  <ArrowUpRight
                    size={14}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </>
              )}
            </button>
          </form>

          <p className="text-[10px] text-ink/40 mt-4 text-center tracking-wider">
            ✦ Aucun engagement · Étude gratuite · Réponse personnalisée sous 24h
          </p>
        </motion.div>
      </div>
    </section>
  );
}