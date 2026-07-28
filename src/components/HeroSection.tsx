import React from 'react';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface HeroSectionProps {
  onAccept: () => void;
  onDecline: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onAccept, onDecline }) => {
  return (
    <section className="relative pt-8 pb-12 sm:pt-12 sm:pb-16 px-4 overflow-hidden bg-radial-dark">
      {/* Background glow circle */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Main Headline */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase italic tracking-tight text-white leading-tight font-heading mb-6">
          Você já tem as <span className="text-amber-400">frases</span>.{' '}
          <span className="block mt-2">
            Agora faça sua <span className="gold-text-gradient">mão responder</span> ao que sua <span className="gold-text-gradient">mente quer tocar</span>.
          </span>
        </h1>

        {/* Image right below headline */}
        <div className="my-6 max-w-2xl mx-auto flex justify-center">
          <img
            src="https://i.ibb.co/jPgjjyB8/Chat-GPT-Image-27-de-jul-de-2026-22-56-11.webp"
            alt="Destrave Sua Execução - Mockup"
            className="w-full h-auto max-h-[420px] object-contain rounded-2xl drop-shadow-[0_10px_35px_rgba(245,158,11,0.25)] hover:scale-[1.01] transition-transform duration-300"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Subheadline */}
        <div className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal mb-8 space-y-4">
          <p>
            Existe um segundo <strong className="text-amber-400 font-bold">desafio</strong> que muitos baixistas só percebem quando começam a colocar essas frases em prática: <strong className="text-white">a execução</strong>.
          </p>

          <p>
            Você sabe exatamente o que quer tocar... mas sua mão não consegue acompanhar suas ideias com precisão.
          </p>

          <p className="text-amber-200 font-semibold bg-amber-500/10 border border-amber-500/30 py-3 px-4 rounded-xl">
            Foi para resolver esse problema que eu criei o treinamento <strong className="gold-text-gradient font-black font-heading tracking-wide uppercase">DESTRAVE SUA EXECUÇÃO</strong>
          </p>
        </div>

        {/* Hero CTA Button */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 max-w-xl mx-auto w-full">
          <cakto-upsell-buttons className="w-full flex flex-col items-center justify-center">
            <cakto-upsell-accept
              bg-color="#0f7865"
              text-color="#ffffff"
              upsell-accept-url="members_area"
              offer-id="i77apoq"
              app-base-url="https://app.cakto.com.br"
              offer-type="upsell"
              upsell-reject-url="members_area"
              className="w-full block"
            >
              <div className="w-full group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-500 text-black font-black text-base sm:text-xl uppercase tracking-wider py-4 sm:py-5 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 gold-button-glow cursor-pointer font-heading">
                <Zap className="w-6 h-6 fill-black text-black shrink-0 animate-pulse" />
                <span>SIM! QUERO DESTRAVAR MINHA EXECUÇÃO</span>
                <ArrowRight className="w-6 h-6 shrink-0 group-hover:translate-x-1 transition-transform" />
              </div>
            </cakto-upsell-accept>

            {/* Micro trust info */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 font-medium my-3">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Compra em 1-Clique segura
              </span>
              <span className="text-slate-600">•</span>
              <span>Acesso Imediato</span>
              <span className="text-slate-600">•</span>
              <span>Garantia de 7 Dias</span>
            </div>

            {/* Decline link */}
            <cakto-upsell-reject
              upsell-reject-url="members_area"
              className="w-full block text-center"
            >
              <span className="text-xs sm:text-sm text-slate-400 hover:text-slate-200 underline underline-offset-4 transition-colors cursor-pointer inline-block">
                Não, vou continuar apenas com a Biblioteca.
              </span>
            </cakto-upsell-reject>
          </cakto-upsell-buttons>
        </div>
      </div>
    </section>
  );
};
