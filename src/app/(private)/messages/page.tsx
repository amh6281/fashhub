import { auth } from '@/auth';
import { BackButton } from '@/components/common';
import { Message } from '@/components/Messages';
import { getRooms } from '@/lib/api';

const Messages = async () => {
  const session = await auth();
  const rooms = session?.user?.email ? await getRooms(session.user.email) : [];

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* profile title */}
      <div className='sticky top-0 z-10 flex items-center gap-4 border-b-[1px] border-gray-300 p-4 backdrop-blur-md'>
        <BackButton />
        <h1 className='text-lg font-bold text-gray-900'>메세지</h1>
      </div>
      {rooms.map((room) => (
        <Message key={room.room} room={room} />
      ))}
    </div>
  );
};

export default Messages;
