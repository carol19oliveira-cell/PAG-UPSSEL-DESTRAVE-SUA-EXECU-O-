import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import heroMockupAsset from '../assets/hero-mockup.webp';

const FALLBACK_IMAGE_URL = 'https://i.ibb.co/Rk9vwGmG/Chat-GPT-Image-27-de-jul-de-2026-22-56-11-1.webp';

interface HeroSectionProps {
  onAccept: () => void;
  onDecline: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onAccept, onDecline }) => {
  const [imgSrc, setImgSrc] = useState<string>(heroMockupAsset || '/hero-mockup.webp');

  const handleImageError = () => {
    if (imgSrc !== FALLBACK_IMAGE_URL) {
      setImgSrc(FALLBACK_IMAGE_URL);
    }
  };

  return (
    <section className="relative pt-8 pb-12 sm:pt-12 sm:pb-16 px-4 overflow-hidden bg-radial-dark">
      {/* Background glow circle */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Main Headline */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase italic tracking-tight text-white leading-tight font-heading mb-3">
          Sua evolução <span className="text-amber-400">não termina aqui</span>.
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-2xl text-slate-200 max-w-3xl mx-auto font-medium leading-relaxed mb-6">
          Desenvolva a <span className="gold-text-gradient font-bold">execução necessária</span> para aproveitar ao máximo tudo o que acabou de adquirir.
        </p>

        {/* Image right below headline with instant loading */}
        <div className="my-4 max-w-sm sm:max-w-md mx-auto flex justify-center px-4">
          <div className="relative w-full flex items-center justify-center">
            <img
              src={imgSrc}
              alt="Destrave Sua Execução - Mockup"
              width={1535}
              height={1024}
              loading="eager"
              // @ts-ignore
              fetchPriority="high"
              decoding="async"
              onError={handleImageError}
              className="w-full max-h-[260px] sm:max-h-[300px] object-contain drop-shadow-[0_8px_25px_rgba(245,158,11,0.18)] hover:scale-[1.01] transition-transform duration-300"
            />
          </div>
        </div>

        {/* Highlighted Callout Below Image */}
        <p className="text-xs sm:text-sm md:text-base font-extrabold text-amber-300 uppercase tracking-wider font-heading mt-2 mb-6 text-center px-2">
          Você já expandiu seu vocabulário de frases.
        </p>

        {/* Subheadline */}
        <div className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal mb-8 space-y-4">
          <p>
            Agora existe um segundo <strong className="text-amber-400 font-bold">desafio</strong> que muitos baixistas só percebem quando começam a colocar essas frases em prática: <strong className="text-white">a execução</strong>.
          </p>

          <p>
            Você sabe exatamente o que quer tocar... mas sua mão não consegue acompanhar suas ideias com precisão.
          </p>

          <p className="text-amber-200 font-semibold bg-amber-500/10 border border-amber-500/30 py-3 px-4 rounded-xl">
            Foi para resolver esse problema que eu criei o treinamento <strong className="gold-text-gradient font-black font-heading tracking-wide uppercase">DESTRAVE SUA EXECUÇÃO</strong>
          </p>
        </div>

        {/* Hero CTA Offer Callout */}
        <div className="mt-8 mb-2 flex flex-col items-center text-center max-w-xl mx-auto w-full bg-slate-900/80 border border-amber-500/40 rounded-2xl p-4 sm:p-5 shadow-lg backdrop-blur-sm">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wide text-amber-400 flex items-center justify-center gap-1.5 font-heading">
            <span>⭐</span> Oferta exclusiva para novos alunos da Biblioteca
          </span>
          <div className="my-2 flex flex-wrap items-baseline justify-center gap-2 sm:gap-3">
            <span className="text-sm sm:text-base font-medium text-slate-400 line-through decoration-rose-500/80 decoration-2">De R$ 97,90</span>
            <span className="text-sm sm:text-base font-semibold text-slate-200">por apenas</span>
            <span className="text-3xl sm:text-4xl font-black text-amber-400 font-heading">R$ 59,90</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 font-medium">
            Pagamento único <span className="text-amber-500/80 mx-1">•</span> Sem mensalidade <span className="text-amber-500/80 mx-1">•</span> Acesso vitalício
          </p>
        </div>

        {/* Hero CTA Button */}
        <div className="flex flex-col items-center justify-center gap-4 max-w-xl mx-auto w-full">
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
