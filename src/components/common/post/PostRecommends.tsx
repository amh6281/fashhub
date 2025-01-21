'use client';

import { getPostRecommends } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import Post from './Post';
import { PostType } from '@/types/Post';

const PostRecommends = () => {
  const { data } = useQuery<PostType[]>({
    queryKey: ['posts', 'recommends'],
    queryFn: getPostRecommends,
  });

  return data?.map((post) => <Post key={post.postId} post={post} />);
};

export default PostRecommends;
