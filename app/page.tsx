import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustPillars from "@/components/TrustPillars";
import Catalog from "@/components/Catalog";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Bandeau d'annonce */}
      <AnnouncementBar />

      {/* Navigation */}
      <Navbar />

      {/* Contenu principal */}
      <main>
        {/* 1. Hero — Immersion & Clarté */}
        <Hero />

        {/* 2. Rassurance Express — 3 piliers de conversion */}
        <TrustPillars />

        {/* 3. Catalogue Interactif — La pièce maîtresse */}
        <Catalog />

        {/* 4. Section Comment Commander — Ancrage WhatsApp */}
        <section
          id="commander"
          className="bg-ink text-sand py-20 lg:py-28"
        >
          <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold">
              Commander en 3 étapes
            </span>
            <h2 className="font-display text-4xl sm:text-5xl mt-4 leading-tight">
              Une Expérience d'Atelier,
              <br />
              <em className="font-light italic">Sans Intermédiaire.</em>
            </h2>

            <div className="mt-16 grid md:grid-cols-3 gap-10 text-left">
              <div>
                <span className="font-display text-5xl text-gold/40">01</span>
                <h3 className="font-display text-xl mt-4">
                  Choisissez votre pièce
                </h3>
                <p className="text-sm text-sand/60 mt-3 leading-relaxed font-light">
                  Parcourez la collection et sélectionnez votre taille (S à XL
                  ou sur-mesure) et votre couleur préférée.
                </p>
              </div>
              <div>
                <span className="font-display text-5xl text-gold/40">02</span>
                <h3 className="font-display text-xl mt-4">
                  Ajoutez à votre sac
                </h3>
                <p className="text-sm text-sand/60 mt-3 leading-relaxed font-light">
                  Votre sac calcule automatiquement le sous-total en EUR, USD
                  et FCFA. Renseignez votre nom et votre ville.
                </p>
              </div>
              <div>
                <span className="font-display text-5xl text-gold/40">03</span>
                <h3 className="font-display text-xl mt-4">
                  Envoyez sur WhatsApp
                </h3>
                <p className="text-sm text-sand/60 mt-3 leading-relaxed font-light">
                  Un clic suffit : votre commande détaillée arrive directement
                  chez Astride. Confirmation, paiement et livraison en direct.
                </p>
              </div>
            </div>

            <div className="mt-16 inline-flex flex-col sm:flex-row gap-4">
              <a
                href="#collection"
                className="inline-block border border-gold text-gold px-8 py-4 text-xs uppercase tracking-[0.25em] hover:bg-gold hover:text-ink transition-all"
              >
                Retour à la Collection
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* 6. Footer Haut de gamme */}
      <Footer />

      {/* Panier Hybride — Toujours monté, ouvert via Zustand */}
      <CartDrawer />
    </>
  );
}