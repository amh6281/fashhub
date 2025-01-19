import { Post } from '@/components/common/post';
import { PostForm, Tab } from '@/components/Home';
import { baseUrl } from '@/config';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

const getRecommendedPosts = async () => {
  const res = await fetch(`${baseUrl}/api/postRecommends`, {
    next: {
      tags: ['posts', 'recommend'],
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

const Home = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    // queryKey가 posts, recommend이면 getRecommendedPosts 함수를 호출
    queryKey: ['posts', 'recommend'],
    queryFn: getRecommendedPosts,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <div className=''>
      <HydrationBoundary state={dehydratedState}>
        <Tab />
        <PostForm />
        <Post />
      </HydrationBoundary>
    </div>
  );
};

export default Home;
