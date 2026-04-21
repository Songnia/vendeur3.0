import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    text: "Ce livre a changé ma vision de la vente. En une semaine, j'ai conclu trois deals que je pensais perdus. Ulrich est un maître.",
    name: "Gaby Fopa",
    role: "PDG d'une entreprise de services",
  },
  {
    text: "Dès réception de Vendeur 3.0, je n'ai pas pu le lâcher. Les techniques sont simples, directes et elles fonctionnent vraiment.",
    name: "Vanister Officiel",
    role: "Influenceur & entrepreneur",
  },
  {
    text: "La force d'Ulrich, c'est sa capacité à vulgariser la psychologie d'achat. Ce livre est un must pour tout vendeur moderne.",
    name: "Claudel Noubissie",
    role: "Expert en marketing digital",
  },
];

export default function Temoignages() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(headerRef.current, {
        opacity: 1, y: 0, duration: 0.5, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });
      const cards = cardsRef.current?.querySelectorAll('.testimonial-card');
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
    <section ref={sectionRef} className="w-full bg-v-bg-alt py-20 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div ref={headerRef} className="mb-12 opacity-0 translate-y-6">
          <p className="font-mono-label text-xs uppercase tracking-[0.06em] text-v-red mb-3">
            ILS ONT TRANSFORMÉ LEURS VENTES
          </p>
          <h2 className="font-display font-bold text-2xl md:text-3xl uppercase text-v-dark tracking-[-0.01em]">
            CE QU'ILS DISENT DE VENDEUR 3.0
          </h2>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="testimonial-card bg-white border border-v-border p-8 opacity-0 translate-y-10"
            >
              <span className="font-display font-bold text-5xl text-v-red leading-none">"</span>
              <p className="text-base text-v-gray leading-relaxed italic -mt-2">
                {t.text}
              </p>
              <div className="mt-6 pt-4 border-t border-v-border">
                <p className="font-display font-semibold text-sm uppercase text-v-dark">
                  {t.name}
                </p>
                <p className="font-mono-label text-xs text-v-gray-light mt-1">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
