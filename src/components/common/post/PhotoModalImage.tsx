'use client';

import Image from 'next/image';
import BackButton from '../BackButton';
import PostInteractions from './PostInteractions';
import { useQuery } from '@tanstack/react-query';
import { PostType } from '@/types/Post';
import Error from 'next/error';
import { getSinglePost } from '@/lib/api';

const PhotoModalImage = ({ postId }: { postId: string }) => {
  const { data } = useQuery<PostType, Error, PostType, [string, string]>({
    queryKey: ['posts', postId],
    queryFn: getSinglePost,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  if (!data?.Images[0]) return null;

  return (
    <div className='relative flex flex-1 items-center justify-center bg-black'>
      {/* Back Button */}
      <div className='absolute left-4 top-4'>
        <BackButton />
      </div>

      {/* Image */}
      <div className='relative h-full max-h-[90vh] w-full max-w-4xl'>
        <Image
          src={data?.Images[0].link}
          alt='photo'
          layout='fill'
          objectFit='contain'
          className='rounded-lg shadow-lg'
        />
      </div>

      {/* Post Interactions */}
      <div className='absolute bottom-4 left-1/2 -translate-x-1/2 transform'>
        <PostInteractions post={data} />
      </div>
    </div>
  );
};

export default PhotoModalImage;
