import React, { useState, useEffect } from 'react';
import { CheckCircle, Zap, ShieldCheck, ArrowRight, Loader2, X, AlertTriangle } from 'lucide-react';

interface UpsellModalProps {
  isOpen: boolean;
  type: 'accept' | 'decline';
  onClose: () => void;
  onConfirmAccept: () => void;
  onConfirmDecline: () => void;
}

export const UpsellModal: React.FC<UpsellModalProps> = ({
  isOpen,
  type,
  onClose,
  onConfirmAccept,
  onConfirmDecline,
}) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (isOpen && type === 'accept') {
      setProgress(0);
      setIsDone(false);

      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsDone(true);
            return 100;
          }
          return prev + 25;
        });
      }, 400);

      return () => clearInterval(interval);
    }
  }, [isOpen, type]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#0c111e] border-2 border-amber-500/40 rounded-3xl max-w-lg w-full p-6 sm:p-8 text-white relative shadow-[0_0_50px_rgba(245,158,11,0.25)] overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'accept' ? (
          <div>
            {!isDone ? (
              <div className="text-center py-8 space-y-5">
                <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto animate-pulse">
                  <Loader2 className="w-8 h-8 animate-spin" />
                </div>

                <h3 className="text-xl font-black uppercase italic tracking-tight font-heading">
                  PROCESSANDO COMPRA EM <span className="gold-text-gradient">1-CLIQUE</span>
                </h3>

                <p className="text-sm text-slate-300">
                  Adicionando <strong className="text-amber-300">Destrave Sua Execução</strong> ao seu pedido da Biblioteca de Frases...
                </p>

                {/* Progress bar */}
                <div className="w-full bg-slate-900 h-3 rounded-full overflow-hidden border border-slate-800">
                  <div
                    className="bg-gradient-to-r from-amber-500 to-yellow-400 h-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>

                <span className="text-xs font-mono text-amber-400 font-bold block">
                  {progress}% Concluído
                </span>
              </div>
            ) : (
              <div className="text-center py-4 space-y-5 animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                  <CheckCircle className="w-9 h-9" />
                </div>

                <h3 className="text-2xl font-black uppercase italic tracking-tight font-heading">
                  TREINAMENTO <span className="text-emerald-400">ADICIONADO!</span>
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  Parabéns! O treinamento <strong className="text-white">Destrave Sua Execução</strong> foi adicionado com sucesso à sua área de membros.
                </p>

                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 text-left space-y-2 text-xs">
                  <div className="flex justify-between items-center text-slate-300">
                    <span>• Biblioteca de Frases v1</span>
                    <span className="text-emerald-400 font-bold">Garantido</span>
                  </div>
                  <div className="flex justify-between items-center text-amber-300 font-semibold pt-1 border-t border-slate-800">
                    <span>+ Destrave Sua Execução (Upsell R$ 27,90)</span>
                    <span className="text-emerald-400 font-bold">Adicionado</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onConfirmAccept}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-400 text-black font-black uppercase tracking-wider py-4 rounded-xl font-heading hover:from-amber-400 hover:to-amber-500 transition-all cursor-pointer shadow-lg"
                  >
                    <span>ACESSAR MINHA ÁREA DE MEMBROS</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-[11px] text-slate-400">
                  📧 Confirmamos os detalhes no seu e-mail de compra.
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-4 space-y-5">
            <div className="w-16 h-16 rounded-full bg-amber-500/10 border-2 border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-8 h-8" />
            </div>

            <h3 className="text-xl sm:text-2xl font-black uppercase italic font-heading">
              TEM CERTEZA QUE DESEJA <span className="text-amber-400">RECUSAR?</span>
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              Esta oferta especial de <strong className="text-amber-300">R$ 27,90 (80% OFF)</strong> é exclusiva para esta página de pós-compra. Se você fechar agora, não poderá adicionar este complemento por este valor promocional depois.
            </p>

            <div className="space-y-3 pt-2">
              <button
                onClick={onConfirmAccept}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-400 text-black font-black uppercase tracking-wider py-3.5 rounded-xl font-heading hover:from-amber-400 hover:to-amber-500 transition-all cursor-pointer"
              >
                <Zap className="w-5 h-5" />
                <span>QUERO APROVEITAR POR R$ 27,90</span>
              </button>

              <button
                onClick={onConfirmDecline}
                className="w-full text-xs text-slate-400 hover:text-slate-200 underline py-2 cursor-pointer transition-colors"
              >
                Sim, entendo os riscos e quero continuar apenas para a Área de Membros sem o treinamento.
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
