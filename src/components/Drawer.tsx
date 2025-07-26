import React from 'react';
import LogoIcon from './icons/LogoIcon';

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => (
  <div
    className={`fixed inset-y-0 right-0 z-50 w-full transform bg-primary text-white transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'} `}
  >
    <div className="flex items-center justify-between border-b border-white/20 p-3">
      <div className="flex gap-2">
        <LogoIcon className="h-6 w-6" />
        <h2 className="text-lg font-semibold italic">Skatcher</h2>
      </div>
      <button
        aria-label="Close menu"
        onClick={onClose}
        className="rounded p-2 hover:bg-white/20"
      >
        X
      </button>
    </div>
    <ul className="flex flex-col space-y-4 p-4">
      {[
        { href: '/', label: 'About' },
        { href: '/', label: 'Service' },
        { href: '/', label: 'Contact' },
      ].map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            onClick={onClose}
            className="block hover:underline"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Drawer;
