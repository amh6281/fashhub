import { BackButton } from '@/components/common';
import { CommentForm, Post, PostInteractions } from '@/components/common/post';
import { faker } from '@faker-js/faker';
import Image from 'next/image';

const PhotoModal = () => {
  const photo = {
    imageId: 1,
    src: faker.image.urlLoremFlickr(),
    Post: {
      content: faker.lorem.text(),
    },
  };

  return (
    <div className='fixed inset-0 z-50 flex bg-black/80'>
      {/* Image Section */}
      <div className='relative flex flex-1 items-center justify-center bg-black'>
        {/* Back Button */}
        <div className='absolute left-4 top-4'>
          <BackButton />
        </div>

        {/* Image */}
        <div className='relative h-full max-h-[90vh] w-full max-w-4xl'>
          <Image
            src={photo.src}
            alt='photo'
            layout='fill'
            objectFit='contain'
            className='rounded-lg shadow-lg'
          />
        </div>

        {/* Post Interactions */}
        <div className='absolute bottom-4 left-1/2 -translate-x-1/2 transform'>
          <PostInteractions />
        </div>
      </div>

      {/* Post and Comments Section */}
      <div className='w-[400px] bg-white shadow-lg'>
        <div className='flex h-full flex-col space-y-6 overflow-y-auto p-6'>
          {/* Post Content */}
          <Post hideImage />

          {/* Comment Form */}
          <div className='sticky bottom-0 bg-white py-4'>
            <CommentForm />
          </div>

          {/* Additional Posts */}
          <div className='space-y-4'>
            <Post hideImage />
            <Post hideImage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoModal;
