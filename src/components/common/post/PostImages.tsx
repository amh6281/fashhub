import { PostType } from '@/types/Post';
import Image from 'next/image';
import Link from 'next/link';

interface PostImageProps {
  post: PostType;
}

const PostImage = ({ post }: PostImageProps) => {
  if (!post.Images || !post.Images.length) return null;

  const getGridClass = (imageCount: number) => {
    switch (imageCount) {
      case 1:
        return 'grid-cols-1';
      case 2:
        return 'grid-cols-2';
      case 3:
        return 'grid-cols-3';
      case 4:
        return 'grid-cols-2 grid-rows-2';
      default:
        return 'grid-cols-1';
    }
  };

  return (
    <div className={`grid gap-2 ${getGridClass(post.Images.length)}`}>
      {post.Images.map((image) => (
        <Link
          key={image.imageId}
          href={`/${post.User.id}/status/${post.postId}/photo/${image.imageId}`}
        >
          <Image
            src={image.link}
            alt='post image'
            width={500}
            height={300}
            className='h-full w-full object-cover'
          />
        </Link>
      ))}
    </div>
  );
};

export default PostImage;
