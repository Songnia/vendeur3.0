import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Y a-t-il des frais cachés ou un abonnement après l'achat ?",
    answer: "Absolument aucun. Vous réglez uniquement le prix du livre (49 000 FCFA) plus vos frais d'expédition (comme 2 500 FCFA au Cameroun). Pas d'abonnement caché, pas de réengagement inattendu.",
  },
  {
    question: "Combien de temps faut-il pour recevoir le livre ?",
    answer: "Au Cameroun : 2 à 5 jours ouvrés (via Express Union ou colis privé). Dans les autres pays d'Afrique francophone : 7 à 12 jours ouvrés.",
  },
  {
    question: "Existe-t-il une version numérique (PDF) ?",
    answer: "Pour l'instant, uniquement la version papier. Le PDF sera offert plus tard aux membres de la communauté. Mais rien ne remplace le contact du papier pour apprendre les techniques de vente.",
  },
  {
    question: "Je ne suis pas vendeur de métier, est-ce que ce livre peut m'aider ?",
    answer: "Absolument. Que vous soyez étudiant, passionné du numérique, indépendant, commercial ou chef d'entreprise, la psychologie de la vente est une compétence de vie. Vous apprendrez à mieux négocier, à mieux convaincre et à mieux vous vendre.",
  },
  {
    question: "Puis-je le commander depuis la France ou l'Europe ?",
    answer: "Oui, nous livrons partout dans le monde. Les frais de port international sont de 5 000 FCFA (environ 7,60 €). Comptez 10 à 15 jours de livraison.",
  },
];

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(headerRef.current, {
        opacity: 1, y: 0, duration: 0.5, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });
      const items = sectionRef.current?.querySelectorAll('.faq-item');
      if (items) {
        gsap.to(items, {
          opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: items[0], start: 'top 90%' },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="w-full bg-v-bg py-20 md:py-24">
      <div className="max-w-[800px] mx-auto px-6">
        <div ref={headerRef} className="mb-12 opacity-0 translate-y-6">
          <p className="font-mono-label text-xs uppercase tracking-[0.06em] text-v-red mb-3">
            QUESTIONS FRÉQUENTES
          </p>
          <h2 className="font-display font-bold text-2xl md:text-3xl uppercase text-v-dark tracking-[-0.01em]">
            FAQ
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="faq-item opacity-0 translate-y-6">
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex items-center justify-between bg-white border border-v-border p-5 text-left group hover:border-v-gray-muted transition-colors duration-200"
              >
                <span className="font-display font-semibold text-sm md:text-base text-v-dark pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-v-gray-light shrink-0 transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === idx ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="bg-white border border-t-0 border-v-border p-5">
                  <p className="text-sm md:text-base text-v-gray leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
