import { BackButton } from '@/components/common';
import { Post } from '@/components/common/post';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Calendar,
  DotsThreeCircle,
  EnvelopeSimple,
  MagnifyingGlass,
  MapPin,
  UserCircle,
} from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';

const UserPage = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* profile title */}
      <div className='sticky top-0 z-10 flex items-center gap-4 border-b-[1px] border-gray-300 p-4 backdrop-blur-md'>
        <BackButton />
        <h1 className='text-lg font-bold text-gray-900'>@mmmh_0803</h1>
      </div>

      {/* profile info */}
      <div className='shadow-md'>
        {/* cover & avatar */}
        <div className='relative w-full'>
          {/* cover */}
          {/* TODO: Cover image가 없을경우에만 gradient */}
          <div
            className={cn(
              'relative aspect-[3/1] w-full bg-gradient-to-r from-blue-500 to-purple-500',
              // !coverImg && 'bg-gradient-to-r from-blue-500 to-purple-500',
            )}
          >
            <Image src='/logo.png' alt='Cover' fill />
          </div>
          {/* avatar */}
          <div className='absolute bottom-0 left-4 translate-y-1/2'>
            <div className='flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-gray-200 shadow-lg'>
              <UserCircle size={80} className='text-gray-500' />
            </div>
          </div>
        </div>

        {/* actions */}
        <div className='flex justify-end gap-2 p-4'>
          <button className='flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100'>
            <DotsThreeCircle size={20} />
          </button>
          <button className='flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100'>
            <MagnifyingGlass size={20} />
          </button>
          <button className='flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100'>
            <EnvelopeSimple size={20} />
          </button>
          <Button
            variant='secondary'
            className='rounded-full px-6 py-2 font-bold hover:bg-gray-200'
          >
            팔로우
          </Button>
        </div>

        {/* user details */}
        <div className='p-4'>
          <div className='mb-2'>
            <h1 className='text-2xl font-bold text-gray-900'>amh6281</h1>
            <span className='text-sm text-gray-500'>@mmmh_0803</span>
          </div>
          <p className='mb-4 font-semibold text-gray-700'>안뇽하세요잉</p>

          {/* info */}
          <div className='mb-4 flex flex-wrap gap-6 text-sm text-gray-500'>
            <div className='flex items-center gap-1'>
              <MapPin size={16} />
              <span>Korea</span>
            </div>
            <div className='flex items-center gap-1'>
              <Calendar size={16} />
              <span>2025년 1월 1일</span>
            </div>
          </div>

          {/* followers */}
          <div className='flex gap-6'>
            <div className='flex items-center gap-1'>
              <span className='text-lg font-bold text-gray-900'>100</span>
              <span className='text-sm text-gray-500'>팔로워</span>
            </div>
            <div className='flex items-center gap-1'>
              <span className='text-lg font-bold text-gray-900'>100</span>
              <span className='text-sm text-gray-500'>팔로잉</span>
            </div>
          </div>
        </div>
      </div>

      {/* feed */}
      <div className='mt-4 py-4'>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default UserPage;
