import React from 'react';
import UtilityBar from '@/components/UtilityBar';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProvideSection from '@/components/sections/ProvideSection';
import OverviewSection from '@/components/sections/OverviewSection';
import BenefitSection from '@/components/sections/BenefitSection';
import ContactSection from '@/components/sections/ContactSection';
import SubscribeSection from '@/components/sections/SubscribeSection';
import Footer from '@/components/Footer';

const MainLayout: React.FC = () => {
  return (
    <div className="">
      <UtilityBar />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProvideSection />
        <OverviewSection />
        <BenefitSection />
        <ContactSection />
        <SubscribeSection />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
