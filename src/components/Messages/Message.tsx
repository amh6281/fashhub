'use client';

import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
import Image from 'next/image';
import { Room } from '@/types/Room';

dayjs.locale('ko');
dayjs.extend(relativeTime);

const Message = ({ room }: { room: Room }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/messages/${room.room}`);
  };

  return (
    <div
      className='flex cursor-pointer items-center border-b border-gray-300 p-4 hover:bg-gray-100'
      onClickCapture={handleClick}
    >
      <div className='mr-4 h-10 w-10 overflow-hidden rounded-full'>
        <Image
          src={room.Receiver.image!}
          alt='avatar'
          width={40}
          height={40}
          className='object-cover'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <b className='text-lg font-bold'>{room.Receiver.username}</b>
            <span className='ml-2 text-sm text-gray-500'>
              @{room.Receiver.id}
            </span>
          </div>
          <span className='text-sm text-gray-500'>
            {dayjs(room.createdAt).fromNow(true)}
          </span>
        </div>
        <div className='mt-1 text-sm text-gray-700'>{room.content}</div>
      </div>
    </div>
  );
};

export default Message;
