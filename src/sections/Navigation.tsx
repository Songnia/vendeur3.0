import { useEffect, useRef, useState } from 'react';

export default function Navigation() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current && currentY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    const el = document.getElementById('formulaire');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 bg-v-bg/90 backdrop-blur-md border-b border-v-border transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">
        <div className="font-display font-bold text-sm uppercase tracking-[0.05em] text-v-dark">
          VENDEUR <span className="text-v-red">3.0</span>
        </div>
        <button
          onClick={scrollToForm}
          className="bg-v-red text-white font-display font-bold text-xs uppercase tracking-[0.02em] px-6 py-2.5 hover:bg-v-red-dark transition-colors duration-200"
        >
          RÉSERVER MON LIVRE
        </button>
      </div>
    </nav>
  );
}
