import React, { type ReactNode } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { cn } from '@/lib/utils';

interface BenefitCardProps {
  title: string;
  desc: string;
  icon: ReactNode;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, desc, icon }) => {
  return (
    <div
      className={cn(
        `flex flex-col items-center justify-between rounded-xl border bg-white p-4 text-center shadow transition-shadow hover:shadow-lg md:items-start md:text-left lg:p-6`
      )}
    >
      <div>
        <div
          className={cn(
            `mb-2 inline-flex items-center justify-center rounded-full p-2 ring-1 md:mb-4 md:p-3`,
            title === 'Air Conditioned'
              ? 'bg-secondary ring-secondary'
              : 'bg-white ring-gray-300'
          )}
        >
          {icon}
        </div>
        <h3 className="md:text-md text-sm font-semibold lg:text-lg">{title}</h3>
        <p className="mt-1 text-xs text-gray-600 md:text-sm">{desc}</p>
      </div>
      <ArrowRightIcon className="mt-2 hidden h-5 w-5 text-secondary md:mt-2 md:block lg:mt-4" />
    </div>
  );
};

export default BenefitCard;
