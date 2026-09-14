import { Plane, Scissors, MessageCircle } from "lucide-react";

const pillars = [
  {
    icon: Plane,
    title: "Envoi depuis Dubaï",
    text: "Suivi de colis sécurisé & expédition express internationale.",
  },
  {
    icon: Scissors,
    title: "Confection Atelier",
    text: "Tissus nobles & finitions soignées à la main.",
  },
  {
    icon: MessageCircle,
    title: "Commande WhatsApp en 1 clic",
    text: "Conseil personnalisé instantané avec la créatrice.",
  },
];

export default function TrustPillars() {
  return (
    <section className="bg-sand border-y border-ink/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-3 gap-10">
        {pillars.map((p, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center md:items-start md:text-left"
          >
            <p.icon size={26} strokeWidth={1.2} className="text-gold mb-5" />
            <h3 className="font-display text-xl mb-2">{p.title}</h3>
            <p className="text-sm text-ink/60 leading-relaxed font-light">
              {p.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}