import { UserCircle } from '@phosphor-icons/react/dist/ssr';
import dayjs from 'dayjs';
import Link from 'next/link';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
import PostArticle from './PostArticle';
import PostInteractions from './PostInteractions';
import { faker } from '@faker-js/faker';
import PostImages from './PostImages';

dayjs.locale('ko');
dayjs.extend(relativeTime);

interface PostProps {
  hideImage?: boolean;
}

const Post = ({ hideImage }: PostProps) => {
  const dummy = {
    postId: 1,
    User: {
      id: 'musk',
      nickname: 'Elon Musk',
      image:
        'https://pbs.twimg.com/profile_images/1295975423654977537/dHw9JcrK_400x400.jpg',
    },
    content:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, animi. Laborum commodi aliquam alias molestias odio, ab in, reprehenderit excepturi temporibus, ducimus necessitatibus fugiat iure nam voluptas soluta pariatur inventore.',
    createdAt: new Date(),
    Images: [] as any[],
  };

  if (Math.random() > 0.5 && !hideImage) {
    dummy.Images.push(
      { imageId: 1, src: faker.image.urlLoremFlickr() },
      { imageId: 2, src: faker.image.urlLoremFlickr() },
      { imageId: 3, src: faker.image.urlLoremFlickr() },
    );
  }

  return (
    <PostArticle>
      {/* post type */}
      <div className='from-bold mb-2 flex items-center gap-2 text-sm text-cool-500'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='18'
          height='18'
          viewBox='0 0 24 24'
        >
          <path
            fill='#71767b'
            d='M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z'
          />
        </svg>
        <span>재게시했습니다.</span>
      </div>
      {/* post content */}
      <div className='flex gap-4'>
        {/* avatar */}
        <div className='relative h-10 w-10 overflow-hidden rounded-full'>
          <UserCircle size={36} className='text-gray-500' />
        </div>
        {/* content */}
        <div className='flex flex-1 flex-col gap-2'>
          {/* top */}
          <div className='flex w-full justify-between'>
            <Link href='/' className='flex gap-4'>
              <div className='relative h-10 w-10 overflow-hidden rounded-full'>
                <UserCircle size={36} className='text-gray-500' />
              </div>
              <div className='flex flex-wrap items-center gap-2'>
                <h1 className='text-md font-bold hover:underline'>amh6281</h1>
                <span className='text-cool-600'>@mmmh_0803</span>

                <span className='text-sm text-cool-600'>
                  {dayjs().fromNow(true)}
                </span>
              </div>
            </Link>
          </div>
          {/* text & media */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
            animi. Laborum commodi aliquam alias molestias odio, ab in,
            reprehenderit excepturi temporibus, ducimus necessitatibus fugiat
            iure nam voluptas soluta pariatur inventore.
          </p>
          <PostImages post={dummy} />
          <PostInteractions />
        </div>
      </div>
    </PostArticle>
  );
};

export default Post;
