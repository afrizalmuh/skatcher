// src/components/ColumnSection.tsx
import React, { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface ColumnSectionProps {
  left: ReactNode;
  right: ReactNode;
  reverse?: boolean;
  className?: string;
}

const ColumnSection: React.FC<ColumnSectionProps> = ({
  left,
  right,
  reverse = false,
  className = '',
}) => {
  return (
    <section
      className={cn(
        'main-layout flex flex-col items-stretch gap-20 py-4 md:flex-row md:py-16',
        className
      )}
    >
      {!reverse ? (
        <>
          <div className="hidden md:flex md:flex-1 md:flex-col">{left}</div>
          <div className="flex flex-1">{right}</div>
        </>
      ) : (
        <>
          <div className="flex flex-1 flex-col md:order-1">{left}</div>
          <div className="hidden md:order-2 md:flex md:flex-1">{right}</div>
        </>
      )}
    </section>
  );
};

export default ColumnSection;
