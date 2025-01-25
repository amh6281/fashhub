import { UserInfo, UserPosts } from '@/components/Profile';
import { getUser, getUserPosts } from '@/lib/api';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

interface UserPageParams {
  params: Promise<{ username: string }>;
}

const UserPage = async ({ params }: UserPageParams) => {
  const { username } = await params;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['users', username],
    queryFn: getUser,
  });
  await queryClient.prefetchQuery({
    queryKey: ['posts', 'users', username],
    queryFn: getUserPosts,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <div className='min-h-screen bg-gray-50'>
      <HydrationBoundary state={dehydratedState}>
        {/* profile */}
        <UserInfo username={username} />

        {/* feed */}
        <div className='mt-4 py-4'>
          <UserPosts username={username} />
        </div>
      </HydrationBoundary>
    </div>
  );
};

export default UserPage;
