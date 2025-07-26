import React from 'react';
import HeroContent from './HeroContent';
import HeroCarousel from './HeroCarousel';
import SquareFitIcon from '../icons/SquareFitIcon';
import StarIcon from '../icons/StarIcon';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-primary text-white md:bg-primary/80">
      <div className="main-layout py-12">
        <div className="pb-32 md:pb-0">
          <HeroContent />
        </div>
        <div className="absolute inset-y-10 right-0 w-full overflow-visible rounded-xl md:right-20 md:w-3/12 lg:right-44">
          <HeroCarousel />
        </div>
      </div>

      {/* STATS: icon + angka */}
      <div className="bg-white pt-32 md:pt-0">
        <div className="main-layout flex py-8 text-black">
          <div className="flex w-full justify-between md:justify-start md:gap-10 lg:gap-40">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <SquareFitIcon className="h-8 w-8" />
                <p className="text-3xl font-bold md:text-4xl">4.500</p>
              </div>
              <p className="font-semibold">Our Square Feets</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <StarIcon className="h-8 w-8" />
                <p className="text-3xl font-bold md:text-4xl">5.00</p>
              </div>
              <p className="font-semibold">Rates by 1.100</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
