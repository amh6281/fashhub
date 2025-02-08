import { SearchInput, TrendTags } from '@/components/common';

export const metadata = {
  title: 'FashHub/탐색하기',
  description: '탐색하기',
};

const Explore = () => {
  return (
    <div className='flex flex-col gap-8 p-4'>
      <SearchInput />
      <TrendTags />
    </div>
  );
};

export default Explore;
