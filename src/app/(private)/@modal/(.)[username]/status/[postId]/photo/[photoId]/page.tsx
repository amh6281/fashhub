import {
  CommentForm,
  Comments,
  PhotoModalImage,
  SinglePost,
} from '@/components/common/post';
import { getComments, getSinglePost } from '@/lib/api';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

interface PhotoModalProps {
  params: Promise<{ postId: string }>;
}

const PhotoModal = async ({ params }: PhotoModalProps) => {
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
    <div className='fixed inset-0 z-50 flex bg-black/80'>
      <HydrationBoundary state={dehydratedState}>
        <PhotoModalImage postId={postId} />

        {/* Post and Comments Section */}
        <div className='w-[400px] bg-white shadow-lg'>
          <div className='flex h-full flex-col space-y-6 overflow-y-auto p-6'>
            {/* Post Content */}
            <SinglePost postId={postId} hideImage />
            {/* Comment Form */}
            <div className='sticky bottom-0 bg-white py-4'>
              <CommentForm />
            </div>

            {/* Additional Posts */}
            <div className='space-y-4'>
              <Comments postId={postId} />
            </div>
          </div>
        </div>
      </HydrationBoundary>
    </div>
  );
};

export default PhotoModal;
