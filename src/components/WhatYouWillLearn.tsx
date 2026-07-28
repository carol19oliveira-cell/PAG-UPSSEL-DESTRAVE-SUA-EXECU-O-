import React from 'react';
import { BookOpen, UserCheck, Hand, Activity, Flame, Music, Sparkles } from 'lucide-react';
import { ModuleCard } from '../types';

export const WhatYouWillLearn: React.FC = () => {
  const modules: ModuleCard[] = [
    {
      id: 'metodo',
      title: 'Método de estudo',
      description: 'Rotina diária estruturada passo a passo para evoluir a mecânica no contrabaixo sem perder tempo com exercícios genéricos.',
      iconName: 'BookOpen',
      badgeText: 'ORGANIZAÇÃO E FOCO',
    },
    {
      id: 'postura',
      title: 'Postura correta',
      description: 'Os ajustes que fazem seus dedos responderem com mais precisão, velocidade e controle em qualquer digitação.',
      iconName: 'UserCheck',
      badgeText: 'POSTURA E LIMPEZA',
    },
    {
      id: 'independencia',
      title: 'Independência dos dedos',
      description: 'Exercícios que fazem seus dedos trabalharem de forma realmente independente, eliminando travamentos e ampliando suas possibilidades de digitação.',
      iconName: 'Hand',
      badgeText: 'FORÇA E AGILIDADE',
    },
    {
      id: 'tetrades',
      title: 'Exercícios com tétrades',
      description: 'Aplicação prática de arpejos e digitações de tétrades para conectar o braço do instrumento com clareza e precisão.',
      iconName: 'Activity',
      badgeText: 'ARPEJOS E VISÃO',
    },
    {
      id: 'pentatonicas',
      title: 'Exercícios com pentatônicas',
      description: 'Padrões mecânicos e sequências de velocidade para dominar a escala mais usada nos grooves e solos com pegada.',
      iconName: 'Flame',
      badgeText: 'VELOCIDADE E GROOVE',
    },
    {
      id: 'modos',
      title: 'Exercícios com modos gregos',
      description: 'Mecânica aplicada em todas as escalas maiores e menores para destravar o pensamento técnico e tocar com fluência.',
      iconName: 'Music',
      badgeText: 'SCALES E FLUÊNCIA',
    },
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case 'BookOpen': return <BookOpen className="w-6 h-6 text-amber-400" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-amber-400" />;
      case 'Hand': return <Hand className="w-6 h-6 text-amber-400" />;
      case 'Activity': return <Activity className="w-6 h-6 text-amber-400" />;
      case 'Flame': return <Flame className="w-6 h-6 text-amber-400" />;
      case 'Music': return <Music className="w-6 h-6 text-amber-400" />;
      default: return <Sparkles className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section className="py-14 sm:py-20 px-4 bg-radial-dark relative">
      <div className="max-w-6xl mx-auto">
        {/* Eyebrow & Section Title */}
        <div className="text-center mb-12">
          <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-slate-400 font-heading mb-2">
            CONTEÚDO PRÁTICO E APLICADO
          </p>
          <h2 className="text-2xl sm:text-4xl font-black uppercase italic tracking-tight text-white font-heading">
            O QUE VOCÊ VAI <span className="gold-text-gradient">APRENDER</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((item) => (
            <div
              key={item.id}
              className="bg-[#0d1322] border border-slate-800 hover:border-amber-500/40 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group shadow-lg"
            >
              <div>
                {/* Icon Box */}
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-amber-500/30 flex items-center justify-center mb-5 group-hover:bg-amber-500/10 transition-colors">
                  {getIcon(item.iconName)}
                </div>

                {/* Title */}
                <h3 className="text-lg font-black uppercase tracking-tight text-white font-heading mb-3 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Bottom Badge Tag */}
              {item.badgeText && (
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-amber-400/90 font-heading">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{item.badgeText}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
