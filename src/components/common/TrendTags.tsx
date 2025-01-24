'use client';

import { getTrends } from '@/lib/api';
import { TrendTagType } from '@/types/TrendTag';
import { DotsThree } from '@phosphor-icons/react';
import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const TrendTags = ({ hideInExplore }: { hideInExplore?: boolean }) => {
  const pathname = usePathname();
  const { data: session } = useSession();

  const { data } = useQuery<TrendTagType[]>({
    queryKey: ['trends'],
    queryFn: getTrends,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
    enabled: !!session?.user, // user가 로그인 되어있을 때만 fetch (enabled: 조건부 렌더링)
  });

  if (pathname === '/explore' && hideInExplore) return null;

  return (
    <div className='flex flex-col gap-3 rounded-2xl border-[1px] border-gray-300 p-4'>
      {session?.user ? (
        <>
          <h1 className='text-xl font-bold'>오늘의 패션</h1>
          {/* trend */}
          {data?.map((trend) => (
            <div
              className='flex items-center justify-between'
              key={trend.tagId}
            >
              <Link href='/search?query=트렌드'>
                <span className='text-sm text-gray-400'>실시간 트렌드</span>
                <h2 className='font-semibold'>{trend.title}</h2>
                <span className='text-sm text-gray-400'>
                  {trend.count.toLocaleString()} posts
                </span>
              </Link>
              <DotsThree size={20} />
            </div>
          ))}
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
