import React from 'react';
import { ShieldAlert, Headphones } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-10 px-4 bg-[#05070f] border-t border-slate-900 text-slate-400 text-xs text-center">
      <div className="max-w-4xl mx-auto space-y-4">
        <div className="flex flex-wrap items-center justify-center gap-4 text-slate-300 font-semibold font-heading">
          <span className="flex items-center gap-1.5 text-amber-400">
            <Headphones className="w-4 h-4" /> Suporte Individual
          </span>
          <span>•</span>
          <a href="#oferta" className="hover:text-amber-400 transition-colors">Acesso Imediato</a>
          <span>•</span>
          <span className="flex items-center gap-1 text-slate-400">
            <ShieldAlert className="w-3.5 h-3.5" /> Compra Segura
          </span>
        </div>

        <p className="text-slate-400 font-medium max-w-xl mx-auto leading-relaxed">
          BIBLIOTECA DE FRASES PARA CONTRABAIXO • DESTRAVE SUA EXECUÇÃO <br />
          Todos os direitos reservados © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};
