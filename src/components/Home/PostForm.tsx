'use client';

import { ImageSquare, UserCircle } from '@phosphor-icons/react/dist/ssr';
import { Button } from '../ui/button';
import { useRef, useState } from 'react';
import { Textarea } from '../ui/textarea';

const PostForm = () => {
  const imageRef = useRef<HTMLInputElement>(null);
  const [content, setContent] = useState('');

  return (
    <form className='flex gap-4 border-b border-gray-300 p-4'>
      {/* avatar */}
      <div className='relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full'>
        <UserCircle size={36} className='text-gray-500' />
      </div>
      {/* form */}
      <div className='flex flex-1 flex-col gap-4'>
        <Textarea
          placeholder='오늘의 패션을 공유하세요!'
          className='resize-none border-none bg-transparent text-lg shadow-none outline-none placeholder:text-neutral-400'
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <input type='file' name='image' className='hidden' ref={imageRef} />
            <ImageSquare
              size={24}
              className='text-cool-500 hover:text-cool-600 cursor-pointer transition-colors'
              onClick={() => imageRef.current?.click()}
            />
          </div>
          <Button
            variant='secondary'
            className='h-10 rounded-full text-sm font-semibold'
          >
            게시하기
          </Button>
        </div>
      </div>
    </form>
  );
};

export default PostForm;
