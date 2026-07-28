import React, { useState, useEffect } from 'react';
import { Check, Lock, Sparkles, ShieldCheck, ArrowRight, Clock } from 'lucide-react';

interface UpsellOfferCardProps {
  onAccept: () => void;
  onDecline: () => void;
}

export const UpsellOfferCard: React.FC<UpsellOfferCardProps> = ({ onAccept, onDecline }) => {
  // Countdown timer state initialized at 14 minutes 34 seconds (874 seconds)
  const [timeLeft, setTimeLeft] = useState(874);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section id="oferta" className="py-12 sm:py-16 px-4 bg-radial-dark relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-md mx-auto relative z-10 flex flex-col items-center">
        {/* Top Urgency Header Pill (exact match to top pill in reference image) */}
        <div className="mb-5 inline-flex items-center gap-2 bg-[#16120b] border border-amber-600/40 px-4 py-2 rounded-full shadow-lg">
          <Clock className="w-4 h-4 text-amber-500 animate-pulse" />
          <span className="text-amber-200 text-xs sm:text-sm font-medium tracking-wide">
            Desconto Especial Expira em: <strong className="text-amber-400 font-mono font-bold">{formatTime(timeLeft)}</strong>
          </span>
        </div>

        {/* Main Card Container (Dark Navy/Slate with glowing border) */}
        <div className="w-full bg-[#0a0d18] border border-slate-800 sm:border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative overflow-hidden text-slate-100">
          
          {/* Top Pill Tag inside Card */}
          <div className="flex justify-center mb-6">
            <span className="bg-gradient-to-r from-amber-600 to-amber-500 text-black font-black text-xs uppercase tracking-widest px-5 py-1.5 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.4)]">
              OFERTA EXCLUSIVA DE HOJE
            </span>
          </div>

          {/* Pricing Header */}
          <div className="text-center mb-6">
            <p className="text-slate-400 text-xs sm:text-sm font-medium mb-1">
              De <span className="line-through text-red-500 font-semibold">R$ 97,90</span> por apenas
            </p>

            <div className="flex items-baseline justify-center gap-1 font-heading">
              <span className="text-2xl sm:text-3xl font-extrabold text-amber-500">R$</span>
              <span className="text-5xl sm:text-6xl font-black text-white tracking-tight">27,90</span>
            </div>

            <p className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-amber-400/90 mt-2 font-heading">
              PAGAMENTO ÚNICO, SEM MENSALIDADES.
            </p>

            <p className="text-[11px] sm:text-xs text-slate-300 font-medium mt-3 leading-relaxed max-w-xs mx-auto">
              Oferta exclusiva para novos alunos da Biblioteca de Frases. Disponível apenas nesta etapa da compra.
            </p>
          </div>

          {/* Checklist (Exactly as structured in reference card layout) */}
          <div className="space-y-2.5 my-6 pt-4 border-t border-slate-800/80 text-xs sm:text-sm text-slate-200">
            <div className="flex items-start gap-2.5">
              <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                ✓
              </div>
              <span>Treinamento Completo Destrave Sua Execução</span>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                ✓
              </div>
              <span>Acesso à Área de Membros Exclusiva</span>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                ✓
              </div>
              <span>Exercícios de Independência dos Dedos</span>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                ✓
              </div>
              <span>Técnicas de Agilidade, Limpeza e Precisão</span>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                ✓
              </div>
              <span>Vídeos em Versão Lenta Passo a Passo</span>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                ✓
              </div>
              <span>Acesso Imediato na Mesma Conta</span>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                ✓
              </div>
              <span>Suporte para Dúvidas na Plataforma</span>
            </div>
          </div>

          {/* Action CTA Button (Bright glowing yellow/amber pill button) */}
          <div className="mt-8 flex flex-col items-center gap-3 w-full">
            <cakto-upsell-buttons className="w-full flex flex-col items-center">
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
                <div className="w-full group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-500 text-black font-black text-sm sm:text-base uppercase tracking-wider py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] shadow-[0_0_25px_rgba(245,158,11,0.5)] cursor-pointer font-heading">
                  <span>QUERO MEU ACESSO AGORA</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </cakto-upsell-accept>

              {/* Trust Footer Badges under CTA */}
              <div className="flex items-center justify-between w-full pt-3 text-[10px] sm:text-xs text-slate-400 font-medium border-t border-slate-800/60 my-3">
                <div className="flex items-center gap-1">
                  <Lock className="w-3 h-3 text-amber-500" />
                  <span>Compra 100% Segura</span>
                </div>
                <div className="flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-500" />
                  <span>Acesso Imediato</span>
                </div>
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-amber-500" />
                  <span>Garantia de 7 Dias</span>
                </div>
              </div>

              {/* Secondary Decline option */}
              <cakto-upsell-reject
                upsell-reject-url="members_area"
                className="w-full block text-center"
              >
                <span className="text-xs text-slate-400 hover:text-slate-200 underline underline-offset-4 transition-colors cursor-pointer inline-block">
                  Não, vou continuar apenas com a Biblioteca.
                </span>
              </cakto-upsell-reject>
            </cakto-upsell-buttons>
          </div>

        </div>
      </div>
    </section>
  );
};

