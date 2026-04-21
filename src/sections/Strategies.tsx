import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Secret {
  number: number;
  text: string;
}

interface Section {
  title: string;
  subtitle: string;
  secrets: Secret[];
}

const sections: Section[] = [
  {
    title: "Section n°1 : La psychologie du client",
    subtitle: "Par Ulrich Nguegang, le Stratège",
    secrets: [
      { number: 1, text: "Le mécanisme d'achat caché dans le cerveau de votre prospect – et comment l'activer à volonté." },
      { number: 2, text: "Les 3 erreurs fatales que commettent 99 % des vendeurs (et qui vous coûtent des ventes chaque jour)." },
      { number: 3, text: "Le « point G » de la vente – le moment exact où vous devez conclure pour doubler votre taux de transformation." },
      { number: 4, text: "La stratégie de la carotte – une méthode marketing révolutionnaire qui pousse le client à vous réclamer l'offre." },
      { number: 5, text: "La guérilla marketing à 90 % de réussite – comment attaquer des marchés concurrentiels sans budget." },
      { number: 6, text: "Les 3 étapes pour multiplier vos ventes par 3 en changeant uniquement votre approche marketing." },
      { number: 7, text: "Les 10 techniques imparables pour conclure une vente, quel que soit le prospect (même les plus réticents)." },
    ],
  },
  {
    title: "Section n°2 : L'intelligence marketing digitale",
    subtitle: "Par Claudel Noubissie, l'Assassin",
    secrets: [
      { number: 8, text: "L'intelligence marketing – comment analyser son marché et ses concurrents comme un chef de guerre." },
      { number: 9, text: "Marketing digital sur internet : les 5 leviers à activer immédiatement (même avec un petit budget)." },
      { number: 10, text: "La stratégie de l'entonnoir (funnel) – plan d'action étape par étape pour automatiser vos ventes." },
      { number: 11, text: "Comment transformer un simple visiteur en client fidèle grâce à la séquence de storytelling persuasif." },
    ],
  },
  {
    title: "Section n°3 : La route vers la fortune",
    subtitle: "La loi des 80/20",
    secrets: [
      { number: 12, text: "La loi de Pareto appliquée à la vente – identifiez les 20 % d'actions qui génèrent 80 % de vos revenus." },
      { number: 13, text: "Comment passer de vendeur à entrepreneur – bâtir un système commercial qui tourne sans vous." },
      { number: 14, text: "L'état d'esprit du vendeur d'élite – éliminer la peur du rejet et l'auto-sabotage en 7 jours." },
    ],
  },
  {
    title: "Section n°4 : Devenir le guide que vos clients attendent",
    subtitle: "",
    secrets: [
      { number: 15, text: "Le cadre « POSITION » – comment devenir une autorité incontestée dans votre niche." },
      { number: 16, text: "L'art du questionnement – les 4 questions qui font dire « oui » avant même que vous ayez présenté l'offre." },
      { number: 17, text: "La gestion des objections – transformer chaque « non » en levier de vente." },
      { number: 18, text: "La preuve sociale accélératrice – utilisez les témoignages, études de cas et résultats pour vendre sans parler." },
      { number: 19, text: "La boucle vertueuse de la vente – comment vos clients deviennent vos meilleurs vendeurs (référence automatique)." },
    ],
  },
];

export default function Strategies() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(headerRef.current, {
        opacity: 1, y: 0, duration: 0.5, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });
      const items = sectionRef.current?.querySelectorAll('.accordion-item');
      if (items) {
        gsap.to(items, {
          opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: items[0], start: 'top 85%' },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="w-full bg-v-dark py-20 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div ref={headerRef} className="mb-12 opacity-0 translate-y-6">
          <p className="font-mono-label text-xs uppercase tracking-[0.06em] text-v-red mb-3">
            LE CONTENU DU LIVRE
          </p>
          <h2 className="font-display font-bold text-2xl md:text-3xl uppercase text-white tracking-[-0.01em]">
            19 STRATÉGIES SECRÈTES POUR DOMINER LA VENTE
          </h2>
        </div>

        <div className="flex flex-col">
          {sections.map((section, idx) => (
            <div key={idx} className="accordion-item opacity-0 translate-y-6">
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full flex items-center justify-between py-6 border-b border-[#333] text-left group"
              >
                <div>
                  <span className="font-display font-semibold text-base md:text-lg uppercase text-white">
                    {section.title}
                  </span>
                  {section.subtitle && (
                    <span className="block font-mono-label text-xs text-v-gray-muted mt-1">
                      {section.subtitle}
                    </span>
                  )}
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-v-red shrink-0 transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === idx ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="py-6 px-4 md:px-6 bg-[#1a1a1a]">
                  <div className="flex flex-col gap-4">
                    {section.secrets.map((secret) => (
                      <div key={secret.number} className="flex items-start gap-3">
                        <span className="font-display font-bold text-sm text-v-red shrink-0 w-6">
                          {secret.number}
                        </span>
                        <span className="text-sm md:text-base text-[#d4d4d4] leading-relaxed">
                          {secret.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
