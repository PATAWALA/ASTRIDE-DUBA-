"use client";

import { useState } from "react";
import { Music2, Mail, MapPin, Check } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-ink text-sand">
      {/* Bandeau V.I.P */}
      <div className="border-b border-sand/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold">
              La V.I.P List
            </span>
            <h3 className="font-display text-3xl sm:text-4xl mt-4 leading-tight">
              Accès Prioritaire aux
              <br />
              <em className="font-light italic">Nouvelles Créations.</em>
            </h3>
            <p className="text-sm text-sand/60 mt-4 font-light max-w-md leading-relaxed">
              Recevez en avant-première nos pièces d'exception, nos éditions
              limitées et nos offres réservées à notre cercle privé.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail
                  size={16}
                  strokeWidth={1.5}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-sand/40"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre adresse email"
                  required
                  className="w-full bg-transparent border border-sand/20 pl-11 pr-4 py-4 text-sm text-sand placeholder:text-sand/40 focus:outline-none focus:border-gold transition"
                />
              </div>
              <button
                type="submit"
                className="bg-gold text-ink px-8 py-4 text-[11px] uppercase tracking-[0.25em] hover:bg-sand transition-all duration-300 whitespace-nowrap flex items-center justify-center gap-2"
              >
                {subscribed ? (
                  <>
                    <Check size={14} /> Inscrite
                  </>
                ) : (
                  "Rejoindre"
                )}
              </button>
            </div>
            {subscribed && (
              <p className="text-[11px] text-gold mt-3 tracking-wider">
                ✦ Bienvenue dans le cercle privé Astride Dubaï.
              </p>
            )}
            <p className="text-[10px] text-sand/40 mt-3 tracking-wider">
              Aucun spam. Uniquement l'essentiel.
            </p>
          </form>
        </div>
      </div>

      {/* Corps principal */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Marque */}
        <div className="lg:col-span-2">
          <div className="flex flex-col leading-none">
            <span className="font-display text-2xl tracking-[0.2em]">
              ASTRIDE
            </span>
            <span className="text-[9px] tracking-[0.4em] text-sand/50 mt-1">
              DUBAÏ — ATELIER & CRÉATIONS
            </span>
          </div>
          <p className="text-sm text-sand/60 mt-6 max-w-sm font-light leading-relaxed">
            Maison de couture fondée à Dubaï. Chaque pièce est imaginée,
            coupée et assemblée dans notre atelier, entre tradition et
            modernité.
          </p>

          <div className="mt-6 flex items-start gap-3 text-sm text-sand/60 font-light">
            <MapPin size={16} strokeWidth={1.5} className="mt-0.5 shrink-0 text-gold" />
            <span>
              Atelier & Showroom — Dubai Design District
              <br />
              Émirats Arabes Unis
            </span>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://tiktok.com/@astride"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="w-10 h-10 border border-sand/20 flex items-center justify-center hover:border-gold hover:text-gold transition-all"
            >
              <Music2 size={16} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] text-gold mb-5">
            La Maison
          </h4>
          <ul className="space-y-3 text-sm text-sand/60 font-light">
            <li>
              <a href="#collection" className="hover:text-gold transition">
                Collection
              </a>
            </li>
            <li>
              <a href="#commander" className="hover:text-gold transition">
                Comment Commander
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-gold transition">
                F.A.Q
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gold transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Informations */}
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] text-gold mb-5">
            Informations
          </h4>
          <ul className="space-y-3 text-sm text-sand/60 font-light">
            <li>✈️ Expédition mondiale depuis Dubaï</li>
            <li>💳 Paiement sécurisé international</li>
            <li>🧵 Confection sur-mesure disponible</li>
            <li>📱 Commande en direct WhatsApp</li>
          </ul>
        </div>
      </div>

      {/* Barre inférieure */}
      <div className="border-t border-sand/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] tracking-[0.2em] uppercase text-sand/40">
            © {year} Astride Dubaï — Tous droits réservés
          </p>
          <p className="text-[10px] tracking-[0.2em] uppercase text-sand/40">
            Conçu avec ✦ à Dubaï
          </p>
        </div>
      </div>
    </footer>
  );
}