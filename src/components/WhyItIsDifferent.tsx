import React from 'react';
import { Target, CheckCircle2, XCircle } from 'lucide-react';

export const WhyItIsDifferent: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 px-4 bg-[#080c17] relative border-t border-slate-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Target className="w-4 h-4" /> DIRETO AO PONTO
          </div>
          <h2 className="text-2xl sm:text-4xl font-black uppercase italic tracking-tight text-white font-heading">
            Apenas o que <span className="gold-text-gradient">realmente funciona.</span>
          </h2>
        </div>

        {/* Content Box */}
        <div className="bg-[#0d1322] border border-amber-500/30 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="space-y-6 text-slate-200 text-base sm:text-lg leading-relaxed">
            <p className="font-medium text-white text-lg sm:text-xl border-b border-slate-800 pb-4">
              Este treinamento reúne apenas os exercícios que realmente utilizei para desenvolver minha execução ao longo dos anos.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
              <div className="bg-red-950/30 border border-red-900/40 rounded-xl p-4 flex items-center gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                <span className="text-red-200 font-semibold text-sm sm:text-base">Sem exercícios desnecessários</span>
              </div>
              <div className="bg-red-950/30 border border-red-900/40 rounded-xl p-4 flex items-center gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                <span className="text-red-200 font-semibold text-sm sm:text-base">Sem enrolação teórica</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/20 to-amber-500/10 border border-amber-500/40 rounded-xl p-5 flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-300 font-extrabold uppercase tracking-wide block text-sm sm:text-base mb-1 font-heading">
                  100% PRÁTICA APLICADA
                </strong>
                <p className="text-slate-100 font-medium text-base sm:text-lg">
                  Somente técnica focada para você ganhar precisão, controle, velocidade e independência de forma imediata.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
