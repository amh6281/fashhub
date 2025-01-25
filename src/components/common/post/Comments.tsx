'use client';

import { getComments } from '@/lib/api';
import { PostType } from '@/types/Post';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import Error from 'next/error';
import Post from './Post';

const Comments = ({ postId }: { postId: string }) => {
  const queryClient = useQueryClient();
  const post = queryClient.getQueryData(['posts', postId]); // 캐시된 데이터 조회

  const { data } = useQuery<
    PostType[],
    Error,
    PostType[],
    [string, string, string]
  >({
    queryKey: ['posts', postId, 'comments'],
    queryFn: getComments,
    staleTime: 1000 * 60,
    gcTime: 300 * 1000,
    enabled: !!post, // post가 존재할 때만 쿼리 실행
  });

  return data?.map((post) => <Post key={post.postId} post={post} />);
};

export default Comments;
