import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Star, ShieldCheck, Volume2 } from 'lucide-react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import AlertModal from '../components/AlertModal';

export default function Hero() {
  const [phone, setPhone] = useState('');
  const [modalConfig, setModalConfig] = useState<{isOpen: boolean, type: 'success' | 'error', title: string, message: string}>({
    isOpen: false,
    type: 'success',
    title: '',
    message: ''
  });
  const sectionRef = useRef<HTMLElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    if (!phone || phone.length < 5) {
      setModalConfig({
        isOpen: true, 
        type: 'error', 
        title: 'Numéro Invalide', 
        message: 'Veuillez entrer un numéro de téléphone valide pour être recontacté.'
      });
      return;
    }

    const newReservation = {
      id: Date.now(),
      candidat: `${formData.get('firstName')} ${formData.get('lastName')}`,
      email: formData.get('email'),
      telephone: phone,
      formation: 'Vendeur 3.0',
      date: new Date().toISOString(),
      statut: 'En attente'
    };

    const existing = JSON.parse(localStorage.getItem('vendeur_reservations') || '[]');
    existing.push(newReservation);
    localStorage.setItem('vendeur_reservations', JSON.stringify(existing));
    
    setModalConfig({
      isOpen: true, 
      type: 'success', 
      title: 'Félicitations !', 
      message: 'Votre réservation a bien été enregistrée. Notre équipe vous contactera sous peu.'
    });
    
    e.currentTarget.reset();
    setPhone('');
  };
  const labelRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const reviewRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const rightsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.to(labelRef.current, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' })
        .to(titleRef.current, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, '-=0.3')
        .to(reviewRef.current, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, '-=0.3')
        .to(videoRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.2')
        .to(rightsRef.current, { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4');
        
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const scrollToForm = () => {
    const el = document.getElementById('formulaire');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <AlertModal 
        isOpen={modalConfig.isOpen}
        type={modalConfig.type}
        title={modalConfig.title}
        message={modalConfig.message}
        onClose={() => setModalConfig({...modalConfig, isOpen: false})}
      />
      <section ref={sectionRef} className="relative w-full bg-v-bg pt-16 pb-20 md:pt-24 md:pb-24 overflow-hidden">
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Top Label Box */}
        <div 
          ref={labelRef} 
          className="bg-gray-100 border border-gray-200 px-6 py-3 mb-6 rounded shadow-sm opacity-0 translate-y-8"
        >
           <p className="font-display font-semibold text-base md:text-xl text-v-dark">
             Le Livre "Vendeur 3.0" Vous Montrera Comment :
           </p>
        </div>

        {/* Main Headline */}
        <h1
          ref={titleRef}
          className="font-display font-extrabold text-[28px] md:text-5xl lg:text-[56px] uppercase leading-[1.1] text-v-dark opacity-0 translate-y-8 max-w-[1000px] mb-6 tracking-[-0.01em]"
        >
          MAÎTRISEZ LA PSYCHOLOGIE D'ACHAT, MULTIPLIEZ VOS VENTES, ET DEVENEZ UN STRATÈGE !
        </h1>

        {/* Ratings */}
        <div 
          ref={reviewRef} 
          className="flex flex-col sm:flex-row justify-center items-center gap-2 opacity-0 translate-y-4 mb-12"
        >
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-500" />
            ))}
          </div>
          <span className="text-base md:text-lg font-bold text-v-dark">
            4.9/5 — Plus de 2 088 Lecteurs Satisfaits
          </span>
        </div>

        {/* Content Section (Video + Card) */}
        <div className="flex flex-col lg:flex-row gap-6 items-stretch justify-center w-full max-w-[1100px]">
          
          {/* Main Video Box */}
          <div className="lg:w-[60%] flex flex-col w-full">
            <div 
              ref={videoRef}
              className="relative rounded-md overflow-hidden shadow-2xl bg-black opacity-0 translate-y-8 w-full h-full flex flex-col border border-v-dark"
            >
              {/* Video Top Banner */}
              <div className="bg-v-dark w-full py-2.5 px-3 flex items-center justify-center gap-2 text-white font-medium text-[12px] sm:text-sm">
                <Volume2 className="w-4 h-4 shrink-0" />
                <span className="truncate">Assurez-vous que votre son est ACTIVÉ !</span>
                <span className="text-white/60 font-normal hidden md:inline shrink-0">(Patientez pour le chargement)</span>
              </div>
              
              <div className="flex-1 w-full relative bg-black min-h-[300px]">
                <video 
                  controls 
                  className="w-full h-full absolute inset-0 object-contain bg-black"
                >
                  <source src="/videos/video-de-presentation.mp4" type="video/mp4" />
                  Votre navigateur ne supporte pas la balise vidéo.
                </video>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div 
            ref={rightsRef} 
            id="formulaire"
            className="lg:w-[40%] flex flex-col bg-white p-6 md:p-8 rounded-md shadow-2xl border border-gray-200 opacity-0 translate-x-8 w-full"
          >
            {/* Book Image */}
            <div className="w-full flex justify-center mb-4 min-h-[180px]">
              <img
                src="/images/book-cover.png"
                alt="Livre Vendeur 3.0"
                className="w-[160px] md:w-[200px] drop-shadow-2xl object-contain animate-float"
                loading="eager"
              />
            </div>

            {/* Meta Line */}
            <p className="text-center text-[10px] sm:text-[11px] font-mono-label uppercase tracking-widest text-v-gray-muted mb-5 border-b border-gray-100 pb-4">
              284 Pages | Stratégies Exactes | Bonus Inclus
            </p>

            <div className="text-center flex flex-col items-center">
              {/* Pricing */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 font-display text-2xl md:text-[32px] font-extrabold mb-1">
                 <span className="text-v-red">Seulement</span>
                 <span className="text-v-success">49 000 FCFA !</span>
              </div>
              
              <p className="text-[10px] md:text-xs text-v-gray mb-5">
                + Frais de livraison (2500 FCFA CM / 5000 FCFA Int)
              </p>

              <p className="text-sm text-v-dark font-medium leading-snug mb-5">
                Obtenez votre manuel "Vendeur 3.0" maintenant + Accès Immédiat aux bonus exclusifs pour décupler vos ventes.
              </p>

              {/* Form Fields & Button */}
              <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
                <div className="w-full flex flex-col border border-gray-300 rounded shadow-sm overflow-hidden bg-white text-left font-sans">
                  <div className="flex border-b border-gray-300">
                    <input name="firstName" type="text" placeholder="Prénom" className="w-1/2 p-3 outline-none border-r border-gray-300 text-sm focus:bg-gray-50 transition-colors" required />
                    <input name="lastName" type="text" placeholder="Nom" className="w-1/2 p-3 outline-none text-sm focus:bg-gray-50 transition-colors" required />
                  </div>
                  <div className="flex border-b border-gray-300">
                    <input name="email" type="email" placeholder="Adresse email" className="w-full p-3 outline-none text-sm focus:bg-gray-50 transition-colors" required />
                  </div>
                  <div className="w-full">
                    <PhoneInput
                      defaultCountry="cm"
                      value={phone}
                      onChange={(p) => setPhone(p)}
                      className="w-full flex"
                      inputClassName="!w-full !border-0 !p-3 !text-sm focus:!bg-gray-50 focus:!outline-none !shadow-none"
                      countrySelectorStyleProps={{
                        buttonClassName: "!border-0 !border-r !border-gray-300 !px-3 !bg-gray-50 !h-full hover:!bg-gray-100",
                      }}
                    />
                  </div>
                </div>

                <div className="w-full flex flex-col gap-2">
                  <button
                    type="submit"
                    className="w-full bg-v-red text-white py-4 px-4 font-display font-bold text-sm md:text-base lg:text-lg uppercase rounded shadow-cta hover:bg-v-red-dark hover:scale-[1.02] transition-transform duration-200"
                  >
                    RÉSERVER MON LIVRE MAINTENANT ➔
                  </button>
                  <p className="text-[10px] text-v-gray-muted text-center leading-snug px-2 mt-1">
                    En cliquant sur le bouton, vous acceptez de recevoir des communications concernant votre commande. Vous pouvez vous désinscrire à tout moment.
                  </p>
                </div>
              </form>

              {/* Security Badges */}
              <div className="flex items-center justify-center gap-2 text-v-gray-muted pt-3 opacity-80">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wide">Paiement 100% Sécurisé</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
    </>
  );
}
