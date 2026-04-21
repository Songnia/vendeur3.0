import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const bonuses = [
  {
    number: "01",
    title: "La stratégie de la carotte",
    description: "Vidéo de formation de 30 minutes où Ulrich Nguegang dévoile en détail la « stratégie de la carotte », une méthode qui a généré plus de 90 % de réussite sur des campagnes marketing. Vous apprendrez à créer une offre irrésistible qui attire les prospects à vous.",
    value: "50 000 FCFA",
  },
  {
    number: "02",
    title: "Les 10 techniques imparables",
    description: "Fiche récapitulative téléchargeable. Chaque technique est expliquée avec un exemple concret de dialogue commercial. Imprimez-la et gardez-la près de votre téléphone pendant vos appels de vente.",
    value: "25 000 FCFA",
  },
  {
    number: "03",
    title: "Communauté privée « 1000 Vendeurs »",
    description: "Groupe WhatsApp et Telegram réservé aux lecteurs de Vendeur 3.0. Chaque mois, un coaching live avec Ulrich pour répondre à vos cas réels. Échangez avec d'autres vendeurs, partagez vos victoires et débloquez vos blocages.",
    value: "72 000 FCFA / an",
  },
];

export default function Bonus() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(headerRef.current, {
        opacity: 1, y: 0, duration: 0.5, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });
      const cards = cardsRef.current?.querySelectorAll('.bonus-card');
      if (cards) {
        gsap.to(cards, {
          opacity: 1, y: 0, duration: 0.5, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 85%' },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-v-bg py-20 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div ref={headerRef} className="mb-12 opacity-0 translate-y-6">
          <p className="font-mono-label text-xs uppercase tracking-[0.06em] text-v-red mb-3">
            EN PLUS DU LIVRE
          </p>
          <h2 className="font-display font-bold text-2xl md:text-3xl uppercase text-v-dark tracking-[-0.01em]">
            3 BONUS EXCLUSIFS OFFERTS (VALEUR 147 000 FCFA)
          </h2>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bonuses.map((bonus, i) => (
            <div
              key={i}
              className="bonus-card bg-white border border-v-border border-t-4 border-t-v-red p-8 md:p-10 opacity-0 translate-y-10"
            >
              <span className="font-display font-extrabold text-5xl text-v-red/30">
                {bonus.number}
              </span>
              <h3 className="font-display font-semibold text-base md:text-lg uppercase text-v-dark mt-4">
                Bonus n°{i + 1} — {bonus.title}
              </h3>
              <p className="text-sm md:text-base text-v-gray leading-relaxed mt-3">
                {bonus.description}
              </p>
              <p className="font-mono-label text-sm text-v-red mt-4">
                Valeur : {bonus.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
