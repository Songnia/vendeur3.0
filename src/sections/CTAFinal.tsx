import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

gsap.registerPlugin(ScrollTrigger);

export default function CTAFinal() {
  const [phone, setPhone] = useState('');
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }});
      gsap.fromTo(cardRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }});
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#f4f6f8] py-20 md:py-24 font-sans text-v-dark">
      <div className="max-w-[900px] mx-auto px-4 flex flex-col items-center">
        
        {/* Top Headlines */}
        <h2 className="font-display font-extrabold text-4xl md:text-6xl text-v-dark text-center leading-tight mb-2 tracking-tight">
          Comme Vous Pouvez Le Constater...
        </h2>
        <p className="font-sans text-xl md:text-3xl text-v-dark text-center mb-1">
          <span className="underline decoration-v-red decoration-4 underline-offset-4 font-medium">Vendeur 3.0</span> a déjà aidé d'innombrables personnes...
        </p>
        <h3 className="font-display text-2xl md:text-4xl font-extrabold text-[#333333] text-center mb-10">
          La Question Est : Êtes-vous Le Prochain ?
        </h3>

        {/* The Yellow Card */}
        <div ref={cardRef} className="w-full bg-[#fdfaf0] shadow-2xl border border-[#e8dcb8] rounded p-6 md:p-12 text-center relative max-w-4xl">
          
          {/*<h4 className="font-serif italic text-2xl md:text-[32px] text-v-dark mb-4 leading-normal font-semibold">
            Envoyez-moi vos coordonnées...<br/>
            Je vais préparer l'expédition de votre exemplaire physique de mon tout nouveau manuel, ASAP !
          </h4> */}
          
          <img src="/images/book-cover.png" alt="Manuel Vendeur 3.0" className="mx-auto my-8 max-w-[240px] md:max-w-[360px] drop-shadow-xl" />

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto px-4">
            Comme je l'ai mentionné plus haut, <strong>ce livre coûte 49 000 FCFA</strong>. Réglez simplement l'achat, et nous vous l'expédierons où que vous soyez au Cameroun (frais : 2 500 FCFA) ou à l'international (frais : 5 000 FCFA). <strong>Si vous préférez écouter la version audio</strong>, vous pourrez également l'ajouter à votre commande juste après avoir validé vos informations ci-dessous...
          </p>

          <div className="max-w-[540px] mx-auto">
             {/* Form Fields */}
             <form className="w-full flex flex-col mb-4 border border-gray-300 rounded shadow-sm overflow-hidden bg-white text-left font-sans">
                <div className="flex flex-col sm:flex-row border-b border-gray-300">
                  <input type="text" placeholder="Prénom" className="w-full sm:w-1/2 p-4 outline-none sm:border-r border-b sm:border-b-0 border-gray-300 text-sm md:text-base focus:bg-gray-50 transition-colors" required />
                  <input type="text" placeholder="Nom" className="w-full sm:w-1/2 p-4 outline-none text-sm md:text-base focus:bg-gray-50 transition-colors" required />
                </div>
                <div className="flex border-b border-gray-300">
                  <input type="email" placeholder="Adresse email" className="w-full p-4 outline-none text-sm md:text-base focus:bg-gray-50 transition-colors" required />
                </div>
                <div className="w-full">
                  <PhoneInput
                    defaultCountry="cm"
                    value={phone}
                    onChange={(p) => setPhone(p)}
                    className="w-full flex"
                    inputClassName="!w-full !border-0 !p-4 !text-sm md:!text-base focus:!bg-gray-50 focus:!outline-none !shadow-none"
                    countrySelectorStyleProps={{
                      buttonClassName: "!border-0 !border-r !border-gray-300 !px-4 !bg-gray-50 !h-full hover:!bg-gray-100",
                    }}
                  />
                </div>
              </form>

              {/* Button & Disclaimer */}
              <div className="w-full flex flex-col gap-2">
                <button
                  type="button"
                  className="w-full bg-[#4A72B2] text-white py-5 px-3 md:px-4 font-display font-bold text-sm md:text-[18px] uppercase tracking-wide rounded-md shadow-cta hover:bg-[#3b5d95] hover:scale-[1.02] transition-transform duration-200"
                >
                  🛒 OUI ! RÉSERVER MON LIVRE MAINTENANT
                </button>
                <div className="text-[12px] text-gray-500 text-center leading-snug px-2 mt-2">
                  Vous payez seulement 49 000 FCFA + Frais de livraison (Cameroun ou International).
                </div>
              </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
