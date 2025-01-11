import { BackButton } from '@/components/common';
import { PostInteractions } from '@/components/common/post';
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
    <div>
      <BackButton />
      <Image src={photo.src} alt='photo' fill />
      <PostInteractions />
    </div>
  );
};

export default PhotoModal;
