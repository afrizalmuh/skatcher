// src/components/sections/AboutSection.tsx
import React from 'react';
import ColumnSection from './ColumnSection';

const AboutSection: React.FC = () => (
  <ColumnSection
    left={
      <div className="hidden w-full overflow-hidden rounded-xl md:block md:h-80 lg:h-96">
        <img
          src="https://placehold.co/600x400"
          alt="About us"
          className="h-64 w-full rounded-xl object-cover md:h-80 lg:h-96"
        />
      </div>
    }
    right={
      <div className="space-y-4">
        <span className="font-bold uppercase text-secondary">About Us</span>
        <h2 className="text-xl font-bold md:text-3xl">
          Discover an Extraordinary Property With Us
        </h2>

        <div className="block h-64 w-full overflow-hidden rounded-xl md:hidden">
          <img
            src="https://placehold.co/600x400"
            alt="About us"
            className="h-full w-full object-cover"
          />
        </div>

        <p className="text-justify text-gray-600">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes.
        </p>

        <blockquote className="border-l-2 border-gray-300 pl-6 text-justify italic text-gray-500">
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
          imperdiet a.
        </blockquote>
      </div>
    }
  />
);

export default AboutSection;
