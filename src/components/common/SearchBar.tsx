'use client';

import { usePathname } from 'next/navigation';
import SearchFilter from './SearchFilter';
import SearchInput from './SearchInput';

const SearchBar = () => {
  const pathname = usePathname();

  if (pathname === '/explore') return null;
  if (pathname === '/search') return <SearchFilter />;
  return <SearchInput />;
};

export default SearchBar;
