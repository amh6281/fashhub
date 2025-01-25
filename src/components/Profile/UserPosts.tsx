'use client';

import { getUserPosts } from '@/lib/api';
import { PostType } from '@/types/Post';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import Error from 'next/error';
import { Post } from '../common/post';

const UserPosts = ({ username }: { username: string }) => {
  const { data } = useQuery<
    PostType[],
    Error,
    PostType[],
    [string, string, string]
  >({
    queryKey: ['posts', 'users', username],
    queryFn: getUserPosts,
    staleTime: 60 * 1000, // fresh에서 stale로 전환되는 시간 (1분)
    gcTime: 5 * 60 * 1000, // 캐시에 저장된 데이터가 제거되는 시간 (5분)
  });
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData(['users', username]); // 캐시된 데이터 조회

  if (user) {
    return data?.map((post) => <Post key={post.postId} post={post} />);
  }
};
export default UserPosts;
