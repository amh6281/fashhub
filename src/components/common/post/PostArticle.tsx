'use client';

import { PostType } from '@/types/Post';
import { useRouter } from 'next/navigation';

interface PostArticleProps {
  children: React.ReactNode;
  post: PostType;
}

const PostArticle = ({ children, post }: PostArticleProps) => {
  const router = useRouter();
  return (
    <div
      className='cursor-pointer border-y-[1px] border-cool-400 p-4 transition-colors hover:bg-cool-200'
      // onClick={() => router.push(`/${post.User.id}/status/${post.postId}`)}
      onClick={() => router.push(`/1/status/1`)}
    >
      {children}
    </div>
  );
};

export default PostArticle;
