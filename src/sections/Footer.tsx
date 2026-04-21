export default function Footer() {
  return (
    <footer className="w-full bg-v-dark border-t border-[#333]">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm text-v-gray-light">
            © 2026 <span className="font-medium text-v-gray-muted">UN.MEDIA TV</span> — Tous droits réservés.
          </p>
          <div className="flex items-center gap-4 text-sm text-v-gray-muted">
            <a href="#" className="hover:text-white transition-colors duration-200">Conditions générales</a>
            <span className="text-v-gray-light">·</span>
            <a href="#" className="hover:text-white transition-colors duration-200">Confidentialité</a>
            <span className="text-v-gray-light">·</span>
            <a href="#" className="hover:text-white transition-colors duration-200">Support</a>
          </div>
        </div>
        <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
          <p className="font-mono-label text-xs text-v-gray">
            Douala, Cameroun — Quartier Bonapriso, Rue 1230
          </p>
          <p className="font-mono-label text-xs text-v-gray">
            contact@1000vendeurs.academy
          </p>
        </div>
      </div>
    </footer>
  );
}
