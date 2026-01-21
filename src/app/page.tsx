'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Modal } from '@/components/ui/Modal';
import {
  Hero,
  ProblemSection,
  StatsBanner,
  SolutionSection,
  UseCasesSection,
  RoadmapSection,
  FeaturesSection,
  FAQSection,
  CTASection,
} from '@/components/sections';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <Navbar onOpenModal={openModal} />
      <main>
        <Hero onOpenModal={openModal} />
        <ProblemSection onOpenModal={openModal} />
        <StatsBanner />
        <SolutionSection onOpenModal={openModal} />
        <UseCasesSection />
        <RoadmapSection />
        <FeaturesSection />
        <FAQSection />
        <CTASection onOpenModal={openModal} />
      </main>
      <Footer />
    </>
  );
}
