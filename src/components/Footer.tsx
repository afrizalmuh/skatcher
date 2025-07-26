// src/components/sections/Footer.tsx
import React from 'react';
import LogoIcon from '@/components/icons/LogoIcon';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import GoogleIcon from './icons/GoogleIcon';
import FacebookIcon from './icons/FacebookIcon';
import TwitterIcon from './icons/TwitterIcon';
import LinkedinIcon from './icons/LinkedinIcon';

const companyLinks = [
  '123 Avenue, New York',
  '+(1600) 456 7890',
  'yourid@example.com',
  '9:00 AM - 7:00 PM',
  '@officialpage',
];

const featureLinks = ['Home', 'About', 'Provide', 'Benefits', 'Contact'];
const helpLinks = [
  'Call Center',
  'Official Pages',
  'Frequently Asked Question',
  'History Background',
  'Newsletter Subscription',
];

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white">
    <div className="main-layout grid grid-cols-2 gap-8 py-12 md:grid-cols-5">
      <div className="col-span-2 space-y-4 md:col-span-2">
        <div className="flex items-center gap-2">
          <LogoIcon className="h-6 w-6 text-white" />
          <span className="text-xl font-semibold text-white">Skatcher</span>
        </div>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
        <div className="flex gap-4 text-white">
          <GoogleIcon className="hover:text-white" />
          <FacebookIcon className="hover:text-white" />
          <TwitterIcon className="hover:text-white" />
          <LinkedinIcon className="hover:text-white" />
        </div>
      </div>

      <div className="col-span-1">
        <h4 className="mb-4 font-semibold text-white">Company</h4>
        <ul className="space-y-2 text-sm">
          {companyLinks.map((line, i) => (
            <li key={i} className="flex items-start gap-2">
              <ChevronRightIcon className="mt-1 h-4 w-4 text-white" />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="col-span-1">
        <h4 className="mb-4 font-semibold text-white">Features</h4>
        <ul className="space-y-2 text-sm">
          {featureLinks.map((label, i) => (
            <li key={i} className="flex items-start gap-2">
              <ChevronRightIcon className="mt-1 h-4 w-4 text-white" />
              <a href="#" className="hover:underline">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden md:block">
        <h4 className="mb-4 font-semibold text-white">Help Center</h4>
        <ul className="space-y-2 text-sm">
          {helpLinks.map((label, i) => (
            <li key={i} className="flex items-start gap-2">
              <ChevronRightIcon className="mt-1 h-4 w-4 text-white" />
              <a href="#" className="hover:underline">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="main-layout flex flex-row items-center gap-2 py-4 text-center text-sm text-white md:justify-between md:text-left">
      <a href="#" className="hidden hover:text-white md:inline">
        Terms &amp; Condition
      </a>
      <span>© 2022 Skatcher. All Rights Reserved</span>
      <a href="#" className="hidden hover:text-white md:inline">
        Privacy &amp; Policy
      </a>
    </div>
  </footer>
);

export default Footer;
