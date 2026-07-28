import React, { useState, useEffect } from 'react';
import { ShieldCheck, CheckCircle2, X } from 'lucide-react';
import { RecentBuyer } from '../types';

const mockBuyers: RecentBuyer[] = [
  { id: '1', name: 'Júlio S.', location: 'Rio de Janeiro/RJ', timeAgo: 'há 2 minutos' },
  { id: '2', name: 'Rodrigo M.', location: 'São Paulo/SP', timeAgo: 'há 4 minutos' },
  { id: '3', name: 'Matheus K.', location: 'Belo Horizonte/MG', timeAgo: 'há 6 minutos' },
  { id: '4', name: 'Felipe B.', location: 'Curitiba/PR', timeAgo: 'há 1 minuto' },
  { id: '5', name: 'Carlos E.', location: 'Salvador/BA', timeAgo: 'há 3 minutos' },
  { id: '6', name: 'Daniel P.', location: 'Porto Alegre/RS', timeAgo: 'há 5 minutos' },
];

export const SocialProofToast: React.FC = () => {
  const [currentBuyer, setCurrentBuyer] = useState<RecentBuyer | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let index = 0;
    let hideTimer: NodeJS.Timeout;

    // Initial delay before showing first notification (8 seconds)
    const initialTimer = setTimeout(() => {
      showBuyer(0);
    }, 8000);

    const showBuyer = (buyerIndex: number) => {
      setCurrentBuyer(mockBuyers[buyerIndex]);
      setIsVisible(true);

      // Auto hide notification after 5 seconds
      hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    // Cycle every 25 seconds
    const interval = setInterval(() => {
      index = (index + 1) % mockBuyers.length;
      showBuyer(index);
    }, 25000);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(hideTimer);
      clearInterval(interval);
    };
  }, []);

  if (!currentBuyer || !isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-40 max-w-xs sm:max-w-sm bg-[#0d1322]/95 border border-amber-500/30 rounded-xl p-3 shadow-2xl backdrop-blur-md text-xs animate-in fade-in slide-in-from-bottom-5 duration-500 flex items-start gap-3">
      <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-400 mt-0.5">
        <CheckCircle2 className="w-4 h-4" />
      </div>

      <div className="flex-1 min-w-0 pr-2">
        <div className="flex items-center gap-1 text-[11px] font-bold text-white font-heading">
          <span>{currentBuyer.name}</span>
          <span className="text-slate-400 text-[10px] font-normal">adicionou à compra!</span>
        </div>
        <p className="text-[11px] text-amber-400 font-medium truncate">
          Destrave Sua Execução
        </p>
        <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-1">
          <span className="flex items-center gap-1 text-emerald-400">
            <ShieldCheck className="w-3 h-3" /> {currentBuyer.location}
          </span>
          <span>•</span>
          <span>{currentBuyer.timeAgo}</span>
        </div>
      </div>

      <button
        onClick={() => setIsVisible(false)}
        className="text-slate-400 hover:text-white p-0.5 rounded cursor-pointer shrink-0"
        aria-label="Fechar notificação"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
