import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Formulaire() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(titleRef.current, {
        opacity: 1, y: 0, duration: 0.5, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });
      gsap.to(subtitleRef.current, {
        opacity: 1, y: 0, duration: 0.5, delay: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });
      const fields = formRef.current?.querySelectorAll('.form-field');
      if (fields) {
        gsap.to(fields, {
          opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: formRef.current, start: 'top 85%' },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Merci ! Votre demande a été enregistrée. Vous recevrez bientôt votre livre.');
  };

  return (
    <section ref={sectionRef} id="formulaire" className="w-full bg-v-dark py-20 md:py-24">
      <div className="max-w-[720px] mx-auto px-6">
        <h2
          ref={titleRef}
          className="font-display font-bold text-2xl md:text-3xl uppercase text-white text-center opacity-0 translate-y-6"
        >
          REMPLISSEZ LE FORMULAIRE CI-DESSOUS
        </h2>
        <p
          ref={subtitleRef}
          className="text-base md:text-lg text-v-gray-muted text-center mt-4 opacity-0 translate-y-6"
        >
          Recevez votre exemplaire gratuit + les 3 bonus exclusifs (valeur 147 000 FCFA)
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-10 flex flex-col gap-5">
          <div className="form-field opacity-0 translate-y-6">
            <label className="font-mono-label text-xs uppercase tracking-[0.06em] text-v-gray-muted mb-2 block">
              Prénom
            </label>
            <input
              type="text"
              name="prenom"
              placeholder="Votre prénom"
              value={formData.prenom}
              onChange={handleChange}
              required
              className="w-full bg-[#1a1a1a] border border-[#333] text-white px-4 py-3.5 placeholder:text-v-gray-muted focus:border-v-red focus:outline-none transition-colors duration-200"
            />
          </div>

          <div className="form-field opacity-0 translate-y-6">
            <label className="font-mono-label text-xs uppercase tracking-[0.06em] text-v-gray-muted mb-2 block">
              Nom
            </label>
            <input
              type="text"
              name="nom"
              placeholder="Votre nom"
              value={formData.nom}
              onChange={handleChange}
              required
              className="w-full bg-[#1a1a1a] border border-[#333] text-white px-4 py-3.5 placeholder:text-v-gray-muted focus:border-v-red focus:outline-none transition-colors duration-200"
            />
          </div>

          <div className="form-field opacity-0 translate-y-6">
            <label className="font-mono-label text-xs uppercase tracking-[0.06em] text-v-gray-muted mb-2 block">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Votre adresse email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-[#1a1a1a] border border-[#333] text-white px-4 py-3.5 placeholder:text-v-gray-muted focus:border-v-red focus:outline-none transition-colors duration-200"
            />
          </div>

          <div className="form-field opacity-0 translate-y-6">
            <label className="font-mono-label text-xs uppercase tracking-[0.06em] text-v-gray-muted mb-2 block">
              Téléphone
            </label>
            <input
              type="tel"
              name="telephone"
              placeholder="Ex: +237 6XX XXX XXX"
              value={formData.telephone}
              onChange={handleChange}
              required
              className="w-full bg-[#1a1a1a] border border-[#333] text-white px-4 py-3.5 placeholder:text-v-gray-muted focus:border-v-red focus:outline-none transition-colors duration-200"
            />
          </div>

          <p className="form-field opacity-0 translate-y-6 text-xs text-v-gray-light leading-relaxed">
            En cliquant sur le bouton, vous acceptez de recevoir des offres commerciales, conseils marketing et informations liées à la vente par email, SMS ou appel téléphonique. Désabonnement possible à tout moment.
          </p>

          <button
            type="submit"
            className="form-field opacity-0 translate-y-6 w-full bg-v-red text-white font-display font-bold text-base md:text-lg uppercase tracking-[0.02em] py-5 hover:bg-v-red-dark transition-colors duration-200"
          >
            📚 OUI, JE RÉSERVE MON EXEMPLAIRE GRATUIT DE VENDEUR 3.0 📚
          </button>
        </form>
      </div>
    </section>
  );
}
