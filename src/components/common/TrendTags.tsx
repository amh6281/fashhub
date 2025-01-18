'use client';

import { DotsThree } from '@phosphor-icons/react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const TrendTags = ({ hideInExplore }: { hideInExplore?: boolean }) => {
  const pathname = usePathname();
  const { data: session } = useSession();

  if (pathname === '/explore' && hideInExplore) return null;

  return (
    <div className='flex flex-col gap-3 rounded-2xl border-[1px] border-gray-300 p-4'>
      {session?.user ? (
        <>
          <h1 className='text-xl font-bold'>오늘의 패션</h1>
          {/* trend */}
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
          <div className='flex items-center justify-between'>
            <Link href='/'>
              <span className='text-sm text-gray-400'>실시간 트렌드</span>
              <h2 className='font-semibold'>OpenAI</h2>
              <span className='text-sm text-gray-400'>2000 posts</span>
            </Link>
            <DotsThree size={20} />
          </div>
        </>
      ) : (
        <h1 className='flex justify-center text-lg font-bold'>
          데이터를 가져올 수 없습니다.
        </h1>
      )}
    </div>
  );
};

export default TrendTags;
