'use client';

import { PostType } from '@/types/Post';
import { useRouter } from 'next/navigation';

interface PostArticleProps {
  children: React.ReactNode;
  post: PostType;
}

const PostArticle = ({ children, post }: PostArticleProps) => {
  const router = useRouter();
  let target = post;
  if (post.Original) target = post.Original;
  return (
    <div
      className='cursor-pointer border-y-[1px] border-cool-400 p-4 transition-colors hover:bg-cool-200'
      onClick={() =>
        router.push(`/${target.User.userId}/status/${target.postId}`)
      }
    >
      {children}
    </div>
  );
};

export default PostArticle;
