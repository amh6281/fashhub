import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr';

const SearchInput = () => {
  return (
    <div className='flex items-center gap-4 rounded-full bg-gray-100 px-4 py-2'>
      <MagnifyingGlass size={16} />
      <input
        type='text'
        placeholder='검색'
        className='bg-transparent outline-none'
      />
    </div>
  );
};

export default SearchInput;
