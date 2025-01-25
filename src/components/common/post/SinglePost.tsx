'use client';

import { getSinglePost } from '@/lib/api';
import { PostType } from '@/types/Post';
import { useQuery } from '@tanstack/react-query';
import Error from 'next/error';
import Post from './Post';

const SinglePost = ({ postId }: { postId: string }) => {
  const { data, error } = useQuery<PostType, Error, PostType, [string, string]>(
    {
      queryKey: ['posts', postId],
      queryFn: getSinglePost,
      staleTime: 60 * 1000,
      gcTime: 300 * 1000,
    },
  );

  if (error) return <div>게시글을 찾을 수 없습니다.</div>;

  if (!data) return null;

  return <Post post={data} />;
};

export default SinglePost;
