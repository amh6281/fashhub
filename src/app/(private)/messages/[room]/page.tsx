import { faker } from '@faker-js/faker';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
import dayjs from 'dayjs';
import { BackButton } from '@/components/common';
import Image from 'next/image';
import Link from 'next/link';
import MessageForm from '@/components/Messages/MessageForm';
import { auth } from '@/auth';
import { QueryClient } from '@tanstack/react-query';
import { getUser } from '@/lib/api';
import WebSocketComponent from '@/components/WebSocketComponent';

dayjs.locale('ko');
dayjs.extend(relativeTime);

const Room = async ({ params }: { params: { room: string } }) => {
  const session = await auth();
  const queryClient = new QueryClient();

  const ids = params.room
    .split('-')
    .filter((id) => id !== session?.user?.email);

  await queryClient.prefetchQuery({
    queryKey: ['users', ids[0]],
    queryFn: getUser,
  });

  const user = {
    id: 'hero',
    nickname: '영웅',
    image: faker.image.avatar(),
  };
  const messages = [
    {
      messageId: 1,
      roomId: 123,
      id: 'amh',
      content: '안녕하세요.',
      createdAt: new Date(),
    },
    {
      messageId: 2,
      roomId: 123,
      id: 'hero',
      content: '안녕히가세요.',
      createdAt: new Date(),
    },
  ];
  return (
    <main className='flex min-h-screen flex-col p-4'>
      <WebSocketComponent />
      {/* header */}
      <div className='mb-4 flex items-center gap-4 border-b border-gray-300 pb-4'>
        <BackButton />
        <Link href={user.nickname} className='flex items-center gap-2'>
          <Image
            src={user.image}
            alt={user.id}
            width={40}
            height={40}
            className='rounded-full'
          />
          <div>
            <h2 className='text-lg font-bold'>{user.nickname}</h2>
            <div className='text-sm text-gray-500'>@{user.id}</div>
          </div>
        </Link>
      </div>

      {/* messages */}
      <div className='flex flex-1 flex-col justify-between'>
        <div className='space-y-4 overflow-y-auto'>
          {messages.map((m) => (
            <div
              key={m.messageId}
              className={`flex flex-col ${
                m.id === 'amh' ? 'items-end' : 'items-start'
              }`}
            >
              <div
                className={`max-w-xs rounded-lg p-2 ${
                  m.id === 'amh' ? 'bg-cool-700 text-white' : 'bg-cool-300'
                }`}
              >
                {m.content}
              </div>
              <div className='text-xs text-gray-500'>
                {dayjs(m.createdAt).format('YYYY년 MM월 DD일 A HH시 mm분')}
              </div>
            </div>
          ))}
        </div>
        <MessageForm receiverId={ids[0]} />
      </div>
    </main>
  );
};

export default Room;
