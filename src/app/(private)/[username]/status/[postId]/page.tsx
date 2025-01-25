import { BackButton } from '@/components/common';
import { CommentForm, Comments, SinglePost } from '@/components/common/post';
import { getComments, getSinglePost } from '@/lib/api';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

interface StatusPageProps {
  params: Promise<{ postId: string }>;
}

const StatusPage = async ({ params }: StatusPageProps) => {
  const { postId } = await params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['posts', postId],
    queryFn: getSinglePost,
  });
  await queryClient.prefetchQuery({
    queryKey: ['posts', postId, 'comments'],
    queryFn: getComments,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <>
      <HydrationBoundary state={dehydratedState}>
        <div className='sticky top-0 z-10 flex items-center gap-4 border-b-[1px] border-gray-300 p-4 backdrop-blur-md'>
          <BackButton />
          <h1 className='text-lg font-bold text-gray-900'>게시물</h1>
        </div>
        <SinglePost postId={postId} />
        <CommentForm />
        <Comments postId={postId} />
      </HydrationBoundary>
    </>
  );
};

export default StatusPage;
