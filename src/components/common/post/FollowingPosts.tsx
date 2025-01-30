'use client';

import { getFollowingPosts } from '@/lib/api';
import { useSuspenseQuery } from '@tanstack/react-query';
import Post from './Post';
import { PostType } from '@/types/Post';

const FollowingPosts = () => {
  const { data } = useSuspenseQuery<PostType[]>({
    queryKey: ['posts', 'followings'],
    queryFn: getFollowingPosts,
    staleTime: 60 * 1000, // fresh에서 stale로 전환되는 시간 (1분)
    gcTime: 5 * 60 * 1000, // react-query 캐시에 저장된 데이터가 제거되는 시간 (5분)
  });

  return data?.map((post) => <Post key={post.postId} post={post} />);
};

export default FollowingPosts;
