'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const TrendTags = () => {
  const pathname = usePathname();

  if (pathname === '/explore') return null;

  return (
    <div className='flex flex-col gap-3 rounded-2xl border-[1px] border-gray-300 p-4'>
      <h1 className='text-xl font-bold'>오늘의 패션</h1>
      {/* trend */}
      <Link href='/'>
        <span className='text-sm text-gray-400'>실시간 트렌드</span>
        <h2 className='font-semibold'>OpenAI</h2>
        <span className='text-sm text-gray-400'>2000 posts</span>
      </Link>
      <Link href='/'>
        <span className='text-sm text-gray-400'>실시간 트렌드</span>
        <h2 className='font-semibold'>OpenAI</h2>
        <span className='text-sm text-gray-400'>2000 posts</span>
      </Link>
      <Link href='/'>
        <span className='text-sm text-gray-400'>실시간 트렌드</span>
        <h2 className='font-semibold'>OpenAI</h2>
        <span className='text-sm text-gray-400'>2000 posts</span>
      </Link>
      <Link href='/'>
        <span className='text-sm text-gray-400'>실시간 트렌드</span>
        <h2 className='font-semibold'>OpenAI</h2>
        <span className='text-sm text-gray-400'>2000 posts</span>
      </Link>
    </div>
  );
};

export default TrendTags;
