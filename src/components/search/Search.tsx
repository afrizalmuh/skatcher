import type { SearchProps } from '../../types';
import SearchIcon from '../icons/SearchIcon';

const Search: React.FC<SearchProps> = ({
  value,
  onChange,
  placeholder,
  className,
}) => {
  return (
    <div className={className}>
      <input
        type="text"
        value={value}
        placeholder={placeholder || 'Search...'}
        onChange={(e) => onChange(e.target.value)}
        className={`input input-bordered w-full rounded-full px-4 py-2 pr-10 text-black focus:outline-none focus:ring-0 md:max-w-36 lg:max-w-44`}
      />
      <SearchIcon className="pointer-events-none absolute right-10 top-7 h-4 w-4 -translate-y-1/2 transform text-blue-500 md:right-48 md:top-[70px] lg:top-[80px]" />
    </div>
  );
};

export default Search;
