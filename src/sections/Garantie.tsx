import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Garantie() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(contentRef.current, {
        opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-v-bg-alt py-16 md:py-20">
      <div className="max-w-[720px] mx-auto px-6">
        <div ref={contentRef} className="flex flex-col items-center text-center opacity-0 translate-y-8">
          <ShieldCheck className="w-12 h-12 text-v-success mb-6" strokeWidth={1.5} />

          <h2 className="font-display font-bold text-xl md:text-2xl uppercase text-v-dark leading-tight">
            GARANTIE « SANS RISQUE » 100 % SATISFAIT OU REMBOURSÉ
          </h2>

          <p className="text-base md:text-lg text-v-gray leading-relaxed mt-6">
            Si après avoir lu les 50 premières pages de <em>Vendeur 3.0</em> vous n'avez pas appris au moins <strong className="text-v-dark">une technique qui vous fait gagner un client supplémentaire</strong> dans les 7 jours, je vous rembourse intégralement vos frais de livraison, sans discuter. Vous pouvez même conserver le livre.
          </p>

          <p className="font-display font-semibold text-base text-v-success mt-5">
            C'est ma garantie « Vous n'avez rien à perdre, tout à gagner ».
          </p>
        </div>
      </div>
    </section>
  );
}
