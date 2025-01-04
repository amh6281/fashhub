'use client';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Image as ImageIcon, UserCircle, X } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';

const PostModal = () => {
  const router = useRouter();

  const closeModal = () => {
    router.back();
  };

  return (
    <div className='absolute left-0 top-0 z-20 flex h-screen w-screen justify-center bg-[#293139a6]'>
      <div className='mt-12 h-max w-[600px] rounded-xl bg-cool-200 px-4 py-4'>
        {/* top */}
        <X size={20} className='cursor-pointer' onClick={closeModal} />
        {/* center */}
        <div className='flex gap-4 px-4 py-8'>
          <div className='relative h-9 w-9 overflow-hidden rounded-full'>
            <UserCircle size={36} className='text-gray-500' />
          </div>
          <Textarea
            placeholder='오늘의 패션을 공유하세요!'
            className='resize-none border-none bg-transparent text-lg shadow-none outline-none placeholder:text-neutral-400'
          />
        </div>
        {/* bottom */}
        <div className='flex flex-wrap items-center justify-between gap-4 border-t border-cool-300 px-4 pt-4'>
          <div className='flex flex-wrap gap-4'>
            <ImageIcon size={20} />
          </div>
          <Button
            variant='secondary'
            className='rounded-full bg-cool-100 px-5 py-2 font-bold text-choco'
          >
            게시하기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
