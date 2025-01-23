import { BackButton, SearchInput } from '@/components/common';
import { SearchResult, Tab } from '@/components/Search';
import React from 'react';

interface SearchProps {
  searchParams: Promise<{ query: string; filter?: string; pf?: string }>;
}

const Search = async ({ searchParams }: SearchProps) => {
  const searchQuery = await searchParams;

  return (
    <div className='min-h-screen py-4'>
      {/* header */}
      <div className='mb-4 flex items-center gap-4 px-4'>
        <BackButton />
        <div className='w-full'>
          <SearchInput searchQuery={searchQuery} />
        </div>
      </div>
      {/* tabs */}
      <div className='mt-4'>
        <Tab />
      </div>
      <SearchResult searchQuery={searchQuery} />
    </div>
  );
};

export default Search;
