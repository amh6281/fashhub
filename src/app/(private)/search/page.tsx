import { BackButton, SearchInput } from '@/components/common';
import { SearchResult, Tab } from '@/components/Search';
import { Metadata, ResolvingMetadata } from 'next';
import React from 'react';

interface SearchProps {
  searchParams: Promise<{ query: string; filter?: string; pf?: string }>;
}

export const generateMetadata = async (
  { searchParams }: SearchProps,
  parent: ResolvingMetadata, // parent는 부모 페이지의 메타데이터를 가져올 수 있음 (root layout의 metadata)
): Promise<Metadata> => {
  const { query } = await searchParams;
  console.log('parent', parent);
  return {
    title: `${query} - 검색 / Z`,
    description: `${query} - 검색 / Z`,
  };
};

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
