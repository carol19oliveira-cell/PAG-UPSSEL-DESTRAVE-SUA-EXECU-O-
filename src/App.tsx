import React, { useState } from 'react';
import { SuccessHeader } from './components/SuccessHeader';
import { HeroSection } from './components/HeroSection';
import { WhatYouWillLearn } from './components/WhatYouWillLearn';
import { WhyItIsDifferent } from './components/WhyItIsDifferent';
import { UpsellOfferCard } from './components/UpsellOfferCard';
import { Footer } from './components/Footer';
import { SocialProofToast } from './components/SocialProofToast';
import { UpsellModal } from './components/UpsellModal';

export default function App() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'accept' | 'decline';
  }>({
    isOpen: false,
    type: 'accept',
  });

  const handleOpenAccept = () => {
    setModalState({ isOpen: true, type: 'accept' });
  };

  const handleOpenDecline = () => {
    setModalState({ isOpen: true, type: 'decline' });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleConfirmAccept = () => {
    // Action when user completes or agrees to upsell
    setModalState({ isOpen: true, type: 'accept' });
  };

  const handleConfirmDecline = () => {
    // Action when user proceeds to members area without upsell
    alert('Redirecionando para a Área de Membros da Biblioteca de Frases...');
    setModalState({ isOpen: false, type: 'decline' });
  };

  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 font-sans antialiased selection:bg-amber-500 selection:text-black">
      {/* 1. Header with purchase confirmation banner & countdown */}
      <SuccessHeader />

      {/* Main Container */}
      <main className="relative overflow-hidden">
        {/* 2. Hero Section */}
        <HeroSection
          onAccept={handleOpenAccept}
          onDecline={handleOpenDecline}
        />

        {/* 3. Seção: O que você vai aprender */}
        <WhatYouWillLearn />

        {/* 5. Seção: Por que este treinamento é diferente */}
        <WhyItIsDifferent />

        {/* 6. Seção: Oferta (One-Click Upsell Card) */}
        <UpsellOfferCard
          onAccept={handleOpenAccept}
          onDecline={handleOpenDecline}
        />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Social Proof Toast Popup (Bottom Left) */}
      <SocialProofToast />

      {/* Interactive 1-Click Upsell Modal / Action Confirmation */}
      <UpsellModal
        isOpen={modalState.isOpen}
        type={modalState.type}
        onClose={handleCloseModal}
        onConfirmAccept={handleConfirmAccept}
        onConfirmDecline={handleConfirmDecline}
      />
    </div>
  );
}
