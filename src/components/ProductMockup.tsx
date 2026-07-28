import React from 'react';
import { Sparkles, Zap, Award } from 'lucide-react';

export const ProductMockup: React.FC = () => {
  return (
    <div className="relative mx-auto w-full max-w-sm sm:max-w-md group">
      {/* Background glow effects */}
      <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>

      {/* Main Cover Card */}
      <div className="relative bg-[#0d1322] border-2 border-amber-500/40 rounded-2xl p-6 sm:p-8 overflow-hidden shadow-2xl">
        {/* Top Metallic Tag */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-amber-400 font-heading">
              ELEVE SEU GROOVE
            </span>
          </div>
          <span className="bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
            EDITION 1-CLICK UPSELL
          </span>
        </div>

        {/* Inner Graphic Design Box */}
        <div className="my-6 relative py-8 px-4 bg-gradient-to-b from-zinc-950 via-[#0a0f1d] to-black rounded-xl border border-amber-500/20 text-center flex flex-col items-center justify-center overflow-hidden">
          {/* Decorative background grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
          
          {/* Subtle bass neck silhouette or icon */}
          <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-4 text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
            <Zap className="w-8 h-8 text-amber-400" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-black italic uppercase tracking-tight text-white font-heading leading-tight">
            DESTRAVE SUA <br />
            <span className="gold-text-gradient">EXECUÇÃO</span>
          </h3>

          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent my-3"></div>

          <p className="text-xs font-semibold uppercase tracking-wider text-slate-300">
            TÉCNICA, MECÂNICA E INDEPENDÊNCIA PARA CONTRABAIXO
          </p>

          <div className="mt-4 inline-flex items-center gap-1.5 bg-amber-400 text-black text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded shadow-md font-heading">
            <Sparkles className="w-3 h-3" /> VOLUME TÉCNICO EXCLUSIVO
          </div>
        </div>

        {/* Footer Sub-badges */}
        <div className="grid grid-cols-3 gap-2 pt-2 text-center text-[10px] text-slate-400 uppercase font-semibold">
          <div className="p-2 bg-slate-900/60 rounded border border-slate-800">
            <span className="block text-amber-400 font-bold">PRECISÃO</span>
            100% Prática
          </div>
          <div className="p-2 bg-slate-900/60 rounded border border-slate-800">
            <span className="block text-amber-400 font-bold">AGILIDADE</span>
            Dedos Soltos
          </div>
          <div className="p-2 bg-slate-900/60 rounded border border-slate-800">
            <span className="block text-amber-400 font-bold">CONTROLE</span>
            Livre de Vícios
          </div>
        </div>
      </div>
    </div>
  );
};
