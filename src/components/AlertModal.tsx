import { CheckCircle, AlertTriangle } from 'lucide-react';

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  type?: 'success' | 'error';
}

export default function AlertModal({ isOpen, onClose, title, message, type = 'success' }: AlertModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 font-sans border-0 m-0">
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-sm overflow-hidden transform transition-all animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8 text-center pb-6">
          <div className="mx-auto flex items-center justify-center mb-5">
            {type === 'success' ? (
              <CheckCircle className="h-16 w-16 text-[#22c55e]" />
            ) : (
              <AlertTriangle className="h-16 w-16 text-[#ef4444]" />
            )}
          </div>
          
          <h3 className={`text-xl font-display font-bold mb-3 ${type === 'success' ? 'text-[#22c55e]' : 'text-[#ef4444]'}`}>
            {title}
          </h3>
          <p className="text-[15px] leading-relaxed text-gray-600 font-medium">
            {message}
          </p>
        </div>
        
        <div className="px-8 pb-8">
          <button
            onClick={onClose}
            className={`w-full py-3 px-4 rounded font-display font-bold text-white shadow-lg hover:scale-[1.02] transition-transform ${
              type === 'success' ? 'bg-[#22c55e] hover:bg-green-600' : 'bg-[#ef4444] hover:bg-red-600'
            }`}
          >
            {type === 'success' ? 'GÉNIAL, MERCI !' : "OK, J'AI COMPRIS"}
          </button>
        </div>
      </div>
    </div>
  );
}
