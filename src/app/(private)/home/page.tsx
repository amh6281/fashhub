import { PostList } from '@/components/common/post';
import { PostForm, Tab } from '@/components/Home';
import { getPostRecommends } from '@/lib/api';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { Suspense } from 'react';
import Loading from './loading';

export const metadata = {
  title: 'FashHub/홈',
  description: '홈',
};

const Home = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    // queryKey가 posts, recommend이면 getRecommendedPosts 함수를 호출
    queryKey: ['posts', 'recommends'],
    queryFn: getPostRecommends,
    initialPageParam: 0, // cursor 초기값
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <div className=''>
      <HydrationBoundary state={dehydratedState}>
        <Tab />
        <PostForm />
        <Suspense fallback={<Loading />}>
          <PostList />
        </Suspense>
      </HydrationBoundary>
    </div>
  );
};

export default Home;
