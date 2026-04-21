import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AccrocheAuteur() {
  const sectionRef = useRef<HTMLElement>(null);
  const topBarRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(topBarRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } });
      gsap.fromTo(textRef.current, { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.6, delay: 0.2, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } });
      gsap.fromTo(imageRef.current, { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 0.6, delay: 0.3, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-v-bg pb-20 pt-10 md:pt-16 font-sans">
      <div className="max-w-[1000px] mx-auto px-6">
        
        {/* Top Highlight Box */}
        <div ref={topBarRef} className="w-full bg-v-bg-alt py-10 px-6 md:px-16 text-center mb-10 rounded-sm shadow-sm border-t-4 border-v-red">
          <h2 className="font-display font-extrabold text-3xl md:text-[42px] text-v-dark leading-[1.2] tracking-tight uppercase">
            Avez-vous peur de <span className="underline decoration-v-red decoration-4 underline-offset-[6px]">vendre ?</span>
          </h2>
        </div>

        <hr className="border-t border-gray-200 w-full mb-12" />

        <div className="flex flex-col-reverse md:flex-row md:items-start gap-12 md:gap-14">
          
          {/* Left Text Column */}
          <div ref={textRef} className="md:w-[55%] flex flex-col gap-6 text-[17px] md:text-[18px] leading-relaxed text-v-gray">
            <div className="font-mono-label text-xs uppercase tracking-[0.06em] text-v-red">
              DE : ULRICH NGUEGANG<br/>
              DOUALA, CAMEROUN
            </div>

            <p>
              Souhaitez-vous comprendre pourquoi certains prospects disent toujours « non » ?
            </p>

            <p>
              <span className="underline decoration-1 cursor-pointer text-v-red hover:text-v-red-dark transition-colors font-medium">Voulez-vous apprendre à conclure une vente sans forcer, avec une méthode psychologique imparable ?</span>
            </p>

            <blockquote className="bg-v-bg-alt border-l-4 border-v-red p-6 italic text-v-gray leading-relaxed shadow-sm mt-4">
              <p className="text-base md:text-lg mb-3">
                « Vendre n'est pas une question de talent, c'est une question de stratégie. Mon livre Vendeur 3.0 vous donne la boîte à outils que 99 % des vendeurs ignorent. »
              </p>
              <footer className="mt-3 not-italic">
                <span className="font-display font-semibold text-sm uppercase text-v-dark">— Ulrich Nguegang</span>
                <span className="font-mono-label text-xs text-v-gray-light ml-2">Stratège en marketing & vente</span>
              </footer>
            </blockquote>
          </div>

          {/* Right Image Column */}
          <div ref={imageRef} className="md:w-[45%] flex justify-center md:justify-end">
            <div className="border-l-4 border-v-red shadow-lg h-fit">
              <img 
                 src="/images/author-portrait.png" 
                 alt="Ulrich Nguegang - Le Stratège" 
                 className="w-full max-w-[360px] aspect-square object-cover rounded-sm"
                 loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
