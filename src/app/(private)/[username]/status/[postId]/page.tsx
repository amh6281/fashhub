import { BackButton } from '@/components/common';
import { CommentForm, SinglePost } from '@/components/common/post';

interface StatusPageProps {
  params: Promise<{ postId: string }>;
}

const StatusPage = async ({ params }: StatusPageProps) => {
  const { postId } = await params;

  return (
    <>
      <div className='sticky top-0 z-10 flex items-center gap-4 border-b-[1px] border-gray-300 p-4 backdrop-blur-md'>
        <BackButton />
        <h1 className='text-lg font-bold text-gray-900'>게시물</h1>
      </div>
      <SinglePost postId={postId} />
      <CommentForm />
    </>
  );
};

export default StatusPage;
