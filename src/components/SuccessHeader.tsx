import React from 'react';
import { CheckCircle } from 'lucide-react';

export const SuccessHeader: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#090d18]/95 backdrop-blur-md border-b border-amber-500/20 shadow-lg">
      {/* Top Banner Notice */}
      <div className="bg-emerald-950/90 py-2.5 px-4 text-center">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-emerald-300">
          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Sua compra foi realizada com sucesso!</span>
          <span className="hidden sm:inline text-emerald-500/60">•</span>
          <span className="text-emerald-100 font-normal">
            Sua Biblioteca de Frases já está garantida no seu e-mail.
          </span>
        </div>
      </div>
    </header>
  );
};
