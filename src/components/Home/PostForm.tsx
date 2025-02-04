'use client';

import {
  ImageSquare,
  UserCircle,
  XCircle,
} from '@phosphor-icons/react/dist/ssr';
import { Button } from '../ui/button';
import { useRef, useState } from 'react';
import { Textarea } from '../ui/textarea';
import Image from 'next/image';
import { createPost } from '@/lib/api';
import { useQueryClient } from '@tanstack/react-query';
import { PostType } from '@/types/Post';

const PostForm = () => {
  const imageRef = useRef<HTMLInputElement>(null);
  const [content, setContent] = useState('');
  const [preview, setPreview] = useState<
    Array<{ dataUrl: string; file: File } | null>
  >([]);
  const queryClient = useQueryClient();

  const updateQueryData = (queryKey: [string, string], newPost: PostType) => {
    queryClient.setQueryData(queryKey, (prevData: { pages: PostType[][] }) => {
      // 이전 데이터가 없는 경우, 새로운 게시물 반환
      if (!prevData) return { pages: [[newPost]] };

      // 이전 데이터가 있는 경우, 첫 번째 페이지에 새로운 게시물을 추가한 페이지 배열을 생성
      const updatedPages = prevData.pages.map((page, index) =>
        index === 0 ? [newPost, ...page] : page,
      );

      // 업데이트된 페이지 배열을 포함하는 새로운 데이터 객체를 반환
      return {
        ...prevData, // 이전 데이터의 나머지 속성을 복사
        pages: updatedPages, // 업데이트된 페이지 배열로 교체
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('content', content);
    preview.forEach((p) => {
      if (p) {
        formData.append('images', p.file);
      }
    });

    try {
      const res = await createPost(formData);
      if (res.status === 201) {
        setContent('');
        setPreview([]);
        const newPost = await res.json();

        updateQueryData(['posts', 'recommends'], newPost);
        updateQueryData(['posts', 'followings'], newPost);
      }
    } catch {
      alert('업로드 중 에러가 발생했습니다.');
    }
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!e.target.files) return;
    Array.from(e.target.files).forEach((file, index) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview((prev) => {
          const next = [...prev];
          next[index] = { dataUrl: reader.result as string, file };
          return next;
        });
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <form
      className='flex gap-4 border-b border-gray-300 p-4'
      onSubmit={handleSubmit}
    >
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
        <div className='grid grid-cols-2 gap-4'>
          {preview.map(
            (url, index) =>
              url && (
                <div key={index} className='relative'>
                  <Image
                    src={url.dataUrl}
                    alt='preview'
                    layout='responsive'
                    width={500}
                    height={300}
                    className='rounded-md object-cover'
                  />
                  <button
                    type='button'
                    className='absolute right-2 top-2 rounded-full bg-black bg-opacity-50 p-1 text-white'
                    onClick={() =>
                      setPreview((prev) => {
                        const next = [...prev];
                        next[index] = null;
                        return next;
                      })
                    }
                  >
                    <XCircle size={24} />
                  </button>
                </div>
              ),
          )}
        </div>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <input
              type='file'
              name='image'
              multiple
              className='hidden'
              ref={imageRef}
              onChange={handleUpload}
            />
            <ImageSquare
              size={24}
              className='cursor-pointer text-cool-500 transition-colors hover:text-cool-600'
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
