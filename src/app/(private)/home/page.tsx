import { PostList } from '@/components/common/post';
import { PostForm, Tab } from '@/components/Home';
import { getPostRecommends } from '@/lib/api';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

const Home = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    // queryKey가 posts, recommend이면 getRecommendedPosts 함수를 호출
    queryKey: ['posts', 'recommends'],
    queryFn: getPostRecommends,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <div className=''>
      <HydrationBoundary state={dehydratedState}>
        <Tab />
        <PostForm />
        <PostList />
      </HydrationBoundary>
    </div>
  );
};

export default Home;
