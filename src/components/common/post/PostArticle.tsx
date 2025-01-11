'use client';

import { useRouter } from 'next/navigation';

interface PostArticleProps {
  children: React.ReactNode;
  post: {
    postId: number;
    content: string;
    User: {
      id: string;
      nickname: string;
      image: string;
    };
    createdAt: Date;
    Images: any[];
  };
}

const PostArticle = ({ children, post }: PostArticleProps) => {
  const router = useRouter();
  return (
    <div
      className='cursor-pointer border-y-[1px] border-cool-400 p-4 transition-colors hover:bg-cool-200'
      // onClick={() => router.push(`/${post.User.id}/status/${post.postId}`)}
      onClickCapture={() => router.push(`/1/status/1`)}
    >
      {children}
    </div>
  );
};

export default PostArticle;
