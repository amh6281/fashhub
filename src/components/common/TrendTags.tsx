'use client';

import { DotsThree } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const TrendTags = ({ hideInExplore }: { hideInExplore?: boolean }) => {
  const pathname = usePathname();

  if (pathname === '/explore' && hideInExplore) return null;

  return (
    <div className='flex flex-col gap-3 rounded-2xl border-[1px] border-gray-300 p-4'>
      <h1 className='text-xl font-bold'>오늘의 패션</h1>
      {/* trend */}
      <div className='flex items-center justify-between'>
        <Link href='/'>
          <span className='text-sm text-gray-400'>실시간 트렌드</span>
          <h2 className='font-semibold'>OpenAI</h2>
          <span className='text-sm text-gray-400'>2000 posts</span>
        </Link>
        {/* TODO: Shadcn dropdown, 자신의 게시글일 경우 조건 추가 */}
        <DotsThree size={20} />
      </div>
      <div className='flex items-center justify-between'>
        <Link href='/'>
          <span className='text-sm text-gray-400'>실시간 트렌드</span>
          <h2 className='font-semibold'>OpenAI</h2>
          <span className='text-sm text-gray-400'>2000 posts</span>
        </Link>
        <DotsThree size={20} />
      </div>
      <div className='flex items-center justify-between'>
        <Link href='/'>
          <span className='text-sm text-gray-400'>실시간 트렌드</span>
          <h2 className='font-semibold'>OpenAI</h2>
          <span className='text-sm text-gray-400'>2000 posts</span>
        </Link>
        <DotsThree size={20} />
      </div>
      <div className='flex items-center justify-between'>
        <Link href='/'>
          <span className='text-sm text-gray-400'>실시간 트렌드</span>
          <h2 className='font-semibold'>OpenAI</h2>
          <span className='text-sm text-gray-400'>2000 posts</span>
        </Link>
        <DotsThree size={20} />
      </div>
    </div>
  );
};

export default TrendTags;
