'use client';

import { cn } from '@/lib/utils';
import { useCurrentTab } from '@/store/tab';

const Tab = () => {
  const activeTab = useCurrentTab((state) => state.activeTab);
  const setActiveTab = useCurrentTab((state) => state.setActiveTab);

  return (
    <div className='sticky top-0 z-10 flex justify-center border-b border-gray-300 px-4 py-3 backdrop-blur-sm'>
      {/* 추천 탭 */}
      <div className='group relative mx-10 flex cursor-pointer flex-col items-center'>
        <span
          className={cn(
            'text-base font-medium text-gray-600 transition-colors group-hover:text-blue-500',
            activeTab === 'rec' && 'font-bold text-blue-500',
          )}
          onClick={() => setActiveTab('rec')}
        >
          추천
        </span>
        <div
          className={cn(
            'absolute bottom-[-1px] h-[3px] w-0 bg-blue-500 transition-all group-hover:w-full',
            activeTab === 'rec' && 'w-full',
          )}
        />
      </div>
      {/* 팔로잉 탭 */}
      <div className='group relative mx-10 flex cursor-pointer flex-col items-center'>
        <span
          className={cn(
            'text-base font-medium text-gray-600 transition-colors group-hover:text-blue-500',
            activeTab === 'fol' && 'font-bold text-blue-500',
          )}
          onClick={() => setActiveTab('fol')}
        >
          팔로잉
        </span>
        <div
          className={cn(
            'absolute bottom-[-1px] h-[3px] w-0 bg-blue-500 transition-all group-hover:w-full',
            activeTab === 'fol' && 'w-full',
          )}
        />
      </div>
    </div>
  );
};

export default Tab;
