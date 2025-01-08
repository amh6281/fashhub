'use client';

import { cn } from '@/lib/utils';
import { useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';

const Tab = () => {
  const [currentTab, setCurrentTab] = useState('hot');
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleHotTab = () => {
    setCurrentTab('hot');
    // router.push({ search: searchParams.toString() });
  };

  const handleNewTab = () => {
    setCurrentTab('new');
    // router.push({ search: searchParams.toString() });
  };

  return (
    <div className='sticky top-0 z-10 flex justify-center border-b border-gray-300 px-4 py-3 backdrop-blur-sm'>
      {/* 인기 탭 */}
      <div className='group relative mx-10 flex cursor-pointer flex-col items-center'>
        <span
          className={cn(
            'text-base font-medium text-gray-600 transition-colors group-hover:text-blue-500',
            currentTab === 'hot' && 'font-bold text-blue-500',
          )}
          onClick={handleHotTab}
        >
          인기
        </span>
        <div
          className={cn(
            'absolute bottom-[-1px] h-[3px] w-0 bg-blue-500 transition-all group-hover:w-full',
            currentTab === 'hot' && 'w-full',
          )}
        />
      </div>
      {/* 최신 탭 */}
      <div className='group relative mx-10 flex cursor-pointer flex-col items-center'>
        <span
          className={cn(
            'text-base font-medium text-gray-600 transition-colors group-hover:text-blue-500',
            currentTab === 'new' && 'font-bold text-blue-500',
          )}
          onClick={handleNewTab}
        >
          최신
        </span>
        <div
          className={cn(
            'absolute bottom-[-1px] h-[3px] w-0 bg-blue-500 transition-all group-hover:w-full',
            currentTab === 'new' && 'w-full',
          )}
        />
      </div>
    </div>
  );
};

export default Tab;
