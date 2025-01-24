'use client';

import { UserCircle } from '@phosphor-icons/react/dist/ssr';
import { Button } from '../ui/button';
import { useQuery } from '@tanstack/react-query';
import { UserType } from '@/types/User';
import { getFollowRecommends } from '@/lib/api';

const Recommendations = () => {
  const { data } = useQuery<UserType[]>({
    queryKey: ['users', 'followRecommends'],
    queryFn: getFollowRecommends,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  return (
    <div className='flex flex-col gap-4 rounded-2xl border-[1px] border-gray-300 p-4'>
      {data?.map((user) => (
        <div className='flex items-center justify-between' key={user.userId}>
          {/* info */}
          <div className='flex items-center gap-3'>
            <div className='relative h-9 w-9 overflow-hidden rounded-full'>
              <UserCircle size={36} />
            </div>
            <div className='flex flex-col gap-1'>
              <h1 className='text-md font-bold'>mmmh_0803</h1>
              <span className='text-sm text-gray-400'>@mmmh_0803</span>
            </div>
          </div>
          {/* button */}
          <Button variant='ghost' className='rounded-full font-bold'>
            팔로우
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Recommendations;
