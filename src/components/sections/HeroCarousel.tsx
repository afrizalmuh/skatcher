import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';

const slides = [
  'https://placehold.co/200x200',
  'https://placehold.co/200x200',
  'https://placehold.co/200x200',
];

const HeroCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative left-11 top-[328px] z-10 h-2/6 w-3/4 overflow-visible md:left-0 md:top-0 md:h-full md:w-full">
      {/* only this wrapper gets rounded corners + hides overflow */}
      <div ref={emblaRef} className="h-full overflow-hidden rounded-xl">
        <div className="flex h-full">
          {slides.map((src, idx) => (
            <div key={idx} className="h-full min-w-full flex-shrink-0">
              <img
                src={src}
                alt={`Slide ${idx + 1}`}
                className="h-full w-full bg-gray-200 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Prev arrow, now free to sit outside the rounded container */}
      {canScrollPrev && (
        <button
          onClick={scrollPrev}
          className="absolute -left-6 top-1/2 -translate-y-1/2 rounded-full bg-secondary p-2 shadow-lg"
        >
          <ChevronLeftIcon className="h-5 w-5 text-white" />
        </button>
      )}

      {/* Next arrow */}
      {canScrollNext && (
        <button
          onClick={scrollNext}
          className="absolute -right-6 top-1/2 -translate-y-1/2 rounded-full bg-secondary p-2 shadow-lg"
        >
          <ChevronRightIcon className="h-5 w-5 text-white" />
        </button>
      )}
    </div>
  );
};

export default HeroCarousel;
