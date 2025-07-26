import React from 'react';
import LogoIcon from './icons/LogoIcon';
import Search from './search/Search';
import SearchIcon from './icons/SearchIcon';
import MoreIcon from './icons/MoreIcon';
import Drawer from './Drawer';
import SearchOverlay from './search/SearchOverlay';

const Navbar: React.FC = () => {
  const [value, setValue] = React.useState<string>('');
  const [isSearchOpen, setIsSearchOpen] = React.useState<boolean>(false);
  const [isMoreOpen, setIsMoreOpen] = React.useState<boolean>(false);
  return (
    <>
      <nav className="main-layout flex justify-between bg-primary py-2 text-white md:bg-primary/80 md:py-4">
        <div className="flex items-center gap-2">
          <LogoIcon className="h-6 w-6" />
          <a href="/" className="font-medium italic md:text-3xl">
            Skatcher
          </a>
        </div>
        {/* DESKTOP */}
        <div className="hidden items-center md:flex md:gap-4 lg:gap-20">
          <ul className="flex md:gap-4 lg:gap-20">
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Service</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
          <div>
            <Search
              value={value}
              onChange={setValue}
              placeholder="Search Here"
            />
          </div>
        </div>

        {/* MOBILE */}
        <div className="flex gap-2 md:hidden">
          <button
            aria-label="Search"
            onClick={() => {
              setIsSearchOpen(true);
            }}
            className="rounded-sm bg-secondary px-2 hover:bg-hover"
          >
            <SearchIcon className="h-3 w-3" />
          </button>
          <button
            aria-label="Menu"
            onClick={() => {
              setIsMoreOpen(true);
            }}
            className="rounded bg-secondary px-2 hover:bg-hover"
          >
            <MoreIcon className="h-3 w-3" />
          </button>
        </div>
      </nav>
      <SearchOverlay
        isOpen={isSearchOpen}
        value={value}
        onChange={setValue}
        onClose={() => setIsSearchOpen(false)}
      />
      <Drawer isOpen={isMoreOpen} onClose={() => setIsMoreOpen(false)} />
    </>
  );
};

export default Navbar;
