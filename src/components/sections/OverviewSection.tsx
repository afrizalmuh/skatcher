import React from 'react';
import { PlayIcon } from '@heroicons/react/24/solid';

const OverviewSection: React.FC = () => (
  <section className="bg-primary py-10 text-white">
    <div className="main-layout flex flex-col gap-2">
      <span className="font-semibold uppercase">Overview</span>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-20">
        <h2 className="text-lg font-bold md:text-3xl">
          See Our Property Benefits by Preview Video Below
        </h2>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes.
        </p>
      </div>
    </div>

    {/* Video placeholder */}
    <div className="mt-8">
      <div className="main-layout relative">
        <div className="h-64 w-full overflow-hidden rounded-xl bg-gray-200 md:h-80 lg:h-[380px]">
          <img
            src="https://placehold.co/1440x760"
            alt="Video preview"
            className="h-full w-full object-cover"
          />
          <button
            aria-label="Play preview video"
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="rounded-full bg-white bg-opacity-40 p-3">
              <PlayIcon className="h-8 w-8 text-white" />
            </div>
          </button>
        </div>
      </div>
    </div>

    {/* Bottom features */}
    <div className="mt-10">
      <div className="main-layout grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-20">
        <div className="space-y-2">
          <h4 className="font-semibold text-white">Awesome Features</h4>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
          </p>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold text-white">Luxury Property</h4>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default OverviewSection;
