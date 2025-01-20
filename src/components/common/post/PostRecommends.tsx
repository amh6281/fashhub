'use client';

import { getPostRecommends } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';

const PostRecommends = () => {
  const { data } = useQuery({
    queryKey: ['posts', 'recommends'],
    queryFn: getPostRecommends,
  });
  console.log(data);
  return <div>PostRecommends</div>;
};

export default PostRecommends;
