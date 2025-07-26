// import React from 'react';
// import { ArrowRightIcon } from '@heroicons/react/24/solid';
// import TelevisionIcon from '../icons/TelevisionIcon';
// import SwimmingIcon from '../icons/SwimmingIcon';
// import WifiIcon from '../icons/WifiIcon';
// import AirConditionerIcon from '../icons/AirConditionerIcon';
// import { cn } from '@/lib/utils';

// const cards = [
//   {
//     title: 'Air Conditioned',
//     desc: 'Lorem ipsum dolor sit amet, consectetur.',
//     icon: <AirConditionerIcon className="h-6 w-6 text-secondary" />,
//   },
//   {
//     title: 'Free WiFi',
//     desc: 'Lorem ipsum dolor sit amet, consectetur.',
//     icon: <WifiIcon className="h-6 w-6" />,
//   },
//   {
//     title: 'Swimming Pool',
//     desc: 'Lorem ipsum dolor sit amet, consectetur.',
//     icon: <SwimmingIcon className="h-6 w-6" />,
//   },
//   {
//     title: 'Television',
//     desc: 'Lorem ipsum dolor sit amet, consectetur.',
//     icon: <TelevisionIcon className="h-6 w-6" />,
//   },
// ];

// const BenefitSection: React.FC = () => (
//   <section className="main-layout grid grid-cols-1 py-16 md:gap-20 lg:grid-cols-2">
//     <div className="hidden grid-cols-2 gap-6 md:grid">
//       {cards.map((card, i) => (
//         <div
//           key={i}
//           className="flex flex-col justify-between rounded-xl border bg-white p-6 shadow transition-shadow hover:shadow-lg"
//         >
//           <div>
//             <div
//               className={cn(
//                 'mb-4 inline-flex items-center justify-center rounded-full p-3 ring-1',
//                 card.title === 'Air Conditioned'
//                   ? 'bg-secondary ring-secondary'
//                   : 'bg-white ring-gray-300'
//               )}
//             >
//               {card.icon}
//             </div>
//             <h3 className="mb-2 text-lg font-semibold">{card.title}</h3>
//             <p className="text-sm text-gray-600">{card.desc}</p>
//           </div>
//           <ArrowRightIcon className="mt-4 h-5 w-5 text-secondary" />
//         </div>
//       ))}
//     </div>

//     <div className="space-y-4">
//       <span className="font-semibold uppercase text-secondary">Benefits</span>
//       <h2 className="text-3xl font-bold">
//         Explore More About Our Property & Benefits
//       </h2>
//       <p className="text-gray-600">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo
//         ligula eget dolor. Aenean massa.
//       </p>
//       <div className="space-y-6">
//         <div>
//           <h4 className="font-semibold">Awesome Features</h4>
//           <p className="text-gray-600">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
//             commodo ligula eget dolor.
//           </p>
//         </div>
//         <div>
//           <h4 className="font-semibold">Luxurious Interior Design</h4>
//           <p className="text-gray-600">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
//             commodo ligula eget dolor.
//           </p>
//         </div>
//         <div>
//           <h4 className="font-semibold">Modern Concept</h4>
//           <p className="text-gray-600">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
//             commodo ligula eget dolor.
//           </p>
//         </div>
//       </div>
//     </div>

//     <div className="grid grid-cols-2 gap-6 pt-4 text-xs md:hidden">
//       {cards.map((card, i) => (
//         <div
//           key={i}
//           className="flex flex-col items-center justify-between rounded-xl border bg-white p-4 text-center shadow transition-shadow hover:shadow-lg"
//         >
//           {/* icon + text all centered */}
//           <div className="flex flex-col items-center">
//             <div
//               className={cn(
//                 'mb-2 inline-flex items-center justify-center rounded-full p-2 ring-1',
//                 card.title === 'Air Conditioned'
//                   ? 'bg-secondary ring-secondary'
//                   : 'bg-white ring-gray-300'
//               )}
//             >
//               {card.icon}
//             </div>
//             <h3 className="text-sm font-semibold">{card.title}</h3>
//             <p className="mt-1 text-xs text-gray-600">{card.desc}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   </section>
// );

// export default BenefitSection;

// src/components/sections/BenefitSection.tsx
import React from 'react';
import BenefitCard from '../BenefitCard';

import AirConditionerIcon from '../icons/AirConditionerIcon';
import WifiIcon from '../icons/WifiIcon';
import SwimmingIcon from '../icons/SwimmingIcon';
import TelevisionIcon from '../icons/TelevisionIcon';

const cards = [
  {
    title: 'Air Conditioned',
    desc: 'Lorem ipsum dolor sit amet, consectetur.',
    icon: <AirConditionerIcon className="h-6 w-6 text-secondary" />,
  },
  {
    title: 'Free WiFi',
    desc: 'Lorem ipsum dolor sit amet, consectetur.',
    icon: <WifiIcon className="h-6 w-6 text-secondary" />,
  },
  {
    title: 'Swimming Pool',
    desc: 'Lorem ipsum dolor sit amet, consectetur.',
    icon: <SwimmingIcon className="h-6 w-6 text-secondary" />,
  },
  {
    title: 'Television',
    desc: 'Lorem ipsum dolor sit amet, consectetur.',
    icon: <TelevisionIcon className="h-6 w-6 text-secondary" />,
  },
];

const BenefitSection: React.FC = () => (
  <section className="main-layout grid grid-cols-1 py-16 md:grid-cols-2 md:gap-20">
    <div className="hidden grid-cols-2 gap-6 md:grid lg:grid-cols-2">
      {cards.map((card, idx) => (
        <BenefitCard
          key={idx}
          title={card.title}
          desc={card.desc}
          icon={card.icon}
        />
      ))}
    </div>

    <div className="space-y-6">
      <span className="font-semibold uppercase text-secondary">Benefits</span>
      <h2 className="text-3xl font-bold">
        Explore More About Our Property & Benefits
      </h2>
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa.
      </p>

      <div className="space-y-6">
        <div>
          <h4 className="font-semibold">Awesome Features</h4>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Luxurious Interior Design</h4>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Modern Concept</h4>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-6 pt-4 text-xs md:hidden">
      {cards.map((card, idx) => (
        <BenefitCard
          key={idx}
          title={card.title}
          desc={card.desc}
          icon={card.icon}
        />
      ))}
    </div>
  </section>
);

export default BenefitSection;
