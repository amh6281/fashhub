import { SearchInput, TrendTags } from '@/components/common';

const Explore = () => {
  return (
    <div className='flex flex-col gap-8 p-4'>
      <SearchInput />
      <TrendTags />
    </div>
  );
};

export default Explore;
