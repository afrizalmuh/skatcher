import React from 'react';
import Search from './Search';

type SearchOverlayProps = {
  isOpen: boolean;
  value: string;
  onChange: (val: string) => void;
  onClose: () => void;
};
const SearchOverlay: React.FC<SearchOverlayProps> = ({
  isOpen,
  value,
  onChange,
  onClose,
}) => {
  return (
    <div
      className={`fixed inset-x-0 top-0 z-50 transform bg-primary text-white transition-transform duration-300 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="flex items-center gap-2 p-3">
        <div className="flex-1">
          <Search
            value={value}
            onChange={onChange}
            placeholder="Search Here"
            className="text-xs md:hidden"
          />
        </div>
        <button aria-label="Close search" onClick={onClose} className="rounded">
          x
        </button>
      </div>
    </div>
  );
};

export default SearchOverlay;
