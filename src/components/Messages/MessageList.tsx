import { getMessages } from '@/lib/api';
import { Message } from '@/types/Message';
import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
import dayjs from 'dayjs';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
dayjs.locale('ko');
dayjs.extend(relativeTime);

const MessageList = ({ receiverId }: { receiverId: string }) => {
  const { data: session } = useSession();
  const {
    data: messages,
    isFetching,
    hasPreviousPage,
    fetchPreviousPage,
  } = useInfiniteQuery<
    Message[],
    Error,
    InfiniteData<Message[]>,
    [
      string,
      {
        senderId: string;
        receiverId: string;
      },
      string,
    ],
    number
  >({
    queryKey: [
      'rooms',
      { senderId: session?.user?.email ?? '', receiverId },
      'messages',
    ],
    queryFn: getMessages,
    initialPageParam: 0,
    getPreviousPageParam: (firstPage) =>
      firstPage.length < 10 ? undefined : firstPage.at(0)?.messageId,
    getNextPageParam: (lastPage) =>
      lastPage.length < 10 ? undefined : lastPage.at(-1)?.messageId,
    enabled: !!(session?.user?.email && receiverId),
  });

  const { ref, inView } = useInView({
    threshold: 0,
    delay: 0,
  });

  useEffect(() => {
    if (inView) {
      if (!isFetching && hasPreviousPage) {
        fetchPreviousPage();
      }
    }
  }, [inView, isFetching, hasPreviousPage, fetchPreviousPage]);

  return (
    <div className='space-y-4 overflow-y-auto' ref={ref} style={{ height: 50 }}>
      {messages?.pages.map((page) =>
        page.map((message) => (
          <div
            key={message.messageId}
            className={`flex flex-col ${
              message.senderId === session?.user?.email
                ? 'items-end'
                : 'items-start'
            }`}
          >
            <div
              className={`max-w-xs rounded-lg p-2 ${
                message.senderId === session?.user?.email
                  ? 'bg-cool-700 text-white'
                  : 'bg-cool-300'
              }`}
            >
              {message.content}
            </div>
            <div className='text-xs text-gray-500'>
              {dayjs(message.createdAt).format('YYYY년 MM월 DD일 A HH시 mm분')}
            </div>
          </div>
        )),
      )}
    </div>
  );
};

export default MessageList;
