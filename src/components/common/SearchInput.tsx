import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr';
import Form from 'next/form';

interface SearchInputProps {
  searchQuery: {
    query?: string;
    filter?: string;
    pf?: string;
  };
}

const SearchInput = ({ searchQuery }: SearchInputProps) => {
  return (
    <Form
      action='/search'
      className='flex items-center gap-4 rounded-full bg-gray-100 px-4 py-2'
    >
      <MagnifyingGlass size={16} />
      <input
        type='search'
        name='query'
        defaultValue={searchQuery.query}
        placeholder='검색'
        className='bg-transparent outline-none'
      />
      {/* 숨겨진 입력 필드도 함께 form으로 전송 */}
      <input type='hidden' name='pf' defaultValue={searchQuery?.pf} />
      <input type='hidden' name='filter' defaultValue={searchQuery?.filter} />
    </Form>
  );
};

export default SearchInput;
