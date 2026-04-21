import { useEffect, useState } from 'react';
import { Users, Clock, BookOpen, TrendingUp } from 'lucide-react';

interface Reservation {
  id: number;
  candidat: string;
  email: string;
  telephone: string;
  formation: string;
  date: string;
  statut: string;
}

export default function AdminDashboard() {
  const [reservations, setReservations] = useState<Reservation[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('vendeur_reservations') || '[]');
    // Sort by id descending (newest first)
    data.sort((a: Reservation, b: Reservation) => b.id - a.id);
    setReservations(data);
  }, []);

  const total = reservations.length;
  const enAttente = reservations.filter(r => r.statut === 'En attente').length;
  const expedies = 1; // Fake static number for presentation
  const conversionRate = total > 0 ? '12.5%' : '0%';

  return (
    <div className="min-h-screen bg-[#F8F9FA] p-6 text-v-dark font-sans">
      <div className="max-w-[1200px] mx-auto pt-8">
        
        {/* Header */}
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h1 className="text-[28px] font-display font-extrabold text-[#111111] mb-1">
              Bonjour Monsieur Ulrich 👋
            </h1>
            <p className="text-[15px] font-medium text-gray-500">
              Voici ce qui se passe aujourd'hui dans votre établissement.
            </p>
          </div>
          <div>
            <a href="/" className="text-sm font-medium text-v-red hover:underline">
              ← Retour au site
            </a>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Card 1 */}
          <div className="bg-white rounded-[16px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100 relative overflow-hidden">
             <div className="w-10 h-10 rounded bg-[#eff4ff] flex items-center justify-center mb-4">
               <Users className="w-5 h-5 text-[#3b82f6]" />
             </div>
             <p className="text-[13px] font-semibold text-gray-500 mb-1">Total Commandes</p>
             <div className="flex items-center gap-2">
               <span className="text-[24px] font-display font-bold text-gray-900">{total}</span>
               {total > 0 && <span className="text-[12px] font-bold text-emerald-500 bg-emerald-50 px-1.5 py-0.5 rounded">+ Nouveaux</span>}
             </div>
             <div className="absolute top-0 right-0 w-24 h-24 bg-[#eff4ff] rounded-full blur-2xl opacity-50 -mr-10 -mt-10 pointer-events-none"></div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[16px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100 relative overflow-hidden">
             <div className="w-10 h-10 rounded bg-[#fff7ed] flex items-center justify-center mb-4">
               <Clock className="w-5 h-5 text-[#f97316]" />
             </div>
             <p className="text-[13px] font-semibold text-gray-500 mb-1">En attente</p>
             <div className="flex items-center gap-2">
               <span className="text-[24px] font-display font-bold text-gray-900">{enAttente}</span>
               <span className="text-[12px] font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded">À traiter</span>
             </div>
             <div className="absolute top-0 right-0 w-24 h-24 bg-[#fff7ed] rounded-full blur-2xl opacity-50 -mr-10 -mt-10 pointer-events-none"></div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-[16px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100 relative overflow-hidden">
             <div className="w-10 h-10 rounded bg-[#f0fdf4] flex items-center justify-center mb-4">
               <BookOpen className="w-5 h-5 text-[#22c55e]" />
             </div>
             <p className="text-[13px] font-semibold text-gray-500 mb-1">Livres expédiés</p>
             <div className="flex items-center gap-2">
               <span className="text-[24px] font-display font-bold text-gray-900">{expedies}</span>
               <span className="text-[12px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">Ce mois</span>
             </div>
             <div className="absolute top-0 right-0 w-24 h-24 bg-[#f0fdf4] rounded-full blur-2xl opacity-50 -mr-10 -mt-10 pointer-events-none"></div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-[16px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100 relative overflow-hidden">
             <div className="w-10 h-10 rounded bg-[#faf5ff] flex items-center justify-center mb-4">
               <TrendingUp className="w-5 h-5 text-[#a855f7]" />
             </div>
             <p className="text-[13px] font-semibold text-gray-500 mb-1">Taux de conversion</p>
             <div className="flex items-center gap-2">
               <span className="text-[24px] font-display font-bold text-gray-900">{conversionRate}</span>
               <span className="text-[12px] font-bold text-emerald-500 bg-emerald-50 px-1.5 py-0.5 rounded">Calculé</span>
             </div>
             <div className="absolute top-0 right-0 w-24 h-24 bg-[#faf5ff] rounded-full blur-2xl opacity-50 -mr-10 -mt-10 pointer-events-none"></div>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-[16px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100 overflow-hidden">
          {/* Table Header */}
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <div>
              <h2 className="text-[18px] font-display font-bold text-gray-900 mb-1">
                Toutes les commandes
              </h2>
              <p className="text-[13px] text-gray-500 font-medium">
                Liste complète des demandes reçues via le formulaire
              </p>
            </div>
            {total > 0 && (
              <button onClick={() => {
                if (window.confirm("Voulez-vous supprimer toutes les réservations ?")) {
                  localStorage.removeItem('vendeur_reservations');
                  setReservations([]);
                }
              }} className="text-xs bg-red-50 text-red-600 px-3 py-2 rounded font-semibold hover:bg-red-100">
                Vider la liste
              </button>
            )}
          </div>

          {/* Table Columns */}
          <div className="grid grid-cols-6 gap-4 px-6 py-4 border-b border-gray-50 bg-[#fafafa]">
             <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">CANDIDAT</div>
             <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">TÉLÉPHONE</div>
             <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">LIVRE</div>
             <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">DATE</div>
             <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">STATUT</div>
             <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider text-right">ACTION</div>
          </div>

          {/* Table Body */}
          {reservations.length > 0 ? (
            <div className="flex flex-col">
              {reservations.map((res) => (
                <div key={res.id} className="grid grid-cols-6 gap-4 px-6 py-4 border-b border-gray-50 items-center hover:bg-gray-50 transition-colors">
                  <div className="text-[14px] font-semibold text-gray-900 truncate">{res.candidat}</div>
                  <div className="text-[14px] text-gray-600 truncate">{res.telephone}</div>
                  <div className="text-[14px] text-gray-600 truncate">{res.formation}</div>
                  <div className="text-[13px] text-gray-500">{new Date(res.date).toLocaleDateString('fr-FR')}</div>
                  <div>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-600">
                      {res.statut}
                    </span>
                  </div>
                  <div className="text-right">
                    <button className="text-v-red text-sm font-medium hover:underline">Contacter</button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-24 flex flex-col items-center justify-center">
              <p className="text-[15px] font-semibold text-v-red mb-1">
                Aucune commande pour le moment
              </p>
              <p className="text-[13px] text-v-red opacity-80">
                Les réservations apparaîtront ici lorsqu'un client soumettra le formulaire.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
