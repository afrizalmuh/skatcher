// src/components/sections/ProvideSection.tsx
import React from 'react';
import ColumnSection from './ColumnSection';
import { CheckIcon } from '@heroicons/react/24/outline';

const features = [
  'Lorem ipsum dolor sit amet, consectetuer',
  'Lorem ipsum dolor sit amet, consectetuer',
  'Lorem ipsum dolor sit amet, consectetuer',
];

const ProvideSection: React.FC = () => (
  <ColumnSection
    reverse
    left={
      <div className="space-y-4">
        <span className="font-bold uppercase text-secondary">Provide</span>
        <h2 className="text-xl font-bold md:text-3xl">
          We Provide Many Features and Property Benefits
        </h2>

        {/* Inline image: only show on mobile */}
        <div className="block h-64 w-full overflow-hidden rounded-xl md:hidden">
          <img
            src="https://placehold.co/600x400"
            alt="About us"
            className="h-full w-full object-cover"
          />
        </div>

        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes.
        </p>
        <ul className="space-y-2">
          {features.map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-gray-600">
              <CheckIcon className="text-gold h-5 w-5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    }
    right={
      <img
        src="https://placehold.co/600x400"
        alt="Features"
        className="w-full rounded-xl object-cover"
      />
    }
  />
);

export default ProvideSection;
