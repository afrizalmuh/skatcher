import React from 'react';

const HeroContent: React.FC = () => (
  <div className="max-w-xs flex-1 space-y-6 text-white md:text-lg lg:max-w-full">
    <h1 className="flex flex-col space-y-2 text-2xl font-bold leading-tight md:text-4xl">
      <span>Discover Modern</span>
      <span>Single Property</span>
    </h1>
    <p className="max-w-md text-justify text-gray-300">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
      ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
      dis parturient montes.
    </p>
    <div className="flex gap-4">
      <button className="rounded bg-secondary px-6 py-2 font-semibold hover:bg-hover">
        Overview
      </button>
      <button className="rounded border border-white px-6 py-2 font-semibold hover:bg-white hover:text-gray-900">
        Learn More
      </button>
    </div>
  </div>
);

export default HeroContent;
