'use client';

import { faker } from '@faker-js/faker';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
import Image from 'next/image';

dayjs.locale('ko');
dayjs.extend(relativeTime);

const Message = () => {
  const router = useRouter();
  const user = {
    id: 'hero',
    nickname: '영웅',
    Messages: [
      { roomId: 123, content: '안녕하세요.', createdAt: new Date() },
      { roomId: 123, content: '안녕히가세요.', createdAt: new Date() },
    ],
  };

  const handleClick = () => {
    router.push(`/messages/${user.Messages.at(-1)?.roomId}`);
  };

  return (
    <div
      className='flex cursor-pointer items-center border-b border-gray-300 p-4 hover:bg-gray-100'
      onClickCapture={handleClick}
    >
      <div className='mr-4 h-10 w-10 overflow-hidden rounded-full'>
        <Image
          src={faker.image.avatar()}
          alt='avatar'
          width={40}
          height={40}
          className='object-cover'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <b className='text-lg font-bold'>{user.nickname}</b>
            <span className='ml-2 text-sm text-gray-500'>@{user.id}</span>
          </div>
          <span className='text-sm text-gray-500'>
            {dayjs(user.Messages?.at(-1)?.createdAt).fromNow(true)}
          </span>
        </div>
        <div className='mt-1 text-sm text-gray-700'>
          {user.Messages?.at(-1)?.content}
        </div>
      </div>
    </div>
  );
};

export default Message;
